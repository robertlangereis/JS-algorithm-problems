// describe("Fibonacci", () => {
//     it("Should implement fibonacci", () => {
//      assert.equal(fibonacci(1), 1);
//      assert.equal(fibonacci(2), 1);
//      assert.equal(fibonacci(3), 2);
//      assert.equal(fibonacci(6), 8);
//      assert.equal(fibonacci(10), 55);
//     });
//    });

const fibonacci = (index) => {
	let prevNumber = 0
	for (let count = 0; count <= index; count++) {
		prevNumber += count
	}
	return console.log(index > 0 ? prevNumber : 'index is not valid')
}
fibonacci(0)
