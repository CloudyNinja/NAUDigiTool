/*
 * KApplet.java
 *
 * Created on December 6, 2002, 3:21 PM
 */

package logic.tables;

/**
 *
 * @author  Billy Olsen
 */
public interface KApplet {
    public void setKMapArray(KMap[] km);
    public KMap[] getKMapArray();
    public void setInstructions( String instr );
}
