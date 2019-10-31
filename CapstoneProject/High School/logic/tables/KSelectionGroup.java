/**
 * @author Billy Olsen (initial)
 * @author Erica Liszewski
 * @File KSelectionGroup.java
 * @Version 0.2
 * Created on November 28, 2002, 11:07 AM
 */

package logic.tables;

import java.util.Arrays;
import java.awt.Color;
//import java.util.Random;

public class KSelectionGroup {
    public static int NORTH = 0;
    public static int EAST = 1;
    public static int SOUTH = 2;
    public static int WEST = 3;
    public static int NE = 4;
    public static int NW = 5;
    public static int SE = 6;
    public static int SW = 7;
    public static int CENTER = 8;
    public static int BOTTOM = 9;
    public static int TOP = 10;
    public static int LEFT = 11;
    public static int RIGHT = 12;
    public static int LNR = 13;
    public static int TNB = 14;
    public static int SINGLE = 15;
    
    private int dimension;
    private int[] selectedIndices;
    private boolean valid_size = false;
    private boolean valid_group = false;
    private KMap kmap;
    private KData kdata;
    private int offsetx = 45;
    private int offsety = 45;
    private int subGroup = 0;

    private static int colorint;
    private Color color;
    
    private String equation = "";
    
    /** Creates a new instance of KSelectionGroup */
    public KSelectionGroup( int[] selectedIndics, KData kd ) {
        this.selectedIndices = selectedIndics;
        this.dimension = kd.getDimension();
        this.kdata = kd;
        Arrays.sort(this.selectedIndices);
	  	setColor();
    }
    
    /**
     * creates a new KSelectionGroup with specified colors.  This is for
     * groupings that span accross multiple maps.  We want to keep the
     * color the same accross all maps.
     * @param selectedIndics
     * @param kd
     * @param newcolor
     */
    public KSelectionGroup( int[] selectedIndics, KData kd, Color newcolor) {
	this.selectedIndices = selectedIndics;
	this.dimension = kd.getDimension();
	this.kdata = kd;
	Arrays.sort(this.selectedIndices);
	color=newcolor;
    }


/**
 * Creates the boolean equation to go along with this selection.
 *
 */
	public String createEquation(){
		boolean [] spans = new boolean[logic.utils.StatusFlags.complexity.numOfVariables];
		Arrays.fill(spans, false);
		String [] titles = {"A", "B", "C", "D", "E", "F"};
		boolean NOT;
		boolean all_selected = true;
		
		for(int i=1; i<selectedIndices.length; i++){
			int spanChar = selectedIndices[0]^selectedIndices[i];
			switch (spanChar){
				case 1: spans[spans.length-1] = true;
						break;
				case 2: spans[spans.length-2] = true;
						break;
				case 4: spans[spans.length-3] = true;
						break;
				case 8: spans[spans.length-4] = true;
						break;
				case 16: spans[spans.length-5] = true;
						break;
				case 32: spans[0] = true;
				default: break;
				}
			}
			
			for(int i=0; i<spans.length; i++){
				
				if(!spans[i]) {
					all_selected = false;
					int shifted = selectedIndices[0] >> (spans.length -1 -i);
					if(shifted%2 == 0){
						if(logic.utils.StatusFlags.complexity.SOP == true) NOT = true; 
						else NOT = false;
						}
					else {
						if(logic.utils.StatusFlags.complexity.SOP == true) NOT = false; 
						else NOT = true;
					}
					if (equation.length()!=0){
						if(logic.utils.StatusFlags.complexity.SOP == false) 
							equation = equation + "+";	
					}
					if(NOT && equation.length() == 0){
						equation = "'";
						equation = equation + titles[i];
						}
					else if (NOT) equation = equation + "'" + titles[i];
					else if(equation.length() == 0) equation = titles[i];
					else equation = equation + titles[i];
							
				}
				
			
		}
		if(all_selected){
			if(logic.utils.StatusFlags.complexity.SOP == false) equation = "0";
			else equation = "1";
			}
		if(logic.utils.Constants.DEBUG) System.out.println ("Equation is: "+equation);
		return equation;
		
	}

	
	/**
	 * returns the equation for this group
	 *
	 */
	public String getEquation(){
		return equation;
	}
	

