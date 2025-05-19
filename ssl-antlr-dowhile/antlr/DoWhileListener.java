// Generated from c:/Users/Valentina/ssl-antlr-dowhile/DoWhile.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link DoWhileParser}.
 */
public interface DoWhileListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link DoWhileParser#program}.
	 * @param ctx the parse tree
	 */
	void enterProgram(DoWhileParser.ProgramContext ctx);
	/**
	 * Exit a parse tree produced by {@link DoWhileParser#program}.
	 * @param ctx the parse tree
	 */
	void exitProgram(DoWhileParser.ProgramContext ctx);
	/**
	 * Enter a parse tree produced by {@link DoWhileParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterStatement(DoWhileParser.StatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link DoWhileParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitStatement(DoWhileParser.StatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link DoWhileParser#doWhileStatement}.
	 * @param ctx the parse tree
	 */
	void enterDoWhileStatement(DoWhileParser.DoWhileStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link DoWhileParser#doWhileStatement}.
	 * @param ctx the parse tree
	 */
	void exitDoWhileStatement(DoWhileParser.DoWhileStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link DoWhileParser#assignmentStatement}.
	 * @param ctx the parse tree
	 */
	void enterAssignmentStatement(DoWhileParser.AssignmentStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link DoWhileParser#assignmentStatement}.
	 * @param ctx the parse tree
	 */
	void exitAssignmentStatement(DoWhileParser.AssignmentStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link DoWhileParser#consoleStatement}.
	 * @param ctx the parse tree
	 */
	void enterConsoleStatement(DoWhileParser.ConsoleStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link DoWhileParser#consoleStatement}.
	 * @param ctx the parse tree
	 */
	void exitConsoleStatement(DoWhileParser.ConsoleStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link DoWhileParser#block}.
	 * @param ctx the parse tree
	 */
	void enterBlock(DoWhileParser.BlockContext ctx);
	/**
	 * Exit a parse tree produced by {@link DoWhileParser#block}.
	 * @param ctx the parse tree
	 */
	void exitBlock(DoWhileParser.BlockContext ctx);
	/**
	 * Enter a parse tree produced by {@link DoWhileParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterExpression(DoWhileParser.ExpressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link DoWhileParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitExpression(DoWhileParser.ExpressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link DoWhileParser#term}.
	 * @param ctx the parse tree
	 */
	void enterTerm(DoWhileParser.TermContext ctx);
	/**
	 * Exit a parse tree produced by {@link DoWhileParser#term}.
	 * @param ctx the parse tree
	 */
	void exitTerm(DoWhileParser.TermContext ctx);
	/**
	 * Enter a parse tree produced by {@link DoWhileParser#identifier}.
	 * @param ctx the parse tree
	 */
	void enterIdentifier(DoWhileParser.IdentifierContext ctx);
	/**
	 * Exit a parse tree produced by {@link DoWhileParser#identifier}.
	 * @param ctx the parse tree
	 */
	void exitIdentifier(DoWhileParser.IdentifierContext ctx);
	/**
	 * Enter a parse tree produced by {@link DoWhileParser#number}.
	 * @param ctx the parse tree
	 */
	void enterNumber(DoWhileParser.NumberContext ctx);
	/**
	 * Exit a parse tree produced by {@link DoWhileParser#number}.
	 * @param ctx the parse tree
	 */
	void exitNumber(DoWhileParser.NumberContext ctx);
}