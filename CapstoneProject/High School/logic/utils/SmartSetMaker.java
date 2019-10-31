/*
 * @author Billy Olsen
 * @file SmartSetMaker.java
 * @version 0.2
 */

package logic.utils;

import logic.tables.*;
import tracker.KarnaughRecord;
import logic.equation.*;
import java.util.Vector;
import java.util.Arrays;


/**
 * SmartSetMaker is the class that takes the information from the database, builds
 * a set based upon the information contained in the database, and then returns this
 * set.
 */

public class SmartSetMaker {
    /* Used to mark the layout as abnormal.  i.e. vertical instead of horizontal. */
    private boolean ABNORMAL=false;

    private boolean USE_DC;
    private boolean problemActive = false;
    private boolean translationMistake; // Or grouping mistake
    private boolean eqmistake = false;
	private boolean groupmistake = false;
	private KarnaughRecord record;
    private KData seedSet = null;
    private KApplet kapplet = null;
    private int currentAttempts = 0;

    public SmartSetMaker(KarnaughRecord record, KApplet kapplet) {
		this.record = record;
		this.kapplet = kapplet;
    }

    /**
     * Deduces points from the current level if the current problem is ended
     * before it is correctly answered
     */
    public void problemEnded(){
		if (problemActive){
			int points = record.getPoints(StatusFlags.complexity.level);
			if ((points+Constants.FAILURE_PENALTY) < Constants.POINT_FLOOR)
				record.incrementPoints(StatusFlags.complexity.level,Constants.POINT_FLOOR - points,StatusFlags.complexity.pointMultiplier);
			else
				record.incrementPoints(StatusFlags.complexity.level,Constants.FAILURE_PENALTY,StatusFlags.complexity.pointMultiplier);
			record.incrementFailures(StatusFlags.complexity.level,currentAttempts);
		}
    }

    /**
     * Determines the values of the next set based onthe information supplied by the database.
     */
    public KData getNextSet( ) {
		problemEnded();
    	problemActive = true;
    	currentAttempts = 0;
    	record.incrementProblems(StatusFlags.complexity.level);
		logic.tables.KData temp = new logic.tables.KData( getNextDimension(), false);
		seedSet = seedDataSet( temp );
		setInstructions();
		return seedSet;
    }

    /**
     * Sets the instructions on the applet.  Don't ask me why this is
     * done here, I didn't write this part.
     *
     */
    private void setInstructions() {
	    kapplet.setInstructions( StatusFlags.complexity.instructions );
    }

	/**
	 * I think this sets up the KData.  Basically generates a bunch of
	 * random 0's, 1's and X's.
	 * @param set
	 * @return
	 */
    private KData seedDataSet( KData set ) {
		if( Constants.DEBUG ) {
		    printStatus();
		}

		int numStates;
		if (StatusFlags.complexity.DC)
			numStates = 3;
		else
			numStates = 2;

		int size = (int)(Math.pow(2.0,(double)set.getDimension()));
		StatusFlags.CURRENT_SELECTED = new boolean[size];
        for( int i = 0; i < size; i++ ) {
	  		int t = ((int)(Math.random()*numStates)+1);
	    	if( t == 1 ) {
	    		if (StatusFlags.complexity.SOP)
					StatusFlags.CURRENT_SELECTED[i] = false;
				else
					StatusFlags.CURRENT_SELECTED[i] = true;
				set.setFunction(i,KState.TRUE);
	    	}
	    	else if( t == 2 ) {
				if (StatusFlags.complexity.SOP)
					StatusFlags.CURRENT_SELECTED[i] = true;
				else
					StatusFlags.CURRENT_SELECTED[i] = false;
				set.setFunction(i,KState.FALSE);
	    	}
	    	else {
				StatusFlags.CURRENT_SELECTED[i] = true;
			set.setFunction(i,KState.DONT_CARE);
	    	}

		}
		StatusFlags.SELECTED = new boolean[StatusFlags.CURRENT_SELECTED.length];
		System.arraycopy(StatusFlags.CURRENT_SELECTED, 0, StatusFlags.SELECTED, 0, StatusFlags.CURRENT_SELECTED.length);
		return set;
    }

