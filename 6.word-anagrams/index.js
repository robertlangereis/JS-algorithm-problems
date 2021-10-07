// describe("Anagrams", () => {
//     it("Should implement anagrams", () => {
//      assert.equal(anagrams("hello world", "world hello"), true);
//      assert.equal(anagrams("hellow world", "hello there"), false);
//      assert.equal(anagrams("hellow world", "hello there!"), false);
//     });
//    });

const anagramChecker = (string1, string2) => {
	const splitString1Array = string1.split('')
	const splitString2Array = string2.split('')
	const charArrToObject = (array) =>
		array.reduce((map, val) => {
			map[val] = (map[val] || 1) + 1
			return map
		}, {})
	const string1Object = charArrToObject(splitString1Array)
	const string2Object = charArrToObject(splitString2Array)
	const orderingObjectByKey = (unordered) =>
		Object.keys(unordered)
			.sort()
			.reduce((obj, key) => {
				obj[key] = unordered[key]
				return obj
			}, {})
	const orderedObject1 = orderingObjectByKey(string1Object)
	const orderedObject2 = orderingObjectByKey(string2Object)

	if (splitString1Array.length !== splitString2Array.length)
		return console.log(
			`${false}: one of the strings given has more characters than the other string passed`
		)
	else if (JSON.stringify(orderedObject1) !== JSON.stringify(orderedObject2))
		return console.log(
			`${false}: both strings have the same amount of characters, but not in equal quantities per character`
		)
	else return console.log(`${true}: the strings passed are an anagram`)
}

anagramChecker('hello world', 'world hello')
anagramChecker('hellow world', 'world hello')
anagramChecker('hellow world', 'woorld hello')
