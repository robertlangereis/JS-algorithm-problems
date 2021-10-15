// describe("Mean", () => {
//  it("Should implement mean", () => {
//   assert.equal(Stats.round(stat1.mean()), 3.43);
//   assert.equal(Stats.round(stat2.mean()), 2.5);
//  });
// });
// describe("Median", () => {
//  it("Should implement median", () => {
//   assert.equal(stat1.median(), 4);
//   assert.equal(stat2.median(), 2.5);
//  });
// });
// describe("Mode", () => {
//  it("Should implement mode", () => {
//   assert.deepEqual(stat1.mode(), [4, 5]);
//   assert.deepEqual(stat2.mode(), []);
//  });
// });

const mean = (array) => {
	const sumArray = array.reduce((acc, number) => acc + number, 0)
	const mean = sumArray / array.length
	return console.log('mean', mean.toFixed(2))
}

const median = (array) => {
	const sort = array.sort()
	const middle = sort.length / 2

	const roundedUp = Math.ceil(middle)
	if (middle % 1 != 0) return console.log(sort[roundedUp])

	const sumMiddleNumbers = sort[middle - 1] + sort[middle]
	return console.log('median', sumMiddleNumbers / 2)
}
const mode = (array) => {
	const table = {}
	array.forEach((number) => {
		if (!table[number]) table[number] = 0
		table[number]++
	})

	let modes = []
	let max = 0
	for (const key in table) {
		const value = parseFloat(key)
		const count = table[key]
		if (count > max) {
			modes = [value]
			max = count
		} else if (count === max) modes.push(value)
	}

	if (modes.length === Object.keys(table).length) modes = []

	return console.log('modes', modes)
}

mean([1, 2, 3, 4, 4, 5, 5])
mean([1, 1, 2, 2, 3, 3, 4, 4])
median([1, 2, 3, 4, 4, 5, 5])
median([1, 1, 2, 2, 3, 3, 4, 4])
mode([1, 2, 3, 4, 4, 5, 5])
mode([1, 1, 2, 2, 3, 3, 4, 4])
