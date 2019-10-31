/**
 * @author David Tucker (version 1.0)
 * @author Billy Olsen and Erica Liszewski
 * @version 1.1
 */

package logic.tables;

import java.awt.*;
import java.awt.event.*;
import javax.swing.*;
/**
 * This is a class for a Truth Table.  The truth table is a table that only has
 * binary values or don't cares in it.  It is a graphical representation of a
 * truth table that allows user interaction with it.
 *
 * ToDo: Support a keyboard interface.
 */

public class TTable extends JPanel {
    /**
     * Creates a truth table based on the current KData set.  It will fill in
     * the appropriate values according to the KData data set.
     * @param kd the data set for the truth table.
     */
    public TTable(KData kd) {
	super();
	tableData = kd;
	tableBody = new TTableBody(this, tableData);
	tableHeader = new TTableHeader(this, tableData);
	dimension = tableData.getDimension();
	if( dimension < 5 )
	    bodyPanel = new ScrollPane(ScrollPane.SCROLLBARS_NEVER);
	else {
	    bodyPanel = new ScrollPane(ScrollPane.SCROLLBARS_AS_NEEDED);
	    bodyPanel.setWheelScrollingEnabled( true );
	}

	bodyPanel.setBackground( Color.WHITE);
	setBackground(Color.WHITE);

	int x_size = dimension*( cell_width + padding ) + cell_width;
	int y_size = tableBody.getHeight();
	this.setLayout( new BorderLayout() );

	bodyPanel.setSize(500,500);
	tableBody.setSize( tableBody.getWidth(), tableBody.getHeight() );
	bodyPanel.add( tableBody );
	this.add( BorderLayout.NORTH, tableHeader );
	this.add( BorderLayout.CENTER, bodyPanel );

	addMouseListener(new MouseAdapter() {
		public void mouseClicked(MouseEvent evt) {
		    tableBody.mouseClicked(evt);
		}
	    });
    }

    private TTableBody tableBody;
    private TTableHeader tableHeader;
    private ScrollPane bodyPanel;

    public int getCellWidth() { return cell_width; }
    public int getCellHeight() { return cell_height; }
    public int getCellPadding() { return padding; }
    public int getDimension() { return dimension; }
    public boolean getEditable() { return editable; }
    public Color getBackgroundColor() { return bg; }

    public void setCellWidth( int _new_width ) {
	cell_width = _new_width;
	tableHeader.updateCellWidth( );
	tableBody.updateCellWidth( );
    }

    public void setCellHeight( int _new_height ) {
	cell_height = _new_height;
	tableHeader.updateCellHeight( );
	tableBody.updateCellHeight( );
    }

    public void setEditable( boolean _can_edit ) {
	editable = _can_edit;
	tableBody.setEditable( _can_edit );
    }

    /**
     * Returns the width of the TTable in pixels.
     * @return int how wide this TTable is (in pixels).
     */
    public int getWidth() {
	return (dimension+1)*(cell_width+padding)+padding*3+ bodyPanel.getVScrollbarWidth();
    }

    /**
     * Returns the height of the TTable in pixels.
     * @return int how high this TTable is (in pixels).
     */
    public int getHeight() {
	if( dimension < 5 )
	    // We have a 4 var TTable, so let's set the size.
	    return ((1<<dimension)+1)*(cell_height+padding)+cell_height;
	else
	    // We will only have the height of a 4 var TTable,
	    // else it will be scrollable.
	    return ((1<<4)+1)*(cell_height+padding)+cell_height;
    }

    /**
     * Returns the preferred size of this TTable.
     * NOTE: Currently just returns the minimum size.
     * @return Dimension the preferred size of this TTable.
     */
    public Dimension getPreferredSize() {
	return getMinimumSize();
    }

    /**
     * Returns the minimum size of this TTable.
     * @return Dimension the minimum suze of this TTable.
     */ 
    public Dimension getMinimumSize() {
	return new Dimension(getWidth(), getHeight());
    }

    public void paint(Graphics g) {
	super.paint(g);
    }

    private int cell_width = 10;
    private int cell_height = 12;
    private int padding = 3;
    private int dimension = 0;

    private Color bg = new Color(255,255,255);
    private Color dark = new Color(0,0,0);
    private Color light = new Color(35,35,35);
    private Color fill = new Color(200,200,200);
    private KData tableData;

    private boolean editable = true;
}

