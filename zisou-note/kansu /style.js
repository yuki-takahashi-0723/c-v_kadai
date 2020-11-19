console.log('hello')
const price = 100
const tax = (taxVal) => taxVal *= price

console.log(tax(1.08))


// let x = 3  
// let y = x++
// console.log(x) //答えは４になるなぜなら上で加算されているから
// console.log(y) //答えは３になる

// let x = 3
// let y = ++x
// console.log(x) //答えは４
// console.log(y)　// 答えはx++と違い４となる

let x = 3
x += 2
console.log(x)

