# GitHub Issues Tracker

## Demo Login
Username: admin  
Password: admin123
## 1. Difference between var, let, const

var: function scoped variable  
let: block scoped variable  
const: block scoped and cannot be reassigned

Example:
var a = 10
let b = 20
const c = 30
## 2. Spread Operator

Spread operator (...) expands arrays or objects.
Example:
const nums = [1,2,3]

console.log(...nums)
## 3. map vs filter vs forEach

map() returns new array  
filter() returns array based on condition  
forEach() only loops

Example:
const nums = [1,2,3]

nums.map(n => n*2)
nums.filter(n => n>1)
nums.forEach(n => console.log(n))

## 4. Arrow Function
Short syntax for writing functions.
Example:
const sum = (a,b) => a + b
## 5. Template Literals

Template literals use backticks.
Example:
const name = "Rahim"
console.log(`Hello ${name}`)
