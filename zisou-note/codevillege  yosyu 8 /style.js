//DOMとは
//javascriptでhtmlを扱うための仕組み

//DOMでできること 例
//特定のh1の中身のテキストを変える
//特定のulの中にliを追加する
//buttonがクリックされた際に渓谷アラートを表示する


//実際に動かしてみる
//特定のh1の中身のテキストを変える

//documentオブジェクトを通してコンテンツツリー内の要素を取り出すことができます
//document.getElementById が最も単純な方法です
//getElementById　は　html に　Id属性をつけておくと、そのidを指定することでその要素を取り出すことができます
//下記のオブジェクトのtitleが　<h1 Id = "title">買い物リスト</title> タグを表します。　オブジェクト title を通して　<h1>の要素にアクセスできます
//textContentのプロパティでタグの中の文字を表示しています。


const title = document.getElementById('title')
console.log(`<h1>タグの中身のテキストは ${title.textContent} です。`)

//document.querySelectorでも要素を取り出すことができます
//これはcssと同様に .list で取り出すことが可能です。今回は　list に当てはまるclassを探しています。
//もしセレクターに当てはまる要素が複数ある場合は1番最初のものが取り出されます。
//childrenのプロパティはその要素の子要素を配列として取り出す事ができます。例えばlist.children[2]と表記すれば3番目の要素を取り出せます



const list = document.querySelector('.list')
console.log(`<ul>タグの二つ目の小要素のテキストは　${list.children[1].textContent} です。`)

//特定のulの中にliを追加する


//document.createElementを記載するとHTMLに無い要素をJSを使って作る事ができます。
//下記ではtextContentを使って値を上書きする事ができます
//appendChildのメソッドは引数で指定した値を小要素に追加する事ができます

const newItem = document.createElement('li')
newItem.textContent = 'もも'
list.appendChild(newItem)


//イベントリスナー
// addEventListenerメソッドはあるイベントが発生した際の処理を登録しておく事ができます



//buttonがクリックされた際に渓谷アラートを表示する
const button =  document.getElementById('#button')
document.addEventListener('click' , event =>{
    confirm('削除してもよろしいですか？')　//実際には削除されませんs
})

