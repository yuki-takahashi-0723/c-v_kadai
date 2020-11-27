//要素の取得
const list = document.getElementById('list')
const addButton = document.getElementById('add')
const removeButton = document.getElementById('remove')


// イベントリスナの登録
// 追加
addButton.addEventListener('click', (event) =>{
    const newItem = document.createElement('li')
    const newImg = document.createElement('img')
    const newSpan = document.createElement('span')
    const itemCount = list.children.length + 1

    newImg.setAttribute('src','http://placehold.it/64x64')
    newImg.setAttribute('alt' , '新しいアイテム' + itemCount)
    newSpan.textContent = '新しいアイテム' +  itemCount
    newItem.appendChild(newImg)
    newItem.appendChild(newSpan)
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