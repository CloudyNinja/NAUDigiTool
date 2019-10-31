/*
 * Created on Jun 18, 2003
 *
 * To change the template for this generated file go to
 * Window>Preferences>Java>Code Generation>Code and Comments
 */
package tracker;
import java.rmi.Remote;
import java.rmi.RemoteException;

/**
 * @author Owner
 *
 * To change the template for this generated type comment go to
 * Window>Preferences>Java>Code Generation>Code and Comments
 */

public interface Tracker extends Remote {
	public UserRecord retrieveRecord(String id) throws RemoteException;
	public void storeRecord(UserRecord record) throws RemoteException;
	public String[] retrievePrintOut(String password) throws Exception;
}
