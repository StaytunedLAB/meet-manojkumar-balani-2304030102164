function isLeapYear(year) {
  if (year % 400 === 0) return true
  if (year % 100 === 0) return false
  return year % 4 === 0
}

var year = 2024
console.log(year, "is leap year:", isLeapYear(year))
