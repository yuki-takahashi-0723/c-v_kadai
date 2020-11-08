// 課題06-1.
// 上記で登場したadd2, mul2の例を参考に、以下の数式をそれぞれ関数の組み合わせで記述してください。必要な関数は適宜作成してください。



// nは変数で、自由な数値を代入して動作確認して構いません。



// n * 100 - 5

const add2 = x => x * 100
const mul2 = x => x - 5

const n = 3

console.log(mul2(add2(n)))



// (n + 3) * 8 + 3

const add3 = x => (x + 3)
const mul3 = x => x * 8


console.log(add3(mul3(add3(n))))



// 課題06-1. map
// 以下のitemsは、週✕日ごとに、なんらかの成績が記録されている配列だとします（配列の配列）。
// itemsのmapを呼び出して、「各週ごとの成績の合計値」の配列sumsに変換するプログラムを作成してください。

const items = [
    // 日  月  火  水  木  金  土
      [14, 93, 89, 51, 85, 59, 33],
      [69, 27, 40, 76, 25, 21, 55],
      [55, 60,  3, 28, 49,  5, 91],
      [19, 56, 92, 66, 53, 80, 13],
    ]
    


    const sums = items.map((item) => {

　　　　　let x =0
　　　　for(let i = 0; i < 7; i++){
           x  = x + item[i]
        }

      return x



    })
    console.log(sums) //=> [424, 313, 291, 379]