// describe("Caesar Cipher", () => {
//     it("Should shift to the right", () => {
//      assert.equal(caesarCipher("I love JavaScript!", 100), "E hkra FwrwOynelp!");
//     });
//    it("Should shift to the left", () => {
//      assert.equal(caesarCipher("I love JavaScript!", -100), "M pszi NezeWgvmtx!");
//     });
//    });

const caeserCipher = (stringPhrase, integer) => {
	const alphabet = [
		'A',
		'B',
		'C',
		'D',
		'E',
		'F',
		'G',
		'H',
		'I',
		'J',
		'K',
		'L',
		'M',
		'N',
		'O',
		'P',
		'Q',
		'R',
		'S',
		'T',
		'U',
		'V',
		'W',
		'X',
		'Y',
		'Z',
	]
	const array = []
	const splitStringPhrase = stringPhrase.split('')
	const calculateNewAlphabetPosition = (index, integer) => {
		if (integer < 0) return ((index + integer) % 26) + 26
		else return (index + integer) % 26
	}
	splitStringPhrase.forEach((character) => {
		let alphabetIndex = 0
		const myRegEx = /^[a-z|A-Z]+$/i
		if (!myRegEx.test(character)) return array.push(character)
		alphabet.find((letter, index) => {
			if (letter === character.toUpperCase()) return (alphabetIndex = index)
			else return
		})
		const caesarCorrectedLetter = calculateNewAlphabetPosition(
			alphabetIndex,
			integer
		)
		if (character == character.toUpperCase())
			return array.push(alphabet[caesarCorrectedLetter])
		else array.push(alphabet[caesarCorrectedLetter].toLowerCase())
	})
	console.log('array.join()', array.join(''))
	return array.join('')
}

caeserCipher("I love JavaScript!", -100)