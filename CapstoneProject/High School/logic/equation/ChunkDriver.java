package logic.equation;

public class ChunkDriver {

	public static void main(String[] args){
		char [] sym = {'A', 'B', 'C', 'D','E','F'};
		
		Chunk pos = new POSChunk("A+'B", sym );
		Chunk sop = new SOPChunk("A'B", sym );
		Chunk pos2 = new POSChunk("1", sym );
		Chunk sop2 = new SOPChunk("0", sym );
	}
	
}