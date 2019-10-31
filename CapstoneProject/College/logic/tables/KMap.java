/**
 * @author David Tucker (initial)
 * @author Erica Liszewski and Billy Olsen
 * @version 1.2
 */
  
package logic.tables;
  
import java.awt.*;
import java.awt.event.*;
import java.util.*;
import java.lang.String;
  
/*  
//***ToDo:
// support a keyboard interface
// support groupings (finish renderer)
// support chaining fo multiple KMaps for groupings
  
* A graphical interface of a Karnaugh Map.  These maps are
* often found in Computer Engineering for minimizing a boolean algebra
* equation.  These powerful maps allow up to 6 variable equations to be
* minimized.  The values from a truth table are placed in these maps and 
* then selected to acheive minimal groupings.
*
* ToDo: Support a keyboard interface.
* ToDo: Support groupings (finish renderer).
* ToDo: Support chainging of multiple KMaps for groupings.
*/
  
//public class KMap extends Component implements KDataListener {
/**
 * Creates a KMap with the data set kd and arranged in the vertically if
 * vert if true.
 * @param kd a KData data set.
 * @param vert a boolean value determining the direction of the KMap.
 */
public class KMap extends Component implements MouseListener, MouseMotionListener, KDataListener {
    public KMap(KData kd, boolean vert, KApplet app) {
	kd.addEventListener(this);
	addMouseListener(this);
	addMouseMotionListener(this);
	kdata = kd;
	this.app=app; //we need the applet instance here just to display the results..
	//it shall go once we have a better way of displaying the results
	subGroup = kdata.getSubGroup();
	this.vert = vert;

        ks = new KSelection( this, kd, app );
        
        switch(kd.getDimension())
	    {
	    case 2: 
		binary=binary2var;
		arraylength=4;
		break;
	    case 3: 
		binary=binary3var;
		arraylength=8;
		break;
	    case 4: 
		binary=binary4var;
		arraylength=16;
		break;
	    case 5: 
		binary=binary5var;
		arraylength=32;
		break;
	    case 6: 
		binary=binary6var;
		arraylength=64;
		break;
	    }
	//add the mouse listener

	buffer_invalid = true;
    }


    /**
     * Creates a KMap with the data set kd and arranged in the vertically if
     * vert if true.
     * @param kd a KData data set.
     * @param vert a boolean value determining the direction of the KMap.
     */
   /* public KMap(KData kd, boolean vert) {
	kd.addEventListener(this);
	kdata = kd;

	subGroup = kdata.getSubGroup();
	this.vert = vert;
        
        //ks = new KSelection( this, kd, false );

	//add the mouse listener
	addMouseListener(new MouseAdapter() {
		public void mouseClicked(MouseEvent evt) {
		    KMap.this.mouseClicked(evt);
		}
	    });

	buffer_invalid = true;
	//repaint();
    }
    */
    /**
     * Makes the component editable or un-editable.
     * @param editable true to make the component editable; false otherwise.
     */
    public void setEditable(boolean editable) {
	this.editable = editable;
    }
    
    /**
     * Makes the current group an input group.
     * @param isGroup true to make the group an input group; false otherwise. 
     */
    public void setInputModeGroup(boolean isGroup) {
	this.isGroup = isGroup;
    }
    
    /**
     * Called when the KData set has changed.  Overrides dataChanged in
     * KDataListener.  *Required for KDataListener interface.
     * @see KDataEvent KDataEvent.
     */
    public void dataChanged(KDataEvent event) {
	buffer_invalid = true;
    }
    

    //----set the dimension of the controll----
    /**
     * Returns the number of rows.
     * @return int the number of rows in the KMap.
     */
    public int getXCellCount() {
	int dim = kdata.getDimension();
	int ret;
	switch(dim) {
	case 1:
	    ret = (vert)?1:2;
	    break;
	case 2:
	    ret = 2;
	    break;
	case 3:
	    ret = (vert)?2:4;
	    break;
	case 4:
	default:
	    ret = 4;
	    break;
	}
	return ret;
    }
    

    /**
     * Returns the number of columns.
     * @return int the number of columns in the KMap.
     */
    public int getYCellCount() {
	int dim = kdata.getDimension();
	int ret;
	switch(dim) {
	case 1:
	    ret = (!vert)?1:2;
	    break;
	case 2:
	    ret = 2;
	    break;
	case 3:
	    ret = (!vert)?2:4;
	    break;
	case 4:
	default:
	    ret = 4;
	    break;
	}
	return ret;
    }
    
