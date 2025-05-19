// Generated from c:/Users/Valentina/ssl-antlr-dowhile/DoWhile.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import DoWhileListener from './DoWhileListener.js';
import DoWhileVisitor from './DoWhileVisitor.js';

const serializedATN = [4,1,19,92,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,1,0,5,0,22,8,0,10,0,12,0,25,9,0,
1,0,1,0,1,1,1,1,1,1,3,1,32,8,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,
3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,5,1,5,5,5,57,8,5,10,5,12,5,60,
9,5,1,5,1,5,1,6,1,6,1,6,5,6,67,8,6,10,6,12,6,70,9,6,1,7,1,7,1,7,1,7,1,7,
1,7,3,7,78,8,7,1,8,1,8,5,8,82,8,8,10,8,12,8,85,9,8,1,9,4,9,88,8,9,11,9,12,
9,89,1,9,0,0,10,0,2,4,6,8,10,12,14,16,18,0,2,1,0,12,15,1,0,16,18,90,0,23,
1,0,0,0,2,31,1,0,0,0,4,33,1,0,0,0,6,41,1,0,0,0,8,46,1,0,0,0,10,54,1,0,0,
0,12,63,1,0,0,0,14,77,1,0,0,0,16,79,1,0,0,0,18,87,1,0,0,0,20,22,3,2,1,0,
21,20,1,0,0,0,22,25,1,0,0,0,23,21,1,0,0,0,23,24,1,0,0,0,24,26,1,0,0,0,25,
23,1,0,0,0,26,27,5,0,0,1,27,1,1,0,0,0,28,32,3,4,2,0,29,32,3,6,3,0,30,32,
3,8,4,0,31,28,1,0,0,0,31,29,1,0,0,0,31,30,1,0,0,0,32,3,1,0,0,0,33,34,5,1,
0,0,34,35,3,10,5,0,35,36,5,2,0,0,36,37,5,3,0,0,37,38,3,12,6,0,38,39,5,4,
0,0,39,40,5,5,0,0,40,5,1,0,0,0,41,42,3,16,8,0,42,43,5,6,0,0,43,44,3,12,6,
0,44,45,5,5,0,0,45,7,1,0,0,0,46,47,5,7,0,0,47,48,5,8,0,0,48,49,5,9,0,0,49,
50,5,3,0,0,50,51,3,12,6,0,51,52,5,4,0,0,52,53,5,5,0,0,53,9,1,0,0,0,54,58,
5,10,0,0,55,57,3,2,1,0,56,55,1,0,0,0,57,60,1,0,0,0,58,56,1,0,0,0,58,59,1,
0,0,0,59,61,1,0,0,0,60,58,1,0,0,0,61,62,5,11,0,0,62,11,1,0,0,0,63,68,3,14,
7,0,64,65,7,0,0,0,65,67,3,14,7,0,66,64,1,0,0,0,67,70,1,0,0,0,68,66,1,0,0,
0,68,69,1,0,0,0,69,13,1,0,0,0,70,68,1,0,0,0,71,78,3,16,8,0,72,78,3,18,9,
0,73,74,5,10,0,0,74,75,3,12,6,0,75,76,5,11,0,0,76,78,1,0,0,0,77,71,1,0,0,
0,77,72,1,0,0,0,77,73,1,0,0,0,78,15,1,0,0,0,79,83,5,17,0,0,80,82,7,1,0,0,
81,80,1,0,0,0,82,85,1,0,0,0,83,81,1,0,0,0,83,84,1,0,0,0,84,17,1,0,0,0,85,
83,1,0,0,0,86,88,5,18,0,0,87,86,1,0,0,0,88,89,1,0,0,0,89,87,1,0,0,0,89,90,
1,0,0,0,90,19,1,0,0,0,7,23,31,58,68,77,83,89];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class DoWhileParser extends antlr4.Parser {

    static grammarFileName = "DoWhile.g4";
    static literalNames = [ null, "'do'", "'while'", "'('", "')'", "';'", 
                            "'='", "'console'", "'.'", "'log'", "'{'", "'}'", 
                            "'+'", "'-'", "'/'", "'*'", "'_'" ];
    static symbolicNames = [ null, "DO", "WHILE", "LPAREN", "RPAREN", "SEMICOLON", 
                             "EQ", "CONSOLE", "DOT", "LOG", "LBRACE", "RBRACE", 
                             "ADD", "SUB", "DIV", "MUL", "UNDERSCORE", "LETRA", 
                             "DIGITO", "WS" ];
    static ruleNames = [ "program", "statement", "doWhileStatement", "assignmentStatement", 
                         "consoleStatement", "block", "expression", "term", 
                         "identifier", "number" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = DoWhileParser.ruleNames;
        this.literalNames = DoWhileParser.literalNames;
        this.symbolicNames = DoWhileParser.symbolicNames;
    }



	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, DoWhileParser.RULE_program);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 23;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 131202) !== 0)) {
	            this.state = 20;
	            this.statement();
	            this.state = 25;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 26;
	        this.match(DoWhileParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, DoWhileParser.RULE_statement);
	    try {
	        this.state = 31;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 28;
	            this.doWhileStatement();
	            break;
	        case 17:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 29;
	            this.assignmentStatement();
	            break;
	        case 7:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 30;
	            this.consoleStatement();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	doWhileStatement() {
	    let localctx = new DoWhileStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, DoWhileParser.RULE_doWhileStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 33;
	        this.match(DoWhileParser.DO);
	        this.state = 34;
	        this.block();
	        this.state = 35;
	        this.match(DoWhileParser.WHILE);
	        this.state = 36;
	        this.match(DoWhileParser.LPAREN);
	        this.state = 37;
	        this.expression();
	        this.state = 38;
	        this.match(DoWhileParser.RPAREN);
	        this.state = 39;
	        this.match(DoWhileParser.SEMICOLON);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	assignmentStatement() {
	    let localctx = new AssignmentStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, DoWhileParser.RULE_assignmentStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 41;
	        this.identifier();
	        this.state = 42;
	        this.match(DoWhileParser.EQ);
	        this.state = 43;
	        this.expression();
	        this.state = 44;
	        this.match(DoWhileParser.SEMICOLON);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	consoleStatement() {
	    let localctx = new ConsoleStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, DoWhileParser.RULE_consoleStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 46;
	        this.match(DoWhileParser.CONSOLE);
	        this.state = 47;
	        this.match(DoWhileParser.DOT);
	        this.state = 48;
	        this.match(DoWhileParser.LOG);
	        this.state = 49;
	        this.match(DoWhileParser.LPAREN);
	        this.state = 50;
	        this.expression();
	        this.state = 51;
	        this.match(DoWhileParser.RPAREN);
	        this.state = 52;
	        this.match(DoWhileParser.SEMICOLON);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	block() {
	    let localctx = new BlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, DoWhileParser.RULE_block);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 54;
	        this.match(DoWhileParser.LBRACE);
	        this.state = 58;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 131202) !== 0)) {
	            this.state = 55;
	            this.statement();
	            this.state = 60;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 61;
	        this.match(DoWhileParser.RBRACE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expression() {
	    let localctx = new ExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, DoWhileParser.RULE_expression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 63;
	        this.term();
	        this.state = 68;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 61440) !== 0)) {
	            this.state = 64;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 61440) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 65;
	            this.term();
	            this.state = 70;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	term() {
	    let localctx = new TermContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, DoWhileParser.RULE_term);
	    try {
	        this.state = 77;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 17:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 71;
	            this.identifier();
	            break;
	        case 18:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 72;
	            this.number();
	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 73;
	            this.match(DoWhileParser.LBRACE);
	            this.state = 74;
	            this.expression();
	            this.state = 75;
	            this.match(DoWhileParser.RBRACE);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	identifier() {
	    let localctx = new IdentifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, DoWhileParser.RULE_identifier);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 79;
	        this.match(DoWhileParser.LETRA);
	        this.state = 83;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 458752) !== 0)) {
	            this.state = 80;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 458752) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 85;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	number() {
	    let localctx = new NumberContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, DoWhileParser.RULE_number);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 87; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 86;
	            this.match(DoWhileParser.DIGITO);
	            this.state = 89; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===18);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

