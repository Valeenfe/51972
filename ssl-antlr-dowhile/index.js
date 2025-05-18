import antlr4 from 'antlr4';
import DoWhileLexer from './generated/DoWhileLexer.js';
import DoWhileParser from './generated/DoWhileParser.js';
import DoWhileVisitor from './generated/DoWhileVisitor.js'; // <-- AGREGA ESTA LÍNEA
import fs from 'fs';

// Visitor para traducir a JavaScript
class JSVisitor extends DoWhileVisitor { // <-- CAMBIA AQUÍ
    constructor() {
        super();
        this.declared = new Set();
    }
    visitProgram(ctx) {
        let code = '';
        for (let stmt of ctx.statement()) {
            code += this.visit(stmt) + '\n';
        }
        return code;
    }
    visitDoWhileStatement(ctx) {
        const block = this.visit(ctx.block());
        const expr = this.visit(ctx.expression());
        return `do ${block} while (${expr});`;
    }
    visitAssignmentStatement(ctx) {
        const id = ctx.identifier().getText();
        const expr = this.visit(ctx.expression());
        let decl = '';
        if (!this.declared.has(id)) {
            decl = 'let ';
            this.declared.add(id);
        }
        return `${decl}${id} = ${expr};`;
    }
    visitConsoleStatement(ctx) {
        const expr = this.visit(ctx.expression());
        return `console.log(${expr});`;
    }
    visitBlock(ctx) {
        let code = '{\n';
        for (let stmt of ctx.statement()) {
            code += '  ' + this.visit(stmt) + '\n';
        }
        code += '}';
        return code;
    }
    visitExpression(ctx) {
        let code = this.visit(ctx.term(0));
        for (let i = 1; i < ctx.term().length; i++) {
            code += ' ' + ctx.children[2 * i - 1].getText() + ' ' + this.visit(ctx.term(i));
        }
        return code;
    }
    visitTerm(ctx) {
        if (ctx.identifier()) return ctx.identifier().getText();
        if (ctx.number()) return ctx.number().getText();
        if (ctx.expression()) return '(' + this.visit(ctx.expression()) + ')';
        return '';
    }
    visitIdentifier(ctx) {
        return ctx.getText();
    }
    visitNumber(ctx) {
        return ctx.getText();
    }
}

function main() {
    // Leer el input
    let input = fs.readFileSync('input.txt', 'utf8');

    // Crear lexer y mostrar tabla de tokens
    const chars = new antlr4.InputStream(input);
    const lexer = new DoWhileLexer(chars);

    let token = lexer.nextToken();
    console.log('| Lexema        | Token           |');
    console.log('|---------------|----------------|');
    while (token.type !== antlr4.Token.EOF) {
        const lexema = token.text;
        let tokenName = lexer.symbolicNames && lexer.symbolicNames[token.type];
        if (!tokenName) tokenName = token.type;
        console.log(`| ${lexema.padEnd(13)} | ${String(tokenName).padEnd(14)} |`);
        token = lexer.nextToken();
    }

    // Reiniciar lexer y crear parser
    lexer.reset();
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new DoWhileParser(tokens);
    parser.buildParseTrees = true;
    const tree = parser.program();

    // Traducir a JavaScript
    const visitor = new JSVisitor();
    const jsCode = visitor.visit(tree);

    console.log('\n--- Código JavaScript generado ---\n');
    console.log(jsCode);

    // Ejecutar el código generado
    console.log('\n--- Salida de la ejecución ---\n');
    eval(jsCode);
}

main();
