/**
 * @author David Tucker (initial)
 * @author Billy Olsen and Erica Liszewski
 * @version 1.0
 */
package logic.tables;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Vector;

/**
 * KData contains the information required for the {@link KMap KMap} such  as
 * the dimension and the function output.  KData should be used to keep the
 * information about the data associated with the KMap.
 */

public class KData {
    /**
     * Defines a KData set using the dimension supplied with or without
     * DONT_CAREs (determined by useDC).
     * @param dimension is the dimension of the current KMap in the range >= 3
     * and <= 6.
     * @param useDC is a boolean variable that determines if DONT_CAREs are
     * allowed.
     */
    public KData(int dimension, boolean useDC) {
	int i;
	this.dimension = 0;
	if(dimension >0) this.dimension = dimension;
	this.useDC = useDC;

	//initialize the function array to empty
	functions = new KState[(1<<this.dimension)];
	resetAllFunctions(KState.NONE);

	submask = 0;

	//Setup the groups
	groups = new Vector();
	activeGroup = -1;

	selected = new Vector();	
    }

    /**
     * Compares the two KData sets in a deep compare.  Returns the number of
     * errors found or -1 if the dimensions are not the same.
     * @param _group is the other group that this KData set is compared to.
     */
    public int equals( KData _group ) {
	if( this.dimension != _group.dimension )
	    return -1;

	int total = (1<<dimension);
	int err = 0;
	for(int i=0;i<total;i++)
	    if( this.getFunction(i) != _group.getFunction(i) )
		err++;
	return err;
    }

    /**
     *
     */
    public int getNumDontCares( ) {
	int num_dc = 0;
	int total = (1<<dimension);
	for( int i=0; i < total; i++ )
	    if( this.getFunction(i) == KState.DONT_CARE )
		num_dc++;
	return num_dc;
    }

    //-------- The function mapping ----------
    /**
     * Returns the dimension of the KData object.
     */
    public int getDimension() {
	return dimension;
    }

    /**
     * Returns the current subGroup index.
     */
    public int getSubGroup() {
	return submask++;
    }

    /**
     * Returns the function output of the index into the given group.
     * @param group an integer representing the group.
     * @param index an integer representing the index into the given group. 
     * @return KState a reference to the KState object contained at the index in
     * the group.  If no function should exist, a KState.NONE shall be returned.
     */
    public KState getFunction(int group, int index) {
	return getFunction(((group&0x0F)<<4)|(index&0x0F));
    }
    /**
     * Returns the function output of the index into the current group.
     * @param index an integer representing the index into the current group
     * @return KState a reference to the KState object contained at the index.
     * If no function should exist, a KState.NONE shall be returned.
     */
    public KState getFunction(int index) {
	if(index >= (1<<dimension) || index<0) return KState.NONE;
	return functions[index];
    }
    /**
     * Returns the function output of the given group and index as a String.
     * @param group an integer representing the group.
     * @param index an integer representing the index into the given group.
     * @return String a String representation of the KState output at the given
     * index in the given group.
     */
    public String getFunctionAsString(int group, int index) {
	return getFunctionAsString(((group&0x0F)<<4)|(index&0x0F));
    }
    /**
     * Returns the function output of the given group and index as a String.
     * @param index an integer representing the index into the current group.
     * @return String a String representation of the KState output at the given
     * index in the current group.
     */
    public String getFunctionAsString(int index) {
	KState st = this.getFunction(index);
	return st.toString();
    }
    /**
     * Returns the Current KData set as a string
     * @return String is the string representation of the KData set
     */
    public String getDataAsString(){
			KState st = KState.NONE;
    		String set = "";
    		for(int i=0; i<functions.length; i++){
				st = this.getFunction(i);
				set.concat(st.toString());
    		}
    		return set;
    }
    /**
     * Sets the current output of a given index to the supplied KState.
     * @param index an integer representing the index into the group.
     * @param st a KState value representing the current function output.
     */
    public synchronized void setFunction(int index, KState st) {
	if(index >= (1<<dimension) || index<0) return;
	functions[index] = st;
	
	//fire an event
	fireDataChangedEvent();
    }

    /**
     * Sets all of the functions to the supplied string value.
     * @param st a String value that represents the value of the KState to set
     * all of the function outputs to.
     */
    public synchronized void setFunctions(String st) {
	int i;
	char c;
	KState s;
	
	for(i=0;i<st.length();i++) {
	    //no more than the max...
	    if(i>=(1<<dimension)) return;
	    
	    c = st.charAt(i);
	    switch(c) {
	    case '0':
		s = KState.FALSE;
		break;
	    case '1':
		s = KState.TRUE;
		break;
	    case 'x':
	    case 'X':
	    case 'd':
	    case 'D':
		s = KState.DONT_CARE;
		break;
	    default:
		s = KState.FALSE;
	    }
	    setFunction(i,s);
	}
    }

    /**
     * Changes to the next function based upon the supplied group and index.
     * @param group an integer that represents the group.
     * @param index an integer that represents the integer into the group.
     */
    public synchronized void cycleFunction(int group, int index) {
	cycleFunction(((group&0x0F)<<4)|(index&0x0F));
    }
    /**
     * Changes to the next function based upon the supplied index.
     * @param index an integer that represents the integer into the current
     * group.
     */
    public synchronized void cycleFunction(int index) {
	if(index >= (1<<dimension) || index<0) return;
	
	KState st = getFunction(index);
	if(st == KState.NONE) st = KState.FALSE;
	else if(st == KState.FALSE) st = KState.TRUE;
	else if(st == KState.TRUE) 
	    if(useDC) st = KState.DONT_CARE;
	    else st = KState.FALSE;
	else if(st == KState.DONT_CARE) st = KState.FALSE;
	setFunction(index,st);
    }
    
