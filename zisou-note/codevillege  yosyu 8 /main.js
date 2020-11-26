//APIとは
//その機能でアプリケーションを書くためのに用意されているインターフェースです
//インターアフェースとは、大雑把に捉えれば、オブジェクトやメソッドのことをさす
//つまり「DOMのAPI」といった際はDOMという機能でアプリケーションを書くために用意されているオブジェクトやメソッド



//window,document
//上記の二つは最初か使えるようになっている変数です
//これらはDOMAPIの中心となるオブジェクトでDOMの機能はこの二つを通じて利用します

//利用例

//アラート表示
window.alert('これはwindow.alert()で表示したアラートです')

//window. に限り、省略する事ができる
alert('これはalert()で表示したアラートです')

// documentのプロパティにアクセスする例
console.log(document.doctype)// =><!doctype html>

console.log(document.title) //=> DOM API


//要素を見つける
//docimentoには、htmlの要素を見つける方法がいくつか用意されている

//<P id = "intro"></p>)要素を取得
const intro = document.getElementById('intro')
console.log(intro.textContent)

//<ul class = "list"> の要素を取得
// const list = document.querySelector('.list')
// console.log(list.children.length)

//<ul class = "list">の中にある<li>要素の取得
const items = document.querySelectorAll('.list li')
//itemsは配列のようなものなので、foeEachで繰り返し処理が可能
items.forEach((item) =>{
    console.log(item.textContent)
})




//要素の情報を取得、操作する
const elem = document.querySelector('.list')
// ----------------------------------------------------
//タグで囲われた中身のテキストを取得する
console.log(elem.textContent) //アイテム１　アイテム２　アイテム３
//上記と合わせて以下のように表記する事でタグの中身を書き換えることもできる
// elem.textContent = ""
// ---------------------------------------------------------

//タグで囲われた中身のHTMLを取得します
console.log(elem.innerHTML) //<li>アイテム1</li><li>アイテム2</li><li>アイテム3</li>
// またこれも上記と同様に以下の記述で中身の書き換えが可能
//elem.innerHTML = ""


// ------------------------------------------------------------
// 子要素の配列（のようなもの）を取得します。li など
for(let i = 0; i < elem.children.length; i++){
    console.log(elem.children[i])  //<li>アイテム1</li>, <li>アイテム2</li>, <li>アイテム3</li> が順番に表示
}

//子要素のうち最初に書かれている要素を取得します
console.log(elem.firstElementChild)

//小要素のうち最後に書かれている要素を取得します
console.log(elem.lastElementChild)

//親要素を取得します
console.log(elem.parentElement)

/* <タグ 属性="値">の属性部分を（）引数に渡して、値を取得します */

const elem2 = document.querySelector('img')

console.log(elem2.getAttribute('src'))

//setAttributeで（）引数に属性と値を渡すことでそれがHTMLに反映されます
elem2.setAttribute('src' , 'https://placehold.it/400x200')

// ------------------------------------------------------------
//小要素の追加や削除について
//htmlに書かれていない要素をjavascripptで作成し、HTMLni追加する事ができます、また同様に要素を削除することも可能です
// またこれに対し注意点があり、要素を作成した時点では追加されていないことに注意しください。あくまで作成と追加は別のメソッドで行われます

// const list = document.querySelector('.list')　//　要素　listのクラスを取得
// const newItem = document.createElement('li')　//  newItemのオブジェクトの中に　liを作成するメソッドを組み込む
// newItem.textContent = '新しいアイテム'　　　　　　// 　newItemにtextContentで新たなテキストを書き込む
//この時点ではまだ作成しただけで追加はされていない

// list.appendChild(newItem) //引数に追加したい値を入れリスト最後尾に「新しいアイテム」が増える

// list.removeChild(list.firstElementChild) //引数に値を渡してリストの先頭を削除する

// ------------------------------------------------------------
//イベントについて
//要素には「クリック」「入力」「スクロール」などのタイミングでイベントというものが発生します。その際に何か処理をさせたい場合は予め登録する事ができます
//例
const addButton = document.getElementById('add')
const removeButton = document.getElementById('remove')
const list = document.querySelector('.list')
//上記で処理に関わるクラスやIDを取得　ここから処理を記載
addButton.addEventListener('click' ,(event) => {
    const newItem = document.createElement('li')
    newItem.textContent = '新しいアイテム'
    list.appendChild(newItem)
})

removeButton.addEventListener('click' , (event) =>{
    list.removeChild(list.firstElementChild)
} )


