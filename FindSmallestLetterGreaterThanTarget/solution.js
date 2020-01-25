/* Thoughts
We know the the letters are all alphabetized and already in order.
If we know the unicode value, we can use that as a comparison or we can use a comparison operator. 
Perhaps use `.find()` and compare the current letter and target.
If `.find()` doesn't return anything, return the first element in letters.
*/

const nextGreatestLetter =  (letters, target) => {
  let greater = letters.find(letter => letter > target)
  return greater ? greater : letters[0]
};

// Test Cases:
// Input:
// letters = ["c", "f", "j"]
// target = "a"
// Output: "c"

// Input:
// letters = ["c", "f", "j"]
// target = "c"
// Output: "f"

// Input:
// letters = ["c", "f", "j"]
// target = "d"
// Output: "f"

// Input:
// letters = ["c", "f", "j"]
// target = "g"
// Output: "j"

// Input:
// letters = ["c", "f", "j"]
// target = "j"
// Output: "c"

// Input:
// letters = ["c", "f", "j"]
// target = "k"
// Output: "c"