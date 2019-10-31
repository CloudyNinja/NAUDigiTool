/**
 * @author Billy Olsen (initial)
 * @author Erica Liszewski
 * @file KSelection.java
 * @version 0.1
 */
package logic.tables;

/**
 * The KSelection class represents the selection of KMap cells.
 */

import java.util.*;
import java.awt.*;

//import logic.utils.Constants;
import logic.utils.StatusFlags;

public class KSelection {
    public KSelection( KMap correspondingKMap, KData correspondingData, KApplet app ) {
        this.kdata = correspondingData;
        int capacity = (int)(Math.pow(2,correspondingData.getDimension()));
        this.groupings = new Vector(capacity);
        this.kmap = correspondingKMap;
        this.app = app;
        if(logic.utils.StatusFlags.complexity.SOP == false) this.equation = "1";
        else this.equation = "0";
		StatusFlags.BOOL_EQ = equation;
    }
    
    /**
     * This method is for adding a grouping that spans multiple maps
     * We need to specify the color so that the color is consistant 
     * accross all maps
     * @param selectedIndices indices to add
     * @param color 
     */
    public void addSelection(int[] selectedIndices, Color color){
		//System.out.println("Adding drawing Selection");
		Arrays.sort( selectedIndices );
		if( alreadySelected( selectedIndices ) || selectedIndices.length ==0 )
			return;

		KSelectionGroup ksg = new KSelectionGroup(selectedIndices,kdata,color);
		groupings.add( ksg );
	//System.out.println("KSelection has been added");   		
    }
	
	/**
	 * This is the method called by KMap to add selection to the Vector
	 * of current groupings.
	 * @param selectedIndices
	 */
	public void addSelection(int[] selectedIndices) {
		//System.out.println("Adding Selection");
		Arrays.sort(selectedIndices);
		if (alreadySelected(selectedIndices) || selectedIndices.length == 0){
			//it's been selected 2x, so remove this group
			removeSelection(selectedIndices);
			
			return;
		}
			
		if (redundantGrouping(selectedIndices)) {
			StatusFlags.REDUNDANT_GROUP = true;
		}

		KSelectionGroup ksg = new KSelectionGroup(selectedIndices, kdata);
		


		if (ksg.isValidGroup()) {
			for (int i = 0; i < selectedIndices.length; i++)
				logic.utils.StatusFlags.SELECTED[selectedIndices[i]] = true;
		}

		if (ksg.isMinimizedGroup() != 0)
			logic.utils.StatusFlags.NOT_MINIMIZED = true;
			
			
		
		//put together the equation for currently selected groupings
		
		//special case if we've selected the whole Kmap
		if(ksg.size() == Math.pow(2, kdata.getDimension())){
			if(logic.utils.StatusFlags.complexity.SOP == false) this.equation = "0";
					else this.equation = "1";
			}
		else {
			equation = StatusFlags.BOOL_EQ;
			if (equation == "1" || equation == "0")
				equation = "";
			if (equation.length() == 0) {
				if (logic.utils.StatusFlags.complexity.SOP == false) {
					equation = "(" + ksg.createEquation() + ")";
				} else
					equation = ksg.createEquation();
			} else if (logic.utils.StatusFlags.complexity.SOP == true) {
				equation = equation + "+" + ksg.createEquation();
			} else {
				equation = equation + "(" + ksg.createEquation() + ")";
			}
		}
		StatusFlags.BOOL_EQ = equation;
		if (logic.utils.Constants.DEBUG)
			System.out.println("Equation is: " + equation);
		groupings.add(ksg);
		//System.out.println("KSelection has been added");
	}
    
    
    /**
     * Checks to see if a group of indices has already been selected.
     * Duplicate groupings are not allowed.
     * @param selectedIndices
     * @return
     */
    public boolean alreadySelected( int[] selectedIndices ) {
        boolean equal = false;
        for( Enumeration e = groupings.elements(); e.hasMoreElements(); ) {
            int[] compare_to_me = ((KSelectionGroup)(e.nextElement())).getGroupAsIntArray();
            if( compare_to_me.length == selectedIndices.length ) {
                for( int i = 0; i < selectedIndices.length; i++ ) {
                    if( compare_to_me[i] != selectedIndices[i] )
                        i = selectedIndices.length;
                    else if( i == selectedIndices.length - 1 )
                        return true;
                }
            }
        }
        return false;
    }

