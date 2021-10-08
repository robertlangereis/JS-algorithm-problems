// describe("Reverse Arrays", () => {
//     it("Should reverse arrays", () => {
//      assert.deepEqual(reverseArray([1, 2, 3, 4]), [4, 3, 2, 1]);
//      assert.deepEqual(reverseArray([1, 2, 3, 4, 5]), [5, 4, 3, 2, 1]);
//     });
//    });

const reverseArrayOrder = (array) =>{
    const splitArray = array.reverse().join();
    return console.log('splitArray', [splitArray]);
}

reverseArrayOrder([1, 2, 3, 4])
reverseArrayOrder([1, 2, 3, 4, 5])