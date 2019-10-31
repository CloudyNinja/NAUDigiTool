/*
 * Created on Jul 2, 2003
 *
 * To change the template for this generated file go to
 * Window>Preferences>Java>Code Generation>Code and Comments
 */
package tracker;

/**
 * @author Owner
 *
 * To change the template for this generated type comment go to
 * Window>Preferences>Java>Code Generation>Code and Comments
 */

import java.lang.reflect.Constructor;

public class TrackerTools {


	private static Constructor builder;
	public static UserRecord getNewRecord(String userID){
		try{
			if (builder == null){
				Class[] argslist = {Class.forName("String")};
				//builder = Class.forName(SetupTracker.getProperties().getProperty("RECORD")).getConstructor(argslist);
			}
			Object[] args = {userID};
			return (UserRecord) builder.newInstance(args);
		}catch(Exception e){
			System.out.println(e.getMessage());
			e.printStackTrace();
			return null;
		}
	}
}
