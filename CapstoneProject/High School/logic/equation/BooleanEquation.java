/**
 * BooleanEquation.java
 * 
 * @author Erica Liszewski
 * June 29, 2005
 * 
 * This class represents a boolean equation.  The current implementatioin
 * handles only SOP or POS forms of equation.  POS must be of the form
 * "((\\'?[A-Z]\\+)*\\'?[A-Z])|(\\(((\\'?[A-Z]\\+)*\\'?[A-Z])\\)|\\'?[A-Z])+"
 * and SOP must be of the form "(\\'?[A-Z])+(\\+(\\'?[A-Z])+)*".
 * BooleanEquation takes in a string and breaks the string into chunks. 
 * each chunk is a term in the original equation.  Each chunk is represented
 * by a Chunk, either POSChunk or SOPChunk.  The truth tables of each 
 * Chunk are combined to make a master truth table, as well as
 * maintaining the list of each individual chunk.  
 */

package logic.equation;

//import java.util.StringTokenizer;
import java.util.Arrays;
import logic.utils.Constants;

public class BooleanEquation{
	
	private String org_eq;//original equation as passed in
	private int [] ttable;//master truth table
	private char [] symbols;//list of valid symbols
	private Chunk [] chunks;//list of "Chunks"
	private int terms;//number of variables
	private String working;//working string (may be chanaged)
	private boolean SOP;//true if SOP, false if POS
	
	
	/**
	 * Constructor using default variable titles.
	 * Titles A-F based on number of varibles.
	 * @param in_eq String of equation 
	 * @param vars number of varibles in truth table
	 */
	public BooleanEquation(String in_eq, int vars, boolean SOP ){
		this.org_eq = in_eq;
		this.ttable = new int [(int)Math.pow(2.0, (double)vars)];
		if(SOP)Arrays.fill(ttable, 0);
		else Arrays.fill(ttable, 1);
		this.symbols = new char[vars];
		this.SOP = SOP;
		char [] titles = {'A', 'B', 'C', 'D', 'E', 'F'};
		for(int i=0; i<vars; i++){
			symbols[i] = titles[i];
		}
		this.working = in_eq.toUpperCase();
		working.replaceAll("\\s", "");
		createChunks(new String(working));
	}
	
	/**
	 * Constructor using specified titles for variables
	 * @param in_eq String of equation
	 * @param vars Number of variables in truth table
	 * @param titles char [] of desired title, most significant title first [0].
	 */
	public BooleanEquation(String in_eq, int vars, char[]titles, boolean SOP){
		this.org_eq = in_eq;
		this.ttable = new int [(int)Math.pow(2.0, (double)vars)];
		if(SOP)Arrays.fill(ttable, 0);
		else Arrays.fill(ttable, 1);
		this.SOP = SOP;
		this.symbols = new char[vars];
		for(int i=0; i<vars; i++){
			symbols[i] = titles[i];
					}
		this.working = in_eq.toUpperCase();
		working.replaceAll("\\s", "");
		createChunks(new String(working));
	}
	
	/**
	 * Returns true if temp's truth table equals this truth table
	 * @param temp input BooleanEquation to be compared
	 * @return true if temps truthtable is equal
	 */
	public boolean equals(BooleanEquation temp){
		if(Constants.DEBUG)System.out.println("In equals ");
		
		//compare master truth tables, and check that each have the same number of chunks
		if(Arrays.equals(this.ttable, temp.getTable()) && this.chunks.length == temp.getChunks().length){
			Chunk[] tempchunks = temp.getChunks();
			for(int i=0; i<chunks.length; i++){//for each chunk
				boolean nomatch = true;
				for(int j=0; j<tempchunks.length; j++){//check if there is a matching chunk
					if(Constants.DEBUG){
						System.out.println("Comparing chunk ");
						chunks[i].printBinaryRep(chunks[i].getBinRep());
						tempchunks[j].printBinaryRep(tempchunks[j].getBinRep());
					}
					if(chunks[i].compare(tempchunks[j])) {//if match, then we move on
						nomatch=false;
						break;
						} 	
				}
				if(nomatch) return false;//if there was no match, we return false	
			}
		return true;//if everything matched, return true
		}
	return false;//if we fail at the beginning
	}
	
