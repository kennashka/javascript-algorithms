/**
Given a singly linked list, determine if it is a palindrome.

Example 1:

Input: 1->2
Output: false
Example 2:

Input: 1->2->2->1
Output: true
Follow up:
Could you do it in O(n) time and O(1) space?
 */

var isPalindrome = function(head) {
        var current = head

    var arr = []
    while(current) {
       arr.push(current.val)
       current = current.next
    }

    var arrLength = arr.length
    for(var i = 0; i < arrLength / 2; i++) {
        if (arr[i] != arr[arrLength - 1 - i]) return false
    }
    
    return true
    
};