	/**
	 * returns Vector of current groupings
	 * @return
	 */
    public Vector getGroupings( ) {
	return groupings;
    }

	/**
	 * Clears current groupings.
	 *
	 */
    public void clearGroupings( ) {
	groupings.clear();
	logic.utils.StatusFlags.NOT_MINIMIZED = false;
	if(logic.utils.StatusFlags.complexity.SOP == false) equation = "1";
	else equation = "0";
	StatusFlags.BOOL_EQ = equation;
    }
    
    /**
     * removes a specific group - still need to "undraw" this group and remove
     * it from the boolean equation that is being created
     * @return
     */
    public void removeSelection(int[] selectedIndices)
    {
      Arrays.sort(selectedIndices);	
      
      KSelectionGroup ksg = new KSelectionGroup(selectedIndices,kdata);
      
      if (ksg.isValidGroup()) {
		for (int i = 0; i < selectedIndices.length; i++)
			logic.utils.StatusFlags.SELECTED[selectedIndices[i]] = false;
	  }
      
      groupings.remove( ksg );
      System.out.println("removed group...maybe?");
    }

	/**
	 * returns current equation.
	 * @return
	 */
	public String getEquation(){
			return equation;
	}

	/**
	 * This would be used for a size restraint.  i.e. if you wanted to select
	 * only groupings of size 2.  Checks to see if a grouping is of the 
	 * required size.
	 * @param size
	 * @return
	 */
    public boolean correctSizes( int size ) {
	for( Enumeration e = groupings.elements(); e.hasMoreElements(); ) {
	    if( ((KSelectionGroup)e.nextElement()).size() != size ) {
		return false;
	    }
	}
	return true;
    }
    
    /**
     * Checks to see if a grouping is redundant.  This will also be checked
     * later, but we can check here as well.
     * @param indices
     * @return
     */
    private boolean redundantGrouping(int [] indices){
    	boolean flag = true;
		for( int i = 0; i < indices.length; i++ ){
				if(StatusFlags.SELECTED[indices[i]] == false)
				flag = false;
			}
		return flag;
    }

	/**
	 * Draws the grouping on the KMap
	 * @param g
	 */
    private void drawGroupings(Graphics g) {
	int x,y,i,tmp;
	int offset = kmap.cell_width+kmap.padding;
	int inset = kmap.cell_width;

	KGroup[] kg = kdata.getAllGroups();
	if(kg == null) return;

	KGroup ag = kdata.getActiveGroup();
	for(i=0;i<kg.length;i++) {
	    //highlight the active group

            for(Enumeration e = groupings.elements(); e.hasMoreElements(); ) { 
                KSelectionGroup ksg = (KSelectionGroup)(e.nextElement());
                int[] indices = ksg.getGroupAsIntArray();
                for( int b = 0; b<indices.length; b++ ) {
                    if( ksg.getLayer( indices[b] ) == kmap.subGroup ) {
                        Point p = getCellPoint( ksg.getRow( indices[b] ),ksg.getCol(indices[b]) );
                            int pieceType = ksg.getPieceType( indices[b] );
				   			 Color linecolor = ksg.getColor();
                            drawPiece( g, pieceType, p, linecolor);
                    } else {
                        KMap[] km = app.getKMapArray();
                        for( int counti = 0; counti < km.length; counti++ ) {
                            km[counti].getKSelection().addSelection(indices, ksg.getColor());
                            if( ksg.getLayer( indices[b] ) == km[counti].subGroup ) {
                                Point p = getCellPoint( ksg.getRow( indices[b] ),ksg.getCol(indices[b]) );
                                    int pieceType = ksg.getPieceType( indices[b] );
									Color linecolor = ksg.getColor();
                                    drawPiece( km[counti].getGraphics(), pieceType, p, linecolor );
                            }
                        }
                    }
                }
            }
	}
    }

	/**
	 * Override paint method to our own.
	 * @param g
	 */
    public void paint(Graphics g) {
        drawGroupings(g);
    }
    