    /**
     * generates a random color for this group
     */
    private void setColor(){
	
    if (colorint == 9) colorint = 0;
    else colorint++;
    	
	  switch (colorint){
		case 0: color = Color.gray;
			break;
		case 1: color = Color.red;
			break;
		case 2: color = Color.pink;
			break;
		case 3: color = Color.orange;
			break;
		case 4: color = Color.magenta;
			break;
		case 5: color = Color.green;
			break;
		case 6: color = Color.cyan;
			break;
		case 7: color = Color.blue;
			break;
		case 8: color = new Color(153, 51, 255);
			break;
		case 9: color = new Color(0, 153, 153);
			break;
		}
	}

    /**
     * returns color of this group
     */
    public Color getColor(){
		return color;
		}		
    
    /**
     * checks to make sure this grouping is of a valid size
     * i.e. a power of 2
     */
    public boolean isValidSize( ) {
        int size = selectedIndices.length;
        boolean valid = false;
        switch( size ) {
            case 1: case 2: case 4: case 8: 
            case 16: case 32: case 64:
                valid = true;
                break;
            default:
                valid = false;
                break;
        }
        return valid;
    }
        
    /**
     * Checks to see if this group is valid.
     */
    public boolean isValidGroup( ) {
	//System.out.println ("checking Group validity");
	if(selectedIndices.length < 1) return false;
        if( !isValidSize() ) {
	    //System.err.println("Invalid Size detected!");
	    logic.utils.StatusFlags.INVALID_SIZE = true;
	    logic.utils.StatusFlags.INVALID_SELECTION = true;
	    return false;
	}
	//System.out.println("checking group validaty");
        KState comp = ( logic.utils.StatusFlags.complexity.SOP == true ) ? KState.TRUE : KState.FALSE;
        if( selectedIndices.length == 1 && kdata.getFunction(selectedIndices[0]) == comp )
            return true;
        
        boolean validEntries = true;
        for( int i = 0; i < selectedIndices.length; i++ ) {
             KState temp = kdata.getFunction( selectedIndices[i] );
	     if( temp != comp && temp != KState.DONT_CARE ) {
		 //System.err.println( selectedIndices[i] + " is an invalid entry!");
		// System.err.println( "State is " + kdata.getFunction( selectedIndices[i] ) );
		 validEntries = false;
	     }
        }
        if( validEntries == false ) {
	    //System.err.println("Invalid entries detected!");
	    logic.utils.StatusFlags.INVALID_SELECTION = true ;
	    return false;
	}
        
        int numNeighbors=logBase2(selectedIndices.length);
        if( numNeighbors == -1 ) return false;
        boolean invalidNumOfNeighbors = false;
        // Now checking to see if there are no disjoint cells.
        for(int i=0;i<selectedIndices.length;i++) {
            int count=0;
            for(int j=0;j<selectedIndices.length;j++) {
                if( i != j ) {
                    count = (areNeighbors(selectedIndices[i],selectedIndices[j])==true) ? count + 1 : count;
                }
            }
            if( count != numNeighbors ) {
                invalidNumOfNeighbors = true;
                 i = selectedIndices.length;
            }
        }
	if( invalidNumOfNeighbors == true ) {
	   // System.err.println("Invalid number of neighbors detected!");
	    logic.utils.StatusFlags.INVALID_SELECTION = true;
	    return false;
	}
        
        return true;
    }
    
    /**
     * returns log base 2 of number
     */
    public int logBase2( int number ) {
        if( number == 1 ) return 0;
        int i=0;
        for( ; number > 1; i++) {
            if( (number%2) != 0 ) return -1;
            number = number / 2;
        }
        return i;
    }
    
    /**
     * returns indices in this group as an array of ints.
     * @return
     */
    public int[] getGroupAsIntArray( ) {
        return selectedIndices;
    }
    
    /**
     * get row of an index
     * @param source
     * @return
     */
    public int getRow( int source ) {
        return ((source/4)%4);
    }
    
