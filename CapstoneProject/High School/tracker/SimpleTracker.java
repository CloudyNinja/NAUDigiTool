/*
 * Created on Jun 18, 2003
 *
 * To change the template for this generated file go to
 * Window>Preferences>Java>Code Generation>Code and Comments
 */
package tracker;
import java.util.Vector;
import java.rmi.server.UnicastRemoteObject;
import java.rmi.RemoteException;

/**
 * @author Owner
 *
 * To change the template for this generated type comment go to
 * Window>Preferences>Java>Code Generation>Code and Comments
 */
import java.io.*;
import java.util.Hashtable;

public class SimpleTracker extends UnicastRemoteObject implements Tracker{

	private Hashtable database;
	private String FILE;
	private String PASSWORD;
	
	public SimpleTracker() throws Exception{
		super();
		PASSWORD = TrackingSystem.getProperty("PASSWORD");
		FILE = TrackingSystem.getProperty("FILE");
		if (FILE == null || FILE.equals(""))
			throw new Exception("Database file not set");
	}
	
	public synchronized UserRecord retrieveRecord(String id) throws RemoteException{
		System.out.println("Retrieve Record: " + id);
		loadDatabase();
		UserRecord record = (UserRecord) database.get(id);
		if (record == null)
			record = TrackingSystem.getNewRecord(id);
		database = null;
		return record;
	}
	
	public synchronized void storeRecord(UserRecord record) throws RemoteException{
		System.out.println("Store Record: " + record.getUserID());
		loadDatabase();
		database.put(record.getUserID(),record);
		saveDatabase();
		database = null;
	}
	
	public synchronized String[] retrievePrintOut(String password) throws Exception{
		System.out.println("Retrieve Print Out: " + password);
		if (PASSWORD == null || PASSWORD.equals("")){
			throw new Exception("No password is set");
		}
		else if (!PASSWORD.equals(password)){
			throw new Exception("No admittance without the password!");
		}
		
		loadDatabase();
		String[] printOut = new String[database.size()+1];
		Vector data =  new Vector(database.values());
		UserRecord record = TrackingSystem.getNewRecord("");
		StringBuffer buffer = new StringBuffer(record.getDataFieldLabel(0));
		for(int k = 1; k < record.getNumberOfDataFields(); k++){
			buffer.append(",").append(record.getDataFieldLabel(k));
		}
		buffer.append("\n");
		printOut[0] = buffer.toString(); 
		
		for(int i = 0; i < database.size();i++){
			record = (UserRecord) data.get(i);
			buffer = new StringBuffer(record.getUserID());
			for(int k = 1; k < record.getNumberOfDataFields(); k++){
				buffer.append(",").append(record.getDataField(k));
			}
			buffer.append("\n");
			printOut[i+1] = buffer.toString(); 
		}
		database = null;
		return printOut;
	}
	
	private void loadDatabase(){
		try {
			FileInputStream fis = new FileInputStream(FILE);
			ObjectInputStream ois = new ObjectInputStream(fis);
			database = (Hashtable) ois.readObject();
		} catch (Exception e) {
			database = new Hashtable();
		}
	}
	
	private void saveDatabase(){
		try{
			FileOutputStream fos = new FileOutputStream(FILE);
			ObjectOutputStream oos = new ObjectOutputStream(fos);
			oos.writeObject(database);
			oos.close();
		}catch(Exception e){
			System.out.println(e.getMessage());
			e.printStackTrace();
		}
	}
	
	/*
	protected Vector database = new Vector();
		
	public synchronized UserRecord retrieveRecord(String id) throws RemoteException{
		return (UserRecord) database.get(findRecord(id));
	}
	
	public synchronized void storeRecord(UserRecord record) throws RemoteException{
		database.set(findRecord(record.getUserID()),record);
	}
	
	public synchronized String[] retrievePrintOut() throws RemoteException{
		String[] printOut = new String[database.size()+1];
		
		UserRecord record = TrackerTools.getNewRecord("");
		StringBuffer buffer = new StringBuffer(record.getDataFieldLabel(0));
		for(int k = 1; k < record.getNumberOfDataFields(); k++){
			buffer.append(",").append(record.getDataFieldLabel(k));
		}
		buffer.append("\n");
		printOut[0] = buffer.toString(); 
		
		for(int i = 0; i < database.size();i++){
			record = (UserRecord) database.get(i);
			buffer = new StringBuffer(record.getUserID());
			for(int k = 1; k < record.getNumberOfDataFields(); k++){
				buffer.append(",").append(record.getDataField(k));
			}
			buffer.append("\n");
			printOut[i+1] = buffer.toString(); 
		}
		return printOut;
	}
	

	
	protected int insertRecord(UserRecord record){
		
		String current = record.getUserID();
		String next;
			 
		for(int i=0;i<database.size();i++){
			next = ((UserRecord)database.get(i)).getUserID();
			if(current.compareTo(next) < 0){
				database.insertElementAt(record,i);
				return i;
			}
		}
		database.add(record);
		return database.size()-1;
	}
	
	protected int findRecord(String id){
		int low = 0;
		int high = database.size() - 1;
		int mid;
		int c;
		
		while (low <= high) {
				mid = (low + high) / 2;
				c = id.compareTo(((UserRecord) database.get(mid)).getUserID());
				if (c < 0)
					high = mid - 1;
				else if (c > 0)
					low = mid + 1;
				else
					return mid;
		}
		UserRecord record = TrackerTools.getNewRecord(id);
		return insertRecord(record);
	}
	*/
}
