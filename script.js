/*- Create a web page that asks a user how many subjects they take, and what marks they got in each subject.
 The application should then output their results*/
function results(){
	var marks;
	results = 0;
	var grade;
	sum = 0;
	//Takes in user input for number of subjects and marks then calculates the results
	var subjNum = parseInt(prompt("How many subjects did you have?"));
	for(i=1;i<subjNum+1;i++){
		marks = parseFloat(prompt("What marks did you get for subject "+i+"?"));
		document.getElementById("main").innerHTML+="Your result for subject "+i+" is: "+marks+"<br />";
		sum+=marks;
		results = sum/subjNum;
	}
	//Calculates the Grade
	if(results>=90){
				grade = "A (Excellent)";
			}
		else if(results<90 && results>=80){
					grade = "B (Very Good)";
			}
		else if(results<80 && results>=70){
					grade = "C (Good)";
			}
		else if(results<70 && results>=60){
					grade = "D (Satisfactory)";
			}
		else if(results<60 && results>=50){
					grade = "E (Sufficient)";
			}
		else if(results<50 && results>=40){
					grade = "A (Excellent)";
			}
		else{
					grade = "Failed";
			}
	//Prints out the result and Grade
	document.getElementById("main").innerHTML="RESULTS"+"<br />";
	document.getElementById("main").innerHTML+="<br />"+"Your final result for all subjects is: "+results+"<br />";
	document.getElementById("main").innerHTML+="<br />"+"Your grade for this semester is: "+grade;
	
}