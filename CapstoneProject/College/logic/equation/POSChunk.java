/**
 * class POSChunk
 * @author Erica Liszewski
 * June 29, 2005
 * 
 * POSChunk represents a chunk of a product of sums equation.  This
 * chunk should be of the form "\\'?[A-Z]\\+)*\\'?[A-Z]".  
 * See Chunk for a description of how things work.
 */

package logic.equation;

import java.util.Arrays;
import logic.utils.Constants;

public class POSChunk extends Chunk {

	public POSChunk (String eq, char[] symbols){
		this.symbols = symbols;
		this.eq = eq;
		this.numVars = symbols.length;
		this.SOP = false;
		this.ttable = new int [(int)Math.pow(2.0, (double)numVars)];
		Arrays.fill(ttable, 1);
		this.binaryRep = new int [numVars];
		Arrays.fill(binaryRep, -1);
		
		parseChunk(new String(eq));
		if(Constants.DEBUG)this.printBinaryRep(this.binaryRep);
		
		fillTruthTable();
	}
	
	/**
	 * parses a POS chunk, of form \\'?[A-Z]\\+)*\\'?[A-Z] into a binaryRep
	 */
	protected void parseChunk(String desteq){
		if(desteq.length()==0) return;
		char key = desteq.charAt(0);
		boolean not = false;
		
		switch (key){
			
			case '0'://if zero, then the whole tt is 0
				//Arrays.fill(binaryRep, -3);
				break;
			case '1'://if 1, then whole tt is 1
				Arrays.fill(binaryRep, -3);//this state says don't tough the tt
				break;
			case '\'': //if ' then we're notting, so grab the next character and go on
				not = true;
				desteq = desteq.substring(1);
				key = desteq.charAt(0);
			default://anything else, handle as a symbol
				if(Constants.DEBUG)System.out.println("key is: "+key);
				int pos = containsChar(symbols, key);
				
				//if the symbol is not one of the valid symbols,
				//or the symbol is repeated in this chunk
				if(pos == -1  || binaryRep[pos] != -1){
					Arrays.fill(ttable, -3);//error state
					Arrays.fill(binaryRep, -3);
					}
				else{
					if(not) binaryRep[pos] = 1;
					else binaryRep[pos] = 0;
					if(desteq.length()>1 && desteq.charAt(1)=='+')
						parseChunk(desteq.substring(2));	
					}
				}
		}
}
