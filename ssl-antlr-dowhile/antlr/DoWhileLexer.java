// Generated from c:/Users/Valentina/ssl-antlr-dowhile/DoWhile.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue", "this-escape"})
public class DoWhileLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		DO=1, WHILE=2, LPAREN=3, RPAREN=4, SEMICOLON=5, EQ=6, CONSOLE=7, DOT=8, 
		LOG=9, LBRACE=10, RBRACE=11, ADD=12, SUB=13, DIV=14, MUL=15, UNDERSCORE=16, 
		ID=17, INT=18, WS=19;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"DO", "WHILE", "LPAREN", "RPAREN", "SEMICOLON", "EQ", "CONSOLE", "DOT", 
			"LOG", "LBRACE", "RBRACE", "ADD", "SUB", "DIV", "MUL", "UNDERSCORE", 
			"ID", "INT", "WS"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'do'", "'while'", "'('", "')'", "';'", "'='", "'console'", "'.'", 
			"'log'", "'{'", "'}'", "'+'", "'-'", "'/'", "'*'", "'_'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "DO", "WHILE", "LPAREN", "RPAREN", "SEMICOLON", "EQ", "CONSOLE", 
			"DOT", "LOG", "LBRACE", "RBRACE", "ADD", "SUB", "DIV", "MUL", "UNDERSCORE", 
			"ID", "INT", "WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}


	public DoWhileLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "DoWhile.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\u0004\u0000\u0013_\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002\u0001"+
		"\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004"+
		"\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007"+
		"\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b"+
		"\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002"+
		"\u000f\u0007\u000f\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011\u0002"+
		"\u0012\u0007\u0012\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0002\u0001"+
		"\u0002\u0001\u0003\u0001\u0003\u0001\u0004\u0001\u0004\u0001\u0005\u0001"+
		"\u0005\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001"+
		"\u0006\u0001\u0006\u0001\u0006\u0001\u0007\u0001\u0007\u0001\b\u0001\b"+
		"\u0001\b\u0001\b\u0001\t\u0001\t\u0001\n\u0001\n\u0001\u000b\u0001\u000b"+
		"\u0001\f\u0001\f\u0001\r\u0001\r\u0001\u000e\u0001\u000e\u0001\u000f\u0001"+
		"\u000f\u0001\u0010\u0001\u0010\u0001\u0011\u0001\u0011\u0001\u0012\u0004"+
		"\u0012Z\b\u0012\u000b\u0012\f\u0012[\u0001\u0012\u0001\u0012\u0000\u0000"+
		"\u0013\u0001\u0001\u0003\u0002\u0005\u0003\u0007\u0004\t\u0005\u000b\u0006"+
		"\r\u0007\u000f\b\u0011\t\u0013\n\u0015\u000b\u0017\f\u0019\r\u001b\u000e"+
		"\u001d\u000f\u001f\u0010!\u0011#\u0012%\u0013\u0001\u0000\u0003\u0002"+
		"\u0000AZaz\u0001\u000009\u0003\u0000\t\n\r\r  _\u0000\u0001\u0001\u0000"+
		"\u0000\u0000\u0000\u0003\u0001\u0000\u0000\u0000\u0000\u0005\u0001\u0000"+
		"\u0000\u0000\u0000\u0007\u0001\u0000\u0000\u0000\u0000\t\u0001\u0000\u0000"+
		"\u0000\u0000\u000b\u0001\u0000\u0000\u0000\u0000\r\u0001\u0000\u0000\u0000"+
		"\u0000\u000f\u0001\u0000\u0000\u0000\u0000\u0011\u0001\u0000\u0000\u0000"+
		"\u0000\u0013\u0001\u0000\u0000\u0000\u0000\u0015\u0001\u0000\u0000\u0000"+
		"\u0000\u0017\u0001\u0000\u0000\u0000\u0000\u0019\u0001\u0000\u0000\u0000"+
		"\u0000\u001b\u0001\u0000\u0000\u0000\u0000\u001d\u0001\u0000\u0000\u0000"+
		"\u0000\u001f\u0001\u0000\u0000\u0000\u0000!\u0001\u0000\u0000\u0000\u0000"+
		"#\u0001\u0000\u0000\u0000\u0000%\u0001\u0000\u0000\u0000\u0001\'\u0001"+
		"\u0000\u0000\u0000\u0003*\u0001\u0000\u0000\u0000\u00050\u0001\u0000\u0000"+
		"\u0000\u00072\u0001\u0000\u0000\u0000\t4\u0001\u0000\u0000\u0000\u000b"+
		"6\u0001\u0000\u0000\u0000\r8\u0001\u0000\u0000\u0000\u000f@\u0001\u0000"+
		"\u0000\u0000\u0011B\u0001\u0000\u0000\u0000\u0013F\u0001\u0000\u0000\u0000"+
		"\u0015H\u0001\u0000\u0000\u0000\u0017J\u0001\u0000\u0000\u0000\u0019L"+
		"\u0001\u0000\u0000\u0000\u001bN\u0001\u0000\u0000\u0000\u001dP\u0001\u0000"+
		"\u0000\u0000\u001fR\u0001\u0000\u0000\u0000!T\u0001\u0000\u0000\u0000"+
		"#V\u0001\u0000\u0000\u0000%Y\u0001\u0000\u0000\u0000\'(\u0005d\u0000\u0000"+
		"()\u0005o\u0000\u0000)\u0002\u0001\u0000\u0000\u0000*+\u0005w\u0000\u0000"+
		"+,\u0005h\u0000\u0000,-\u0005i\u0000\u0000-.\u0005l\u0000\u0000./\u0005"+
		"e\u0000\u0000/\u0004\u0001\u0000\u0000\u000001\u0005(\u0000\u00001\u0006"+
		"\u0001\u0000\u0000\u000023\u0005)\u0000\u00003\b\u0001\u0000\u0000\u0000"+
		"45\u0005;\u0000\u00005\n\u0001\u0000\u0000\u000067\u0005=\u0000\u0000"+
		"7\f\u0001\u0000\u0000\u000089\u0005c\u0000\u00009:\u0005o\u0000\u0000"+
		":;\u0005n\u0000\u0000;<\u0005s\u0000\u0000<=\u0005o\u0000\u0000=>\u0005"+
		"l\u0000\u0000>?\u0005e\u0000\u0000?\u000e\u0001\u0000\u0000\u0000@A\u0005"+
		".\u0000\u0000A\u0010\u0001\u0000\u0000\u0000BC\u0005l\u0000\u0000CD\u0005"+
		"o\u0000\u0000DE\u0005g\u0000\u0000E\u0012\u0001\u0000\u0000\u0000FG\u0005"+
		"{\u0000\u0000G\u0014\u0001\u0000\u0000\u0000HI\u0005}\u0000\u0000I\u0016"+
		"\u0001\u0000\u0000\u0000JK\u0005+\u0000\u0000K\u0018\u0001\u0000\u0000"+
		"\u0000LM\u0005-\u0000\u0000M\u001a\u0001\u0000\u0000\u0000NO\u0005/\u0000"+
		"\u0000O\u001c\u0001\u0000\u0000\u0000PQ\u0005*\u0000\u0000Q\u001e\u0001"+
		"\u0000\u0000\u0000RS\u0005_\u0000\u0000S \u0001\u0000\u0000\u0000TU\u0007"+
		"\u0000\u0000\u0000U\"\u0001\u0000\u0000\u0000VW\u0007\u0001\u0000\u0000"+
		"W$\u0001\u0000\u0000\u0000XZ\u0007\u0002\u0000\u0000YX\u0001\u0000\u0000"+
		"\u0000Z[\u0001\u0000\u0000\u0000[Y\u0001\u0000\u0000\u0000[\\\u0001\u0000"+
		"\u0000\u0000\\]\u0001\u0000\u0000\u0000]^\u0006\u0012\u0000\u0000^&\u0001"+
		"\u0000\u0000\u0000\u0002\u0000[\u0001\u0006\u0000\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}