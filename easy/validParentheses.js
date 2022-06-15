/*

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.

*/

// My Solution

/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    // if s.length is equal to 1, return false
    if (s.length === 1) {
        return false
    }
    let close = []
    // want to keep track of next close character
    for (let i=0; i < s.length; i++) {
        console.log(s[i], close)
        if ((s[i] === ')') || (s[i] === ']') || (s[i] === '}')) {
            if (close.pop() === s[i]) {
                continue
            } else {
                return false
            }
        } else {
            if (s[i] === '(') {
                close.push(')')
            } else if (s[i] === '['){
                close.push(']')
            } else {
                close.push('}')
            } 
        }
    }
    console.log(close)
    if (close.length === 0) {
        return true
    } else {
        return false
    }
};

// ( [ { }
// example: ([])
// example: ([][])

// false if no open parenthesis
// example: ([)