//オブジェクトの値を作る→　yamada変数に代入
// const yamada ={ id: 123, name: 'Taro Yamada', age: 24 }

// //プロパティへアクセス　id,name,age ←これがプロパティ
// console.log(yamada.id)
// console.log(yamada.name)
// console.log(yamada.age)

// //上のようにプロパティにアクセスするには、オブジェクト名.プロパティと記述する

// //プロパティ名には任意の文字が使えますが　@ や　１st　などを使う際は変数名と同じようにクォーテーションもしくは
// //ダブルクォーテーションで囲って記述する

// const top3 = { '@' : 'jaapan', '1st': 'Tokyo', '2nd' : 'kanagawa', '3rd' : 'osaka'}

// //console.log(top3.'@')
// //上のような表記ではアクセスできない、[]でプロパティを囲って記述する
// console.log(top3['@'])
// console.log(top3['1st'])//tokyo
// console.log(top3['2nd'])//kanagawa
// console.log(top3['3rd'])//osaka



// /////////////////////////////////////////////////////////////////////////////
// //オブジェクトはそれ自体を値のように扱う他、変数に代入したり、関数の引き数にすることも可能//
// /////////////////////////////////////////////////////////////////////////////
// const suzuki = {id : 123, name : 'Taro suzuki', age : 24}
// const tanaka = {id : 456, name : 'Jiro Tanaka', age : 32}　

// //オブジェクトを二つ　yamada と　tanaka を用意しました

// function printUser(user) {
//     console.log(`${user.name}さん(ID:${user.id})は${user.age}歳です。`)

// }
// //function で　printUser　という関数を設定、また（）に　user　という変数を設定する
// //関数の実行内容は　
// //console.log(`${user.name}さん以下略
// //変数user(この時点で中に何が入っているか定義されていない・引数が渡されていない) の中のnameを出力
// printUser(suzuki)//Taro suzukiさん(ID:123)は24歳です。
// printUser(tanaka)//Jiro Tanakaさん(ID:456)は32歳です。

// //関数に用意した変数(user)に対してsuziki とtanaka　を渡して定義する


// /////////////////////////////////////////////////////////////////////////////
// //オブジェクトのプロパティは、後から追加したり書き換えたりが可能。　　　　　　　　　　　　//
// /////////////////////////////////////////////////////////////////////////////


// //書き方　<オブジェクト> . <プロパティ> = <値> ←代入と同じようにかく

// const obj = {a : 1}

// obj.b = 2 //プロパティの追加
// obj.a = 100 //プロパティ　a の値の変更
// obj['c'] = 'foo' //[]を使用しても良い、この場合は　.　がいらないことを忘れず

// console.log(obj) //{a: 100, b: 2, c: "foo"} が出力される

// //これらの使い所について
// // オブジェクトは、ある「もの」に関する複数の情報（値）をまとめて扱うのに向いています。
// // たとえば上記の例のyamadaは、「1人のユーザー」に関するIDや名前といった情報をひとまとめにしています
// // こうすることで、コード上で扱いが簡単になるほか、コードを読む人にとっても意図が明確になりわかりやすいメリットがあります。

// // // 逆に、関係ないものを一つに集めてしまうと混乱のもとになるので注意しましょう。



// ////////////////////////////////////////////////////////////////////////////
// //オブジェクトと配列の組み合わせ　　　　　　　　　　　　　　　　　　　　　　　　　　　　//
// /////////////////////////////////////////////////////////////////////////////

// //オブジェクトと配列は組み合わせて使うことが良くある
// //nums を定義しその中の配列に１２３をいれる
// const nums = [
//     1,
//     2,
//     3,
// ]
// //numsの2番目の配列を取り出して出力（0からカウントされていることを忘れず）
// console.log(nums[1])　//2


// ///////////////////////////////////////////////////////////////////


