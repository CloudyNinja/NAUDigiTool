/*
 * Created on Jul 1, 2003
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

import java.io.*;
import java.util.Properties;
import java.lang.reflect.Constructor;

public class SetupTracker {

	private static String PROPERTY_FILE_NAME = null;
	private static Properties properties = new Properties();
	private static Constructor builder;

	public static UserRecord getNewRecord(String userID){
		try{
			if (builder == null){
				Class[] argslist = {userID.getClass()};
				builder = Class.forName(getProperty("RECORD")).getConstructor(argslist);
				System.out.println("Constructor:" + builder.toString());
			}
			Object[] args = {userID};
			UserRecord record = (UserRecord) builder.newInstance(args);
			System.out.println("Record" + record.toString());
			return record;
		}catch(Exception e){
			System.out.println(e.getMessage());
			e.printStackTrace();
			return null;
		}
	}
	
	public static void setPropertiesFileName(String name){
		if (PROPERTY_FILE_NAME == null)
			PROPERTY_FILE_NAME = name;
	}
	
	public static String getProperty(String key){
		if (properties.isEmpty()){
			try{
				properties.load(new FileInputStream(PROPERTY_FILE_NAME));
			}catch(Exception e){
				properties = SetupTracker.setupPropertyFile();
			}
		}
			
		return properties.getProperty(key);
	}
	
	private static Properties setupPropertyFile(){
		BufferedReader userIn = new BufferedReader(new InputStreamReader(System.in));
		Properties prop = new Properties();
		FileOutputStream propertyFile = null;
		String fileName;
		
		if (PROPERTY_FILE_NAME == null){
			System.out.print("Properties file name:");
			try{
				fileName = userIn.readLine();
				if (!fileName.endsWith(".properties"))
					fileName = fileName + ".properties";
			} catch(Exception e){
				fileName = "tracker.properties";
			}
			SetupTracker.setPropertiesFileName(fileName);
		}
		
		try{
			propertyFile = new FileOutputStream(PROPERTY_FILE_NAME);
		} catch(Exception e){
			System.out.println("Unable to access properties file");
			System.exit(0);
		}


		
		String port;
		System.out.print("Port number of tracker:");
		try{
			port = userIn.readLine();
			Integer.parseInt(port);
			prop.setProperty("PORT",port);
			System.out.print("Tracker port set to " + port + "\n\n");
		}catch(Exception e){
			System.out.println("Invalid port number");
			System.exit(0);
		}
		
		System.out.println("(1) Karnaugh Map Applet");
		System.out.println("(2) Timing Diagram Applet");
		System.out.print("Select Applet Type:");
		try{
			switch(Integer.parseInt(userIn.readLine())){
				case 1: {
					prop.setProperty("NAME","KarnaughMapTracker");
					prop.setProperty("RECORD","tracker.KarnaughRecord");
					System.out.print("Tracker port setup for Karnuagh Map Applets \n\n");
					break;
				}
				case 2: {
					prop.setProperty("NAME","TimingDiagramTracker");
					prop.setProperty("RECORD","TimingRecord");
					System.out.print("Tracker port setup for Timing Diagram Applets \n\n");
					break;
				}
				default: throw new Exception(); 
			}
		} catch(Exception e){
			System.out.println("Invalid applet type");
			System.exit(0);
		}
		
		System.out.println("(1) Simple Database");
		System.out.println("(2) MySQL Database");
		System.out.print("Select Applet Type:");
		try{
			switch(Integer.parseInt(userIn.readLine())){
				case 1: {
					prop.setProperty("DATABASE","tracker.SimpleTracker");
					System.out.print("Data file name:");
					prop.setProperty("FILE",userIn.readLine());
					System.out.print("Tracker port setup to use Simple Database\n\n");
					break;
				}
				case 2: {
					prop.setProperty("DATABASE","tracker.MySQLTracker");
					System.out.print("MySQL Host Address:");
					prop.setProperty("SERVER",userIn.readLine());
					System.out.print("MySQL Table Name:");
					prop.setProperty("TABLE_NAME",userIn.readLine());
					System.out.print("MySQL User Name:");
					prop.setProperty("USERNAME",userIn.readLine());
					System.out.print("MySQL Password:");
					prop.setProperty("PASSWORD",userIn.readLine());
					break;
				}
				default: throw new Exception();
			}
		} catch(Exception e){
			System.out.println("Invalid database type");
			System.exit(0);
		}
		
		System.out.print("Database Password:");
		try{
			prop.setProperty("PASSWORD",userIn.readLine());
		}catch(Exception e){
			// Don't care
		}
		
		try{
			prop.store(propertyFile,null);
		}catch(Exception e){
			System.out.println("Unable to save to property file");
			System.exit(0);
		}
		System.out.println("Tracker setup complete");
		return prop;
	}
	
	public static void main(String[] args) {
		setupPropertyFile();
	}
}
