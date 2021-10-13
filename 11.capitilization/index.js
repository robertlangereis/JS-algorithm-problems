// describe("Capitalization", () => {
//  it("Should capitalize phrase", () => {
//   assert.equal(capitalize("hello world"), "Hello World");
//  });
// });

const capitalization = (string) => {
	const newArray = []
	const wordsSplitArray = string.split(' ')
	wordsSplitArray.forEach((item) => {
		const splitWord = item.split('')
		const capilizedWord = []
		splitWord.forEach((letter, index) => {
			if (index === 0) capilizedWord.push(letter.toUpperCase())
			else capilizedWord.push(letter)
		})
		newArray.unshift(capilizedWord.join(''))
	})
	return console.log('newArray', newArray.reverse().join(' '))
}

capitalization('hello world')
