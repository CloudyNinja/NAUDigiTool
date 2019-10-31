/*
 * Created on Sep 3, 2003
 *
 */
package logic.tables;
import java.util.Vector;
/**
 * @author Sean Collins
 *
 * To change the template for this generated type comment go to
 * Window&gt;Preferences&gt;Java&gt;Code Generation&gt;Code and Comments
 */
public class KComplexity {
	
	public int level;
	public String name;
	
	public int numOfVariables =3;
	public int grouping = -1; // -1 = no grouping, 0 = minimized, exponent of 2 = find all grouping of that size
	public boolean SOP = false;
	public boolean DC = false;
	public boolean EQ = false; //if boolean equation...defaults to true for testing
	public String instructions = "Instructions";
	
	public int pointMultiplier = 1;
	public Vector prereqLevel = new Vector();
	public Vector prereqPoints = new Vector();	

	
	public KComplexity(int level){
		this.level = level;
	}
	
	public String toString(){
		return name;
	}
	
}
