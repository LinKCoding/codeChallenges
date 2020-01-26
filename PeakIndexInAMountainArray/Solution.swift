class Solution {
  func peakIndexInMountainArray(_ A: [Int]) -> Int {
    for num in 1..<A.count {
      if A[num + 1] < A[num] {
        return num
      }
    }
    return 0
  }
}

var testSol = Solution()

print(testSol.peakIndexInMountainArray([0,1,2, 1, 0]))

// Example 1:

// Input: [0, 1, 0]
// Output: 1

// Example 2:

// Input: [0, 2, 1, 0]
// Output: 1

