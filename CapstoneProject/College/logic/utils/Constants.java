/**
 * @author Billy Olsen
 * @version 0.1
 * @file Constants.java
 */

package logic.utils;

/**
 * This class hosts global constants for the server package.
 */

public class Constants {
    /** Flag for debug mode (debug mode on = true) */
    static public boolean DEBUG = false;

	static public int MAX_POINTS = 40;
	static public int MIN_POINTS = 5;
	static public int ATTEMPT_DEDUCTION = 5;
	static public int FAILURE_PENALTY = -20;
	static public int POINT_FLOOR;
}