const pyramid = (steps) => {
	const stepArray = []
	for (let index = 1; index <= steps; index++) {
		if (index % 2 !== 0) {
			const hashSteps = '#'.repeat(index)
			const emptySpace = ' '
			const spaceSteps = emptySpace.repeat((steps - index) / 2)
			stepArray.push(`${spaceSteps}${hashSteps}${spaceSteps}\n`)
		}
	}
	console.log(stepArray.join(''))
}
pyramid(20)