    /**
     * get column of an index
     * @param source
     * @return
     */
    public int getCol( int source ) {
        return (source%4);
    }
    
    /**
     * get the layer of an index (i.e. what map it's on)
     * @param source
     * @return
     */
    public int getLayer( int source) {
        return (source/16);
    }
    
    /**
     * this is used for drawing, returns the piece type of the index.  
     * i.e. with a selection of 0,1, the piecetype for 0 would be 
     * the type for leftside of a single row horizantal group.  The 
     * piecetype for 1 would be the right side of a single row horizantal
     * group.
     * 
     * @param source
     * @return
     */
    public int getPieceType( int source ) {
        int layer = getLayer(source);
        int size=0;
        int leftmostcol=3;
        int rightmostcol=0;
        int highestrow=3;
        int lowestrow=0;
        
        for( int i=0;i<selectedIndices.length;i++ ) {
            if( getLayer(selectedIndices[i])==layer ) {
                size++;
                int row=getRow(selectedIndices[i]);
                int col=getCol(selectedIndices[i]);
                if( row < highestrow )
                    highestrow = row;
                if( row > lowestrow )
                    lowestrow = row;
                if( col < leftmostcol )
                    leftmostcol = col;
                if( col > rightmostcol )
                    rightmostcol = col;
            }
        }

	if(size == 1) return SINGLE;

        int[] inlayer;
        if( size == selectedIndices.length )
            inlayer = selectedIndices;
        else {
            inlayer = new int[size];
            for( int i=0, index=0;i<selectedIndices.length;i++ )
                if(getLayer(selectedIndices[i])==layer)
                    inlayer[index++]=selectedIndices[i];
        }

        int sourcerow = getRow(source);
        int sourcecol = getCol(source);

        boolean spanscorners = spansOnlyCorners(inlayer);

        int dim = kdata.getDimension();
        if( spanscorners == true ) {
            switch( source%16 ) {
                case 0: return (dim==3)?NE:SE;
                case 2: return (dim==3)?NW:SW;
                case 4: return SE;
                case 6: return SW;
                case 8: return NE;
                case 10: return NW;
                default: break;
            }
        }
        
        int leftn = (sourcecol==0)?source+2:
                    (sourcecol==1)?source-1:
                    (sourcecol==2)?source+1:source-2;
        int rightn = (sourcecol==0)?source+1:
                     (sourcecol==1)?source+2:
                     (sourcecol==2)?source-2:source-1;
        int upn = (sourcerow==0)?source+8:
                  (sourcerow==1)?source-4:
                  (sourcerow==2)?source+4:source-8;
        int downn = (sourcerow==0)?source+4:
                    (sourcerow==1)?source+8:
                    (sourcerow==2)?source-8:source-4;
        
        if( inlayer.length == 2 ) {
            if( contains( inlayer, leftn ) ) return RIGHT;
            if( contains( inlayer, rightn ) ) return LEFT;
            if( contains( inlayer, upn ) ) return BOTTOM;
            if( contains( inlayer, downn ) ) return TOP;
        } else {
            if( contains( inlayer, rightn ) && contains( inlayer, leftn ) ) {
               if( contains( inlayer, downn ) && sourcerow == 2 ) {
                   if( sourcecol == 0 ) return ((source%16)==8&&inlayer.length==16)?SW:NW;//NW:SW;
                   if( sourcecol == 2 ) return ((source%16)==10&&inlayer.length==16)?SE:NE;//NE:SE;
                   return (((source%16)==9||(source%16)==11)&&inlayer.length==16)?SOUTH:NORTH;
               }
               if( contains( inlayer, upn ) && sourcerow == 0 ) {
                   if( sourcecol == 0 ) return ((source%16)==0&&inlayer.length==16)?NW:SW;
                   if( sourcecol == 2 ) return ((source%16)==2&&inlayer.length==16)?NE:SE;
                   return (((source%16)==1||(source%16)==3)&&inlayer.length==16)?NORTH:SOUTH;
               }
               if( sourcecol == 0 && inlayer.length == 4 ) return LEFT; 
               if( sourcecol == 2 && inlayer.length == 4 ) return RIGHT;
               for( int k=0;k<inlayer.length;k++ )
                   if( getRow(inlayer[k]) != sourcerow ) return getGenericPiece(inlayer,source);
               return TNB;
           }
           if( contains( inlayer, upn ) && contains( inlayer, downn ) ) {
               if( contains( inlayer, rightn ) && sourcecol == 2 ) {
                   if( sourcerow == 0 ) return NW;
                   if( sourcerow == 2 ) return SW;
                   return WEST;
               }
               if( contains( inlayer, upn ) && sourcecol == 0 ) {
                   if( sourcerow == 0 ) {
                        if( contains( inlayer, leftn ) )
                            return NE;
                        else if( inlayer.length == 4 ) {
                            return TOP;
                        } else
                            return NW;
                   }
                   if( sourcerow == 2 ) {
                       if( contains( inlayer, leftn ) )
                           return SE;
                       else if( inlayer.length == 4 ) {
                           return BOTTOM;
                       } else 
                           return SW;
                   }
                   return (contains(inlayer,leftn)) ? EAST : ((inlayer.length==4)?LNR:WEST);
               }
               if( sourcerow == 0 && inlayer.length == 4 ) return TOP;
               if( sourcerow == 2 && inlayer.length == 4 ) return BOTTOM;
               for( int k=0;k<inlayer.length;k++ )
                   if( getCol(inlayer[k]) != sourcecol ) return getGenericPiece(inlayer,source);
               return LNR;
           }
           if( contains( inlayer, leftn ) && contains( inlayer, upn ) ) return SE;
           if( contains( inlayer, rightn ) && contains( inlayer, upn ) ) return SW;
           if( contains( inlayer, leftn ) && contains( inlayer, downn ) ) return NE;
           if( contains( inlayer, rightn ) && contains( inlayer, downn ) ) return NW;
        }            
        return getGenericPiece(inlayer,source);
    }
    
