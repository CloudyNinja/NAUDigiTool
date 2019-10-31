/*
 * Created on Jul 5, 2003
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

import java.io.*;
import java.util.Properties;

public class DatabaseAccess {

	public static void accessDatabase(Properties properties) throws Exception{
		String[] printOut;
		Tracker tracker;
		String OUTPUT;
		String NAME;
		String HOST;
		String PASSWORD;
		int PORT;
		
		OUTPUT = properties.getProperty("OUTPUT");
		if (OUTPUT == null || OUTPUT.equals(""))
			throw new Exception("Output file not set");
			
		NAME = properties.getProperty("NAME");
		if (NAME == null)
			throw new Exception("Applet type not set");
			
		HOST = properties.getProperty("HOST");
		if (HOST == null || HOST.equals(""))
			throw new Exception("Database address not set");
			
		PASSWORD = properties.getProperty("PASSWORD");
		if (PASSWORD == null || PASSWORD.equals(""))
			throw new Exception("Password not set");
			
		try{
			PORT = Integer.parseInt(properties.getProperty("PORT"));
		}catch(Exception e){
			throw new Exception("Port not set");
		}
		
		try{
			tracker = RMIHandler.getTracker(NAME,HOST,PORT);
		}catch(Exception e){
			throw new Exception("Unable to contact database");
		}
		
		printOut = tracker.retrievePrintOut(PASSWORD);
		
		try{
			Writer out = new BufferedWriter(new FileWriter(OUTPUT));
			
			for(int i = 0;i<printOut.length;i++){
				out.write(printOut[i]); 
				out.flush();
			}
		}catch(Exception e){
			throw new Exception("Unable to write to file");
		}
	}
}
