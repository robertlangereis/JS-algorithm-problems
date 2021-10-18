// describe("Two Sum", () => {
//     it("Should implement two sum", () => {
//      assert.deepEqual(twoSum([1, 2, 2, 3, 4], 4), [[2, 2], [3, 1]]);
//     });
//    });

const twoSum = (array, sumNumber) => {
	const store = []
	const pairs = []
	array.forEach((number) => {
        const counterpartNumber = sumNumber - number
        store.indexOf(counterpartNumber) !== -1 && pairs.push([number, counterpartNumber])
        store.push(number)
	})
	return console.log('pairs', pairs)
}

twoSum([1, 2, 2, 3, 4], 4)
