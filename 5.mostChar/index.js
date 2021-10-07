/*
Given a string of characters, return the character that appears the most often.
*/

const mostFoundChar = (string) => {
	const splitStringArray = string.toLowerCase().split('')
	const duplicates = splitStringArray.filter(
		(char, index) => splitStringArray.indexOf(char) !== index
	)
	const mostFoundChars = duplicates.reduce((map, val) => {
		map[val] = (map[val] || 1) + 1
		return map
	}, {})
	const mostFoundCharArray = Object.values(mostFoundChars)
	let maxArrayValue = Math.max(...mostFoundCharArray)
	let duplicateCounter = 0
	mostFoundCharArray.forEach(
		(charQuant) => charQuant === maxArrayValue && duplicateCounter++
	)
	if (duplicateCounter > 1)
		return console.log(
			`There were multiple character found ${
				Object.values(mostFoundChars)[0]
			} number of times, being: ${Object.keys(mostFoundChars).join(', ')}`
		)
	const getKeysByValue = (object, value) => {
		return console.log(
			`${Object.keys(object).find(
				(key) => object[key] === value
			)} is the character that was found most often`
		)
	}
	if (!duplicates) return console.log('No duplicate characters found in string')
	else return getKeysByValue(mostFoundChars, maxArrayValue)
}

mostFoundChar('Hooiijj!')
/*
describe("Max Character", () => {
    it("Should return max character", () => {
     assert.equal(max("Hello World!"), "l");
    });
   });


   */
