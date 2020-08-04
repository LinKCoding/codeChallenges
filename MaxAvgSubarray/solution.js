const findMaxAverage =  (nums, k) => {
  let max = -Infinity

  // let index = 0
  // do {
  //   let currArr = nums.slice(index, index + k)
  //   max = Math.max(max, calcAverage(currArr))
  //   console.log(index, nums.length, k)
  //   index++
  // } while (index < nums.length - k + 1);

  for(let i = 0; i < nums.length - k + 1; i++) {
    let currArr = nums.slice(i, i + k)
    max = Math.max(max, calcAverage(currArr))
  }
  return max
};

function calcAverage(numArr){
  return numArr.reduce((a,c) => a + c) / numArr.length
}

// Input: [1, 12, -5, -6, 50, 3], k = 4
// Output: 12.75
// Explanation: Maximum average is(12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75

let testArr1 = [1, 12, -5, -6, 50, 3]
let testK1 = 4 

console.log(findMaxAverage(testArr1, testK1));

let testArr2 = [5]
let testK2 = 1

console.log(findMaxAverage(testArr2, testK2));

let testArr3 = [5, 10, 15]
let testK3 = 1

console.log(findMaxAverage(testArr3, testK3));