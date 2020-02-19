/* Thoughts:
1. find the 'R'
2. from the 'R' expand top and bottom, right and left 
3. add to total how many caps can be found
*/

const numRookCaptures = board => {
  let row, col, totalCaps
  for(let i = 0; i < board.length; i++){
    if(board[i].includes('R')) {
      col = board[i].indexOf('R')
      row = i
      break
    }
  }
  let upRow = row + 1
  let downRow = row - 1
  let leftCol = col - 1
  let rightCol = col + 1
  
  while(board[upRow] && board[upRow][col] == "."){
    upRow++
  }
  while (board[downRow] && board[downRow][col] == ".") {
    downRow--
  }
  while(board[row][leftCol] == ".") {
    leftCol--
  }
  while (board[row][rightCol] == ".") {
    rightCol++
  }
  
  return [board[upRow] ? board[upRow][col] : null , board[downRow] ? board[downRow][col] : null, board[row][leftCol], board[row][rightCol]].reduce((a,c) => {
    return c == "p" ? a + 1 : a
  }, 0)
  
};

const sample1 = [
  [".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", "p", ".", ".", ".", "."],
  [".", ".", ".", "R", ".", ".", ".", "p"],
  [".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", "p", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", "."]] 

// console.log(numRookCaptures(sample1))

let sample2 = [[".", ".", ".", ".", ".", ".", ".", "."],
[".", "p", "p", "p", "p", "p", ".", "."],
[".", "p", "p", "B", "p", "p", ".", "."],
[".", "p", "B", "R", "B", "p", ".", "."],
[".", "p", "p", "B", "p", "p", ".", "."],
[".", "p", "p", "p", "p", "p", ".", "."],
[".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", "."]]

// console.log(numRookCaptures(sample2))

let sample3 = 
  [[".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", "p", ".", ".", ".", "."],
    [".", ".", ".", "p", ".", ".", ".", "."],
    ["p", "p", ".", "R", ".", "p", "B", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", "B", ".", ".", ".", "."],
    [".", ".", ".", "p", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."]]
// console.log(numRookCaptures(sample3))

let sample4 = 
  [[".", ".", ".", ".", ".", ".", ".", "."], [".", ".", ".", ".", ".", ".", ".", "."], [".", ".", ".", ".", ".", ".", ".", "."], [".", ".", ".", "R", ".", ".", ".", "."], [".", ".", ".", ".", ".", ".", ".", "."], [".", ".", ".", ".", ".", ".", ".", "."], [".", ".", ".", ".", ".", ".", ".", "."], [".", ".", ".", ".", ".", ".", ".", "."]]

console.log(numRookCaptures(sample4))