    /**
     * Resets all of the functions to the KState value st
     * @param st a KState value to initialize all function outputs to.
     */
    public synchronized void resetAllFunctions(KState st) {
	int i;
	for(i=0;i<(1<<this.dimension);i++)
	    functions[i] = st;
    }


    //------- The function to variable mapping --------
    /**
     * Returns a String list of all the variables in the KData set, starting
     * with 'A'.
     * @return String list of all the possible variables in the KData set,
     * starting with 'A'.  Example: "ABCD" for 4 dimensional KData object.
     */
    public String getVariableMapping() {
	int i;
	String s = "";
	char c = 'A';
	for(i=0;i<dimension;i++)
	    s+= c++;
	
	return s;
    }
    
    //------- The function groupings --------
    /**
     * Returns the KGroup at the given index.
     * @param index an int returning the current group.
     * @return KGroup that the element at the given index is in.
     */
    public KGroup getGroup(int index) {
	if(index<0) return null;//new KGroup();
	if(index>=groups.size()) return null;//new KGroup();
	return (KGroup)groups.elementAt(index);
    }
    /**
     * Sets the group of the function at the index supplied to the KGroup
     * supplied.
     * @param index an int representing the index into the function output.
     * @param kg a group to place the function output into.
     */
    public synchronized void setGroup(int index, KGroup kg) {
	if((index == -1) || (index>=groups.size())) {
	    groups.addElement(kg);
	    activeGroup = groups.size()-1;
	} else {
	    groups.setElementAt(kg,index);
	    activeGroup = index;
	}

	//fire an event
	fireDataChangedEvent();
    }
    /**
     * Returns an array of all KGroups for the KData set.
     * @return KGroup[] an array of all KGroups for the KData set.
     */
    public KGroup[] getAllGroups() {
	if(groups.size()<=0) return null;

	KGroup[] kg = new KGroup[groups.size()];
	groups.copyInto(kg);
	return kg;
    }

    /**
     * Returns the current KGroup.
     * @return KGroup the current KGroup.
     */
    public KGroup getActiveGroup() {
	return getGroup(activeGroup);
    }

    /**
     * Cycles to the next group covering the active cell.  If no group covers
     * the cell the active group is disabled.
     * @param subGroup an int of the subGroup to cycle.
     * @param index an index to the active cell.
     */
    public void cycleActiveGroup(int subGroup, int index) {
	int i,tmp;
	KGroup kg;
	if(groups.size() <1) return;

	activeGroup++;
	if(activeGroup>=groups.size()) activeGroup = 0;

	tmp = groups.size();
	while(0!=tmp--) {
	    kg = (KGroup)groups.elementAt(activeGroup);
	    if(kg.indexInGroup(subGroup,index)) {
		//fire an event
		fireDataChangedEvent();
		return;
	    }
	    activeGroup++;
	    if(activeGroup>=groups.size()) activeGroup = 0;
	}

	//no group on this square, 
	// so dont set an active group
	activeGroup = -1;
	//fire an event
	fireDataChangedEvent();
    }


    //------- Event Handling ------------
    /**
     * Registers a KDataListener with this object.
     * @param kl the KDataListener that listens to this object.
     */
    public synchronized void addEventListener(KDataListener kl) {
	listeners.add(kl);
    }
    /**
     * Removes the KDataListener from the list of listeners.
     * @param kl the KDataListener to be removed.
     */
    public synchronized void removeEventListener(KDataListener kl) {
	listeners.remove(kl);
    }

    private synchronized void fireDataChangedEvent() {
	KDataEvent evt = new KDataEvent(this);
	Iterator iterator = listeners.iterator();
	while(iterator.hasNext()) {
	    ((KDataListener)iterator.next()).dataChanged(evt);
	}
    }


   /**
    * called to check the KData
    * @param kd the KData to compare
   */
   public boolean checkResults(KData kd){
	for(int i=0; i<this.getDimension();i++){
		if(kd.getFunction(i)!=this.getFunction(i))
			return false;
		}
	return true;
	}


   public void addIndex(int newindex, boolean end){
	Integer index = new Integer(newindex);
	//System.out.println(index.toString());
	if(!selected.contains(index)&&index.intValue()!=-1)
		selected.add(index);
	if(end||index.intValue()==-1){	
		int[] valarray = new int[selected.size()];
		used = false;
		//System.out.println("Group: ");
		for(int i=0; i<selected.size(); i++){
			Integer temp = (Integer)selected.get(i);
			valarray[i]=temp.intValue();
			//System.out.println(valarray[i]);
			}
                intarray = valarray;
		  //  System.out.println(" group added");
                //function call to create group
		selected.clear();
		}
	}

   public int[] getSelectedIndices( ) {
	  used = true;
        return intarray;
   }

  public boolean groupingUsed(){
	return used;
	}

    //----- Private variables ----------
    private KState[] functions;
    private int dimension;

    private List listeners = new ArrayList();

    private boolean useDC;

    private int submask = 0;

    private Vector groups;
    private int activeGroup;

    private Vector selected;
    private int[] intarray;
    private boolean used = true;
}
