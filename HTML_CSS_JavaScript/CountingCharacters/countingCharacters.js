/*
		function countingCharacters(stringToCount){
			return stringToCount;
		}

		var characters = "I would like to learn the every aspects of programmming language practically and theoretically!!!"

		alert(countingCharacters(characters.length));

		*/



/*
		function countingCharacters(stringToCount){

		    // The length property has been mentioned in
		    // the Logging Leter Exercise in lesson 4
		    console.log(stringToCount + " has " + stringToCount.length + " characters.");
		}

		countingCharacters("Cake");
		
		var portalString = "The cake is a lie";
		countingCharacters(portalString);
*/



/*
		function countingCharacters2(stringToCount, characterToFind){
		    var characterCount = 0;
		    for(characterPosition = 0; characterPosition < stringToCount.length; characterPosition++) {
		        if(stringToCount[characterPosition] == characterToFind){
		            characterCount++;
		        }
		    }

		    console.log("String to search in: " + stringToCount);
		    console.log("Character to find: " + characterToFind);
		    console.log("Number of times the character appears: " + characterCount);
		}

		countingCharacters2("xxaxxxbxx", "x");
*/



/*
		function countingCharacters3(str, search){
			var count = 0;
			var numChars = search.length;

			var lastIndex = str.length - numChars;

			for(var index = 0; index <= lastIndex; index++) {
				var current = str.substring(index, index + numChars);
				if(current == search) {
					count++;
				}
			}

			console.log("String to search in: " + str);
			console.log("Characters to find: " + search);
			console.log("Number of times the character appears: " + count);
		}

		countingCharacters3("xxaxxxbxx", "xx");
*/

		function countingCharacters4(str, search){
			var count = 0;
			var numChars = search.length;

			var lastIndex = str.length - numChars;

			for(var index = 0; index <= lastIndex; index++) {
				var current = str.substring(index, index + numChars); // This is search expected to be found
				if(current == search) {
					count++;
				}
			}
			
			return count;
		}

		// countingCharacters4("xxaxxxbxx", "xx");