    /**
     * Honestly, I'm not exactly sure what this does.  It has something
     * to do with getting the piece type in certain situations that aren't
     * handled by the getPieceType()
     * @param inlayer
     * @param source
     * @return
     */
    private int getGenericPiece( int[] inlayer, int source ) {
        int rightmostcol = 0;
        int leftmostcol = 3;
        int highestrow = 3;
        int lowestrow = 0;
        int sourcecol = getCol(source);
        int sourcerow = getRow(source);
        
        for( int i = 0; i < inlayer.length; i++ ) {
            if( leftmostcol == 2 && (getCol(inlayer[i]) == 3 || getCol(inlayer[i])<2)) leftmostcol = getCol(inlayer[i]);
            else if( leftmostcol == 3 && getCol(inlayer[i]) < 2 ) leftmostcol = getCol(inlayer[i]);
            else if( leftmostcol > getCol(inlayer[i]) ) leftmostcol = getCol(inlayer[i]);
            
            if( rightmostcol == 3 && getCol(inlayer[i]) == 2 ) rightmostcol = 2;
            else if( rightmostcol == 2 && getCol(inlayer[i]) == 3 ) rightmostcol = rightmostcol;
            else if( getCol(inlayer[i]) > rightmostcol ) rightmostcol = getCol(inlayer[i]);

            if( highestrow == 2 && (getRow(inlayer[i]) == 3 || getRow(inlayer[i])<2)) highestrow = getRow(inlayer[i]); 
            else if( highestrow == 3 && getCol(inlayer[i]) < 2 ) highestrow = getRow(inlayer[i]);
            else if( highestrow > getRow(inlayer[i]) ) highestrow = getRow(inlayer[i]);

            if( lowestrow == 3 && getRow(inlayer[i]) == 2 ) lowestrow = 2;
            else if( lowestrow == 2 && getRow(inlayer[i]) == 3 ) lowestrow = lowestrow;
            else if( getRow( inlayer[i] ) > lowestrow ) lowestrow = getRow(inlayer[i]);
        }
        
        if( sourcecol == rightmostcol ) {
            if( sourcerow == highestrow ) 
                return NE;
            else if( sourcerow == lowestrow )
                return SE;
            else
                return EAST;
        }
        if( sourcecol == leftmostcol ) {
            if( sourcerow == lowestrow )
                return SW;
            else if( sourcerow == highestrow )
                return NW;
            else
                return WEST;
        }
        if( sourcerow == highestrow )
            return NORTH;
        
        if( sourcerow == lowestrow )
            return SOUTH;
        
        return CENTER;       
    }
    
