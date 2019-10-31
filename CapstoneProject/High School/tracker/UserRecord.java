/*
 * Created on Jun 18, 2003
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
public abstract class UserRecord implements java.io.Serializable{
	
	private static String[] LABELS = {""};
	private String USER_ID;
	
	public UserRecord(String id){
		USER_ID = id;
	}
	
	public String getUserID(){
		return USER_ID;
	}
	
	public abstract int getNumberOfDataFields();
	public abstract String getDataFieldLabel(int column);
	public abstract void setDataField(int column, String data);
	public abstract String getDataField(int column);
}

