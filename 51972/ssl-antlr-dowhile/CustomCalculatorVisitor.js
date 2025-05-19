import { Parser } from "antlr4";
import DoWhileVisitor from "./generated/DoWhile.js";
import DoWhile from "./generated/DoWhile.js";
import antlr4 from 'antlr4';
import DoWhileLexer from './generated/DoWhileLexer.js';

export class CustomDoWhileVisitor extends DoWhileVisitor{

    constructor() {
        super();
        this.memory = new Map();   //Declaro una variable de instancia con una memoria temporal para hacer las reducciones
    } 
    
    visitInt(ctx) {
        //obtengo el lexema correspondiente al INT que reconocio en el texto y lo convierto a entero.
        return parseInt(ctx.INT().getText());
    }

    visitPrintExpr(ctx) {
        const value = this.visit(ctx.expr());
        console.log(`\nResultado: ${value}`);
        return this.visitChildren(ctx);
      }


    visitMulDiv(ctx) {
        /* Las subexpresiones se visitaran recursivamente hasta ir obteniendo los valores correspondientes */
        const left =  this.visit(ctx.expr(0));   //visito la subexpresion a la izquierda de la operacion
        const right = this.visit(ctx.expr(1));  //visito la subexpresion a la derecha de la operacion. 
        if (ctx.op.type==CalculatorParser.MUL)
          return left * right;
        else
          return left / right;
      }

      visitAddSub(ctx) {
        const left =  this.visit(ctx.expr(0));  
        const right = this.visit(ctx.expr(1));  
        if (ctx.op.type==CalculatorParser.ADD){
          return left + right; }
        else
          return left - right;
      }

      visitParens(ctx) {
        return this.visit(ctx.expr());
      }

      visitId(ctx) {
        const id = ctx.ID().getText();
        if (this.memory.has(id)) return this.memory.get(id);
        return 0;
    }

      visitAssign(ctx) {
        const id = ctx.ID().getText();
        const value = this.visit(ctx.expr());
        this.memory.set(id, value);
        return value;
    }
    
}

// Suponiendo que 'input' es tu string de entrada
import DoWhileLexer from './generated/DoWhileLexer.js'; // Asegúrate de que la ruta sea correcta

const chars = new antlr4.InputStream(input);
const lexer = new DoWhileLexer(chars);

let token = lexer.nextToken();
console.log('| Lexema        | Token           |');
console.log('|---------------|----------------|');
while (token.type !== antlr4.Token.EOF) {
    const lexema = token.text;
    const tokenName = lexer.symbolicNames[token.type];
    console.log(`| ${lexema.padEnd(13)} | ${tokenName.padEnd(14)} |`);
    token = lexer.nextToken();
}