	/**
	 * For clearing groupings.  I think.
	 *
	 */
	public void resetSelected(){
		System.arraycopy(StatusFlags.CURRENT_SELECTED, 0, StatusFlags.SELECTED, 0, StatusFlags.CURRENT_SELECTED.length);
		clearStatusFlags();
	}

    /**
     * Determines the dimension of the next table based on the information supplied by the database.
     * If the connection is invalid, the skills are invalid, or if the remainder is less than 2 just
     * returns 4.
     */
    public int getNextDimension( ) {
		return StatusFlags.complexity.numOfVariables;
    }

    /**
     * @param compareMe the KData set that is compared to the seed set.
     */
    public boolean logAttempt( KData compareMe ) {
	//if( connection == null ) return false;;

	/*
	 * Fill in information regarding the kinds of errors that you can have at each different stage.
	 */
		if( Constants.DEBUG ) System.out.println("Now logging Attempt for level " + StatusFlags.complexity.level );
		checkTTableToKMap( compareMe );
		if (StatusFlags.complexity.grouping == 0){
			checkAllSelected( );
		}
		else if(StatusFlags.complexity.grouping != -1)
			checkSelectedAllGroupings( StatusFlags.complexity.grouping );

		if(StatusFlags.complexity.EQ)
			checkEquation();

		if( Constants.DEBUG ) {
	    	printStatus();
		}

		//update();
		boolean correct = allFlagsCleared();

		if (StatusFlags.TYPO_ERROR)
			translationMistake = true;
		else
			translationMistake = false;

		if(StatusFlags.EQ_ERROR) eqmistake = true;
			else eqmistake = false;

		if(StatusFlags.DC_OVERFLOW ||
					StatusFlags.DC_UNDERFLOW ||
					StatusFlags.GREY_CODE_ERROR ||
					StatusFlags.INVALID_SELECTION ||
					StatusFlags.INVALID_SIZE ||
					StatusFlags.NOT_MINIMIZED ||
					StatusFlags.NOT_SELECTED ||
					StatusFlags.ORIENTATION_ERROR ||
					StatusFlags.SPANS_CORNER_ERROR ||
					StatusFlags.SPANS_EDGE_ERROR ||
					StatusFlags.SPANS_LAYER_ERROR ||
					StatusFlags.REDUNDANT_GROUP) groupmistake = true;
		else groupmistake = false;

		clearStatusFlags();
		currentAttempts++;
		if(correct && problemActive){
			int points = Constants.MAX_POINTS + Constants.ATTEMPT_DEDUCTION * (currentAttempts-1);
			if (points < Constants.MIN_POINTS)
				points = Constants.MIN_POINTS;
			record.incrementPoints(StatusFlags.complexity.level,points,StatusFlags.complexity.pointMultiplier);
			record.incrementSuccesses(StatusFlags.complexity.level,currentAttempts);
			problemActive = false;
		}


		return correct;
    }

	/**
	 * Checks to see if any flag is set, or is true.  If a flag is
	 * true, there was an error in the problem
	 * @return
	 */
    private boolean allFlagsCleared() {
		boolean cleared = false;
		cleared = StatusFlags.DC_OVERFLOW ||
	    	StatusFlags.DC_UNDERFLOW ||
	    	StatusFlags.GREY_CODE_ERROR ||
	    	StatusFlags.INVALID_SELECTION ||
	    	StatusFlags.INVALID_SIZE ||
	    	StatusFlags.NOT_MINIMIZED ||
	    	StatusFlags.NOT_SELECTED ||
	    	StatusFlags.ORIENTATION_ERROR ||
	    	StatusFlags.SPANS_CORNER_ERROR ||
	    	StatusFlags.SPANS_EDGE_ERROR ||
	    	StatusFlags.SPANS_LAYER_ERROR ||
	    	StatusFlags.TYPO_ERROR ||
	    	StatusFlags.EQ_ERROR ||
			StatusFlags.REDUNDANT_GROUP;
		if( Constants.DEBUG ) {
			if(logic.utils.Constants.DEBUG) System.out.println( "allFlagsCleared ?= " + !cleared );
		}
		return !cleared;
    }

