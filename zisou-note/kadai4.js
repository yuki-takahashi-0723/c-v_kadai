//課題05-1. オブジェクトと配列の組み合わせ

const items =[
    {n:100},
    { a : {b : ['abc']} , c : {'100':'foobar'}}
    
]

console.log(items[0].n) //=> 100
console.log(items[1].a.b[0]) //=> abc
console.log(items[1].c['100']) //=> foobar





//              {"id" : 1, "name" : "Taro" , "comments" : ["hello", "world"]},





//課題05-2. JSON


const json =` 
{
  "total": 2,
  "items":[{"name":"Item 123","id": 123} , {"name": "Item 456" , "id" : 456}],
  "next" : {"id":789}
}
`

const obj = JSON.parse(json)

// console.log (obj)
console.log(obj.total) // => 2
console.log(obj.items[0].name) //=> Item 123
console.log(obj.items[0].id) //=> 123
console.log(obj.items[1].name) //=> Item 456
console.log(obj.items[1].id) //=> 456
console.log(obj.next.id) //=> 789








