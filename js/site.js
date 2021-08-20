// get user input
function getUserString() {
	// hide alert box and message
	document.getElementById("alert").classList.add("invisible");
	// get user string from the page
	let userString = document.getElementById("userString").value;

	if (userString.length >= 2) {
		// check for a palindrome
		let returnObj = checkForPalindrome(userString);
		// display message on the page
		displayMessage(returnObj);
	} else {
		alert("You must enter at least 2 characters to have it checked!");
	}
}

// check if string is a palindrome
function checkForPalindrome(userString) {
	userString = userString.toLowerCase();

	// remove spaces and special characters
	let regex = /[^a-z0-9]/gi;
	userString = userString.replace(regex, "");

	let revString = [];
	let returnObj = {};

	for (let index = userString.length - 1; index >= 0; index--) {
		revString += userString[index];

		if (revString == userString) {
			returnObj.msg = "Well done! You entered a palindrome!";
		} else {
			returnObj.msg = "Sorry! You did not enter a palindrome!";
		}

		returnObj.reversed = revString;
	}

	return returnObj;
}

// display a message on the page
function displayMessage(returnObj) {
	document.getElementById("alertHeader").innerHTML = returnObj.msg;
	document.getElementById(
		"msg"
	).innerHTML = `Your phrase reversed is: ${returnObj.reversed}`;
	document.getElementById("alert").classList.remove("invisible");
}
