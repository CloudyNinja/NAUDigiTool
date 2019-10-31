/*
 * Created on Jun 18, 2003
 *
 * To change the template for this generated file go to
 * Window>Preferences>Java>Code Generation>Code and Comments
 */

/**
 * @author Owner
 *
 * To change the template for this generated type comment go to
 * Window>Preferences>Java>Code Generation>Code and Comments
 */
package tracker;
import java.rmi.*;


public class RMIHandler {
	
	public static Tracker getTracker(String name,String host, int port) throws Exception{
		String url = "rmi://" + host +":" +  port + "/" + name;
		return (Tracker) Naming.lookup(url);
	}
}