    /**
     * Returns the width of the KMap (measured in pixels).
     * @return int the number of pixels in the KMap's width.
     */
    public int getWidth() {
	return (getXCellCount()+1)*(cell_width+padding)+cell_width+1;
    }
    
    /**
     * Returns the height of the KMap( measured in pixels).
     * @return int the number of pixels in the KMap's height.
     */
    public int getHeight() {
	return (getYCellCount()+1)*(cell_width+padding)+cell_width+1;
    }
    
    /** 
     * Returns the preferred size of the KMap.
     * NOTE: Currently returns the minimum size.
     * @return Dimension the preferred size of the KMap.
     */
    public Dimension getPreferredSize() {
	return getMinimumSize();
    }
    
    /**
     * Returns the minimum size of the KMap.
     * @return Dimension the minimum size of the KMap.
     */
    public Dimension getMinimumSize() {
	return new Dimension(getWidth(), getHeight());
    }
    		
    //---- Paint the controll on the screen 
    
    /**
     * Draws the "tic-tac-toe" board of the KMAp
     */
    private void drawGrid(Graphics g) {
	FontMetrics fm = g.getFontMetrics(g.getFont());
	int i, tmp;
	int offset = cell_width+padding;
	int inset = cell_width;
	String s, t;
    
	g.setColor(dark);
    
	g.drawLine(inset+offset/2,inset+offset/2,inset+offset,inset+offset);
    
	//draw horizontal lines
	tmp = offset + getXCellCount()*offset;
	for(i=0;i<getYCellCount()+1;i++)
	    g.drawLine(inset+offset,inset+i*offset+offset,inset+tmp,inset+i*offset+offset);
    
	//draw vertical lines
	tmp = offset + getYCellCount()*offset;
	for(i=0;i<getXCellCount()+1;i++)
	    g.drawLine(inset+i*offset+offset,inset+offset,inset+i*offset+offset,inset+tmp);
    
	//draw labels
        String [] shortlabels = {"0","1"};
        String [] longlabels = {"00","01","11","10"};
	String [] st = ((vert==true)&&getXCellCount()==2)?shortlabels:longlabels;
    
	//x values
	for(i=0;i<getXCellCount();i++)
	    g.drawString(st[i],inset+offset+i*offset+((offset/2)-(fm.stringWidth(st[i])/2)),
			 inset+(offset/4)+fm.getAscent());

        st = ((vert==false)&&getYCellCount()==2)?shortlabels:longlabels;
        
	//y values
	for(i=0;i<getYCellCount();i++)
	    g.drawString(st[i],inset+((offset/2)-(fm.stringWidth(st[i])/2)),
			 inset+offset+i*offset+(offset/4)+fm.getAscent());
    
	//draw function mapings
    
	s = kdata.getVariableMapping();
	i = s.length() - (getXCellCount()/2);
    
	t = s.substring(i);
	g.drawString(t,inset+offset/2,
		     7+fm.getAscent());
    
	t = s.substring(i-(getYCellCount()/2),i);
	g.drawString(t,inset+offset/2-fm.stringWidth(t)-5,
		     inset+offset/2+fm.getAscent());
    
	//This could be made a lot tighter
	i -=(getYCellCount()/2);
	if(i>1) {
	    t = s.substring(0,1);
	    tmp = inset+(offset*3)-fm.stringWidth(t);
	    g.drawString(t,tmp,fm.getAscent()-1);
	    if((subGroup&0x02)==0) 
		g.drawLine(tmp,0,tmp+fm.stringWidth(t)-1,0);
    
	    t = s.substring(1,2);
	    tmp = inset+(offset*3)+2;
	    g.drawString(t,tmp,fm.getAscent()-1);
	    if((subGroup&0x01)==0) 
		g.drawLine(tmp,0,tmp+fm.stringWidth(t)-1,0);
	} else if(i>0) {
	    t = s.substring(0,1);
	    tmp = inset+(offset*3);
	    g.drawString(t,tmp,fm.getAscent()-1);
	    if(subGroup==0) 
		g.drawLine(tmp,0,tmp+fm.stringWidth(t)-1,0);
	}
    }
    
    /**
     * Figure out what the actual index is based on a pixel location.
     * @param x
     * @param y
     * @return
     */
	int getIndexFromCell(int x, int y) {
		int index = 0;
		int xcell = getXCellCount();

		if (x == 2)
			x = 3;
		else if (x == 3)
			x = 2;

		if (y == 2)
			y = 3;
		else if (y == 3)
			y = 2;

		if (xcell == 2)
			index = (x & 1) | ((y & 3) << 1);
		else
			index = (x & 3) | ((y & 3) << 2);

		return index;
	}
	
