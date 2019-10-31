/*
 * Created on Jun 19, 2003
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

//import com.mysql.jdbc.*;
import java.sql.*;
import java.rmi.server.UnicastRemoteObject;
import java.rmi.RemoteException;

public class MySQLTracker extends UnicastRemoteObject implements Tracker{
	protected String DRIVER = "com.mysql.jdbc.Driver";
	protected String SERVER;
	protected String DATABASE;
	protected String TABLE_NAME;
	protected String USERNAME;
	protected String PASSWORD;
	protected java.sql.Connection CONNECTION;

	public MySQLTracker() throws Exception{
		super();
		
		Class.forName(this.DRIVER);
		SERVER = TrackingSystem.getProperty("SQL_SERVER");
		DATABASE = TrackingSystem.getProperty("SQL_DATABASE");
		TABLE_NAME = TrackingSystem.getProperty("SQL_TABLE");
		USERNAME = TrackingSystem.getProperty("SQL_USERNAME");
		PASSWORD = TrackingSystem.getProperty("SQL_PASSWORD");
	
		if (SERVER == null || SERVER.equals(""))
			throw new Exception("Server address not set");
		if (DATABASE == null || DATABASE.equals(""))
			throw new Exception("Database name not set");
		if (TABLE_NAME == null || TABLE_NAME.equals(""))
			throw new Exception("Table name not set");
		if (USERNAME == null || USERNAME.equals(""))
			throw new Exception("Username not set");
		if (PASSWORD == null || PASSWORD.equals(""))
			throw new Exception("SQL password not set");
	}
	
	private synchronized ResultSet executeQuery(String queryString){
		try{
			Statement stmt = (Statement) (CONNECTION.createStatement());
			return (ResultSet)stmt.executeQuery( queryString );
		} catch(Exception e){
			System.out.println(e.getMessage());
			e.printStackTrace();
			return null;
		}
	}
	
	private synchronized void executeUpdate(String updateString){
		try{
			Statement stmt = (Statement) (CONNECTION.createStatement());
			stmt.executeQuery( updateString );
		} catch(Exception e){
			System.out.println(e.getMessage());
			e.printStackTrace();
		}
	}
	
	public synchronized UserRecord retrieveRecord(String id) throws RemoteException{
		connectToDatabase();
		UserRecord record = TrackingSystem.getNewRecord(id);
		
		try {
			String queryString = "SELECT * FROM " + TABLE_NAME + " WHERE userid = '" + id + "'";
			ResultSet rs = executeQuery( queryString );
			if( rs == null || !rs.next() ) {
				StringBuffer insertString = new StringBuffer("INSERT INTO " + TABLE_NAME + " VALUES('");
				for(int i = 1;i<record.getNumberOfDataFields();i++){
					insertString.append(record.getDataFieldLabel(i)).append("'")
							.append(record.getDataField(i)).append("'");
					if (i < record.getNumberOfDataFields()-1)
						insertString.append(",");
					else
						insertString.append(");");
				} 
				executeUpdate(insertString.toString());
			}
			
			else{
				for(int i=1;i <= record.getNumberOfDataFields();i++){
					record.setDataField(i,rs.getString(i));
				}
			}
		} catch (SQLException e) {
			System.out.println(e.getMessage());
			e.printStackTrace();
		}
                          
		return record;

	}
	
	public void storeRecord(UserRecord record) throws RemoteException{
		connectToDatabase();
		StringBuffer statement = new StringBuffer("UPDATE " + TABLE_NAME + " SET ");
		
		for(int i = 1;i<record.getNumberOfDataFields();i++){
			statement.append(record.getDataFieldLabel(i)).append("='")
					.append(record.getDataField(i)).append("'");
			if (i < record.getNumberOfDataFields()-1)
				statement.append(", ");
			else
				statement.append(" ");
		}
		statement.append("WHERE ").append(record.getDataFieldLabel(0))
				.append("=").append(record.getUserID()).append(";");
		System.out.println("Executing update statement...\n" + statement + "\n");
		
		
		executeUpdate( statement.toString() );
		System.out.println("Update successful...");
	}
	
	public String[] retrievePrintOut(String password) throws Exception{
		if (PASSWORD == null || PASSWORD.equals("")){
			throw new Exception("No password is set"); 
		}
		else if (!password.equals(PASSWORD)){
			throw new Exception("No admittance without the password!");
		}
		
		connectToDatabase();
		UserRecord record = TrackingSystem.getNewRecord("");
		String queryString = "SELECT COUNT(*) FROM " + TABLE_NAME + ";";
		ResultSet rs = executeQuery(queryString);
		int entries;
		try{
			rs.next();
			entries = rs.getInt(0);
		}catch(Exception e){
			String[]  errorReturn = {"Unable to access database"}; 
			return errorReturn;
		}
		String[] printOut = new String[entries + 1];
		
		queryString = "SELECT * FROM " + TABLE_NAME + ";";
		rs = executeQuery(queryString);
		
		// Labels
		StringBuffer buffer = new StringBuffer(record.getDataFieldLabel(0));
		for(int i = 1;i < record.getNumberOfDataFields(); i++)
			buffer.append(",").append(record.getDataFieldLabel(i));
		buffer.append("\n");
		printOut[0] = buffer.toString();
		
		// Entries
		for(int i = 1; i <= entries; i++){
			try{
				rs.next();
				buffer = new StringBuffer(rs.getString(0));
				for(int k = 1;k < record.getNumberOfDataFields(); k++)
					buffer.append(",").append(rs.getString(k));
				buffer.append("\n");
				printOut[i] = buffer.toString();
			}catch(Exception e){
				System.out.print(e.getMessage());
				e.printStackTrace();
			}
		}
		
		return printOut;
	}
	
	private void connectToDatabase(){
		try{
			if (CONNECTION == null || CONNECTION.isClosed())
				this.CONNECTION = (java.sql.Connection)DriverManager.getConnection("jdbc:mysql://"+
								this.SERVER+"/"+this.DATABASE,this.USERNAME,this.PASSWORD);
		}catch(Exception e){
			System.out.println(e.getMessage());
			e.printStackTrace();
		}
	}
}
