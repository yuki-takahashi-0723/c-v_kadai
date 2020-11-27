//要素の取得
const list = document.getElementById('list')
const addButton = document.getElementById('add')
const removeButton = document.getElementById('remove')


// イベントリスナの登録
// 追加
addButton.addEventListener('click', (event) =>{
    const newItem = document.createElement('li')
    const itemCount = list.children.length + 1

    newItem.textContent = '新しいアイテム' +  itemCount
    list.appendChild(newItem)
})





// 削除

removeButton.addEventListener('click', (event) =>{
    if(list.children.length===0){
        alert('削除できるアイテムがありません')
    }else{
        list.removeChild(list.lastChild)
    }
})