	/**
	 * Checks to see that all cells that need to be selected are
	 * included in a selection somewhere.
	 *
	 */
    private void checkAllSelected( ) {
	for( int i = 0; i < StatusFlags.SELECTED.length; i++ )
	    if( !StatusFlags.SELECTED[i] ) {
		StatusFlags.NOT_SELECTED = true;
		return;
	    }
		StatusFlags.NOT_SELECTED = false;
		checkMinGroupsSelected();
    }

    /*
     * Valid flags are :
     *   DC_UNDERFLOW
     *   DC_OVERFLOW
     *   GREY_CODE_ERROR
     *   ORIENTATION_ERROR
     *   TYPO_ERROR
     *
     * TODO: Add Grey code error handling.
     */
     /**
      * Checks to see that the KMap was translated properly.
      */
    private void checkTTableToKMap( KData compareMe ) {
	int results = seedSet.equals(compareMe);
	if( results != 0 ) {
	    StatusFlags.TYPO_ERROR = true;

	    KMap[] kmaps = kapplet.getKMapArray();
	    if( kmaps[0].getVert() ) {
		StatusFlags.ORIENTATION_ERROR = true;
	    }

	    int cmdc = compareMe.getNumDontCares();
	    int ssdc = seedSet.getNumDontCares();
	    if( cmdc < ssdc ) StatusFlags.DC_UNDERFLOW = true;
	    if( cmdc > ssdc ) StatusFlags.DC_OVERFLOW = true;
	}
	return;
    }

    /*
     * Valid flags are :
     *   DC_OVERFLOW
     *   DC_UNDERFLOW
     *   NOT_SELECTED
     *   INVALID_SELECTION
     *   INVALID_SIZE
     *   SPANS_CORNER_ERROR
     *   SPANS_EDGE_ERROR
     *   SPANS_LAYER_ERROR
     */
    private void checkSelectedAllGroupings( int size ) {
	KMap[] kmaps = kapplet.getKMapArray();
	for( int i = 0; i < kmaps.length; i++ ) {
	    if( !kmaps[i].getKSelection().correctSizes(size) ) {
		StatusFlags.INVALID_SIZE = true;
		return;
	    }
	}

	return;
    }

    /**
     * This class checks to make sure that there are no
     * redundant groupings.  These are groupings that
     * are minimized by themselves, but all values are
     * covered by other grouping, and so the group is
     * redundant.
     *
     */
    private void checkMinGroupsSelected(){
		KMap[] kmaps = kapplet.getKMapArray();
		KSelectionGroup [] ksgs = new KSelectionGroup[64];
		int count = 0;
		for( int i = 0; i < kmaps.length; i++ ) {
				Vector thesegroups = kmaps[i].getKSelection().getGroupings();
				thesegroups.trimToSize();
				for(int j=0; j<thesegroups.size(); j++){
					try{
					ksgs[count] = (KSelectionGroup)thesegroups.elementAt(j);
					count++;
					}
					catch(Exception e){
						StatusFlags.REDUNDANT_GROUP = true;
						return;
					}
				}
			}
		KSelectionGroup [] theseksgs = new KSelectionGroup[count];
		for(int i=0; i<count; i++){
			theseksgs[i] = ksgs[i];
		}

		for(int i=0; i<theseksgs.length; i++){
				if(redundantGroup(theseksgs, i)) {
					StatusFlags.REDUNDANT_GROUP = true;
					return;
				}
		}

    }

