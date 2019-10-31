/**
 * @author Billy Olsen
 * @version 0.1
 * @file StatusFlags.java
 */

package logic.utils;

import logic.tables.KComplexity;
/**
 * This class hosts global constants for the server package.
 *
 *     DC_UNDERFLOW      
 *     DC_OVERFLOW       
 *     GREY_CODE_ERROR   
 *     INVALID_SELECTION 
 *     INVALID_SIZE      
 *     NOT_MINIMIZED     
 *     NOT_SELECTED      
 *     ORIENTATION_ERROR 
 *     SPANS_CORNER_ERROR
 *     SPANS_EDGE_ERROR 
 *     SPANS_LAYER_ERROR 
 *     TYPO_ERROR        
 */

public class StatusFlags {
    /** Current complexity */
    static public KComplexity complexity;
    
    /** Used for checking all selected */
    static public boolean[] SELECTED; // = new boolean[2];
    static public boolean[] CURRENT_SELECTED = new boolean[2];
    /** Used for checking groupings of size 2^x */
    static public int[][] GROUPINGS = new int[1][1];
    /** Gerated Correct Boolean equation */
    static public String BOOL_EQ = "";
    /** Entered Boolean equation for testing */
    static public String TEST_EQ = "";

    /** Flag for Don't Care Underflow */
    static public boolean    DC_UNDERFLOW       = false;
    /** Flag for Don't Care Overflow */
    static public boolean    DC_OVERFLOW        = false;
    /** Flag for Grey Code Error */
    static public boolean    GREY_CODE_ERROR    = false;
    /** Flag for Invalid Selection */
    static public boolean    INVALID_SELECTION  = false;
    /** Flag for Invalid Size */
    static public boolean    INVALID_SIZE       = false;
    /** Flag for Not Minimized Error */
    static public boolean    NOT_MINIMIZED      = false;
    /** Flag for Not Selected Error */
    static public boolean    NOT_SELECTED       = false;
    /** Flag for Orientation Error */
    static public boolean    ORIENTATION_ERROR  = false;
    /** Flag for Spans-Corners Error */
    static public boolean    SPANS_CORNER_ERROR = false;
    /** Flag for Spans-Edges Error */
    static public boolean    SPANS_EDGE_ERROR  = false;
    /** Flag for Spans-Layer Error */
    static public boolean    SPANS_LAYER_ERROR  = false;
    /** Flag for Typo Error */
    static public boolean    TYPO_ERROR         = false;
    /** Flag for boolean equation checking*/
    static public boolean	 EQ_ERROR			= false;
    /** Flag for having a redundant group selected*/
	static public boolean	 REDUNDANT_GROUP	= false;
}

