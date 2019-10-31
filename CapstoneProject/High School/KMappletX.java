/**
 *
 */
import java.awt.*;
import java.awt.event.*;
import java.io.*;
import java.util.Vector;
import java.util.StringTokenizer;
import logic.tables.*;
import tracker.*;
import logic.utils.*;
import javax.swing.*;
import java.net.*;

public class KMappletX extends JApplet implements ActionListener,
        logic.tables.KApplet {

    //GUI elements
    private TTable ttable;
    private ScrollPane kscroll;
    private JPanel toppanel, eqpanel, buttonpanel, tpanel, mainpanel;
    private Button check;
    private Button changelevel;
    private Button help;
    private Button clear;
    private Button score;
    private Label pointslabel, eqlabel;
    private JTextArea instr;
    private TextField booleq;
    private JRadioButton group, trans;
    private Box modepanel;
    private Label entereq;
    private SelectionWindow window = null;

    //Tracker elements
    private Tracker tracker;
    private KarnaughRecord record;
    private SmartSetMaker sm;

    //Problem elements
    public static logic.tables.KMap km[];
    private logic.tables.KData kd_org;
    private logic.tables.KData kd_res;

    //level elements
    private Vector complexities = new Vector();
    private Vector complexityList = new Vector();

    //Action for key binding
    Action endSelection = new AbstractAction() {
        public void actionPerformed(ActionEvent e) {
            //System.out.println("In endSelection");
            int dim = kd_res.getDimension();
            int count = 1;
            if (dim == 5) {
                count = 2;
            }
            if (dim == 6) {
                count = 4;
            }
            boolean used = false;
            for (int i = 0; i < count; i++) {
                boolean thisused = km[i].endSelection(used);
                used = thisused;
            }
            eqlabel.setText("Current Equation: " +
                            logic.utils.StatusFlags.BOOL_EQ);
        }
    };

    public void init() {
        setupGUI();
        setupTracker();
        getProperties();
        setComplexityList();
        openLevelDialog();
        //newProblem();
    }

    /**
     * setup sets up the GUI for the applet
     *
     */
    private void setupGUI() {
        this.getContentPane().setBackground(Color.white);

        //setup Layout Manager
        GridBagLayout gridbag = new GridBagLayout();
        GridBagConstraints cons = new GridBagConstraints();

        //setup general applet stuff
        mainpanel = new JPanel(gridbag);
        mainpanel.setBackground(Color.white);

        //setup toppanel
        toppanel = new JPanel();
        toppanel.setLayout(new GridLayout(3, 1));
        toppanel.setBackground(Color.white);
        //setup pointslabel
        pointslabel = new Label("Current Points: ", Label.RIGHT);
        pointslabel.setFont(new Font(new String("Points"), Font.PLAIN, 12));
        toppanel.add(pointslabel);
        //setup instruction text area.  TextArea used to provide line wrapping
        instr = new JTextArea("");
        instr.setFont(new Font(new String("Dialog"), Font.BOLD, 14));
        instr.setLineWrap(true);
        instr.setWrapStyleWord(true);
        instr.setEditable(false);
        toppanel.add(instr);
        //setup equation label
        eqlabel = new Label("Current Equation: ", Label.LEFT);
        //uncomment this next line to display equation upon selection
        //toppanel.add(eqlabel);
        //END setup toppanel

        cons.fill = GridBagConstraints.BOTH;
        cons.anchor = GridBagConstraints.CENTER;

        //constraints for toppanal
        cons.gridx = 0;
        cons.gridy = 0;
        cons.gridwidth = 3;
        mainpanel.add(toppanel, cons);

        //setup for tpanel, will hold truth table
        tpanel = new JPanel();
        tpanel.setBackground(Color.white);
        //END setup tpanel

        //constraints for tpanel, this will hold the truth table
        cons.weighty = 1.0;
        cons.gridx = 0;
        cons.gridy = 1;
        cons.gridheight = 1;
        cons.gridwidth = 1;
        cons.insets = new Insets(10, 20, 10, 20);
        mainpanel.add(tpanel, cons);

        //setup kscroll, will hold the K-maps in applet
        kscroll = new ScrollPane();
        kscroll.setBackground(Color.white);
        //END setup kscroll

        //constraints for kscroll
        cons.weightx = 1.0;
        cons.gridx = 1;
        cons.gridwidth = 1;
        cons.insets = new Insets(20, 40, 20, 20);
        mainpanel.add(kscroll, cons);

        //setup modepanel, holds switchs for grouping and translation mode
        modepanel = new Box(BoxLayout.Y_AXIS);
        modepanel.setBackground(Color.white);
        trans = new JRadioButton("Translation Mode", true);
        trans.setBackground(Color.white);
        trans.setMnemonic(KeyEvent.VK_T);
        trans.addActionListener(this);
        group = new JRadioButton("Grouping Mode", false);
        group.setBackground(Color.white);
        group.setMnemonic(KeyEvent.VK_G);
        group.addActionListener(this);
        modepanel.add(trans);
        modepanel.add(group);
        //END setup modepanel

        //constraints for modepanal
        cons.gridx = 2;
        cons.weightx = 0.0;
        cons.weighty = 0.0;
        mainpanel.add(modepanel, cons);

        //setup eqpanel, holds equation entry box when needed
        eqpanel = new JPanel();
        booleq = new TextField("", 70);

        //change font size of EQ bar by changing the number of the last parameter
        Font f = new Font(null, Font.PLAIN, 14);
        booleq.setFont(f);

        entereq = new Label("Enter Boolean Equation:");
        eqpanel.setVisible(false);
        eqpanel.setBackground(Color.white);
        //END setup eqpanel

        //constraints for eqpanel
        cons.weightx = 0.0;
        cons.weighty = 0.0;
        cons.gridx = 0;
        cons.gridy = 2;
        cons.gridwidth = 3;
        cons.insets = new Insets(0, 0, 0, 0);
        mainpanel.add(eqpanel, cons);

        //setup for buttonpanel, will hold buttons
        buttonpanel = new JPanel();
        buttonpanel.setLayout(new GridLayout(1, 4));

        check = new Button("Check Work");
        check.addActionListener(this);

        help = new Button("Help");
        help.addActionListener(this);

        changelevel = new Button("New Problem");
        changelevel.addActionListener(this);

        clear = new Button("Clear Groupings");
        clear.addActionListener(this);

        score = new Button("View Scores");
        score.addActionListener(this);

        buttonpanel.add(help);
        buttonpanel.add(score);
        buttonpanel.add(changelevel);
        buttonpanel.add(clear);
        buttonpanel.add(check);
        //END setup buttonpanel

        //constraints for buttonpanel
        cons.gridy = 3;
        mainpanel.add(buttonpanel, cons);

        this.getContentPane().add(mainpanel);

        //keybinding stuff
        mainpanel.getInputMap(JComponent.WHEN_IN_FOCUSED_WINDOW).put(
                KeyStroke.getKeyStroke("released CONTROL"),
                "released");
        mainpanel.getActionMap().put("released", endSelection);
        //endSelection.setEnabled(true);
        help.requestFocus();

    }

    private void newProblem() {

        //setup pointslabel
        pointslabel.setText("Current Points: " + record.getTotalPoints());

        tpanel.removeAll();
        kscroll.removeAll();
        eqpanel.removeAll();
        trans.setSelected(true);
        group.setSelected(false);

        if (StatusFlags.complexity.grouping == -1) {
            group.setEnabled(false);
            endSelection.setEnabled(false);

        } else {
            group.setEnabled(true);
            endSelection.setEnabled(true);
        }

        kd_org = sm.getNextSet();
        int dim = kd_org.getDimension();
        kd_res =
                new logic.tables.KData(dim,
                                       logic.utils.StatusFlags.complexity.DC);

        logic.tables.TTable tt = new logic.tables.TTable(kd_org);
        tt.setEditable(false);
        tpanel.add(tt);

        kd_res.resetAllFunctions(logic.tables.KState.FALSE);

        int count = 1;
        //logic.tables.KMap km;
        if (dim == 5) {
            count = 2;
        }
        if (dim == 6) {
            count = 4;
        }
        km = new logic.tables.KMap[count];
        Panel pp = new Panel(
                new GridLayout(
                        ((count == 4) ? 2 : 1),
                        ((count > 1) ? 2 : 1),
                        20,
                        20));

        for (int i = 0; i < count; i++) {
            km[i] = new logic.tables.KMap(kd_res, false, this);
            km[i].setInputModeGroup(false);
            km[i].setEditable(true);
            km[i].setGroupingEnabled(false);
            pp.add(km[i]);
        }

        kscroll.add(pp);

        if (StatusFlags.complexity.EQ) {
            eqpanel.add(entereq);
            eqpanel.add(booleq);
            eqpanel.setVisible(true);
        } else {
            eqpanel.setVisible(false);
        }

        this.validate();
    }

    public void setInstructions(String instr) {
        this.instr.setText(instr);
    }

    public KMap[] getKMapArray() {
        return km;
    }

    public void setKMapArray(KMap[] km) {
        KMapplet.km = km;
    }

    public void actionPerformed(ActionEvent ae) {
        if (ae.getSource() == check) {
            if (StatusFlags.complexity.EQ) {
                StatusFlags.TEST_EQ = booleq.getText();
            }
            boolean test = sm.logAttempt(kd_res);
            if (Constants.DEBUG) {
                System.out.println(
                        "Checking status of test :" +
                        ((test) ? "true" : "false"));
            }
            if (!test) {
                openWrongDialog();
                if (sm.wasGroupMistake() || sm.wasTranslationMistake()) {
                    clearGroupings();
                }
            } else {
                openCorrectDialog();
                clearGroupings();
            }
        } else if (ae.getSource() == changelevel) {
            openLevelDialog();
        } else if (ae.getSource() == help) {
            try {
                getAppletContext().showDocument(
                        KMapplet.class.getResource("Help/index.htm"),
                        "_blank");
            } catch (Exception ex) {
                if (Constants.DEBUG) {
                    System.out.println(ex);
                }
            }

        } else if (ae.getSource() == clear) {
            clearGroupings();
        } else if (ae.getSource() == score) {
            openScoreDialog();
        } else if (ae.getSource() == group) {
            trans.setSelected(false);
            int dim = kd_res.getDimension();
            int count = 1;
            if (dim == 5) {
                count = 2;
            } else if (dim == 6) {
                count = 4;
            }
            for (int i = 0; i < count; i++) {
                km[i].setEditable(false);
                km[i].setGroupingEnabled(true);
            }
        } else if (ae.getSource() == trans) {
            group.setSelected(false);
            int dim = kd_res.getDimension();
            int count = 1;
            if (dim == 5) {
                count = 2;
            } else if (dim == 6) {
                count = 4;
            }
            for (int i = 0; i < count; i++) {
                km[i].setEditable(true);
                km[i].setGroupingEnabled(false);
            }
        }
    }

    private void clearGroupings() {
        sm.resetSelected();
        for (int i = 0; i < km.length; i++) {
            km[i].clearGroupings();
            km[i].repaint();
        }
        eqlabel.setText("Current Equation: ");
        booleq.setText("");
    }

    /**
     * This method sets up the Tracker based on parameters
     * specified in the html page.  If it can't find the
     * info, or can't connect to the tracker, it just goes
     * on with a "default" identification.
     *
     */
    private void setupTracker() {
        String userid = getParameter("myuserid");
        if (userid == null) {
            userid = "default";
        }
        int port;
        if (getParameter("port") == null) {
            port = 3000;
        } else {
            port = Integer.parseInt(getParameter("port"));
        }
        if (Constants.DEBUG) {
            System.out.println("Userid = " + userid);
        }
        try {
            tracker =
                    RMIHandler.getTracker(
                            "KarnaughMapTracker",
                            getCodeBase().getHost(),
                            port);
            record = (KarnaughRecord) tracker.retrieveRecord(userid);
        } catch (Exception e) {
            tracker = null;
            record = new KarnaughRecord(userid);
        }
        record.incrementLogins();
        sm = new SmartSetMaker(record, this);

    }

    /**
     * This method reads the from the properties folder and
     * sets up the complexity and points based on "complexity.txt"
     * and "points.txt".  Changes to complexity and points can
     * be made by simply modifying the text file.
     *
     */
    private void getProperties() {
        BufferedReader reader;
        String input;

        URL url = KMapplet.class.getResource("KProperties/complexity.txt");
        StringTokenizer st;
        KComplexity c;
        int level = 1;

        try {
            reader =
                    new BufferedReader(new InputStreamReader(url.openStream()));
            while ((input = reader.readLine()) != null) {
                if (!input.startsWith("#") && !input.startsWith("\n")) {
                    try {
                        st = new StringTokenizer(input, ",");
                        c = new KComplexity(Integer.parseInt(st.nextToken()));
                        c.name = st.nextToken();
                        c.numOfVariables = Integer.parseInt(st.nextToken());
                        c.grouping = Integer.parseInt(st.nextToken());
                        if (st.nextToken().equals("true")) {
                            c.DC = true;
                        }
                        if (st.nextToken().equals("true")) {
                            c.SOP = true;
                        }
                        if (st.nextToken().equals("true")) {
                            c.EQ = true;
                        }
                        c.instructions = st.nextToken();

                        c.pointMultiplier = Integer.parseInt(st.nextToken());

                        while (st.hasMoreTokens()) {
                            c.prereqLevel.add(Integer.valueOf(st.nextToken()));
                            c.prereqPoints.add(Integer.valueOf(st.nextToken()));
                        }
                        complexities.add(c);
                        level++;

                    } catch (Exception e2) {
                        if (Constants.DEBUG) {
                            System.out.println(e2.getMessage());
                        }
                        e2.printStackTrace();
                    }
                }
            }
        } catch (Exception e) {
            if (Constants.DEBUG) {
                System.out.println(e.getMessage());
            }
            e.printStackTrace();
        }

        url = KMapplet.class.getResource("KProperties/points.txt");

        try {
            reader =
                    new BufferedReader(new InputStreamReader(url.openStream()));
            while ((input = reader.readLine()) != null) {
                if (!input.startsWith("#") && !input.startsWith("\n")) {
                    try {
                        st = new StringTokenizer(input, ",");
                        Constants.MIN_POINTS = Integer.parseInt(st.nextToken());
                        Constants.MAX_POINTS = Integer.parseInt(st.nextToken());
                        Constants.ATTEMPT_DEDUCTION =
                                Integer.parseInt(st.nextToken());
                        Constants.FAILURE_PENALTY =
                                Integer.parseInt(st.nextToken());
                        Constants.POINT_FLOOR =
                                Integer.parseInt(st.nextToken());
                    } catch (Exception e2) {
                        // Nothing
                    }

                }
            }
        } catch (Exception e) {
            if (Constants.DEBUG) {
                System.out.println(e.getMessage());
            }
            e.printStackTrace();
        }

        if (Constants.DEBUG) {
            System.out.println("Min points:" + Constants.MIN_POINTS);
            System.out.println("Max points:" + Constants.MAX_POINTS);
            System.out.println("Attempt Deduction:" +
                               Constants.ATTEMPT_DEDUCTION);
            System.out.println("Failure Penalty:" + Constants.FAILURE_PENALTY);
            System.out.println("Point Floor:" + Constants.POINT_FLOOR);
        }
    }

    /**
     * Method for displaying the "Change Level" Dialog
     * This method is called by default when the applet loads, and
     * can be called by pressing the "New Problem" button in the
     * applet.
     */
    private void openLevelDialog() {

        try {
            //setup pointslabel
            pointslabel.setText("Current Points: " + record.getTotalPoints());
            KComplexity selectedComplexity = null;

            Object windowComplexity = null;
            window = new SelectionWindow();

            window.setDialog();
            windowComplexity = window.findKComplexity();
            if (windowComplexity != null) {
                selectedComplexity = (KComplexity) complexityList.get(
                        Integer.parseInt((String) windowComplexity));
            }

            if (selectedComplexity == null) {
                //openCorrectDialog();
                return;
            }

            StatusFlags.complexity = selectedComplexity;
            if (sm.isProblemActive()) {
                clearGroupings();
            }
            newProblem();

        } catch (Exception e) {
            return;

        }
        //setup pointslabel
        pointslabel.setText("Current Points: " + record.getTotalPoints());
    }

    /**
     * Opens a dialog containing the scores of a student.  The
     * dialog lists all scores for any level the student has
     * access too.
     *
     */
    private void openScoreDialog() {
        StringBuffer scoreInfo =
                new StringBuffer("Total score: " + record.getTotalPoints() +
                                 "\n");
        scoreInfo.append("Number of logins: " + record.getLogins() + "\n\n");
        KComplexity c;

        scoreInfo.append("                    ");
        for (int i = 3; i < 7; ++i) {
            c = (KComplexity) complexities.get(i);
            scoreInfo.append("     " + i + " Variable     ");
        }

        scoreInfo.append("\n");
        int index = 0;
        scoreInfo.append("                    ");
        for (int i = 0; i < 4; ++i) {
            for (int j = 0; j < 2; ++j) {
                if (j == 0) {
                    scoreInfo.append(" problems ");
                } else {
                    scoreInfo.append("  points  ");
                }
            }
        }
        scoreInfo.append("\n");

        for (int row = 0; row < 10; ++row) {
            scoreInfo.append(rowName(row));
            for (int col = 0; col < 4; ++col) {
                index = 10 * col + row;
                c = (KComplexity) complexities.get(index);
                scoreInfo.append(rightJust(record.getProblems(c.level), 6) +
                                 "    ");
                scoreInfo.append(rightJust(record.getPoints(c.level), 6) +
                                 "    ");
            }
            scoreInfo.append("\n");
        }

        /**
           for (int i = 0; i < complexities.size(); i++) {
         c = (KComplexity) complexities.get(i);
         scoreInfo.append(c.name + ":     ");
         scoreInfo.append(
          "Problems attempted: "
           + record.getProblems(c.level)
           + "       ");
         scoreInfo.append("Points: " + record.getPoints(c.level) + "\n");
           }
         */

        JTextArea scoreLabel = new JTextArea(scoreInfo.toString());
        scoreLabel.setFont(new Font("Monospaced", Font.PLAIN, 12));
        JOptionPane.showMessageDialog(this, scoreLabel);

    }

    /**
     * This just gives each row of the score table a name - they needed
     * to be different than the actual name of the problem, since the
     * number of vars is displayed in a different part of the table
     *
     */
    private String rowName(int rownum) {
        String rowName;
        switch (rownum) {
        case 0:
            return rowName = "Translation         ";

        case 1:
            return rowName = "Trans w/DontCares   ";

        case 2:
            return rowName = "\nSOP Minimized       ";

        case 3:
            return rowName = "POS Minimized       ";

        case 4:
            return rowName = "\nSOP Min w/DontCares ";

        case 5:
            return rowName = "POS Min w/DontCares ";

        case 6:
            return rowName = "\nSOP Min & Equation  ";

        case 7:
            return rowName = "POS Min & Equation  ";

        case 8:
            return rowName = "\nSOP w/DontCares & Eq";

        case 9:
            return rowName = "POS w/DontCares & Eq";

        default:
            return rowName = "                    ";
        }
    }

    /**
     * This method just right justifies a number so it will fit
     * nicely in the score table
     *
     * n is the number, spaces is the number of spaces in which
     * n should fit
     */
    private String rightJust(int n, int spaces) {
        String num = "" + n;
        while (num.length() < spaces) {
            num = " " + num;
        }
        return num;
    }

    /**
     * The dialog when a problem is checked, and is incorrect.
     * Helps the student a little by telling them what basic
     * place they made the error it.
     *
     */
    private void openWrongDialog() {
        //setup pointslabel
        pointslabel.setText("Current Points: " + record.getTotalPoints());

        Object[] options = {"Skip to a new Problem", "Try Again"};
        String message;
        if (sm.wasTranslationMistake()) {
            message =
                    "Answer is incorrent.\n"
                    + "There was a mistake in translating the truth table.\n"
                    + "Would you like a new problem, or to "
                    + "try again?";
        } else if (sm.wasGroupMistake()) {
            message =
                    "Answer is incorrent.\n"
                    + "There was a mistake in grouping.\n"
                    + "Would you like a new problem, or to "
                    + "try again?";
        } else if (sm.wasEqMistake()) {
            message =
                    "Answer is incorrent.\n"
                    + "There was a mistake in the boolean equation.\n"
                    + "Would you like a new problem, or to "
                    + "try again?";
        }

        else {
            message =
                    "Answer is incorrent.\n"
                    + "There was a mistake in gouping.\n"
                    + "Would you like a new problem, or to "
                    + "try again?";
        }
        int n =
                JOptionPane.showOptionDialog(
                        this,
                        message,
                        "Incorrect Answer",
                        JOptionPane.YES_NO_OPTION,
                        JOptionPane.PLAIN_MESSAGE,
                        null,
                        options,
                        options[0]);
        if (n == JOptionPane.YES_OPTION) {
            openLevelDialog();
        } else if (n == JOptionPane.NO_OPTION) {
        }
    }

    /**
     * Dialog opened when a problem is checked, and it is
     * correct.  Allows student to move on to a new problem,
     * level, or quit without losing points.
     *
     * TO DO: Allow user to check scores at this point, and then
     * return to this same option dialog
     */
    private void openCorrectDialog() {
        //setup pointslabel
        pointslabel.setText("Current Points: " + record.getTotalPoints());

        Object[] options = {"Next Problem", "Change Level", "Quit"};
        int oldSize = complexityList.size();
        setComplexityList();
        String reply;
        if (oldSize < complexityList.size()) {
            reply =
                    "Correct!!\n"
                    + "You've earned enough points to try a new level.\n";
        } else {
            reply = "Correct!!\n";
        }
        int n =
                JOptionPane.showOptionDialog(
                        this,
                        reply + "Would you like a new problem?",
                        "Correct Answer",
                        JOptionPane.YES_NO_CANCEL_OPTION,
                        JOptionPane.PLAIN_MESSAGE,
                        null,
                        options,
                        options[0]);
        if (n == JOptionPane.YES_OPTION) {
            newProblem();
        } else if (n == JOptionPane.NO_OPTION) {
            openLevelDialog();
        } else if (n == JOptionPane.CANCEL_OPTION) {
            JOptionPane.showMessageDialog(
                    this,
                    "Your final score is " + record.getTotalPoints());
            destroy();
        }
    }

    private void setComplexityList() {
        boolean prereqs;
        KComplexity c;
        //Vector complexityBox = new Vector();
        complexityList.removeAllElements();
        int level;
        int points;
        for (int i = 0; i < complexities.size(); i++) {
            prereqs = true; //Assume case and try to disprove it
            c = (KComplexity) complexities.get(i);
            for (int k = 0; k < c.prereqLevel.size(); k++) {
                level = ((Integer) c.prereqLevel.get(k)).intValue();
                points = ((Integer) c.prereqPoints.get(k)).intValue();
                for (int j = 0; j < complexities.size(); j++) {
                    if (((KComplexity) complexities.get(j)).level == level
                        && record.getPoints(level) < points) {
                        prereqs = false;
                        break;
                    }
                }
                if (!prereqs) {
                    break;
                }
            }
            if (prereqs || tracker == null) { //TODO: Might want to change this
                complexityList.add(c);
            }
        }
        //return complexityBox;
    }

    public void destroy() {
        kscroll.removeAll();
        tpanel.removeAll();
        sm.problemEnded();
        try {
            tracker.storeRecord(record);
        } catch (Exception e) {
            // Oh well...
        }
    }

}
