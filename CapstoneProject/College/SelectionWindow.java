/**
 * <p>Title: SelectionWindow.java</p>
 *
 * <p>Description: </p>
 *
 * @author Steven Koechle
 * @version 1.0
 */

import javax.swing.ButtonGroup;
import java.awt.event.ActionEvent;
import javax.swing.JCheckBox;
import javax.swing.JComboBox;
import java.awt.Toolkit;
import javax.swing.JPanel;
import javax.swing.JFrame;
import java.awt.event.ActionListener;
import javax.swing.JRadioButton;
import javax.swing.JButton;
import java.awt.Dimension;
import java.awt.FlowLayout;
import javax.swing.JDialog;

public class SelectionWindow {
    private JComboBox VarsB = new JComboBox();
    //JDialog is very similar to JFrame, but allows to halt all GUI components until input is recieved.
    private JDialog dialog = null;
    private JPanel empty = new JPanel();
    private JPanel Button = new JPanel();
    private JPanel radioB = new JPanel();
    private JPanel checkB = new JPanel();
    private JButton OK = new JButton("OK");
    private JButton Cancel = new JButton("Cancel");
    private JRadioButton KmapButton = new JRadioButton("KMAP Translation");
    private JRadioButton SOPButton = new JRadioButton("SOP Minimized     ");
    private JRadioButton POSButton = new JRadioButton("POS Minimized     ");
    private JCheckBox DontCareB = new JCheckBox("Don't Cares");
    private JCheckBox EquationB = new JCheckBox("Equations");
    private int kcomp;
    private boolean done;

    public SelectionWindow() {
        done = false;
    }

    /**
     * Sets up the Dialog box to wait for user input
     * about what problem type they want.
     */
    public void setDialog() {
        //the true parameter below sets it as modal, which will pause all GUI
        //components until the Dialog is disposed of
        dialog = new JDialog(new JFrame(), true);
        dialog.setTitle("Select Level");
        dialog.setSize(400, 230);
        double frameXpos = dialog.getX();
        double frameYpos = dialog.getY();

        //centers the frame on the screen
        Dimension screenSize = Toolkit.getDefaultToolkit().getScreenSize();
        Dimension size = dialog.getSize();
        dialog.setLocation((screenSize.width - size.width) / 2,
                           (screenSize.height - size.height) / 2);

        OK.setSize(100, 50);

        ButtonGroup group = new ButtonGroup();
        group.add(KmapButton);
        group.add(SOPButton);
        group.add(POSButton);

        VarsB.addItem("3 Variable");
        VarsB.addItem("4 Variable");
        VarsB.addItem("5 Variable");
        VarsB.addItem("6 Variable");

        radioB.add(KmapButton);
        radioB.add(SOPButton);
        radioB.add(POSButton);
        KmapButton.setSelected(true);
        radioB.setBounds((int) frameXpos + 200, (int) frameYpos, 200, 130);
        checkB.setLayout(new FlowLayout());
        checkB.add(DontCareB);
        checkB.add(EquationB);
        checkB.add(VarsB);
        checkB.add(OK);
        checkB.setBounds((int) frameXpos, (int) frameYpos, 200, 130);

        Button.add(OK);
        Button.add(Cancel);
        Button.setBounds((int) frameXpos, (int) frameYpos + 130, 400, 60);

        dialog.getContentPane().add(radioB);
        dialog.getContentPane().add(checkB);
        dialog.getContentPane().add(Button);
        //Last panel added for some reason is made size of the frame and put in the back
        //So an empty panel is added to give proper sizeing for other three
        dialog.getContentPane().add(empty);

        class OKListener implements ActionListener {
            public void actionPerformed(ActionEvent event) {
                done = true;
                dialog.dispose();
            }
        }


        class CancelListener implements ActionListener {
            public void actionPerformed(ActionEvent event) {
                dialog.dispose();
            }
        }


        ActionListener OKListener = new OKListener();
        ActionListener CancelListener = new CancelListener();
        OK.addActionListener(OKListener);
        Cancel.addActionListener(CancelListener);

        dialog.setResizable(false);
        dialog.show();
    }

    /**
     * Interprets the user input and returns it as an object which is
     * later translated into a KComplexity and used to generate a new problem
     * @return Object
     */
    public Object findKComplexity() {
        if (!done) { //If the user presses the cancel button
            return null;
        }
        kcomp = 0;
        String variable = (String) VarsB.getSelectedItem();
        kcomp = ((Integer.parseInt(variable.substring(0, 1))) - 3) * 10;
        if (KmapButton.isSelected() && DontCareB.isSelected()) {
            kcomp += 1;
        } else if (KmapButton.isSelected()) {
            kcomp += 0;
        } else if (POSButton.isSelected() && DontCareB.isSelected() &&
                   EquationB.isSelected()) {
            kcomp += 9;
        } else if (SOPButton.isSelected() && DontCareB.isSelected() &&
                   EquationB.isSelected()) {
            kcomp += 8;
        } else if (POSButton.isSelected() && EquationB.isSelected()) {
            kcomp += 7;
        } else if (SOPButton.isSelected() && EquationB.isSelected()) {
            kcomp += 6;
        } else if (POSButton.isSelected() && DontCareB.isSelected()) {
            kcomp += 5;
        } else if (SOPButton.isSelected() && DontCareB.isSelected()) {
            kcomp += 4;
        } else if (POSButton.isSelected()) {
            kcomp += 3;
        } else if (SOPButton.isSelected()) {
            kcomp += 2;
        }
        return Integer.toString(kcomp);
    }
}
