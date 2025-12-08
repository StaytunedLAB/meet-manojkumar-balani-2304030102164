function isPalindrome(str) {
  var clean = str.toLowerCase().replace(/[^a-z0-9]/g, "")
  var reversed = clean.split("").reverse().join("")
  return clean === reversed
}

var text = "madam"
console.log('"' + text + '" is palindrome:', isPalindrome(text))