    /**
     * Draw actual values, 0,1,X
     * @param g
     */
    private void drawValues(Graphics g) {
	FontMetrics fm = g.getFontMetrics(g.getFont());
	String s;
	int x,y, tmp;
	int offset = cell_width+padding;
	int inset = cell_width;
    
	g.setColor(dark);
    		
	for(x = 0;x<getXCellCount();x++) {
	    for(y=0;y<getYCellCount();y++) {
		s = kdata.getFunctionAsString(subGroup,getIndexFromCell(x,y));
		g.drawString(s,inset+offset+x*offset+((offset/2)-(fm.stringWidth(s)/2)),
			     inset+offset+y*offset+(offset/4)+fm.getAscent());
	    }
	}
    }
    
    /**
     * Draws the rubberband as it's being dragged.
     * @param g
     */
    private void drawSelection(Graphics g)
    {
	//this method draws the rubberband thats being currently drawn
	if(topleft!=null&&bottomright!=null)
	    {
 
		g.setColor(Color.red);
		g.drawRoundRect(topleft.x+2,topleft.y+2, bottomright.x-topleft.x-4,bottomright.y-topleft.y-4,5,5);
  
	    }		
    }


	/**
	 * Override the paint method with our own
	 */
    public void paint(Graphics g) {
	super.paint(g);
	this.grap=g;
  
	if(buffer_invalid) {
	    bufferedImage = createImage(getWidth(),getHeight());
	    Graphics bg = bufferedImage.getGraphics();
	    drawGrid(bg);
	    drawValues(bg);
	    bg.dispose();
    
	    buffer_invalid = false;
	}

	g.drawImage(bufferedImage,0,0,null);
	
    ks.paint(g);
	highlightCell(g);
	drawSelection(g);
    }
    
    /**
     * For highlighting cells when you control-click groupings.
     * @param g
     */
    private void highlightCell(Graphics g){
		Point cellpoint;
		g.setColor(new Color(204,153,255, 50));
    	int count = selectedcells.size();
    	for(int i = 0; i<count; i++){
    		cellpoint=(Point)selectedcells.get(i);
    		g.fillRoundRect(cellpoint.x+5, cellpoint.y+5, cell_width+padding-10, cell_width+padding-10, 5, 5);
    	}
    }
    //---- Handle the mouse events ----
    
    private int getFuncIndex(int x, int y) {
	int offset = cell_width+padding;
	int inset = cell_width;
 		
	if((x - (offset+inset)) < 0) return -1;
	if((y - (offset+inset)) < 0) return -1;
    
	x = (x - (offset+inset))/offset;
	y = (y - (offset+inset))/offset;

	int index = getIndexFromCell(x,y);
	
	if(index>=arraylength)
		index = -1;
		
	return index;

    }

    private int getActualIndex(int x, int y){
	int index = getFuncIndex(x, y);
	if (index == -1)
		return index;
		
	switch(subGroup){
	case 3: index+=48;
	    break;
	case 2: index+=32;
	    break;
	case 1: index+=16;
	    break;
	default:  break;
	}
	return index;
    }
    
    /**
     * Called whenver the mouse button is clicked while the mouse is hovering
     * over the KMap.
     * @param evt the MouseEvent of the clicked action.
     */
    public void mouseClicked(MouseEvent evt) {

    	
	KGroup kg;

	if(evt.getModifiers() == 18 ){//ActionEvent.CTRL_MASK
		if(!cangroup) return;
	    selecting = true;
	    int index=getActualIndex(evt.getX(),evt.getY());
	    if(index!=-1){
		//System.out.println(Integer.toString(index));
			kdata.addIndex(index, false);
			Point cellpoint = new Point(getSelRectPoint(evt));
			selectedcells.add(cellpoint);	
			this.repaint(evt.getX()-40, evt.getY()-40, 80, 80);
	  	  }
	}
	  
	if(!editable) return;
  
	int index = getFuncIndex(evt.getX(),evt.getY());
	if(index == -1)
	    return;

	//if in funtion input mode
	if((!isGroup) && (!evt.isControlDown())) {
	    kdata.cycleFunction(subGroup,index);
	} else { //group input mode
	    //if not shift or ctrl, cycle to the next active group
	    if(!evt.isShiftDown() && !evt.isControlDown()) {
		kdata.cycleActiveGroup(subGroup, index);
    				
		//else add/remove the element to the group
	    } 
	}
	repaint(evt.getX()-30, evt.getY()-30, 60, 60);
    }
    
