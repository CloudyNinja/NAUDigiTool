/*
 * Created on Jun 27, 2003
 *
 * To change the template for this generated file go to
 * Window>Preferences>Java>Code Generation>Code and Comments
 */
package tracker;

//import java.util.StringTokenizer;

/**,
 * @author Sean Collins
 *
 * To change the template for this generated type comment go to
 * Window>Preferences>Java>Code Generation>Code and Comments
 */
public class KarnaughRecord extends UserRecord {

	private static String[] LABELS = null;
	private static int NUM_OF_LEVELS = 50;
	//private static int NUM_OF_ERRORS = 12;
	private int logins = 0;
	private int totalPoints = 0;
	private int[] points = new int[NUM_OF_LEVELS];
	private int[] problems = new int[NUM_OF_LEVELS];
	
	private int[] successes = new int[NUM_OF_LEVELS];
	private double[] successAttempts = new double[NUM_OF_LEVELS];
	private int[] failures = new int[NUM_OF_LEVELS];
	private double[] failureAttempts = new double[NUM_OF_LEVELS];
	
	//private int[][] levelInfo = new int[NUM_OF_LEVELS][NUM_OF_ERRORS];
	
	public KarnaughRecord(String id) {
		super(id);
		if (LABELS == null)
			setLabels();
			
		/*
		for(int i=0;i<levelInfo.length;i++){
			for(int j=0;j<levelInfo[0].length;j++)
				levelInfo[i][j] = 0;
		}
		*/
	}
	
	public static void setLabels(){
		LABELS = new String[NUM_OF_LEVELS * 6 + 3];
		LABELS[0] = "User ID";
		LABELS[1] = "Logins";
		LABELS[2] = "Total Points";
 		for(int i=0;i<NUM_OF_LEVELS;i++){
			LABELS[(i*6) + 3] = "Lv" + (i+1) + "-points";
			LABELS[(i*6) + 4] = "Lv" + (i+1) + "-problems attempted";
			LABELS[(i*6) + 5] = "Lv" + (i+1) + "-sucesses";
			LABELS[(i*6) + 6] = "Lv" + (i+1) + "-average attempted answers per success";
			LABELS[(i*6) + 7] = "Lv" + (i+1) + "-failures";
			LABELS[(i*6) + 8] = "Lv" + (i+1) + "-average attempted answers per failure";
			//LABELS[(i*7) + 5] = "lv" + (i+1) + "-errors";
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
			int level = (int) ((column-3)/7);
			int field = (int) (column-3-(level*7));
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
			//else if (field == 7)
			//	setLevelInfo(level,data);
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
			int level = (int) ((column-3)/7);
			int field = (int) (column-3-(level*7));
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
			//else
			//	return getLevelInfo(level);
		}
	}
	
	/*
	private void setLevelInfo(int level,String info){
		level--;
		StringTokenizer st = new StringTokenizer(info,":");
		for(int i = 0;i < levelInfo[level].length;i++)
			levelInfo[level][i] = Integer.parseInt(st.nextToken());
	}
	
	private String getLevelInfo(int level){
		//level--;
		StringBuffer buffer = new StringBuffer();
		buffer.append(levelInfo[level][0]);
		for(int i = 1; i < NUM_OF_ERRORS;i++){
			buffer.append(":").append(levelInfo[level][i]);
		}
		return buffer.toString();
	}
	
	public int getData(int level,int field){
		return levelInfo[level-1][field-1];
	}
	
	public void incrementData(int level,int field){
		levelInfo[level-1][field-1]++;
	}
	
	public int getDCOverflow(int level){
		return getData(level,1);
	}
	
	public void incrementDCOverflow(int level){
		incrementData(level,1);
	}
	
	public int getDCUnderflow(int level){
		return getData(level,2);
	}
	
	public void incrementDCUnderflow(int level){
		incrementData(level,2);
	}
	
	public int getGreyCodeError(int level){
		return getData(level,3);
	}
	
	public void incrementGreyCodeError(int level){
		incrementData(level,3);
	}
	
	public int getInvalidSelection(int level){
		return getData(level,4);
	}
	
	public void incrementInvalidSelection(int level){
		incrementData(level,4);
	}
	
	public int getInvalidSize(int level){
		return getData(level,5);
	}
	
	public void incrementInvalidSize(int level){
		incrementData(level,5);
	}
	
	public int getNotMinimized(int level){
		return getData(level,6);
	}
	
	public void incrementNotMinimized(int level){
		incrementData(level,6);
	}
	
	public int getNotSelected(int level){
		return getData(level,7);
	}
	
	public void incrementNotSelected(int level){
		incrementData(level,7);
	}
	
	public int getOrientaionError(int level){
		return getData(level,8);
	}
	
	public void incrementOrientationError(int level){
		incrementData(level,8);
	}
	
	public int getSpansCornerError(int level){
		return getData(level,9);
	}
	
	public void incrementSpansCornerError(int level){
		incrementData(level,9);
	}
	
	public int getSpansEdgeError(int level){
		return getData(level,10);
	}
	
	public void incrementSpansEdgeError(int level){
		incrementData(level,10);
	}
	
	public int getSpansLayerError(int level){
		return getData(level,11);
	}
	
	public void incrementSpansLayerError(int level){
		incrementData(level,11);
	}
	
	public int getTypoError(int level){
		return getData(level,12);
	}
	
	public void incrementTypoError(int level){
		incrementData(level,12);
	}
	*/
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
		points[level-1] += amount * multiplier;
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