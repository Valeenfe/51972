grammar DoWhile;

program
    : statement* EOF
    ;

statement
    : doWhileStatement
    | assignmentStatement
    | consoleStatement
    ;

doWhileStatement
    : DO block WHILE LPAREN expression RPAREN SEMICOLON
    ;

assignmentStatement
    : identifier EQ expression SEMICOLON
    ;

consoleStatement
    : CONSOLE DOT LOG LPAREN expression RPAREN SEMICOLON
    ;

block
    : LBRACE statement* RBRACE
    ;

expression
    : term ((ADD | SUB | MUL | DIV) term)*
    ;

term
    : identifier
    | number
    | RPAREN expression RPAREN
    ;

identifier
    : ID (ID | INT | UNDERSCORE)*
    ;

number
    : INT+
    ;



// Lexemas
DO: 'do';
WHILE: 'while';
LPAREN: '(';
RPAREN: ')';    
SEMICOLON: ';';
EQ: '=';
CONSOLE: 'console';
DOT: '.';
LOG: 'log';
LBRACE: '{';
RBRACE: '}';
ADD: '+';
SUB: '-';   
DIV: '/';
MUL: '*';
UNDERSCORE: '_';
ID: [a-zA-Z];
INT: [0-9];
WS: [ \t\r\n]+ -> skip;

