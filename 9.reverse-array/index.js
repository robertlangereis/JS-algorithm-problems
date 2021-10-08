// describe("Reverse Arrays", () => {
//     it("Should reverse arrays", () => {
//      assert.deepEqual(reverseArray([1, 2, 3, 4]), [4, 3, 2, 1]);
//      assert.deepEqual(reverseArray([1, 2, 3, 4, 5]), [5, 4, 3, 2, 1]);
//     });
//    });

// => simple solution using the reverse array method....
const reverseArrayOrder = (array) => {
	const splitArray = array.reverse()
	return console.log('splitArray', splitArray)
}

reverseArrayOrder([1, 2, 3, 4])
reverseArrayOrder([1, 2, 3, 4, 5])

// => if not allowed:
const reverseArrayOrder2 = (array) => {
	const newArray = []
	array.forEach((item) => {
		newArray.unshift(item)
	})
	return console.log('newArray', newArray)
}

reverseArrayOrder2([1, 2, 3, 4])
reverseArrayOrder2([1, 2, 3, 4, 5])
