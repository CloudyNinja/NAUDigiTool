/**
 * @author David Tucker 
 * @version 1.2
 */

package logic.tables;

import java.util.*;

public class KGroup {
	public KGroup() {
		data = new BitSet(64);
	}

	public boolean indexInGroup(int subGroup, int index) {
		return indexInGroup(((subGroup&0x0F)<<4)|(index&0x0F));
	}
	public boolean indexInGroup(int index) {
		return data.get(index);
	}

	public void toggleSelection(int subGroup, int index) {
		toggleSelection(((subGroup&0x0F)<<4)|(index&0x0F));
	}
	public void toggleSelection(int index) {
		if(data.get(index)) data.clear(index);
		else data.set(index);
	}

	public void setSelection(int subGroup, int index, boolean sel) {
		setSelection(((subGroup&0x0F)<<4)|(index&0x0F), sel);
	}
	public void setSelection(int index, boolean sel) {
		if(sel) data.set(index);
		else data.clear(index);
	}

	private BitSet data;
}