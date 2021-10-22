const matrixSpiral = number => {
    let counter = 1;
    let startRow = 0
    let endRow = number - 1;
    let startColumn = 0
    let endColumn = number - 1;
  
    const matrix = [];
    for (let i = 0; i < number; i++) matrix.push([]);
  
    while (startColumn <= endColumn && startRow <= endRow) {
      // Start Row
      for (let i = startColumn; i <= endColumn; i++) {
        matrix[startRow][i] = counter;
        counter++;
      }
      startRow++;
  
      // End Column
      for (let i = startRow; i <= endRow; i++) {
        matrix[i][endColumn] = counter;
        counter++;
      }
      endColumn--;
  
      // End Row
      for (let i = endColumn; i >= startColumn; i--) {
        matrix[endRow][i] = counter;
        counter++;
      }
      endRow--;
  
      // Start Column
      for (let i = endRow; i >= startRow; i--) {
        matrix[i][startColumn] = counter;
        counter++;
      }
      startColumn++;
    }
  
    return console.log(matrix.join('\n'));
}

matrixSpiral(8)
