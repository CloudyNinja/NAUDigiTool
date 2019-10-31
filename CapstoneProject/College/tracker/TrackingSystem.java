/*
 * Created on Jul 1, 2003
 *
 * To change the template for this generated file go to
 * Window>Preferences>Java>Code Generation>Code and Comments
 */
package tracker;

/**
 * @author Sean Collins
 *
 * To change the template for this generated type comment go to
 * Window>Preferences>Java>Code Generation>Code and Comments
 */
import java.rmi.registry.Registry;
import java.rmi.registry.LocateRegistry;
import java.util.Properties;
import java.lang.reflect.Constructor;

public class TrackingSystem {

	private static Properties properties;
	private static Constructor builder;
	 
	public static String getProperty(String key){
		return properties.getProperty(key);
	}
	
	public static UserRecord getNewRecord(String userID){
		try{
			if (builder == null){
				Class[] argslist = {userID.getClass()};
				builder = Class.forName(getProperty("RECORD")).getConstructor(argslist);
			}
			Object[] args = {userID};
			UserRecord record = (UserRecord) builder.newInstance(args);
			return record;
		}catch(Exception e){
			System.out.println(e.getMessage());
			e.printStackTrace();
			return null;
		}
	}
	
	public static void bindTracker(Properties prop) throws Exception{
		
		properties = prop;
		int PORT;
		String NAME ;
		String DATABASE;
		Registry registry;
		Tracker tracker;
		
		
		NAME = getProperty("NAME");
		if (NAME == null)
			throw new Exception("Applet type not set");
			
		DATABASE = getProperty("DATABASE");
		if (DATABASE == null)
			throw new Exception("Database type not set");
			
		try{
			PORT = Integer.parseInt(getProperty("PORT"));
		}catch(Exception e){
			throw new Exception("Port not set");
		}
		
		tracker = (Tracker) ((Class.forName(DATABASE))).newInstance();	
		
		try{
			LocateRegistry.createRegistry(PORT);
		} catch(Exception e){
			// Ignore, there might just already be a registry on this port.
		}
		
		try {
			registry = LocateRegistry.getRegistry(PORT);
		}catch(Exception e){
			throw new Exception("Can't setup RMI registry on port");
		}
		
		try{
			registry.rebind(NAME, tracker);
		} catch (Exception e) {
			throw new Exception("Can't bind tracker to RMI registry");
		}
	}
}
