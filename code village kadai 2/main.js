 /*console.log(typeof "hello,world!");
 //クォーテーションで囲われたもの
 //↓
 //文字列

 console.log(typeof 100);

 console.log(typeof null);

 console.log(typeof [1,2,3,4,5]);

 console.log(typeof {
    a: 1,
    b: 2,
    c: 3
 });

 console.log(typeof true);
 */
// let point    //変数の宣言

// let point = 100;　//代入

// console.log(point); // →　１００

// point = point + 100;  //再代入

// console.log(point);




const point = 100   //変数の宣言した段階でデータをいれる
//必要がなければ原則こちらを使用し変数の値をロックしておく

//point = point + 100;  //再代入は禁止

console.log(point);

//変数の名前の付け方
//キャメルケースという書き方
let someVariable  //二語目以降の頭文字を大文字にする、ハイフンは使えない



const name = 'takahashi'
console.log('I\'m' + name + '.')　　


//テンプレート文字列
console.log(`I'm ${name}.`)


const number = 100



//配列
const days =[
    '日',
    '月',
    '火',
    '水',
    '木',
    '金',
    '土'
]
//インデックス(数字)を指定しして要素を取り出す
console.log(days[0])　//数字は要素の番号！0から始まる
console.log(days[2])

console.log(days.length)　//要素の個数が帰ってくる

const nengou = ['明治', '大正', '昭和', '平成']

nengou.push('令和')
console.log(nengou)
nengou.splice(3, 1)
console.log(nengou)

nengou[0] = 'meiji'

console.log(nengou)


const num = Math.random()

console.log(`数: ${num}`)

//真偽値を返す

console.log(num >= 0.5)  //true/false

if (num >= 0.5) {
    console.log('0.5以上')

}else{
    console.log('0.5未満')
}





if([]) {
    console.log('truthyです')

}else{
    console.log('falsyです．．．')
}


if("") {
    console.log('truthyです')

}else{
    console.log('falsyです．．．')
}

const score = Math.random() * 100

if (score >= 90){
    console.log('秀')
}　else if (score >= 75){
    console.log('良')
}　else if (score >= 60){
    console.log('優')
}　else if (score >= 30){
    console.log('可')
}　else {
    console.log('不可')
}　

//if分はtrueの値が出力された時点で終了となる

//課題１

const kadai = [
    Math.floor(Math.random()*101),
    Math.floor(Math.random()*101),
    Math.floor(Math.random()*101),
    Math.floor(Math.random()*101),
    Math.floor(Math.random()*101),
    Math.floor(Math.random()*101),
    Math.floor(Math.random()*101),
    Math.floor(Math.random()*101),
    Math.floor(Math.random()*101),
    Math.floor(Math.random()*101),
]        
console.log(kadai);


//課題２

if(kadai[0] % 2 === 0){
    console.log(`${kadai[0]}は偶数です`)
} else{
    console.log(`${kadai[0]}は奇数です`)
}
if(kadai[1] % 2 === 0){
    console.log(`${kadai[1]}は偶数です`)
} else{
    console.log(`${kadai[1]}は奇数です`)
}
if(kadai[2] % 2 === 0){
    console.log(`${kadai[2]}は偶数です`)
} else{
    console.log(`${kadai[2]}は奇数です`)
}
if(kadai[3] % 2 === 0){
    console.log(`${kadai[3]}は偶数です`)
} else{
    console.log(`${kadai[3]}は奇数です`)
}
if(kadai[4] % 2 === 0){
    console.log(`${kadai[4]}は偶数です`)
} else{
    console.log(`${kadai[4]}は奇数です`)
}
if(kadai[5] % 2 === 0){
    console.log(`${kadai[5]}は偶数です`)
} else{
    console.log(`${kadai[5]}は奇数です`)
}
if(kadai[6] % 2 === 0){
    console.log(`${kadai[6]}は偶数です`)
} else{
    console.log(`${kadai[6]}は奇数です`)
}
if(kadai[7] % 2 === 0){
    console.log(`${kadai[7]}は偶数です`)
} else{
    console.log(`${kadai[7]}は奇数です`)
}
if(kadai[8] % 2 === 0){
    console.log(`${kadai[8]}は偶数です`)
} else{
    console.log(`${kadai[8]}は奇数です`)
}
if(kadai[9] % 2 === 0){
    console.log(`${kadai[9]}は偶数です`)
} else{
    console.log(`${kadai[9]}は奇数です`)
}

//課題３

console.log(kadai[0] +
            kadai[1] +
            kadai[2] +
            kadai[3] +
            kadai[4] +
            kadai[5] +
            kadai[6] +
            kadai[7] +
            kadai[8] +
            kadai[9] 
           )         

//forを用いた課題解決

//課題1　for
 

const kadaiFor = []

for (let count = 0 ; count<= 9 ; count++) {
      kadaiFor.push(Math.floor(Math.random()*101))
      
}

console.log(kadaiFor)


//課題２　for

for (let hairetuDate = 0 ; hairetuDate<=9; hairetuDate++) {
    if(kadaiFor[hairetuDate] % 2 === 0){
        console.log(`${kadaiFor[hairetuDate]}は偶数です`)
    } else{
        console.log(`${kadaiFor[hairetuDate]}は奇数です`)
    }
}

//課題３　for
let total = 0
for (let hairetuDate = 0 ; hairetuDate<=9; hairetuDate++){
    total = total + kadaiFor[hairetuDate]
}
console.log(total)
