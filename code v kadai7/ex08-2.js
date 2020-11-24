const body = document.body


const h1 = document.createElement('h1')
h1.textContent = 'DOM'
body.appendChild(h1)

const p = document.createElement('p')
p.textContent = 'JavaScriptからHTMLを扱うための仕組み'
body.appendChild(p)

const h2 = document.createElement('h2')
h2.textContent = '印象に残っているトピック'
body.appendChild(h2)

const ul = document.createElement('ul')
body.appendChild(ul)


const li_1 = document.createElement('li')
li_1.textContent = 'documentオブジェクト'
ul.appendChild(li_1)

const li_2 = document.createElement('li')
li_2.textContent = 'getElementById'
ul.appendChild(li_2)

const li_3 = document.createElement('li')
li_3.textContent = 'イベントリスナ'
ul.appendChild(li_3)