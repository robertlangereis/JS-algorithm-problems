// describe("Reverse Words", () => {
//     it("Should reverse words", () => {
//      assert.equal(reverseWords("I love JavaScript!"), "I evol !tpircSavaJ");
//     });
//    });

const reverseWords = (array) => {
	const newArray = []
	const wordsSplitArray = array.split(' ')
	wordsSplitArray.forEach((item) => {
		const wordReversed = item
			.split('')
			.reverse()
			.join('')
		newArray.unshift(wordReversed)
	})
	return console.log('newArray', newArray.reverse().join(' '))
}

reverseWords('I love JavaScript!')
