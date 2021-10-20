// describe("Memoized Fibonacci", () => {
//     it("Should implement memoized fibonacci", () => {
//      assert.equal(fibonacci(6), 8);
//      assert.equal(fibonacci(10), 55);
//     });
//    });

const memoizedFibonacci = () => {
	const cache = {}
	console.log('cache', cache);
	return (index) => {
		if (index in cache) {
			return console.log('fetched from cache ', cache[index])
		} else {
			let prevNumber = 0
			for (let count = 0; count <= index; count++) {
				prevNumber += count
			}
            cache[index] = prevNumber
            console.log('cache', cache);
            return index > 0 ? console.log(prevNumber): console.log('index is not valid')
		}
	}
}
const newMemoizedFibonacci = memoizedFibonacci()
newMemoizedFibonacci(2)
newMemoizedFibonacci(3)
newMemoizedFibonacci(6)
newMemoizedFibonacci(8)
newMemoizedFibonacci(10)
newMemoizedFibonacci(2)
newMemoizedFibonacci(3)
newMemoizedFibonacci(6)
newMemoizedFibonacci(8)
newMemoizedFibonacci(10)