	/**
	 * Returns truth table
	 * @return
	 */
	public int[] getTable(){
		return ttable;
	}
	
	/**
	 * returns the array of chunks for this equations
	 * used mainly for comparison
	 * @return
	 */
	public Chunk[] getChunks(){
		return chunks;
	}
	
	/**
	 * Creates the Chunks from the boolean equation
	 * @param eq
	 */
  	private void createChunks(String eq){
  		
  		if(!SOP)eq=parenSafe(eq, false);
  		
		if(Constants.DEBUG)System.out.println("fixing pos "+eq);
  		
  		String delim;
  		if(SOP)delim = "\\+";
  		else delim = "\\(|\\)";
  		
  		String[] strChunks = eq.split(delim);//split into a string array
  		
  		strChunks = clearEmpty(strChunks);//get rid of empty slots
  		
  		chunks = new Chunk[strChunks.length];//create new array
  		
  		for(int i=0; i<strChunks.length; i++){//create new Chunks for each equation chunk
			if(Constants.DEBUG)System.out.println("Chunk "+strChunks[i]);
			if(SOP){
				chunks[i]= new SOPChunk(strChunks[i], symbols);
			} else{
				chunks[i]= new POSChunk(strChunks[i], symbols);
			}
			addTableToMaster(chunks[i].getTruthTable());//update the master table	
  		}
  	}
  	
  	/**
  	 * Handles adding additional parens to POS equations with loose
  	 * charecters.  For example, AD(B+'C) is correct syntax, but this
  	 * will confuse the parser.  So, we make it (A)(D)(B+'C) to make
  	 * parsing easy.
  	 * @param eq the equation chunk to be parenSafed
  	 * @param enclosed used for recursive calls, true if we're between parens
  	 * @return
  	 */
  	private String parenSafe(String eq, boolean enclosed){
  		if(eq.equals(""))return eq;

  			switch(eq.charAt(0)){
  				case '(':
					return "(".concat(parenSafe(eq.substring(1), true));
				case ')':
					return 	")".concat(parenSafe(eq.substring(1), false));
				case '\'':
					if(enclosed)return "'".concat(parenSafe(eq.substring(1), true));
					else return "('".concat(eq.substring(1,2).concat(")".concat(parenSafe(eq.substring(2), false))));
				default:
				if(enclosed)return eq.substring(0,1).concat(parenSafe(eq.substring(1), true));
				else return "(".concat(eq.substring(0,1).concat(")".concat(parenSafe(eq.substring(1), false))));
  			}
  	}
	
	/**
	 * combines a truth table to the master truth table
	 * @param tt
	 */
	private void addTableToMaster(int[] tt){
		int grouped = (SOP)? 1:0;
		for(int i=0; i<tt.length && i<ttable.length; i++){
			if(tt[i]==grouped)ttable[i]=grouped;
		}
	}
	
	/**
	 * removes all empty slots from an array of Strings
	 * @param strRay
	 * @return
	 */
	private String[] clearEmpty(String [] strRay){
		int count = 0;
		//count how many slots contain the empty string
		for(int i=0; i<strRay.length; i++){
				if(strRay[i].equals(""))count++;
				}
		//if no empty slots, return the array as it was		
		if(count==0) return strRay;
		//else copy all slots not empty to new, shorter, array
		else{
			String[] trimmed = new String[strRay.length-count];
			int indexCount = 0;
			for(int i=0; i<strRay.length && indexCount<trimmed.length; i++){
				if(!strRay[i].equals("")){
					trimmed[indexCount]=strRay[i];
					indexCount++;
					}
				}
			return trimmed;
		}
	}
	
}
