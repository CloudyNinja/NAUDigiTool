/**
 * abstract class Chunk
 * @author Erica Liszewski
 * June 29, 2005
 * 
 * Chunk represents a piece of a boolean equation.  The inteneded
 * use is for a SOP chunk ("ABC" from "ABC+B'C") or a POS chunk
 * ("A+B+C" from "(A+B+C)(B+'C)").  Each chunk contains a binary
 * representataion of the chunk, were 0's and 1's are represented
 * as themselves, and don't cares are represented as -1's.  From
 * the binary representatation, the spanned values are generated
 * by replacing the don't cares with 0's or 1's.  The truth table 
 * will contain all either 0's or 1's and represents the truth
 * table for this chunk.  Syntax should be check prior to
 * creating a Chunk, but parsing problems will just result in an
 * error state where the truth table and binary representation are
 * both filled with -3.  
 */

package logic.equation;

import java.util.Arrays;
import logic.utils.Constants;

public abstract class Chunk {
	
	protected String eq;//equation being represented
	protected boolean SOP;//true if SOP
	protected int numVars;//number of variables
	protected char[] symbols;//valid symbols (A, B, C, etc) 
	protected int[] ttable;//truth table for this chunk
	protected int[] binaryRep;//binary representation of this chunk
	
	/**
	 * gets the truth table for this segment
	 * @return
	 */
	public int[] getTruthTable(){
		return ttable;
	}
	
	/**
	 * compares two Chunks
	 * @param comp the chunk to be compared too
	 * @return boolean true if chunks match, false if not
	 */
	public boolean compare(Chunk comp){
		if(this.ttable[0]== -3)return false;
	
		return Arrays.equals(this.ttable, comp.getTruthTable());
	}
	
	/**
	 * prints the binary representation to the command line
	 * mainly used for debug messages
	 * @param rep
	 */
	public void printBinaryRep(int[] rep){
		System.out.print("Binary rep: ");
		for(int i=0; i<rep.length; i++){
			System.out.print(rep[i]+" ");
		}
		System.out.print("\n");
	}
	
	/**
	 * gets the binary representation of this chunk
	 * mainly used for printing debug stuff
	 * format is ex: [1][1][-1][-1] = 11xx
	 * @return
	 */
	public int[] getBinRep(){
		return binaryRep;
	}
	
	/**
	 * Generates an int from an int array holding a binary representation
	 * @param num array containing binary representation i.e. [0][0][1][0]
	 * @return int from the binary rep, for example above 2.
	 */
	protected int generateNumber(int[] num){
		int genNum = 0;
		for(int i=0; i<num.length; i++){ //for each value in the array
			genNum = genNum << 1; //shift the last bit left
			genNum+=num[i]; //add the current bit
		}
		return genNum;
	}
	
	/**
	 * fill the truth table with proper values using the binary 
	 * representation of this chunk
	 *
	 */
	protected void fillTruthTable(){
		if(binaryRep[0]==-3 || ttable[0]== -3)return; //case where all values are as 0
		
		double count = 0.0;
		int [] newNum = new int [numVars];
		int setval = (SOP)?1:0; //value being set is different
		
		//count how many -1's (values that will change)
		//also setup newVal to start wiht all X's as 0's
		for(int i=0; i<binaryRep.length; i++){
			if(binaryRep[i] == -1){
				count++;
				newNum[i] = 0;
			}
			else newNum[i] = binaryRep[i];
		}
		
		/*if(Constants.DEBUG)System.out.println("new Num");
		if(Constants.DEBUG)this.printBinaryRep(newNum);
		if(Constants.DEBUG)System.out.println("old num");
		if(Constants.DEBUG)this.printBinaryRep(binaryRep);*/
		
		this.ttable[generateNumber(newNum)] = setval;//set the generated value in the ttable
		if(Constants.DEBUG)System.out.println("Added Num: "+generateNumber(newNum));
		
		//how many values are contained in this set, minus the one we just added
		int cellNum = (int)Math.pow(2.0, count) -1; 
		
		for(int i=0; i<cellNum; i++){ //for each cell
			int changeCount = 1; //used to count itereations
			for(int j=0; j<binaryRep.length; j++){//cycles through the binRep to change bits
				
				if(binaryRep[j] == -1) {//if it's a don't care
					//if(Constants.DEBUG)System.out.println("changeCount "+changeCount);
					if((i+1)%changeCount == 0) {//and it's time for it to change
						//if(Constants.DEBUG)System.out.println("changing "+j);
						newNum[j] = (newNum[j]==1)?0:1;//swap it
					}
					changeCount*=2;//increment by *2
				}
			}
			if(Constants.DEBUG)this.printBinaryRep(newNum);
			this.ttable[generateNumber(newNum)] = setval;//set this value in ttable
			if(Constants.DEBUG)System.out.println("Added Num: "+generateNumber(newNum));
		}
	}
	
	/**
	 * search method.  Takes a char array and a key, checks to see if
	 * the "key" is in any cell of the array.  If key exists, it returns
	 * the index of the cell that contains it.  If key dosen't exist,
	 * it returns -1.
	 * @param rey char array to be searched
	 * @param key the char you want to find
	 * @return index of key if it exists, or -1
	 */
	protected int containsChar(char[] rey, char key){
		for(int i=0; i<rey.length; i++){
			if(rey[i]==key)return i;
		}
		return -1;
	}

	/**
	 * method for parsing the chunk, will be handled
	 * differently for SOP and POS
	 * @param desteq
	 */
	protected abstract void parseChunk(String desteq);
	
}