    public static boolean contains( int[] array, int findme ) {
        for( int i = 0; i < array.length; i++ )
            if( array[i] == findme )
                return true;
        
        return false;
    }
    
    /**
     * This may not actually be used.  It seems to check in a specific index
     * is on the edge of a grouping.
     * @param array
     * @param source
     * @return
     */
  /*  private boolean isOnEdge( int[] array, int source ) {
        if( getCol(source) == 0 || getCol(source) == 2 ) return true;
        if( getRow(source) == 0 || getRow(source) == 2 ) return true;
        return false;
    }*/
    
    /**
     * This may not actually be used either. 
     * @param inlayer
     * @param source
     * @return
     */
  /*  private int getNeighborDirection( int[] inlayer, int source ) {
        if( inlayer.length != 2 ) return -1;
        int dim = kdata.getDimension();
        int row = getRow(source);
        int col = getCol(source);
 
        switch( row ) {
            case 0: 
                if( Arrays.binarySearch( inlayer, source+4 ) != -1 )
                    return SOUTH;
                if( Arrays.binarySearch( inlayer, source+8 ) != -1 )
                    return NORTH;
                break;
            case 1:
                if( Arrays.binarySearch( inlayer, source-4 ) != -1 )
                    return NORTH;
                if( Arrays.binarySearch( inlayer, source+8 ) != -1 )
                    return SOUTH;
                break;
            case 2:
                if( Arrays.binarySearch( inlayer, source-8 ) != -1 )
                    return NORTH;
                if( Arrays.binarySearch( inlayer, source-4 ) != -1 )
                    return SOUTH;
                break;
            case 3:
                if( Arrays.binarySearch( inlayer, source-8 ) != -1 )
                    return SOUTH;
                if( Arrays.binarySearch( inlayer, source+4 ) != -1 )
                    return NORTH;
                break;
            default:
                break;
        }
        switch( col ) {
            case 0:
                if( Arrays.binarySearch( inlayer, source+2 ) != -1 )
                    return WEST;
                if( Arrays.binarySearch( inlayer, source+1 ) != -1 )
                    return EAST;
                break;
            case 1:
                if( Arrays.binarySearch( inlayer, source-1 ) != -1 )
                    return WEST;
                if( Arrays.binarySearch( inlayer, source+2 ) != -1 )
                    return EAST;
                break;
            case 2:
                if( Arrays.binarySearch( inlayer, source-2 ) != -1 )
                    return EAST;
                if( Arrays.binarySearch( inlayer, source+1 ) != -1 )
                    return WEST;
                break;
            case 3:
                if( Arrays.binarySearch( inlayer, source-1 ) != -1 )
                    return EAST;
                if( Arrays.binarySearch( inlayer, source-2 ) != -1 ) 
                    return WEST;
                break;
            default:
                return -1;
        }
        return -1;
    }*/
     
    /**
     * This checks to see a specified grouping is just corner
     * pieces.  i.e the 0, 2, 8, 10 on a 4-var KMap.
     * @param inlayer
     * @return
     */       
    private boolean spansOnlyCorners( int[] inlayer ) {
        if( inlayer.length != 4 ) return false;
        int[] myarray = inlayer;
        Arrays.sort(myarray);
        if( kdata.getDimension() == 3 )
            if( ( getCol(myarray[0]) == 0 && getRow(myarray[0])==0 ) &&
                ( getCol(myarray[1]) == 2 && getRow(myarray[1])==0 ) &&
                ( getCol(myarray[2]) == 0 && getRow(myarray[2])==1 ) &&
                ( getCol(myarray[3]) == 2 && getRow(myarray[3])==1 ) )
                return true;
        if( ( getCol( myarray[0] ) == 0 && getRow( myarray[0] ) == 0 ) &&
            ( getCol( myarray[1] ) == 2 && getRow( myarray[1] ) == 0 ) &&
            ( getCol( myarray[2] ) == 0 && getRow( myarray[2] ) == 2 ) &&
            ( getCol( myarray[3] ) == 2 && getRow( myarray[2] ) == 2 ) )
            return true;
        return false;
    }
        