    /**
     * Called whenver the mouse button is pressed while the mouse is hovering
     * over the KMap.
     * @param evt the MouseEvent of the pressed action.
     */
    public void mousePressed(MouseEvent evt) {
    	if(!cangroup) return;
    	
	if(evt.isControlDown() ){	
	    selecting = true;
	
	
	topleft=new Point();
	bottomright=new Point();
  	
	topleft.x = evt.getX();
	topleft.y = evt.getY();
	bottomright.x = evt.getX();
	bottomright.y = evt.getY();
	}
    }
    
    /**
     * Called whenver the mouse button is pressed and dragged while the mouse is
     * hovering over the KMap.
     * @param evt the MouseEvent of the dragged action.
     */
	public void mouseDragged(MouseEvent evt) {
		if(!cangroup) return;

		if (!evt.isControlDown())
			selecting = false;
		else {
			//draw the rubberband thats being curently drawn
			if (topleft != null && bottomright != null) {

				int x1 = topleft.x;
				int y1 = topleft.y;
				int x2 = evt.getX();
				int y2 = evt.getY();

				//System.out.println("In MouseDragged()");
				
				if (x1 > x2) {
					//System.out.println("Case x1>x2");
					topleft.x = x2;
					if (y1 > y2) {
						topleft.y = y2;
					} else if (y1 < y2) {
						bottomright.y = y2;
					}
				} else if (x1 < x2) {
					//System.out.println("Case x1<x2");
					bottomright.x = x2;
					if (y1 > y2) {
						topleft.y = y2;
					} else if (y1 < y2) {
						bottomright.y = y2;
					}
				}									

			}
			repaint();
		}
	}
  
	public Point getSelRectPoint(MouseEvent evt) {

		int offset = cell_width + padding;
		int sumOffSetX = cell_width;
		int sumOffSetY = cell_width;
		Point retPoint = null;
		if ((evt.getX() > offset + cell_width)
			&& (evt.getX() < (offset + cell_width + getXCellCount() * offset))) {
			if ((evt.getY() > offset + cell_width)
				&& (evt.getY()
					< (offset + cell_width + getYCellCount() * offset))) {
				while (sumOffSetX < evt.getX()) {
					sumOffSetX = sumOffSetX + offset;
				}
				sumOffSetX = sumOffSetX - offset;
				while (sumOffSetY < evt.getY()) {
					sumOffSetY = sumOffSetY + offset;
				}
				sumOffSetY = sumOffSetY - offset;
				retPoint = new Point(sumOffSetX, sumOffSetY);
			}
		}
		return retPoint;
	}
  
 
  	/**
  	 * Required for implementing MouseMotionListener, not used.
  	 */
    public void mouseMoved(MouseEvent evt) {
    }

	/**
	 * Handles mouse released..this is important for selection.
	 * If control is still down, then this is not the end of the
	 * selection.  The release of control is handled by the applet.
	 */
	public void mouseReleased(MouseEvent evt) {
		
		if(!cangroup) return;
		
		int index = getFuncIndex(evt.getX(), evt.getY());
		if (index == -1)
			return;
		if (evt.isControlDown()){
		if (topleft != null && bottomright != null
				&& topleft != bottomright) {
			if (selecting) {
				int x1 = topleft.x;
				int y1 = topleft.y;
				int cell1 = getActualIndex(x1, y1);
				if (cell1 != getActualIndex(x1 + 10, y1 + 10)) {
					x1 += 10;
					y1 += 10;
					cell1 = getActualIndex(x1, y1);
				}
				int x2 = bottomright.x;
				int y2 = bottomright.y;
				int cell2 = getActualIndex(x2, y2);
				if (cell2 != getActualIndex(x2 - 10, y2 - 10)) {
					x2 -= 10;
					y2 -= 10;
					cell2 = getActualIndex(x2, y2);
				}
				int jump = cell_width + padding;
				int current = -1;
				for (int i = x1; i <= x2; i += jump) {
					for (int j = y1; j <= y2; j += jump) {
						if ((current == getActualIndex(i, j))||(getActualIndex(i,j) ==-1))
							continue;
						else {
							current = getActualIndex(i, j);
							kdata.addIndex(current, false);
						}
					}
				}
			}
		
			}
		}
	}
				
	public void mouseEntered(MouseEvent evt) {
	}
    
    public void mouseExited(MouseEvent evt) {
    }
    
