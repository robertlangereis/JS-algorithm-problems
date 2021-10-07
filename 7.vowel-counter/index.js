// describe("Vowels", () => {
//     it("Should count vowels", () => {
//      assert.equal(vowels("hello world"), 3);
//     });
//    });

const vowelCounter = (string) => {
	let vowelCount = 0
	const stringArray = string.toLowerCase().split('')
	const vowelsInAlphabet = ['a', 'e', 'i', 'o', 'u']
	stringArray.forEach((character) => {
		vowelsInAlphabet.find((vowel) => vowel === character) && vowelCount++
	})
	return console.log('vowelCount', vowelCount)
}
vowelCounter('hello world')
