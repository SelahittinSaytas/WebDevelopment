function clearErrors(){
	for(var loopCounter = 0; loopCounter < document.forms["myForm"].elements.length; loopCounter++){
		if(document.forms["myForm"].elements[loopCounter].parentElement.className.indexOf("has-") != -1){
			document.forms["myForm"].elements[loopCounter].parentElement.className = "form-group";
		}
	}
}

function toFindEven(startNum, endNum, stepNum){
	var evenNumbers = [];
	startNum = parseInt(document.forms["myForm"]["startingNumber"].value);
	endNum = parseInt(document.forms["myForm"]["endingNumber"].value);
	stepNum = parseInt(document.forms["myForm"]["stepNumber"].value);
	for(var index = startNum; index < endNum; index += stepNum){
		if(index % 2 == 0){
			evenNumbers.push(index);
		}
	}
	return evenNumbers;
}

function validateItems(){
	clearErrors();
	toFindEven();

	var startingNumber = parseInt(document.forms["myForm"]["startingNumber"].value);
	var endingNumber = parseInt(document.forms["myForm"]["endingNumber"].value);
	var stepNumber = parseInt(document.forms["myForm"]["stepNumber"].value);

	if(startingNumber == "" || isNaN(startingNumber)){
		alert("Starting Number must be filled with a numeric value!");
		document.forms["myForm"]["startingNumber"].parentElement.className = "form-group has-error";
		document.forms["myForm"]["startingNumber"].focus();
		return false;
	}

	if(endingNumber == "" || isNaN(endingNumber) || endingNumber <= startingNumber){
		alert("Ending Number must be filled with a numeric value!");
		document.forms["myForm"]["endingNumber"].parentElement.className = "form-group has-error";
		document.forms["myForm"]["endingNumber"].focus();
		return false;
	}

	if(stepNumber == "" || isNaN(stepNumber) || stepNumber <= 0){
		alert("Step Number must be filled with a numeric value!");
		document.forms["myForm"]["stepNumber"].parentElement.className = "form-group has-error";
		document.forms["myForm"]["stepNumber"].focus();
		return false;
	}

	document.getElementById("results").style.display = "block";
	document.getElementById("resultCaption").innerText = "Here are the even numbers between " + startingNumber + " and " + endingNumber + " by " + stepNumber + "'s";
	document.getElementById("evenNumberResult").innerText = toFindEven(startingNumber, endingNumber, stepNumber);

	return false;
}