    /**
     * Handles the end of a selection.  Effectivly gets all the currently
     * selected cells and created a new KSelectionGroup
     * @param used
     * @return
     */
	public boolean endSelection(boolean used) {
		if(used){
			selectedcells.clear();
			selecting = false;
			topleft = bottomright = null;
			repaint();
			return true;
			}
		KGroup kg;
		if (selecting) {
			if (topleft != null && bottomright != null && topleft != bottomright) {
				int x1 = topleft.x;
				int y1 = topleft.y;
				int cell1 = getActualIndex(x1, y1);
				if (cell1 != getActualIndex(x1 + 10, y1 + 10)) {
					x1 += 10;
					y1 += 10;
					cell1 = getActualIndex(x1, y1);
					}
				int x2 = bottomright.x;
				int y2 = bottomright.y;
				int cell2 = getActualIndex(x2, y2);
				if (cell2 != getActualIndex(x2 - 10, y2 - 10)) {
					x2 -= 10;
					y2 -= 10;
					cell2 = getActualIndex(x2, y2);
					}
				int jump = cell_width + padding;
				int current = -2;
				for (int i = x1; i <= x2; i += jump) {
					for (int j = y1; j <= y2; j += jump) {
						if ((current == getActualIndex(i, j))
							|| (getActualIndex(i, j) == -1))
							continue;
						else {
							current = getActualIndex(i, j);
							kdata.addIndex(current, false);
							}
						}
					topleft = bottomright = null;
					}
				}
			kdata.addIndex(-1, true);
			if(! kdata.groupingUsed()){
				ks.addSelection(kdata.getSelectedIndices());
				//System.out.println("bound selection added");
				kg = kdata.getActiveGroup();
				if (kg == null) {
					kg = new KGroup();
					kdata.setGroup(-1, kg);
					}
				}
			selectedcells.clear();
			selecting = false;
			topleft = bottomright = null;
			
			 repaint();
			return true;
			}
		repaint();
		return false;
		}

    /**
     * Sets whether groupings are allowed.
     * @param set
     */
    public void setGroupingEnabled(boolean set){
    	cangroup = set;
    }
    
    public boolean checkResults(KData kd){
	for(int i=0; i<kdata.getDimension();i++){
	    if(kd.getFunction(i)!=kdata.getFunction(i))
		return false;
	}
	return true;
    }
    
    public boolean getVert( ) {
	return vert;
    }

    public KSelection getKSelection( ) {
	return ks;
    }

    public void clearGroupings() {
	ks.clearGroupings();
    }
    
    public String getEquation(){
    	return ks.getEquation();
    }

    //---- private variables ----
    
    //***FixMe, replace cell_width/cell_height with:
    public int cell_width = 25;
    
    //adjust this to make the table larger/smaller
    // 	private int padding = 10;
    public int padding = 20;
    
    private boolean vert;
    
    public Color dark = Color.black;
    
    private KData kdata;
    private Image bufferedImage;
    private boolean buffer_invalid;
    public int subGroup = 0;
    
    private String binary[];  
  
    private String binary2var[]={
	"00","01","10","11"
    };
  
    private String binary3var[]={
	"000","001","010","011","100","101","110","111"
    };
  
    private String binary4var[]={
	"0000","0001","0010","0011","0100","0101","0110","0111",
	"1000","1001","1010","1011","1100","1101","1110","1111"
    };
  
    private String binary5var[]={
	"00000","00001","00010","00011","00100","00101","00110","00111",
	"01000","01001","01010","01011","01100","01101","01110","01111",
	"10000","10001","10010","10011","10100","10101","10110","10111",
	"11000","11001","11010","11011","11100","11101","11110","11111"
    };
  
    private String binary6var[]={
	"000000","000001","000010","000011","000100","000101","000110","000111",
	"001000","001001","001010","001011","001100","001101","001110","001111",
	"010000","010001","010010","010011","010100","010101","010110","010111",
	"011000","011001","011010","011011","011100","011101","011110","011111",
	"100000","100001","100010","100011","100100","100101","100110","100111",
	"101000","101001","101010","101011","101100","101101","101110","101111",
	"110000","110001","110010","110011","110100","110101","110110","110111",
	"111000","111001","111010","111011","111100","111101","111110","111111"
    };
  
    private int arraylength=0;
    private Point topleft=null;
    private Point bottomright=null;
    private Vector selectedcells = new Vector();
    private String finalfunc=null;
    private Graphics grap;
    public KApplet app;
	       
    private boolean editable = true;
    private boolean isGroup = false;
    
    private boolean select = false;
    private int curSel = -1;
    private int lastX = 50;
    private int lastY = 50;

    private boolean selecting = false;
    private KSelection ks;
    private boolean cangroup = false;
}