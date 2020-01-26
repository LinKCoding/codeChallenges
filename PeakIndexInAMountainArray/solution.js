/* Thoughts
Since it's always going to be a "mountain"
And there's only one peak, which will always be greater than the element before and after
return the index as soon as it's found
(though can a peak exist at the end?)
*/

// 1st attempt
// const peakIndexInMountainArray = A => {
//   for(let i = 1; i < A.length; i++) {
//     if(A[i] > A[i - 1] && A[i] > A[i + 1]){
//       return i
//     }
//   }
// };

// 2nd Attempt
const peakIndexInMountainArray = A => {
  for (let i = 1; i < A.length; i++) {
    if (A[i + 1] < A[i]) {
      return i
    }
  }
};

console.log(peakIndexInMountainArray([0, 1, 2, 1, 0]))

// Example 1:

// Input: [0, 1, 0]
// Output: 1

// Example 2:

// Input: [0, 2, 1, 0]
// Output: 1

