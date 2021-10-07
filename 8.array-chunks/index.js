// describe("Array Chunking", () => {
//     it("Should implement array chunking", () => {
//      assert.deepEqual(chunk([1, 2, 3, 4], 2), [[1, 2], [3, 4]]);
//      assert.deepEqual(chunk([1, 2, 3, 4], 3), [[1, 2, 3], [4]]);
//      assert.deepEqual(chunk([1, 2, 3, 4], 5), [[1, 2, 3, 4]]);
//     });
//    });

const breakArrayInChunks = (array, chunkRange) => {
	const newArray = []
	let indexOfChunkRange = 0
	for (let index = 0; index < array.length / chunkRange; index++) {
		const arraySlice = array.slice(
			indexOfChunkRange,
			indexOfChunkRange + chunkRange
		)
		indexOfChunkRange += chunkRange
		newArray.push(arraySlice)
		console.log('arraySlice', arraySlice)
	}
	return console.log('newArray', newArray)
}

breakArrayInChunks([1, 2, 3, 4], 5)
