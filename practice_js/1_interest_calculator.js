function calculateSimpleInterest(principal, rate, time) {
  return (principal * rate * time) / 100
}

function calculateCompoundInterest(principal, rate, time, n) {
  var amount = principal * Math.pow(1 + rate / (100 * n), n * time)
  return amount - principal
}

var principal = 1000
var rate = 5
var time = 2
var n = 4

console.log("Simple Interest:", calculateSimpleInterest(principal, rate, time))
console.log("Compound Interest:", calculateCompoundInterest(principal, rate, time, n))