    public Point getCellPoint( int myrow, int mycol ) {
        int col = (mycol==2)?3:((mycol==3)?2:mycol);
        int row = (myrow==2)?3:((myrow==3)?2:myrow);
        int centerme = (kmap.cell_width/2)-(kmap.padding/4);
        //System.out.println("getCellPoint row = " + row + " col = " + col );
        int xpos = 25 + ((col+1) * (kmap.cell_width + kmap.padding)) + centerme;
        int ypos = 25 + ((row+1) * (kmap.cell_width + kmap.padding)) + centerme;
        return new Point(xpos,ypos);
    }
    
    public void drawPiece( Graphics g, int piecetype, Point p, Color color ) {
        int x = p.x;
        int y = p.y;
        int width = kmap.cell_width;
        int height = width;
        int padding = kmap.padding;
        int length = width/2 + padding + 5;
        
        if( g == null )
            return;
        g.setColor( color );
        switch( piecetype ) {
            case 0://KSelectionGroup.NORTH
                g.drawLine(x-(padding/3)-1,y,x+length+1,y);
                break;
            case 1://KSelectionGroup.EAST
                g.drawLine(x+width,y-(padding/3)-1,x+width,y+length);
                break;
            case 2://KSelectionGroup.SOUTH
                g.drawLine(x-(padding/3)-1,y+height,x+length+1,y+height);
                break;
            case 3://KSelectionGroup.WEST
                g.drawLine(x,y-(padding/3)-1,x,y+length);
                break;
            case 4://KSelectionGroup.NE:
                g.drawArc(x,y,width,height,0,90);
                g.drawLine(x+(width/2),y,x-(kmap.padding/3)-1,y);
                g.drawLine(x+width,y+(height/2),x+width,y+length);
                break;
            case 5://KSelectionGroup.NW:
                g.drawArc(x,y,width,height,180,-90);
                g.drawLine(x+(width/2),y,x+length+1,y);
                g.drawLine(x,y+(width/2),x,y+length+1);
                break;
            case 6://KSelectionGroup.SE:
                g.drawArc(x,y,width,height,0,-90);
                g.drawLine(x+width,y+(height/2),x+width,y-(kmap.padding/3)-1);
                g.drawLine(x+(width/2),y+height,x-(kmap.padding/3)-1,y+height);
                break;
            case 7://KSelectionGroup.SW:
                g.drawArc(x,y,width,height,180,90);
                g.drawLine(x+(width/2),y+height,x+length+1,y+height);
                g.drawLine(x,y+(width/2),x,y-(kmap.padding/3)-1);
                break;
            case 8://KSelectinGroup.CENTER
                break;
            case 9://KSelectionGroup.BOTTOM
                g.drawArc(x,y,width,height,0,-180);
                g.drawLine(x,y+(width/2),x,y-(kmap.padding/3)-1);
                g.drawLine(x+width,y+(height/2),x+width,y-(kmap.padding/3)-1);
                break;
            case 10://KSelectionGroup.TOP
                g.drawArc(x,y,width,height,0,180);
                g.drawLine(x,y+(width/2),x,y+length+1);
                g.drawLine(x+width,y+(height/2),x+width,y+length+1);
                break;
            case 11://KSelectionGroup.LEFT
                g.drawArc(x,y,width,height,90,180);
                g.drawLine(x+(width/2),y,x+length+1,y);
                g.drawLine(x+(width/2),y+height,x+length+1,y+height);
                break;
            case 12://KSelectionGroup.RIGHT
                g.drawArc(x,y,width,height,90,-180);
                g.drawLine(x+(width/2),y,x-(kmap.padding/3)-1,y);
                g.drawLine(x+(width/2),y+height,x-(kmap.padding/3)-1,y+height);
                break;
            case 13:
                g.drawLine(x,y-(kmap.padding/3)-1,x,y+length);
                g.drawLine(x+width,y-(kmap.padding/3)-1,x+width,y+length);
                break;
            case 14://KSelectionGroup.TNB
                g.drawLine(x-(kmap.padding/3)-1,y,x+length,y);
                g.drawLine(x-(kmap.padding/3)-1,y+height,x+length,y+height);
                break;
		case 15://KSelection.SINGLE
			g.drawOval(p.x,p.y,width,width);
			break;
            default:
                break;
        }
        //g.setColor( kmap.dark );
    }
        
    private KData kdata;
    private KMap kmap;
    private Vector groupings;
    private KApplet app;
    private String equation;
}