DoWhileParser.EOF = antlr4.Token.EOF;
DoWhileParser.DO = 1;
DoWhileParser.WHILE = 2;
DoWhileParser.LPAREN = 3;
DoWhileParser.RPAREN = 4;
DoWhileParser.SEMICOLON = 5;
DoWhileParser.EQ = 6;
DoWhileParser.CONSOLE = 7;
DoWhileParser.DOT = 8;
DoWhileParser.LOG = 9;
DoWhileParser.LBRACE = 10;
DoWhileParser.RBRACE = 11;
DoWhileParser.ADD = 12;
DoWhileParser.SUB = 13;
DoWhileParser.DIV = 14;
DoWhileParser.MUL = 15;
DoWhileParser.UNDERSCORE = 16;
DoWhileParser.LETRA = 17;
DoWhileParser.DIGITO = 18;
DoWhileParser.WS = 19;

DoWhileParser.RULE_program = 0;
DoWhileParser.RULE_statement = 1;
DoWhileParser.RULE_doWhileStatement = 2;
DoWhileParser.RULE_assignmentStatement = 3;
DoWhileParser.RULE_consoleStatement = 4;
DoWhileParser.RULE_block = 5;
DoWhileParser.RULE_expression = 6;
DoWhileParser.RULE_term = 7;
DoWhileParser.RULE_identifier = 8;
DoWhileParser.RULE_number = 9;

class ProgramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DoWhileParser.RULE_program;
    }

	EOF() {
	    return this.getToken(DoWhileParser.EOF, 0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof DoWhileListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DoWhileListener ) {
	        listener.exitProgram(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DoWhileVisitor ) {
	        return visitor.visitProgram(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DoWhileParser.RULE_statement;
    }

	doWhileStatement() {
	    return this.getTypedRuleContext(DoWhileStatementContext,0);
	};

	assignmentStatement() {
	    return this.getTypedRuleContext(AssignmentStatementContext,0);
	};

	consoleStatement() {
	    return this.getTypedRuleContext(ConsoleStatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DoWhileListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DoWhileListener ) {
	        listener.exitStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DoWhileVisitor ) {
	        return visitor.visitStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DoWhileStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DoWhileParser.RULE_doWhileStatement;
    }

	DO() {
	    return this.getToken(DoWhileParser.DO, 0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	WHILE() {
	    return this.getToken(DoWhileParser.WHILE, 0);
	};

	LPAREN() {
	    return this.getToken(DoWhileParser.LPAREN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	RPAREN() {
	    return this.getToken(DoWhileParser.RPAREN, 0);
	};

	SEMICOLON() {
	    return this.getToken(DoWhileParser.SEMICOLON, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DoWhileListener ) {
	        listener.enterDoWhileStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DoWhileListener ) {
	        listener.exitDoWhileStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DoWhileVisitor ) {
	        return visitor.visitDoWhileStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AssignmentStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DoWhileParser.RULE_assignmentStatement;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	EQ() {
	    return this.getToken(DoWhileParser.EQ, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	SEMICOLON() {
	    return this.getToken(DoWhileParser.SEMICOLON, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DoWhileListener ) {
	        listener.enterAssignmentStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DoWhileListener ) {
	        listener.exitAssignmentStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DoWhileVisitor ) {
	        return visitor.visitAssignmentStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ConsoleStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DoWhileParser.RULE_consoleStatement;
    }

	CONSOLE() {
	    return this.getToken(DoWhileParser.CONSOLE, 0);
	};

	DOT() {
	    return this.getToken(DoWhileParser.DOT, 0);
	};

	LOG() {
	    return this.getToken(DoWhileParser.LOG, 0);
	};

	LPAREN() {
	    return this.getToken(DoWhileParser.LPAREN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	RPAREN() {
	    return this.getToken(DoWhileParser.RPAREN, 0);
	};

	SEMICOLON() {
	    return this.getToken(DoWhileParser.SEMICOLON, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DoWhileListener ) {
	        listener.enterConsoleStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DoWhileListener ) {
	        listener.exitConsoleStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DoWhileVisitor ) {
	        return visitor.visitConsoleStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DoWhileParser.RULE_block;
    }

	LBRACE() {
	    return this.getToken(DoWhileParser.LBRACE, 0);
	};

	RBRACE() {
	    return this.getToken(DoWhileParser.RBRACE, 0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof DoWhileListener ) {
	        listener.enterBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DoWhileListener ) {
	        listener.exitBlock(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DoWhileVisitor ) {
	        return visitor.visitBlock(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DoWhileParser.RULE_expression;
    }

	term = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TermContext);
	    } else {
	        return this.getTypedRuleContext(TermContext,i);
	    }
	};

	ADD = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(DoWhileParser.ADD);
	    } else {
	        return this.getToken(DoWhileParser.ADD, i);
	    }
	};


	SUB = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(DoWhileParser.SUB);
	    } else {
	        return this.getToken(DoWhileParser.SUB, i);
	    }
	};


	MUL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(DoWhileParser.MUL);
	    } else {
	        return this.getToken(DoWhileParser.MUL, i);
	    }
	};


	DIV = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(DoWhileParser.DIV);
	    } else {
	        return this.getToken(DoWhileParser.DIV, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof DoWhileListener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DoWhileListener ) {
	        listener.exitExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DoWhileVisitor ) {
	        return visitor.visitExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TermContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DoWhileParser.RULE_term;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
	};

	LBRACE() {
	    return this.getToken(DoWhileParser.LBRACE, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	RBRACE() {
	    return this.getToken(DoWhileParser.RBRACE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DoWhileListener ) {
	        listener.enterTerm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DoWhileListener ) {
	        listener.exitTerm(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DoWhileVisitor ) {
	        return visitor.visitTerm(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IdentifierContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DoWhileParser.RULE_identifier;
    }

	LETRA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(DoWhileParser.LETRA);
	    } else {
	        return this.getToken(DoWhileParser.LETRA, i);
	    }
	};


	DIGITO = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(DoWhileParser.DIGITO);
	    } else {
	        return this.getToken(DoWhileParser.DIGITO, i);
	    }
	};


	UNDERSCORE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(DoWhileParser.UNDERSCORE);
	    } else {
	        return this.getToken(DoWhileParser.UNDERSCORE, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof DoWhileListener ) {
	        listener.enterIdentifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DoWhileListener ) {
	        listener.exitIdentifier(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DoWhileVisitor ) {
	        return visitor.visitIdentifier(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NumberContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DoWhileParser.RULE_number;
    }

	DIGITO = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(DoWhileParser.DIGITO);
	    } else {
	        return this.getToken(DoWhileParser.DIGITO, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof DoWhileListener ) {
	        listener.enterNumber(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DoWhileListener ) {
	        listener.exitNumber(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DoWhileVisitor ) {
	        return visitor.visitNumber(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




DoWhileParser.ProgramContext = ProgramContext; 
DoWhileParser.StatementContext = StatementContext; 
DoWhileParser.DoWhileStatementContext = DoWhileStatementContext; 
DoWhileParser.AssignmentStatementContext = AssignmentStatementContext; 
DoWhileParser.ConsoleStatementContext = ConsoleStatementContext; 
DoWhileParser.BlockContext = BlockContext; 
DoWhileParser.ExpressionContext = ExpressionContext; 
DoWhileParser.TermContext = TermContext; 
DoWhileParser.IdentifierContext = IdentifierContext; 
DoWhileParser.NumberContext = NumberContext; 
