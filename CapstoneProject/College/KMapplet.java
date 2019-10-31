/**
 * @author Erica Liszewski and Billy Olsen
 * @author Sean Collins
 * @version 1.2
 */

import java.awt.*;
import java.awt.event.*;
import java.applet.*;
import java.io.*;
import java.util.Vector;
import java.util.StringTokenizer;
import logic.tables.*;
import tracker.*;
import logic.utils.*;

import java.util.Random;
import javax.swing.*;

import java.net.*;

public class KMapplet
	extends Applet
	implements ActionListener, logic.tables.KApplet, FocusListener {

	public void init() {
		String userid = getParameter("myuserid");
		int port;
		if (getParameter("port") == null)
			port = 3000;
		else
			port = Integer.parseInt(getParameter("port"));
		System.out.println("Userid = " + userid);
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

		URL url1 = KMapplet.class.getResource("background.jpg");
		pic1 = Toolkit.getDefaultToolkit().getImage(url1);

		getProperties();
		setComplexityList();
		openLevelDialog();
	}

	private void getProperties() {
		BufferedReader reader;
		String input;

		URL url = KMapplet.class.getResource("KProperties/complexity.txt");
		StringTokenizer st;
		KComplexity c;
		Vector v;
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
						if (st.nextToken().equals("true"))
							c.DC = true;
						if (st.nextToken().equals("true"))
							c.SOP = true;
						if(st.nextToken().equals("true"))
							c.EQ = true;
						c.instructions = st.nextToken();

						c.pointMultiplier = Integer.parseInt(st.nextToken());

						while (st.hasMoreTokens()) {
							c.prereqLevel.add(Integer.valueOf(st.nextToken()));
							c.prereqPoints.add(Integer.valueOf(st.nextToken()));
						}
						complexities.add(c);
						level++;

					} catch (Exception e2) {
						System.out.println(e2.getMessage());
						e2.printStackTrace();
					}
				}
			}
		} catch (Exception e) {
			System.out.println(e.getMessage());
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
			System.out.println(e.getMessage());
			e.printStackTrace();
		}

		System.out.println("Min points:" + Constants.MIN_POINTS);
		System.out.println("Max points:" + Constants.MAX_POINTS);
		System.out.println("Attempt Deduction:" + Constants.ATTEMPT_DEDUCTION);
		System.out.println("Failure Penalty:" + Constants.FAILURE_PENALTY);
		System.out.println("Point Floor:" + Constants.POINT_FLOOR);
	}

	private void initialize() {
		int dim;
		Random rand = new Random();

		this.removeAll();
		this.setBackground(Color.white);

		dim = rand.nextInt(5) + 2;

		this.setLayout(new BorderLayout());
		Panel northpanel = new Panel();
		northpanel.setLayout(new GridLayout(3, 1));
		//add points display first

		instr = new Label("", Label.CENTER);
		instr.setFont(new Font(new String("Dialog"), Font.BOLD, 14));
		instr.setBackground(Color.white);
		northpanel.add(instr);

		
		p = new JPanel();
		p.setBackground(new Color(204,153,255,125));
		//p = new ImagePanel(pic1);
		p.setLayout(new FlowLayout(FlowLayout.CENTER, 10, 50));

		kd_org = sm.getNextSet();
		dim = kd_org.getDimension();
		kd_res =
			new logic.tables.KData(dim, logic.utils.StatusFlags.complexity.DC);

		logic.tables.TTable tt = new logic.tables.TTable(kd_org);
		tt.setEditable(false);
		p.add(tt);

		//set up the destination
		kd_res.resetAllFunctions(logic.tables.KState.FALSE);
		Panel pp = new Panel();
		pp.setBackground(Color.white);

		int count = 1;
		//logic.tables.KMap km;
		if (dim == 5)
			count = 2;
		if (dim == 6)
			count = 4;
		km = new logic.tables.KMap[count];
		pp.setLayout(
			new GridLayout(
				((count == 4) ? 2 : 1),
				((count > 1) ? 2 : 1),
				20,
				20));

		for (int i = 0; i < count; i++) {
			km[i] = new logic.tables.KMap(kd_res, false, this);
			km[i].setInputModeGroup(false);
			km[i].setEditable(true);
			pp.add(km[i]);
		}

		JPanel ppp = new JPanel();
		ppp.setBackground(Color.white);
		ppp.setBorder(BorderFactory.createLineBorder(Color.white, 10));
		ppp.add(pp);

		if (dim < 5) {
			ScrollPane kscroll = new ScrollPane(ScrollPane.SCROLLBARS_NEVER);
			kscroll.setSize(300, 300);
			kscroll.add(ppp);
			p.add(kscroll);
			this.add(BorderLayout.CENTER, p);
		} else if (dim == 5) {
			ScrollPane kscroll = new ScrollPane();
			kscroll.setSize(500, 300);
			kscroll.add(ppp);
			p.add(kscroll);
			this.add(BorderLayout.CENTER, p);
		} else if (dim == 6) {
			ScrollPane kscroll = new ScrollPane();
			kscroll.setSize(500, 335);
			kscroll.add(ppp);
			p.add(kscroll);
			this.add(BorderLayout.CENTER, p);
		}
		
		if(StatusFlags.complexity.EQ){
			booleq = new TextField("",70);
			//p.add(booleq);
		}

		q = new Panel();
		q.setLayout(new GridLayout(1, 4));

		//add a button to validate the work
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

		q.add(help);
		q.add(score);
		q.add(changelevel);
		q.add(clear);
		q.add(check);

		//northpanel.add(status);
		this.add(BorderLayout.SOUTH, q);
		this.add(BorderLayout.NORTH, northpanel);

		pointslabel =
			new Label(
				"Current Points: " + record.getTotalPoints(),
				Label.RIGHT);
		pointslabel.setFont(new Font(new String("Points"), Font.PLAIN, 12));
		northpanel.add(pointslabel);
		
		eqlabel = new Label (
					"Current Equation: ", Label.LEFT);
		northpanel.add(eqlabel);

		if(KeyStroke.getKeyStroke("released CONTROL")==null){
			System.out.println("Yeah, it's null");
		}

		p.setFocusable(true);
		p.getInputMap().put(
			KeyStroke.getKeyStroke("released CONTROL"),
			"released");
		p.getActionMap().put("released", endSelection);
		endSelection.setEnabled(true);
		p.addFocusListener(this);
		//p.requestFocusInWindow();
		p.requestFocus();

		this.validate();
	}

	public void destroy() {
		sm.problemEnded();
		try {
			tracker.storeRecord(record);
		} catch (Exception e) {
			// Oh well...
		}
	}

	public void actionPerformed(ActionEvent ae) {
		if (ae.getSource() == check) {
			if(StatusFlags.complexity.EQ) StatusFlags.TEST_EQ = booleq.getText();
			boolean test = sm.logAttempt(kd_res);
			System.out.println(
				"Checking status of test :" + ((test) ? "true" : "false"));
			if (!test) {
				openWrongDialog();
				clearGroupings();
				//this.validate();
				//p.requestFocusInWindow();
			} else {
				openCorrectDialog();
				clearGroupings();
				//this.validate();
			}
		} else if (ae.getSource() == changelevel) {
			openLevelDialog();
		} else if (ae.getSource() == help) {
			try {
				getAppletContext().showDocument(
					KMapplet.class.getResource("Help/index.htm"),
					"_blank");
			} catch (Exception ex) {
				System.out.println(ex);
			}

		} else if (ae.getSource() == clear) {
			clearGroupings();
			//sm.clearStatusFlags();
		} else if (ae.getSource() == score) {
			openScoreDialog();
		} 
		//p.requestFocusInWindow();
		p.requestFocus();
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

	private void openWrongDialog() {
		Object[] options = { "Skip to a new Problem", "Try Again" };
		String message;
		if (sm.wasTranslationMistake())
			message =
				"Answer is incorrent.\n"
					+ "There was a mistake in translating the truth table.\n"
					+ "Would you like a new problem, or to "
					+ "try again?";
		else
			message =
				"Answer is incorrent.\n"
					+ "There was a mistake in gouping.\n"
					+ "Would you like a new problem, or to "
					+ "try again?";
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
			p.requestFocus();
		}
	}

	private void openCorrectDialog() {
		Object[] options = { "Next Problem", "Change Level", "Quit" };
		int oldSize = complexityList.size();
		setComplexityList();
		String reply;
		if (oldSize < complexityList.size())
			reply =
				"Correct!!\n"
					+ "You've earned enough points to try a new level.\n";
		else
			reply = "Correct!!\n";
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
			this.removeAll();
			this.validate();
			initialize();
		} else if (n == JOptionPane.NO_OPTION) {
			this.removeAll();
			this.validate();
			openLevelDialog();
		} else if (n == JOptionPane.CANCEL_OPTION) {
			JOptionPane.showMessageDialog(
				this,
				"Your final score is " + record.getTotalPoints());
			removeAll();
		}
	}

	private void openLevelDialog() {

		try {
			KComplexity selectedComplexity = null;
			do {
				selectedComplexity =
					(KComplexity) JOptionPane.showInputDialog(
						this,
						"Select Level",
						"Change Level",
						JOptionPane.PLAIN_MESSAGE,
						null,
						complexityList.toArray(),
						null);
			} while (selectedComplexity == null && !sm.isProblemActive());
			if (selectedComplexity == null)
				return;
			StatusFlags.complexity = selectedComplexity;
			this.removeAll();
			this.validate();
			initialize();
		} catch (Exception e) {

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
				if (!prereqs)
					break;
			}
			if (prereqs || tracker == null) { //TODO: Might want to change this
				complexityList.add(c);
			}
		}
		//return complexityBox;
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
	
	private void openScoreDialog() {
		StringBuffer scoreInfo =
			new StringBuffer("Total score: " + record.getTotalPoints() + "\n");
		scoreInfo.append("Number of logins: " + record.getLogins() + "\n\n");
		KComplexity c;

		for (int i = 0; i < complexities.size(); i++) {
			c = (KComplexity) complexities.get(i);
			scoreInfo.append(c.name + ":     ");
			scoreInfo.append(
				"Problems attempted: "
					+ record.getProblems(c.level)
					+ "       ");
			scoreInfo.append("Points: " + record.getPoints(c.level) + "\n");
		}

		JOptionPane.showMessageDialog(this, scoreInfo);
	}
	
	public void focusGained(FocusEvent e) {
		//System.out.println("Focus gained");
	}

	public void focusLost(FocusEvent e) {
		//System.out.println("Focus lost");
		p.requestFocus();
	}

	Action endSelection = new AbstractAction() {
		//addActionListener(this);
		public void actionPerformed(ActionEvent e) {
			//this.actionPerformed(e);
			//System.out.println("In endSelection");
			//String temp = "";
			int dim = kd_res.getDimension();
			int count = 1;
			if (dim == 5)count = 2;
			if (dim == 6)count = 4;
			boolean used =false;
			for (int i = 0; i < count; i++){
				boolean thisused = km[i].endSelection(used);
				//if(km[i].getEquation().length()!=0){
				//	if(temp.length()!=0)
				//		if (logic.utils.StatusFlags.complexity.SOP)  temp = temp + " + "; 
				//	temp = temp + km[i].getEquation();
				//}
				used = thisused;
				}
			eqlabel.setText("Current Equation: " + logic.utils.StatusFlags.BOOL_EQ);			
			}
		};


	private Vector complexities = new Vector();
	private Tracker tracker;
	private KarnaughRecord record;
	private SmartSetMaker sm;
	public static logic.tables.KMap km[];

	private Vector complexityList = new Vector();
	private logic.tables.KData kd_org;
	private logic.tables.KData kd_res;
	private Panel q;
	//private ImagePanel p;
	private JPanel p;
	private Button check;
	private Button changelevel;
	private Button help;
	private Button clear;
	private Button score;
	private Label instr, pointslabel, eqlabel;
	private Image pic1;
	private TextField booleq;

}

class ImagePanel extends JPanel  {
	Image image;

	public ImagePanel(Image image) {
		this.image = image;
	}
	public void paintComponent(Graphics g) {
		g.drawImage(image, 0, 0, this);
	}
	


}