/*
Create the JavaScript File

Now that we have the form set up, let us add the JavaScript to validate input and show the table.

Before we write the code, let us identify the functions that we will need:

clearErrors()

Function's purpose: Resetting form fields to their natural state
Input: None
Output: None
*/

/*
Clearing Errors

We will be using the document.forms collection to loop through our form components. Since we have a name on our form, we are using the form's name as our index in the brackets. 

When we have an error, we will be adding the Bootstrap has-error class to the related form-group. We will use the parentElement object to look at the parent of the <input> control that we are validating. When we check the parent element, we are looking at its class attribute, specifically checking to see if it contains the string "has-". The indexOf() function indicates the position of where the text appears, and if the text is not found, indexOf() returns the value of -1.

When we are clearing errors, we need to remove the has-error CSS class. We will reset the parent's CSS class to simply "form-group".
*/

function clearErrors(){
	for(var loopCounter = 0; loopCounter < document.forms["numberFun"].elements.length; loopCounter++){
		if(document.forms["numberFun"].elements[loopCounter].parentElement.className.indexOf("has-") != -1){
			document.forms["numberFun"].elements[loopCounter].parentElement.className = "form-group";
		}
	}
}

/*
Resetting the Form

When we reset the form, we need to do the following:

Clear the errors
Clear the values in the <input> elements
Hide the table of results
In this function, we will use the clearErrors() function we just created. We will also be calling a function called "focus()", which allows us to put the cursor in a control and make it the active control. In this case, it creates a good user experience in that once the user clears the form, their cursor will return to the num1 textbox.
*/

function resetForm(){
	clearErrors();
	document.forms["numberFun"]["num1"].value = "";
	document.forms["numberFun"]["num2"].value = "";
	document.getElementById("results").style.display = "none";
	document.getElementById("submitButton").innerText = "SUBMIT";
	document.forms["numberFun"]["num1"].focus();
}

/*
Validating the Form

In validating a form, you are checking to make sure that the user input expected values. In this case, we want to make sure that the following occurs:

num1 and num2 are filled in (required).
num1 and num2 are numbers - or at least can be treated like numbers in JavaScript.
In this function, we will use the clearErrors() function so that we can reset our errors state to a cleared state.
We will then use value to get the entered value from the <input> boxes. If those values are either empty ("") or not a number (isNaN()), then we will:

Display an alert() message stating that the respective input box needs to be a number.
Add the Bootstrap has-error class to the form-group.
Set the focus() to the input box in error.
Return "false" to prevent form submission.
If all fields are validated successfully, then we will show the results table with the mathematical results.
*/

// isNaN - The NaN (Not-a-Number) is a weirdo Global Object in javascript frequently returned when some mathematical operation failed
// You wanted to check if NaN == null which results false . Hovewer even NaN == NaN results with false
// A Simple way to find out if variable is NaN is an global function isNaN()

function validateItems(){
	clearErrors();
	var num1 = document.forms["numberFun"]["num1"].value;
	var num2 = document.forms["numberFun"]["num2"].value;

	if(num1 == "" || isNaN(num1)){
		alert("Num1 must be filled in with a number.");
		document.forms["numberFun"]["num1"].parentElement.className = "form-group has-error";
		document.forms["numberFun"]["num1"].focus();
		return false;
	}

	if(num2 == "" || isNaN(num2)){
		alert("Num2 must be filled in with a number.");
		document.forms["numberFun"]["num2"].parentElement.className = "form-group has-error";
		document.forms["numberFun"]["num2"].focus();
		return false;
	}

	document.getElementById("results").style.display = "block";
	document.getElementById("submitButton").innerText = "RECALCULATE";
	document.getElementById("addResult").innerText = Number(num1) + Number(num2);
	document.getElementById("subtractResult").innerText = num1 - num2;
	document.getElementById("multiplyResult").innerText = num1 * num2;
	document.getElementById("divideResult").innerText = num1 / num2;
	document.getElementById("moduleResult").innerText = num1 % num2;

	// We are returning false so that the form doesn't submit
	// and so that we can see the results

	return false;
}

/*
We are returning false at the end so that we can see the table of results. If you change this to true,
the form would submit to whatever you set for the form's action attribute. Since we are only focusing on
form validation in this example, we are returning false and keeping our output on this page. Typically,
form data gets submitted to some other page on a server, which then does things with the form data and may return a response.

Run the Code

Preview clickToAddItems.html in the Chrome browser.

Answer the following questions:

What happens when you leave num1 or num2 empty?
For browsers that do not support the input type of "number," what happens when you enter in alphanumeric (letters and numbers) values?
What happens if you enter "0" for num2? How does JavaScript handle the divide-by-zero situation?
*/








