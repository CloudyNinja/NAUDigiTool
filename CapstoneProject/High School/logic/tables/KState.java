/**
 * @author David Tucker 
 * @version 1.2
 */

package logic.tables;
//holds the 4 states posible for a boolean function
// none  - not set to any value yet
// false - 0
// true  - 1
// dont_care - can be either zero or one
public class KState {
	public static final KState NONE  = new KState(" ");
	public static final KState FALSE = new KState("0");
	public static final KState TRUE  = new KState("1");
	public static final KState DONT_CARE  = new KState("X");

	public String toString() {
		return _kstate;
	}

	private KState(String kstate) {
		_kstate = kstate;
	}

	private String _kstate;
}