    public boolean spansLayers( ) {
        int lastLayer = (selectedIndices[0]/16);
        for( int i=1; i<selectedIndices.length;i++ ){
            if( (selectedIndices[0]/16)!=lastLayer )
                return true;
        }
        return false;
    }
    /**
     * Checks two indexes to see if they are neighbors
     */
    public boolean areNeighbors( int source, int neighbor ) {
        boolean checkrow=false;
        boolean checklayer=false;
        boolean checkcol=false;
        int layer = (source/16);
        int row = ((source)/4)%4;
        int col = (source%4);

        // Checks to see if the cells are neighbors through the layers.
        switch( layer ) {
            case 0: checklayer = ((source+16)==neighbor||(source+32)==neighbor) ? true : false;
                break;
            case 1: checklayer = ((source-16)==neighbor||(source+32)==neighbor) ? true : false;
                break;
            case 2: checklayer = ((source-32)==neighbor||(source+16)==neighbor) ? true : false;
                break;
            case 3: checklayer = ((source-16)==neighbor||(source-32)==neighbor) ? true : false;
                break;
            default: checklayer = false;
                break;
        }

        // Checks to see if the cells are neighbors through the rows.
        switch( row ) {
            case 0: checkrow = ((source+8)==neighbor||(source+4)==neighbor) ? true : false;
                break;
            case 1: checkrow = ((source+8)==neighbor||(source-4)==neighbor) ? true : false;
                break;
            case 2: checkrow = ((source-8)==neighbor||(source+4)==neighbor) ? true : false;
                break;
            case 3: checkrow = ((source-4)==neighbor||(source-8)==neighbor) ? true : false;
                break;
            default: checkrow = false;
                break;
        }

        // Checks to see if the cells are neighbors through the cols.
        switch( col ) {
            case 0: checkcol = ((source+2)==neighbor||(source+1)==neighbor) ? true : false;
                break;
            case 1: checkcol = ((source+2)==neighbor||(source-1)==neighbor) ? true : false;
                break;
            case 2: checkcol = ((source-2)==neighbor||(source+1)==neighbor) ? true : false;
                break;
            case 3: checkcol = ((source-2)==neighbor||(source-1)==neighbor) ? true : false;
                break;
            default:
                break;
        }

        return (checklayer||checkrow||checkcol);
    }
    
    /** 
     * Checks to see if the KGroup is minimized
     * returns 0 if current group is minimized
     * returns size of largest KGroup if the 
     * current KGroup is not minimized.
     */
    public int isMinimizedGroup(){
	int error=0;
	int counter = selectedIndices.length-1;
	while(counter >= 0){
	    int newerror = checkNeighbors(selectedIndices[counter]);
	    if (newerror > error) error = newerror;
			counter--;
	}

	if( error > 0 )
	    logic.utils.StatusFlags.NOT_MINIMIZED = true;

	return error;
    }

    public int size( ) {
	return selectedIndices.length;
    }
    
