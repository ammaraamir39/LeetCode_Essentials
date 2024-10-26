// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

const l1 = [9, 9, 9, 9, 9, 9, 9, 9]
const l2 = [9, 9, 9, 9]

const addTwoNumbers = function (l1, l2) {
  if (!l1 || !l2) return null

  let l1Str = ""
  let l2Str = ""

  // Determine the longer length
  const maxLength = Math.max(l1.length, l2.length)

  // Iterate over the arrays from the last element to the first, building strings
  for (let i = maxLength - 1; i >= 0; i--) {
    // For shorter list, add '0' if index is out of bounds
    l1Str += `${l1[i] !== undefined ? l1[i] : 0}`
    l2Str += `${l2[i] !== undefined ? l2[i] : 0}`
  }

  // Calculate the sum by converting strings to integers
  const sum = String(parseInt(l1Str) + parseInt(l2Str))
  console.log("SUM = >", sum)

  // Build the result array in reverse order of the sum string
  const result = []
  for (let i = sum.length - 1; i >= 0; i--) {
    result.push(parseInt(sum[i]))
  }

  console.log("Result = >", result)
  return result
}

addTwoNumbers(l1, l2)
