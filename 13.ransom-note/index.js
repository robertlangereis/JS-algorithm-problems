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

const magazine =
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'

const decipherRansomNote = (ransomString, magazine) => {
	const arrayOfMagazineWords = magazine.split(' ')
	const arrayOfRansomStringWords = ransomString.split(' ')
	let magazineUsed = true
	const newArray = arrayOfRansomStringWords.map((ransomWord, index) =>
		arrayOfMagazineWords.find((magazineWord) => ransomWord === magazineWord)
	)
	newArray.forEach((word) => {
		var index = arrayOfMagazineWords.indexOf(word)
		if (index > -1) {
			arrayOfMagazineWords.splice(index, 1)
		} else magazineUsed = false
	})
	console.log('magazineUsed', magazineUsed)
	return magazineUsed
}

decipherRansomNote('sit ad est sint', magazine) // should be true
decipherRansomNote('sit ad est love', magazine) // should be false
decipherRansomNote('sit ad est in in', magazine) // should be true
decipherRansomNote('sit ad est in in in in', magazine) // should be false
