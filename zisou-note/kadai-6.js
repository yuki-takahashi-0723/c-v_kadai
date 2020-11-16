//code villege 課題６
//.filterメソッドを使わずに同様の処理を行える物を作る

const words= ['リンゴ', 'ゴリラ', 'ラッパ', 'パンダ', 'ダイハード', 'どげんジャーズ', 'ズーラシア', 'アカウントサービス' ]

// 上記より特定文字数の条件を取り出して新たな配列を作成する
const wordsFilter = []
const result = words.forEach( word => {
  if (word.length >= 5 )
  wordsFilter.push  (word)
   
});

console.log(wordsFilter)


// 奇数だけの配列を取り出して新たに作成する
// [1,2,3,4,5,6] 
// 偶数だけの配列を作りたい！
// [2,4,6]

const array = [1, 2, 3, 4, 5, 6]
const num = []

const filter = array.forEach((val) =>{
if (val % 2 === 0)
num.push(val)

})
console.log(num)







//今度はfor文のみで作成してみる
const arrays2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const filterFor = (array2) => {
  const newArrays =[]
  for (let i = 0; i < arrays2.length; i++){
    if (array2[i] % 2 === 0 ) {
      newArrays.push(array2[i])
    }
  }
  return newArrays
}
console.log(filterFor(arrays2))





// 




// 回答




// const array = [1,2,3,4,5,6];
// console.log(array.filter(item => {
//     return item % 2 === 0
// }))
// const filter = (callback) => {
//     const tmp = [];
//     for (let i = 0; i < array.length; i++ ) {
//         if (callback(array[i])) {
//             tmp.push(array[i])
//         }
//     }
//     return tmp
// }
// const callback = item => {
//     return item % 2 === 0
// }
// console.log(filter(callback))