// // オブジェクト配列を作って見る
// const users = [
//     {id : 1, name : 'Taro' , comments : ['hello', 'world']},
//     {id : 2, name : 'Jiro' , comments : ['looks good to me']},
//     {id : 3, name : 'Saburo' , comments : ['hi', 'yes', ':)' ]  },
// ]
// //この配列で上から2番目を取り出してみる
// console.log(users[1])  //{id: 2, name: "Jiro", comments: Array(1)}

// //ここから更に2番目のプロパティにアクセスして出力する
// console.log(users[1].name)  //Jiro

// //更に長くcommentsのプロパティの 1番目要素にアクセスしてみる
// console.log(users[1].comments[0]) // looks
// console.log(users[2].comments[1])





// ////////////////////////////////////////////////////////////////////////////
// //JSON とは　　　　　　　　　　　　　　　　　　　　　　　　//
// /////////////////////////////////////////////////////////////////////////////

// //JSONとはオブジェクトの書き方の一つです。オブジェクトをいろいろな言語でやりとりできるように
// // できるように決められた物でJSに限らず使用できる書き方

// // 例: Rubyで書いたサーバーから、JavaScriptにデータを送る、など


// // const users = [
// //     {id : 1, name : 'Taro' , comments : ['hello', 'world']},
// //     {id : 2, name : 'Jiro' , comments : ['looks good to me']},
// //     {id : 3, name : 'Saburo' , comments : ['hi', 'yes', ':)' ]  },
// // ]

// //上の記述を　JSON　で記述するとこうなる

// // const users = [
// //          {"id" : 1, "name" : "Taro" , "comments" : ["hello", "world"]},
// //          {"id" : 2, "name" : "Jiro" , "comments" : ["looks good to me"]},
// //          {"id" : 3, "name" : "Saburo" , "comments" : ["hi", "yes", ":)" ]  }
// // ]

// // 上のJSONはjsに比べると以下の制約があります。

// // ・全てのプロパティを "" で囲う必要がある
// // ・文字列に使えるのも "" のみで、’　　や　　` は使用できない
// // ・配列やオブジェクトの最後尾に,(カンマ)を入れてはいけない
// // ・JSON はプログラミング言語ではないため、処理はできない（HTMLと一緒）


// ////////////////////////////////////////////////////////////////////////////////

// // JSONを扱う場面について
// // １、javaScriptのオブジェクトをJSONにする（エンコード）
// // ２、JSONからjavaScriptのオブジェクトにする（デコード）


// //エンコード

// // const users = [
// //     { id: 1, name: 'Taro', comments: ['hello', 'world'] },
// //     { id: 2, name: 'Jiro', comments: ['looks good to me'] },
// //     { id: 3, name: 'Saburo', comments: ['hi', 'yes', ':)'] },
// //   ]


// // //JavaScriptのオブジェクトをJSONにするには、JSON.stringifyが使えます。
                        
// //   const json = JSON.stringify(users)
// //   //JSON.stringify(配列名)
// //   console.log(json)
// //   　　　//　　⬇️
// //   [{"id":1,"name":"Taro","comments":["hello","world"]},
// //   {"id":2,"name":"Jiro","comments":["looks good to me"]},
// //   {"id":3,"name":"Saburo","comments":["hi","yes",":)"]}]



// デコード
// const json = `
// [
//     {"id":1,"name":"Taro","comments":["hello","world"]},
//     {"id":2,"name":"Jiro","comments":["looks good to me"]},
//     {"id":3,"name":"Saburo","comments":["hi","yes",":)"]}
// ]
// `
// //そのまま記載するのではなく、先頭と最後部に` をつけて囲う
// const users = JSON.parse(json)

// console.log(users)
// //      ⬇️
// // [
// //     {id: 1, name: "Taro", comments: Array(2)}
// //      {id: 2, name: "Jiro", comments: Array(1)}
// //      {id: 3, name: "Saburo", comments: Array(3)}

// // ]



 