    /**
     * Finds the neighboring cells of testcell, and tests
     * to see if they are part of a larger valid KGroup
     * returns and int representing the largest Group it
     * can make around testcell
     */
    private int checkNeighbors(int testcell){
	int error =0;
	switch(dimension){
	case 6:
	    if(checkCell(testcell^32)){
		int[] extendedSelection = isMinGroup(testcell, testcell^32);
		if(extendedSelection[0]!=-1){
		    if (error < extendedSelection.length) error = extendedSelection.length;
		    KSelectionGroup newGroup = new KSelectionGroup(extendedSelection,kdata);
		    int newerror=newGroup.isMinimizedGroup();
		    if (newerror > error) error = newerror;
		}
	    }
	case 5:
	    if(checkCell(testcell^16)){
		int[] extendedSelection = isMinGroup(testcell, testcell^16);
		if(extendedSelection[0]!=-1){
		    if (error < extendedSelection.length) error = extendedSelection.length;
		    KSelectionGroup newGroup = new KSelectionGroup(extendedSelection,kdata);
		    int newerror=newGroup.isMinimizedGroup();
		    if (newerror > error) error = newerror;
		}
	    }
	case 4:
	    if(checkCell(testcell^8)){
		int[] extendedSelection = isMinGroup(testcell, testcell^8);
		if(extendedSelection[0]!=-1){
		    if (error < extendedSelection.length) error = extendedSelection.length;
		    KSelectionGroup newGroup = new KSelectionGroup(extendedSelection,kdata);
		    int newerror=newGroup.isMinimizedGroup();
		    if (newerror > error) error = newerror;
		}
	    }
	case 3:
	    if(checkCell(testcell^4)){
		int[] extendedSelection = isMinGroup(testcell, testcell^4);
		if(extendedSelection[0]!=-1){
		    if (error < extendedSelection.length) error = extendedSelection.length;
		    KSelectionGroup newGroup = new KSelectionGroup(extendedSelection,kdata);
		    int newerror=newGroup.isMinimizedGroup();
		    if (newerror > error) error = newerror;
		}
	    }	
	case 2:
	    if(checkCell(testcell^2)){
		int[] extendedSelection = isMinGroup(testcell, testcell^2);
		if(extendedSelection[0]!=-1){
		    if (error < extendedSelection.length) error = extendedSelection.length;
		    KSelectionGroup newGroup = new KSelectionGroup(extendedSelection,kdata);
		    int newerror=newGroup.isMinimizedGroup();
		    if (newerror > error) error = newerror;
		}
	    }
	case 1:
	    if(checkCell(testcell^1)){
		int[] extendedSelection = isMinGroup(testcell, testcell^1);
		if(extendedSelection[0] != -1){
		    if (error < extendedSelection.length) error = extendedSelection.length;
		    KSelectionGroup newGroup = new KSelectionGroup(extendedSelection,kdata);
		    int newerror=newGroup.isMinimizedGroup();
		    if (newerror > error) error = newerror;
		}
		
	    }
	default:
	    return error;	
	}
    }
    
    /**
     * Checks a neighboring cell to see if it contains
     * the correct value (1, 0, X) to be a part of a 
     * larger KGroup. Returns true if cell is a possibility 
     * for a larger Group.
     */
    private boolean checkCell(int cell){
	KState comp = ( logic.utils.StatusFlags.complexity.SOP == true ) ? KState.FALSE : KState.TRUE;
	String undesiredstate = comp.toString();
	String state = kdata.getFunction(cell).toString();
	if( state.compareTo(undesiredstate) != 0){
	    for(int i=0; i<selectedIndices.length; i++){
		if(selectedIndices[i]==cell){	
		    return false;
		}
	    }
	    return true;
	}
	return false;
    }
    
    /**
     * Takes a possible expansion cell and generates the other cells needed
     * to make the next larger valid KGroup. 
     * it checks each other cell, and returns the array of the larger group
     * if it exists.  Returns an array with -1 at [0] if there is
     * no larger group.
     */
    private int[] isMinGroup(int cell, int testcell){
	int length = selectedIndices.length;
	int newlength = length * 2;
	int[] extendedGroup = new int[newlength];
	if(((double)newlength > Math.pow(2.0, (double)dimension)) || ((double)testcell >= Math.pow(2.0, (double)dimension))){
	    extendedGroup[0]=-1;
	    return extendedGroup;
	}
	int testval=cell^testcell;
	int count = length;
	for(int i=0; i<count; i++){
	    if (selectedIndices[i]!= cell){
		int testval2 = testval^selectedIndices[i];
		if(!checkCell(testval2)){
		    extendedGroup[0] = -1;
		    return extendedGroup;
		}	
		extendedGroup[i]=testval2;
	    }
	    else{ 	
		extendedGroup[i]=testcell;
	    }
	    
	}
	for(int i = count; i<newlength; i++){
	    extendedGroup[i]= selectedIndices[i-count];
	}
	return extendedGroup;
    }
}

