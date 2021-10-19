// describe("Max Profit", () => {
//     it("Should return minimum buy price and maximum sell price", () => {
//      assert.deepEqual(maxProfit([1, 2, 3, 4, 5]), [1, 5]);
//      assert.deepEqual(maxProfit([2, 1, 5, 3, 4]), [1, 5]);
//      assert.deepEqual(maxProfit([2, 10, 1, 3]), [2, 10]);
//      assert.deepEqual(maxProfit([2, 1, 2, 11]), [1, 11]);
//    });

const maxProfit = (array) => {
	let lowestBuyPrice
	let highestSellPrice = 0
	array.forEach((stock) => {
		if (
			!lowestBuyPrice ||
			(array.indexOf(lowestBuyPrice) > array.indexOf(highestSellPrice) &&
				stock < lowestBuyPrice)
		)
			lowestBuyPrice = stock
		else if (stock > highestSellPrice) highestSellPrice = stock
	})
	return console.log([lowestBuyPrice, highestSellPrice])
}
maxProfit([1, 2, 3, 4, 5])
maxProfit([2, 1, 5, 3, 4])
maxProfit([2, 10, 1, 3])
maxProfit([2, 1, 2, 11])
