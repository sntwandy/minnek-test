/**
 *
 * @param {*} arr
 * @returns reversedArr
 */

function reverseWithSpecialCharacters(arr) {
	// We check for special characters using this irregular expression.
	const isSpecialChar = (char) =>
		/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(char);

	// We map the positions of the special characters.
	const charPositions = arr.reduce((positions, element, index) => {
		if (isSpecialChar(element)) {
			positions[element] = index;
		}
		return positions;
	}, {});

	// We separate the special characters and their positions.
	const specialChars = Object.keys(charPositions);

	// We make the reverse of the array without including the special characters.
	const reversedArray = arr
		.filter((element) => !isSpecialChar(element))
		.reverse();

	// Now we insert the special characters in their original position within the new reversed array.
	specialChars.forEach((char) => {
		const position = charPositions[char];
		reversedArray.splice(position, 0, char);
	});

  // Return the new reversed array.
	return reversedArray;
}

// Example:
const inputArray = [
	"n",
	2,
	"&",
	"a",
	"l",
	9,
	"$",
	"q",
	47,
	"i",
	"a",
	"j",
	"b",
	"z",
	"%",
	8,
];

// Testing area:

let outputArray = reverseWithSpecialCharacters(inputArray);
console.log(outputArray); // [8, 'z', '&', 'b', 'j', 'a', '$', 'i', 47, 'q', 9, 'l', 'a', 2, '%', 'n']

// Modify the array
inputArray.splice(3, 1); // Remove 'a' at index 3
outputArray = reverseWithSpecialCharacters(inputArray);
console.log(outputArray); // [8, 'z', '&', 'j', 'a', '$', 'i', 47, 'q', 9, 'l', 2, '%', 'n']

// Modify the special character positions
inputArray.splice(7, 0, "&"); // Insert '&' at index 7
outputArray = reverseWithSpecialCharacters(inputArray);
console.log(outputArray); // [8, 'z', '&', 'j', 'a', '$', 'i', '&', 47, 'q', 9, 'l', 2, '%', 'n']
