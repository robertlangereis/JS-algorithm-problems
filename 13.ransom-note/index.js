const magazine =
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'

// ATTEMPT 1

// const decipherRansomNote = (ransomString, magazine) => {
// 	const arrayOfMagazineWords = magazine.split(' ')
// 	const arrayOfRansomStringWords = ransomString.split(' ')
// 	let magazineUsed = true
// 	const newArray = arrayOfRansomStringWords.map((ransomWord, index) =>
// 		arrayOfMagazineWords.find((magazineWord) => ransomWord === magazineWord)
// 	)
// 	newArray.forEach((word) => {
// 		var index = arrayOfMagazineWords.indexOf(word)
// 		if (index > -1) {
// 			arrayOfMagazineWords.splice(index, 1)
// 		} else magazineUsed = false
// 	})
// 	console.log('magazineUsed', magazineUsed)
// 	return magazineUsed
// }

// decipherRansomNote('sit ad est sint', magazine) // should be true
// decipherRansomNote('sit ad est love', magazine) // should be false
// decipherRansomNote('sit ad est in in', magazine) // should be true
// decipherRansomNote('sit ad est in in in in', magazine) // should be false

///////////

/* An obvious solution is to split the magazine words and ransom words into arrays of individual words, and then check every ransom word against every magazine word. However, this approach scales in quadratic time, or O(n * m) which is not performant. If we create a table of magazine words first, and then check each ransom word against this table, we can achieve linear time. This is because table lookup in map objects occurs in constant time. However, we will need to sacrifice space complexity in order to hold the map object in memory. */

const decipherRansomNote = (ransomString, magazine) => {
	const arrayOfMagazineWords = magazine.split(' ')
	const arrayOfRansomStringWords = ransomString.split(' ')

	let magazineUsed = true

	const magazineObject = {}

	//place every word from magazine in object (as a table), counting the number of times the word occurs
	arrayOfMagazineWords.forEach((word) => {
		if (!magazineObject[word]) magazineObject[word] = 0
		magazineObject[word]++
	})

	// check all words used from the ransomletter against the table 
	arrayOfRansomStringWords.forEach(ransomWord =>{
		if(!magazineObject[ransomWord] || magazineObject[ransomWord] === 0 ) magazineUsed = false
		if(magazineObject[ransomWord])magazineObject[ransomWord] --;
	})

	return console.log('magazineUsed', magazineUsed);
}
decipherRansomNote('sit ad est sint', magazine) // should be true
decipherRansomNote('sit ad est love', magazine) // should be false
decipherRansomNote('sit ad est in in', magazine) // should be true
decipherRansomNote('sit ad est in in in in', magazine) // should be false

// describe("Ransom Note", () => {
//  it("Should return true", () => {
//   assert.equal(ransomNote("sit ad est sint", magazine), true);
//  });
// it("Should return false", () => {
//   assert.equal(ransomNote("sit ad est love", magazine), false);
//  });
// it("Should return true", () => {
//   assert.equal(ransomNote("sit ad est sint in in", magazine), true);
//  });
// it("Should return false", () => {
//   assert.equal(ransomNote("sit ad est sint in in in in", magazine), false);
//  });
// });