class TTableHeader extends JComponent {
    public TTableHeader( TTable _master, KData kd ) {
	variable_mapping = kd.getVariableMapping();
	dimension = kd.getDimension();
	buffer_invalid = true;
	master = _master;
	table_data = kd;
	width = master.getCellWidth();
	height = master.getCellHeight();
	padding = master.getCellPadding();

	int x_size = dimension * (padding + width) + width;
	int y_size = height + padding;
	this.setSize( new Dimension( x_size,y_size ) );
	repaint();
    }

    public void updateCellWidth() { width = master.getCellWidth(); }
    public void updateCellHeight() { height = master.getCellHeight(); }

    /**
     * Returns the width of the TTable in pixels.
     * @return int how wide this TTable is (in pixels).
     */
    public int getWidth() {
	if( dimension < 5 )
	    return (dimension+1) * (width+padding) + (padding*3);
	return (dimension+1) * (width+padding) + (padding*3) + width;
    }

    /**
     * Returns the height of the TTable in pixels.
     * @return int how high this TTable is (in pixels).
     */
    public int getHeight() {
	return (height+padding)+padding;
    }

    /**
     * Returns the preferred size of this TTableHeader.
     * NOTE: Currently just returns the minimum size.
     * @return Dimension the preferred size of this TTableHeader.
     */
    public Dimension getPreferredSize() {
	return getMinimumSize();
    }

    /**
     * Returns the minimum size of this TTableHeader.
     * @return Dimension the minimum suze of this TTableHeader.
     */ 
    public Dimension getMinimumSize() {
	return new Dimension(getWidth(), getHeight());
    }

    private void drawImage(Graphics g) {
	int i = 0;
	int y_off = 0, x_off = master.getCellWidth();
	FontMetrics fm = g.getFontMetrics(g.getFont());
	String st = "";

	for( x_off = 0;
	     x_off<dimension*(width+padding); x_off+=(width+padding)) {
	    st = ""+variable_mapping.charAt(i++);
	    g.drawString(st, x_off+(fm.stringWidth(st)/2),
			 y_off+fm.getAscent());
	}
	st = "f";
	x_off = dimension*(width+padding)+(padding*2)+(fm.stringWidth(st)/2);
	g.drawString(st,x_off, y_off+fm.getAscent());

	x_off = dimension*(width+padding)+padding;
	y_off = height+padding;
	g.drawLine(x_off,0,x_off,y_off);
	x_off = getWidth();
	g.drawLine(0,y_off,x_off,y_off);
    }

    public void paint(Graphics g) {
	super.paint(g);
	if(buffer_invalid) {
	    bufferedImage = createImage( getWidth(), getHeight());
	    Graphics bg = bufferedImage.getGraphics();
	    drawImage(bg);
	    bg.dispose();
	    buffer_invalid = false;
	}
	g.drawImage(bufferedImage,0,0,null);
    }

    private int width;
    private int height;
    private int padding;
    private String variable_mapping;
    private int dimension;
    private boolean buffer_invalid;
    private Image bufferedImage;
    private TTable master;
    private KData table_data;
}

class TTableBody extends JComponent implements KDataListener {
    /**
     * Creates a truth table based on the current KData set.  It will fill in
     * the appropriate values according to the KData data set.
     * @param kd the data set for the truth table.
     */
    public TTableBody(TTable _master, KData kd) {
	kd.addEventListener(this);
	kdata = kd;
	master = _master;
	dimension = kd.getDimension();
	width = master.getCellWidth();
	height = master.getCellHeight();
	padding = master.getCellPadding();
	
	//add the mouse listener
	addMouseListener(new MouseAdapter() {
		public void mouseClicked(MouseEvent evt) {
		    TTableBody.this.mouseClicked(evt);
		}
	    });
	
	buffer_invalid = true;
	repaint();
    }

    public void updateCellWidth() { width = master.getCellWidth(); }
    public void updateCellHeight() { height = master.getCellHeight(); }

    /**
     * Makes the component editable or un-editable.
     * @param editable true to make this component editable; false otherwise.
     */
    public void setEditable(boolean editable) {
	this.editable = editable;
    }
    
    /**
     * Called by Java when the data in the KData set has changed.   Repaints the object.
     * @param event the data event fired from Java.
     */
    public void dataChanged(KDataEvent event) {
	buffer_invalid = true;
	repaint();
    }
    
    //----set the dimension of the controll----
    /**
     * Returns the width of the TTable in pixels.
     * @return int how wide this TTable is (in pixels).
     */
    public int getWidth() {
	return (dimension+1)*(width+padding)+padding;
    }

