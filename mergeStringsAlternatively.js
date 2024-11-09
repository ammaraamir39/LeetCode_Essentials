// Example 1:

// Input: word1 = "abc", word2 = "pqr"
// Output: "apbqcr"
// Explanation: The merged string will be merged as so:
// word1:  a   b   c
// word2:    p   q   r
// merged: a p b q c r

const word1 = "abc"
const word2 = "pqrrr"

const mergeAlternately = function (word1, word2) {
  const maxLength = Math.max(word1.length, word2.length)
  console.log("Max Length = " + maxLength)
  console.log("Lengths =>", { l1: word1.length, l2: word2.length })
  let str = ""
  for (let i = 0; i < maxLength; i++) {
    if (i < word1.length) str += word1[i]
    if (i < word2.length) str += word2[i]
  }

}

mergeAlternately(word1, word2)