    /**
     * helper function for checkMinGroupsSelected()
     * Compares a single KSelectionGroup to the othere
     * checking for redundancy.
     * @param ksgs
     * @param index
     * @return
     */
    private boolean redundantGroup(KSelectionGroup[] ksgs, int index){
    	int[] current = ksgs[index].getGroupAsIntArray();
    	Arrays.sort(current);
    	boolean[] duplicated = new boolean[current.length];


    	for(int i=0; i<ksgs.length; i++){
    		if(i==index) continue;
    		//else
    			int[] comp = ksgs[i].getGroupAsIntArray();
    			Arrays.sort(comp);
    		for(int j=0; j<current.length; j++){
    			if(Arrays.equals(comp, current)) break;
    			if(Arrays.binarySearch(comp, current[j])>=0){
    				if(Constants.DEBUG)System.out.println("Duplicated "+current[j]);
    				duplicated[j] = true;
    			}
    		}
    	}

    	for(int i=0; i<duplicated.length; i++){
    		if(duplicated[i] == false) return false;
			if(Constants.DEBUG)System.out.println("NO DUPLICATES");
    	}
		if(Constants.DEBUG)System.out.println("DUplicates");
    	return true;

    }


    /*
     * Valid flags are :
     *   DC_OVERFLOW
     *   DC_UNDERFLOW
     *   INVALID_SELECTION
     *   INVALID_SIZE
     *   NOT_MINIMIZED
     *   NOT_SELECTED
     *   SPANS_CORNER_ERROR
     *   SPANS_EDGE_ERROR
     *   SPANS_LAYER_ERROR
     */
    private void checkMinimizedGroupings() {
	/* The Minimized Groupings are checked during the user's selection
	   and thus this is not necessary, but the function is included so
	   that it can be seen that it is one of the checks performed. */
	return;
    }


/**
 * Checks the entered equation for proper syntax, creates two
 * BooleanEquations.  One based off the generated equation, and one off the
 * entered equation.  Then compares the two BooleanEquations.
 *
 */
	private void checkEquation(){

		String testcaps = StatusFlags.TEST_EQ.toUpperCase();
		testcaps = testcaps.replaceAll("\\s", "");

		if(Constants.DEBUG)System.out.println("Test EQ: "+testcaps);
		if(Constants.DEBUG)System.out.println("Control EQ: "+StatusFlags.BOOL_EQ);

		if(testcaps.equals("0") ){
			if(StatusFlags.BOOL_EQ.equals("(0)") || StatusFlags.BOOL_EQ.equals("0"))
				return;
		}
		if(testcaps.equals("1") ){
			if(StatusFlags.BOOL_EQ.equals("(1)") || StatusFlags.BOOL_EQ.equals("1"))
				return;
				}


		if(StatusFlags.complexity.SOP){

			String SOPsyntax = "(\\'?[A-Z])+(\\+(\\'?[A-Z])+)*";
			if(!testcaps.matches(SOPsyntax)){
				StatusFlags.EQ_ERROR=true;
				if(logic.utils.Constants.DEBUG) System.out.println("Equation not proper SOP syntax");
				return;
			}
		//System.out.println("'A'B+B'C+DE+FGRD+A".matches(SOP));
		}
		else {
			//String POSsyntax = "((\\'?[A-Z]\\+)*\\'?[A-Z])|((\\'?[A-Z])(1,6)(\\(((\\'?[A-Z]\\+)*\\'?[A-Z])\\))*)|(\\(((\\'?[A-Z]\\+)*\\'?[A-Z])\\))+";
			//String POSsyntax = "((\\'?[A-Z]\\+)*\\'?[A-Z])|(\\'?[A-Z](\\(((\\'?[A-Z]\\+)*\\'?[A-Z])\\))+)|(\\(((\\'?[A-Z]\\+)*\\'?[A-Z])\\))+";
			//String POSsyntax = "((\\'?[A-Z]\\+)*\\'?[A-Z])|(\\(((\\'?[A-Z]\\+)*\\'?[A-Z])\\))+";
			String POSsyntax = "((\\'?[A-Z]\\+)*\\'?[A-Z])|(\\(((\\'?[A-Z]\\+)*\\'?[A-Z])\\)|\\'?[A-Z])+";
			if(!testcaps.matches(POSsyntax)){
						StatusFlags.EQ_ERROR=true;
						if(logic.utils.Constants.DEBUG) System.out.println("Equation not proper POS syntax");
						return;
					}
			}


			/*if(StatusFlags.BOOL_EQ == "1" || StatusFlags.BOOL_EQ =="0" ||StatusFlags.BOOL_EQ =="") {
				StatusFlags.EQ_ERROR=true;
				if(Constants.DEBUG)System.out.println("Current Stored EQ: "+StatusFlags.BOOL_EQ);
				return;
			}*/

			BooleanEquation test = new BooleanEquation(testcaps, StatusFlags.complexity.numOfVariables, StatusFlags.complexity.SOP);
			BooleanEquation control = new BooleanEquation(StatusFlags.BOOL_EQ, StatusFlags.complexity.numOfVariables, StatusFlags.complexity.SOP);

		if(logic.utils.Constants.DEBUG) System.out.println("Getting ready to check eq");
			boolean correct = control.equals(test);
			if(!correct) StatusFlags.EQ_ERROR=true;
		//System.out.println("(A+'B+C)('A+K+P)".matches(POS));

	}



