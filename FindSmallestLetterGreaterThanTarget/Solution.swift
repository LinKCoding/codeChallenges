class Solution {
    func nextGreatestLetter(_ letters: [Character], _ target: Character) -> Character {
        for char in letters {
          if char > target {
            return char 
          }
        }
        return letters[0]
    }
}

let firstTry = Solution()
print(firstTry.nextGreatestLetter(["c", "f", "j"], "d"))

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