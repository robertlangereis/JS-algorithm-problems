// describe("Sieve of Eratosthenes", () => {
//     it("Should return all prime numbers", () => {
//      assert.deepEqual(primes(10), [2, 3, 5, 7]);
//     });
//    });

const sieveOfErasthenes = (number) => {
	const primeNumbers = [2, 3, 5, 7]
	for (let countNumber = 0; countNumber <= number; countNumber++) {
		if (
			primeNumbers.indexOf(countNumber) === -1 &&
			countNumber > 1 &&
			countNumber % 2 !== 0 &&
			countNumber % 3 !== 0 &&
			countNumber % 5 !== 0 &&
			countNumber % 7 !== 0
		)
			primeNumbers.push(countNumber)
	}

	return console.log(primeNumbers)
}
sieveOfErasthenes(79)