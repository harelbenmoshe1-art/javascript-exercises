const pascal = function(n, currentRow=[1]) {
  if (n === 1) {
    return currentRow;
  }

  let nextRow = [];

  nextRow.push(1);
  for (let i = 0; i < currentRow.length - 1; i++) { nextRow.push(currentRow[i] + currentRow[i+1]); }
  nextRow.push(1);

  return pascal(n-1, nextRow);
};

// Do not edit below this line
module.exports = pascal;
