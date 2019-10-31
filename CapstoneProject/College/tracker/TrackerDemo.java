/*
 * Created on Jun 19, 2003
 *
 * To change the template for this generated file go to
 * Window>Preferences>Java>Code Generation>Code and Comments
 */
package tracker;
import java.io.*;
/**
 * @author Owner
 *
 * To change the template for this generated type comment go to
 * Window>Preferences>Java>Code Generation>Code and Comments
 */

// Just ignore this

public class TrackerDemo {
	public static void main(String args[]) throws Exception{
		Tracker tracker = RMIHandler.getTracker("KarnaughMapTracker","localhost",56789);
		BufferedReader userIn = new BufferedReader(new InputStreamReader(System.in));
		KarnaughRecord record;
		String id;
		System.out.println("Input ID of Record to Retrive");
		id = userIn.readLine();
		record = (KarnaughRecord) tracker.retrieveRecord(id);
		//System.out.println(record.getLevel());
		//record.incrementLevel();
		//System.out.println(record.getLevel());
		tracker.storeRecord(record);
	}
}
