
//1)

const kaimono = document.getElementById('kaimono')
const link = kaimono.getElementsByTagName("a")

 console.log(link.item(0).textContent)

//2)


const todo = document.getElementById('todo')
const todoTitle = todo.children[0]
console.log(todoTitle.textContent)


//3)


const list = todo.querySelector('.list')
console.log(list.children[1].textContent)




