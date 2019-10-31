package logic.equation;

public class BooleanTreeDriver{
	public String testString = new String();
	//public Node root;
	
	public static void main(String[] args){
		/*Node root = createTree();
		parse(root);
		parse(new AndNode(new OrNode(new TermNode("A"), new TermNode("B")), new OrNode(new TermNode("C"), new TermNode("D"))));
		parse(new OrNode(new TermNode("A"), new TermNode("B")));
		parse(new OrNode(new AndNode(new TermNode("A"), new TermNode("B")), new AndNode(new TermNode("C"), new TermNode("D"))));
		parse(new AndNode(new OrNode(new TermNode("A"), new NotNode(new TermNode("B"))), new OrNode(new TermNode("C"), new TermNode("D"))));
		parse(new AndNode(new AndNode(new TermNode("A"), new TermNode("B")), new AndNode(new TermNode("C"), new TermNode("D"))));
		parse(new OrNode(new OrNode(new TermNode("A"), new TermNode("B")), new OrNode(new TermNode("C"), new TermNode("D"))));
		parse(new OrNode(new TermNode("A"), new AndNode(new TermNode("B"), new TermNode("C"))));
		parse(new AndNode(new TermNode("A"), new OrNode(new TermNode("B"), new TermNode("C"))));
		parse(new OrNode(new TermNode("A"), new OrNode(new AndNode(new TermNode("B"), new TermNode("C")), new TermNode("D"))));
		parse(new OrNode(new OrNode(new AndNode(new TermNode("A"), new TermNode("B")), new AndNode(new TermNode("C"), new TermNode("D"))), new AndNode(new TermNode("E"), new TermNode("D"))));
		parse(new AndNode(new AndNode(new OrNode(new TermNode("A"), new TermNode("B")), new OrNode(new TermNode("C"), new TermNode("D"))), new OrNode(new TermNode("E"), new TermNode("D"))));
		String test = "A+ B \n (v) T\t\n    ";
		String textno = test.replaceAll("\\s", "");
		System.out.println(test);
		System.out.println(textno);
		
		String SOP = "(\\'?[A-Z])+(\\+(\\'?[A-Z])+)*";
		System.out.println("'A'B+B'C+DE+FGRD+A".matches(SOP));
		*/
		//String POS = "[[\\'?A-Z\\+]*\\'?A-Z]";
		//String POS = "((\\'?[A-Z]\\+)*\\'?[A-Z])|(\\(((\\'?[A-Z]\\+)*\\'?[A-Z])\\))+";
		//String POS = "((\\'?[A-Z]\\+)*\\'?[A-Z])|((\\'?[A-Z])+(\\(((\\'?[A-Z]\\+)*\\'?[A-Z])\\))*)|(\\(((\\'?[A-Z]\\+)*\\'?[A-Z])\\))+";
		//String POS = "((\\'?[A-Z]\\+)*\\'?[A-Z])|(\\(((\\'?[A-Z]\\)*\\'?[A-Z])\\)|\\'?[A-Z])+";
		//String POS = "((\\'?[A-Z]\\+)*\\'?[A-Z])|((\\'?[A-Z])(1,6)(\\(((\\'?[A-Z]\\+)*\\'?[A-Z])\\))*)|(\\(((\\'?[A-Z]\\+)*\\'?[A-Z])\\))+";
		String POS = "((\\'?[A-Z]\\+)*\\'?[A-Z])|(\\(((\\'?[A-Z]\\+)*\\'?[A-Z])\\)|\\'?[A-Z])+";
		//String POS = "((\\'?[A-Z]\\+)*\\'?[A-Z])|(\\(((\\'?[A-Z]\\+)*\\'?[A-Z])\\)|)+";
		System.out.println("'AB('B+C)".matches(POS));
		System.out.println("('A+B)('B+C)".matches(POS));
		System.out.println("'A+B".matches(POS));
		System.out.println("'A('B+C)".matches(POS));
		
		//parse(new OrNode(new OrNode(new AndNode(new TermNode("A"), new TermNode("B")), new AndNode(new TermNode("C"), new TermNode("D"))), new AndNode(new TermNode("E"), new TermNode("D"))));
		//parse(new AndNode(new AndNode(new OrNode(new TermNode("A"), new TermNode("B")), new OrNode(new TermNode("C"), new TermNode("D"))), new OrNode(new TermNode("E"), new TermNode("D"))));
		//
		BooleanEquation eq4 = new BooleanEquation("'AB('B+C)", 5, false);
		BooleanEquation eq5 = new BooleanEquation("('B+C)('B+D)'AB", 5, false);
		
		BooleanEquation eq1 = new BooleanEquation("B'C+'AB+A'B", 5, true);
		BooleanEquation eq2 = new BooleanEquation("'cb+'ba+'ab", 5, true);
				
		boolean the = eq1.equals(eq2);
		System.out.println("eqs equal: "+the);
		System.out.println("the end");
	}
	
}