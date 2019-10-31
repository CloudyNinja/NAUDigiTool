/*
 * Created on Jul 26, 2003
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
public class TimingRecord extends UserRecord{

	private static String[] LABELS = null;
	private static int NUM_OF_LEVELS = 6;
	private int logins = 0;
	private int totalPoints = 0;
	private int[] points = new int[NUM_OF_LEVELS];
	private int[] problems = new int[NUM_OF_LEVELS];
	
	private int[] successes = new int[NUM_OF_LEVELS];
	private double[] successAttempts = new double[NUM_OF_LEVELS];
	private int[] failures = new int[NUM_OF_LEVELS];
	private double[] failureAttempts = new double[NUM_OF_LEVELS];

	
	public TimingRecord(String id) {
		super(id);
		if (LABELS == null){
			setLabels();	
		}
	}
	
	public static void setLabels(){
		LABELS = new String[NUM_OF_LEVELS * 6 + 3];
		LABELS[0] = "User ID";
		LABELS[1] = "Logins";
		LABELS[2] = "Total Points";
		for(int i = 0; i < NUM_OF_LEVELS; i++){
			LABELS[(i*6) + 3] = "Lv" + (i+1) + "-points";
			LABELS[(i*6) + 4] = "Lv" + (i+1) + "-problems attempted";
			LABELS[(i*6) + 5] = "Lv" + (i+1) + "-sucesses";
			LABELS[(i*6) + 6] = "Lv" + (i+1) + "-average attempted answers per success";
			LABELS[(i*6) + 7] = "Lv" + (i+1) + "-failures";
			LABELS[(i*6) + 8] = "Lv" + (i+1) + "-average attempted answers per failure";
		}
	}
	
	public int getNumberOfDataFields(){
		return LABELS.length;
	}
	
	public String getDataFieldLabel(int column){
		return LABELS[column];
	}
	
	public void setDataField(int column, String data){
		if (column == 0){
			return;
		}
		else if(column == 1){
			logins = Integer.parseInt(data);
		}
		else if(column == 2){
			totalPoints = Integer.parseInt(data); 
		}
		else{
			int level = (int) ((column-3)/6);
			int field = (int) (column-3-(level*6));
			if (field == 0)
				points[level] = Integer.parseInt(data);
			else if (field == 1)
				problems[level] = Integer.parseInt(data);
			else if (field == 2)
				successes[level] = Integer.parseInt(data);
			else if (field == 3)
				successAttempts[level] = Double.parseDouble(data);
			else if (field == 4)
				failures[level] = Integer.parseInt(data);
			else if (field == 5)
				failureAttempts[level] = Double.parseDouble(data);	
		}
	}
	
	public String getDataField(int column){
		if (column == 0){
			return getUserID();
		}
		else if(column == 1){
			return Integer.toString(logins);
		}
		else if(column == 2){
			return Integer.toString(totalPoints);
		}
		else{
			int level = (int) ((column-3)/6);
			int field = (int) (column-3-(level*6));
			if (field == 0)
				return Integer.toString(points[level]);
			else if (field == 1)
				return Integer.toString(problems[level]);
			else if (field == 2)
				return Integer.toString(successes[level]);
			else if (field == 3)
				return Double.toString(successAttempts[level]);
			else if (field == 4)
				return Integer.toString(failures[level]);
			else
				return Double.toString(failureAttempts[level]);	
		}

	}
	
	public int getLogins(){
		return logins;
	}
	
	public void incrementLogins(){
		logins++;	
	}
	
	public int getProblems(int level){
		return problems[level-1];
	}
	
	public void incrementProblems(int level){
		problems[level-1]++;
	}
	
	public int getPoints(int level){
		return points[level-1];
	}
	
	public void incrementPoints(int level, int amount, int multiplier){
		totalPoints += amount * multiplier;
		points[level-1] += amount;
	}
	
	public int getTotalPoints(){
		return totalPoints;
	}
	
	public void incrementSuccesses(int level,int attempts){
		successAttempts[level-1] = (successAttempts[level-1]*successes[level-1]) + attempts; 
		successes[level-1]++;
		successAttempts[level-1] = successAttempts[level-1]/successes[level-1];
	}
	
	public void incrementFailures(int level,int attempts){
		failureAttempts[level-1] = (failureAttempts[level-1]*failures[level-1]) + attempts; 
		failures[level-1]++;
		failureAttempts[level-1] = failureAttempts[level-1]/failures[level-1];
	}
	
	public int getSuccess(int level){
		return successes[level-1];
	}
	
	public double getSuccessAttempts(int level){
		return successAttempts[level-1];
	}
	
	public int getFailures(int level){
		return failures[level-1];
	}
	
	public double getFailureAttempts(int level){
		return failureAttempts[level-1];
	}
}