    /**
     * Returns the height of the TTable in pixels.
     * @return int how high this TTable is (in pixels).
     */
    public int getHeight() {
	return ((1<<dimension)+1)*(height+padding)+padding;
    }

    /**
     * Returns the preferred size of this TTable.
     * NOTE: Currently just returns the minimum size.
     * @return Dimension the preferred size of this TTable.
     */
    public Dimension getPreferredSize() {
	return getMinimumSize();
    }

    /**
     * Returns the minimum size of this TTable.
     * @return Dimension the minimum suze of this TTable.
     */ 
    public Dimension getMinimumSize() {
	return new Dimension(getWidth(), getHeight());
    }

	//---- Paint the control on the screen 
    private void drawImage(Graphics g) {
	int i, x_off, y_off, tmp;
	String st, s;
	int mask;
	int shadecounter = 1;

	g.setColor(dark);
	FontMetrics fm = g.getFontMetrics(g.getFont());

	//draw lines
	x_off = (width+padding) * dimension + padding;
	if( dimension < 5 )
	    y_off = master.getHeight() - height - padding;
	else
	    y_off = ((1<<dimension)+1)*(height+padding)+padding-height;

	switch(dimension){
		case 6: shadecounter+=8;
		case 5: shadecounter+=4;
		case 4: shadecounter+=2;
		case 3: shadecounter+=1;
		} 
	int rectWidth = (width+padding) * (dimension+1) + padding;
	int rectHeight;
	if(dimension < 5)
		rectHeight = ((y_off-padding)/shadecounter)-(padding/2);
	else
		rectHeight = ((y_off-padding)/shadecounter);
	g.setColor(fill);
	while(shadecounter > 0){
		if((shadecounter%2) == 1){
			g.fillRect(0, rectHeight*shadecounter, rectWidth, rectHeight);
			shadecounter--;
			}
		else
			shadecounter --;
		}

	g.setColor(dark);
		
	g.drawLine(x_off,0,x_off,y_off);
	
	//draw table
	y_off = 0;
	for(i=0;i<(1<<dimension);i++) {
	    mask = 1<<(dimension-1);
	    for(x_off = 0;x_off<dimension*(width+padding);x_off+=(width+padding)) {
		st = "0";
		if((i&mask) !=0) st = "1";
				//write string...
		g.drawString(st,x_off+(fm.stringWidth(st)/2),
			     y_off+fm.getAscent());
		mask = mask>>1;
	    }
	    
	    s = kdata.getFunctionAsString(i);
	    tmp = dimension*(width+padding)+(padding)+(fm.stringWidth(s)/2);
	    g.drawString(s,tmp,y_off+fm.getAscent());
	    
	    y_off += height+padding;
	}

    }

    /**
     * Invoked to draw graphics.
     * @param g the graphics context in which to paint.
     */
    public void paint(Graphics g) {
	super.paint(g);
	if(buffer_invalid) {
	    bufferedImage = createImage( getWidth(),getHeight());
	    Graphics bg = bufferedImage.getGraphics();
	    drawImage(bg);
	    bg.dispose();
	    
	    buffer_invalid = false;
	}
	g.drawImage(bufferedImage,0,0,null);
    }
    
    //---- Handle the mouse events ----
    
    private int getFuncIndex(int x, int y) {
	int x_min = dimension*(width+padding)+1;
	
	if(x<x_min) return -1;
	if(y<0) return -1;
	
	int index = y/(height+padding);
	return index;
    }

    /**
     * Called whenever the mouse button is clicked while the mouse is hovering
     * over the TTable.
     * @param evt the MouseEvent of the clicked action.
     */
    public void mouseClicked(MouseEvent evt) {
	if(!editable) return;
	
	int index = getFuncIndex(evt.getX(),evt.getY());
	if(index == -1)
	    return;
	kdata.cycleFunction(index);
    }

   /**
    * called to check the KData of a KMap
    * @param kd the KData to compare
   */
   public boolean checkResults(KData kd){
	for(int i=0; i<kdata.getDimension();i++){
		if(kd.getFunction(i)!=kdata.getFunction(i))
			return false;
		}
	return true;
	}
    
    //---- private variables ----
    
    //***FixMe, replace cell_width/cell_height with:
    private int width;
    private int height;
    private int padding;
    private int dimension = 0;
    
    private Color bg = new Color(255,255,255);
    private Color dark = new Color(0,0,0);
    private Color light = new Color(35,35,35);
    private Color fill = new Color(204,153,255);
    
    private KData kdata;
    private Image bufferedImage;
    private boolean buffer_invalid;
    private boolean editable = true;
    private TTable master;
}
