// describe("Steps", () => {
//     it("Should print steps", () => {
//      assert.equal(steps(3), "#  \n## \n###\n");
//      assert.equal(_steps(3), "#  \n## \n###\n");
//     });
//    });

const staircase = (steps)=>{
    const stepArray = []
    for (let index = 1; index <= steps; index++) {
        const hashSteps = '#'.repeat(index)
        stepArray.push(`${hashSteps} \n`)
    }
    console.log(stepArray.join(''));
}
staircase(100)