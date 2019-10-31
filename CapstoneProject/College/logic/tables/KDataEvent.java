/**
 * @author David Tucker
 * @version 1.2
 */
package logic.tables;

import java.util.EventObject;

//***ToDo, add an event descripter so we can have different events
public class KDataEvent extends EventObject {
	public KDataEvent(Object source) {
		super(source);
	}
}