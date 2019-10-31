/**
 * class SOPChunk
 * @author Erica Liszewski
 * June 29, 2005
 * 
 * SOPChunk represents a chunk of a sum of products equation.  This
 * chunk should be of the form "\\'?[A-Z]".  See Chunk for a description
 * of how things work.
 */

package logic.equation;

import java.util.Arrays;
import logic.utils.Constants;

public class SOPChunk extends Chunk{

	public SOPChunk(String eq, char[] symbols){
		this.symbols = symbols;
		this.eq = eq;
		this.numVars = symbols.length;
		this.SOP = true;
		this.ttable = new int [(int)Math.pow(2.0, (double)numVars)];
		Arrays.fill(ttable, 0);
		this.binaryRep = new int [numVars];
		Arrays.fill(binaryRep, -1);
		
		parseChunk(new String(eq));
		if(Constants.DEBUG)this.printBinaryRep(this.binaryRep);
		
		fillTruthTable();
	}
	
	/**
	 * parses a sop Chunk, of form \\'?[A-Z]
	 */
	protected void parseChunk(String desteq){
		if(desteq.length()==0) return;
		char key = desteq.charAt(0);
		boolean not = false;
		
		switch (key){
			case '0'://if 0, then whole tt is 1
				Arrays.fill(binaryRep, -3);//error states that says don't mess with tt
				break;
			case '1'://if 1, then whole tt is 0
				//Arrays.fill(binaryRep, 0);
				break;
			case '\'': //notting, so get next char and go on
				not = true;
				desteq = desteq.substring(1);
				key = desteq.charAt(0);
			default://handle all symbols
				if(Constants.DEBUG)System.out.println("key is: "+key);
				int pos = containsChar(symbols, key);
				
				//if the symbol is not one of the valid symbols,
				//or the symbol is repeated in this chunk
				if(pos == -1 || binaryRep[pos] != -1){
					Arrays.fill(ttable, -3);
					Arrays.fill(binaryRep, -3);
				}
				else{
					if(not) binaryRep[pos] = 0;
					else binaryRep[pos] = 1;
					parseChunk(desteq.substring(1));
				}
		}
	}
	
	
}