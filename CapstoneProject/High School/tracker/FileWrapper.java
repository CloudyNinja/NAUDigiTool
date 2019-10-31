/*
 * Created on Aug 11, 2003
 *
 * To change the template for this generated file go to
 * Window&gt;Preferences&gt;Java&gt;Code Generation&gt;Code and Comments
 */
package tracker;

/**
 * @author Owner
 *
 * To change the template for this generated type comment go to
 * Window&gt;Preferences&gt;Java&gt;Code Generation&gt;Code and Comments
 */

import java.io.*;

public class FileWrapper{
	private File file;

	public static FileWrapper[] wrapFiles(File[] files){
		FileWrapper wrappedFiles[] = new FileWrapper[files.length];
		for(int i=0;i<files.length;i++)
			wrappedFiles[i] = new FileWrapper(files[i]);
		return wrappedFiles;	
	}
	
	public FileWrapper(File file){
		this.file = file;
	}
	
	public File getFile(){
		return file;
	}
	
	public String toString(){
		return file.getName().replaceAll(".properties","");
	}
}
