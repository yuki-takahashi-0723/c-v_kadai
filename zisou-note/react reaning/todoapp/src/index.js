
// Reactについて
// import ReactDOM from 'react-dom'  //react-domをインポートする
// import React from 'react' 　　//jsxを使用するためのインポート文　　　

// ReactDOM.render(<h1>Hello, world!</h1>, document.getElementById('root'))
//インポートしたreact-domパッケージのrenderメソッドを実行していく
//具体的にはReact.render(*第一引数：操作したいReact要素を指定　、　＊第二引数：指定したDOMに操作)

// jsxとは
//javascriptの拡張構文です。HTMLとほぼ同じ文法を持っている
//
//例えば上記で行った構文は以下のように訳せます

// ReactDOM.render(<h1>Hello, World!<h1>, document.getElementById('root'))
// ReactDOM.render(
//     React.createElement('h1', {} , 'Hello, world!'),
//     document.getElementById('root')

// )
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
//コンポーネント
//実際には、ReactDOM.render内にベタがきせず、以下のように関数の形でコンポーネントとして分けていきます
// import React from 'react-dom'
// import ReactDOM from 'react-dom'

// const App = () =>{
//     return (
//         <h1>Hello,world!</h1>
//     )
// }

// ReactDOM.render(
//     <App />,
//     document.getElementById('root')

// )

//上記の文章をESmodule記法を使用して、コンポーネント事にファイルに分割しましょう
//以下よりapp.jsを作成そちらにReact要素を組み込む関数を書いていくためそちらを参照
//index.js
// import React from 'react-dom'
// import ReactDOM from 'react-dom'
// import App from './App.js'　//  ./はカレントディレクトリ：現在関連づけられているディレクトリ・今いるディレクトリ　今回になぞらえると今現在いるディレクトリにあるJSという事

// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
// )

//App.js
// import React from 'react'
// const App = () =>{
//     return (
//         <h1>Hello,world!</h1>
//     )
// }

// export default App

// コンポーネント作成時の注意
// ・上記App.jsでreturnを使っている通りReact要素の返却を行う事
// . コンポーネント名はUpperCamelCaseを使い必ず大文字で始める

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//スケルトンの作成
//これからtodoアプリケーションの骨組みスケルトンを作成していく
//これらは以下のコンポーネントで構成されています
//Appコンポーネント
//Fromコンポーネント
//Listコンポーネント
//itemコンポーネント

//index.jsーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'

ReactDOM.render(
    <App />,
    document.getElementById('root')
    )
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
    //Appコンポーネント
    //このコンポーネントは以下の役割を果たします
    // ・他のコンポーネントをラップします
    // ・todoの状態を管理する
    // またこのコンポーネントは最上位層のコンポーネントになります
    // そのようなコンポーネントをトップレベルのコンポーネントと呼びます
    
//app.js

// import React from 'react'
// import Form from './Form'　　　 Form.jsを呼び出す
// import List from './List'

// const App = () => {
//     return (                     ＊複数の要素を返却することはできないので、左記の通り<div>などの要素でラップしましょう
//         <React.Fragment>　　　　　　ただ、divを用いると、DOMに不要な要素が追加されてしまうことになります。好ましくない際は<React.Fragment>を使用することで形式だけの要素を作成できます
//             <h1>Todo App</h1>
//             <Form />  　　　　　　Formを配置する
//             <List />            Listを配置する
//         </React.Fragment>
//     )
    
// }

// export default App

// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
//Formコンポーネント
// このコンポーネントは以下の役割を果たします
// ・ユーザーの入力を受け付ける
// ・入力値を状態として管理する
// ・ユーザー入力値を検証する
// ・入力の確定を受け付ける

//Form.js
// import React from 'react'

// const Form = () =>{
//     return (
//         <form>　このFormタグは後はどsubmitイベントを発生させるためのもの、入力フォームを設置する
//             <input type='text'/>　jsx（HTMLに似た文法をもつ拡張構文）を使う際は＜＞のようにタグでとじる必要があり注意する
        
//         </form>
//     )
// }

// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// Listコンポーネント
// このコンポーネントは以下の役割をはたします
// ・itemコンポーネントをtodoデータの数だけ繰り返し呼び出す
// ・Todoリスト全体のスタイルを調整する

// itemコンポーネントを並べるのが主な役割です

// import React from 'react'
// import Item  from './Item'
// const List = () => {
//     return (
// //      <ul>
//                 <Item />      Listの中にアイテムを配置する
//                 <Item />
//                 <Item />
//         </ul>
//     )
// }

// export default List

// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// Itemコンポーネント
//役割
// ・各todoの内容をどのように表示するか決定する
// ・各todoの完了状態をどのように表示するのかを決定する
// 今回は、完了状態に関してはチェックボックスを使用して表示します

// import React from 'react'

// const Item = () => {
//     return(
//         <input type='checkbox' />
//         <span>サンプルテキスト</span>
//     )
// }

// export default Item