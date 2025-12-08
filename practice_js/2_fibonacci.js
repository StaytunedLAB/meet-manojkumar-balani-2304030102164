function fibonacci(n) {
  var seq = []
  if (n <= 0) return seq
  seq.push(0)
  if (n === 1) return seq
  seq.push(1)
  for (var i = 2; i < n; i++) {
    seq.push(seq[i - 1] + seq[i - 2])
  }
  return seq
}

var n = 10
console.log("Fibonacci sequence of length", n, ":", fibonacci(n).join(", "))