    /*
     * Prints out the status of the current flags.
     */

    private void printStatus() {
		if(logic.utils.Constants.DEBUG){
	System.out.println( "Printing status..." );
	System.out.println( "CURRENT_LEVEL = " + StatusFlags.complexity.level );
	System.out.println( "GROUPING_SIZE = " +StatusFlags.complexity.grouping );
	System.out.println( "USE_DC = " + StatusFlags.complexity.DC);
	System.out.println( "DC_UNDERFLOW = " + StatusFlags.DC_UNDERFLOW );
	System.out.println( "DC_OVERFLOW  = " + StatusFlags.DC_OVERFLOW );
	System.out.println( "GREY_CODE_ERROR = " + StatusFlags.GREY_CODE_ERROR );
	System.out.println( "INVALID_SELECTION = " + StatusFlags.INVALID_SELECTION );
	System.out.println( "INVALID_SIZE = " + StatusFlags.INVALID_SIZE );
	System.out.println( "NOT_MINIMIZED = " + StatusFlags.NOT_MINIMIZED );
	System.out.println( "NOT_SELECTED = " + StatusFlags.NOT_SELECTED );
	System.out.println( "ORIENTATION_ERROR = " + StatusFlags.ORIENTATION_ERROR );
	System.out.println( "SPANS_CORNER_ERROR = " + StatusFlags.SPANS_CORNER_ERROR );
	System.out.println( "SPANS_EDGE_ERROR = " + StatusFlags.SPANS_EDGE_ERROR );
	System.out.println( "SPANS_LAYER_ERROR = " + StatusFlags.SPANS_LAYER_ERROR );
	System.out.println( "TYPO_ERROR = " + StatusFlags.TYPO_ERROR );
	System.out.println( "EQ_ERROR = " + StatusFlags.EQ_ERROR );
	System.out.println( "REDUNDANT_GROUP = " + StatusFlags.REDUNDANT_GROUP );
	System.out.println( "Done Printing status.");
		}
    }

    /*
     * Resets all of the status flags to false;
     */
    private void clearStatusFlags() {
		StatusFlags.DC_UNDERFLOW = false;
		StatusFlags.DC_OVERFLOW = false;
		StatusFlags.GREY_CODE_ERROR = false;
		StatusFlags.INVALID_SELECTION = false;
		StatusFlags.INVALID_SIZE = false;
		StatusFlags.NOT_MINIMIZED = false;
		StatusFlags.NOT_SELECTED = false;
		StatusFlags.ORIENTATION_ERROR = false;
		StatusFlags.SPANS_CORNER_ERROR = false;
		StatusFlags.SPANS_EDGE_ERROR = false;
		StatusFlags.SPANS_LAYER_ERROR = false;
		StatusFlags.TYPO_ERROR = false;
		StatusFlags.EQ_ERROR = false;
		StatusFlags.REDUNDANT_GROUP = false;
    }

    /**
     * returns true if there was a translation mistake.
     * @return
     */
    public boolean wasTranslationMistake(){
    	return translationMistake;
    }

    /**
     * returns true if there was a mistake in the entered equation
     * @return
     */
    public boolean wasEqMistake(){
    	return eqmistake;
    }

	public boolean wasGroupMistake(){
		return groupmistake;
	}
    public boolean isProblemActive(){
    	return problemActive;
    }
}
