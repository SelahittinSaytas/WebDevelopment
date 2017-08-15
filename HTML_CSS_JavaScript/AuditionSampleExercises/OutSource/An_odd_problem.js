/*So I've worked out my initial problem, but I've hit 
something fairly weird.  Everything works great, 
including the html display, so long as num1>9.  
for any start value less than 10, e.g. 9, I have 
to enter it as 09.  Otherwise it only returns this 
first character.  Simpler pages I've made as a test 
(just adding num1+num2) with the same parameter validation 
script don't have this problem.  
Is this an issue with writing my results directly 
to a string without using an array as an intermediate? 
*/    
	
	
	function ranger(num1, num2, step){
    alert("function called" + num1+ " " + num2);//for debugging, verifies values passed.  
    var resultString = " ";
    for(i=num1; i<num2; i++){
        if(i%2==0 && (i-num1)%step==0){
            resultString +=i+ ", ";
            }
        }
    alert("resultFinal is" + resultString); //for debugging
    return resultString;  /*will not pass into browser if num1 <10 unless 
	entered with a zer first ie num1=4 must be num1=04*/
}