const answer = document.getElementById('answer');
const buttonAdd = document.getElementById('add');
const buttonRem = document.getElementById('rem')
const ul = document.getElementById('lista');

let i = 0;

buttonAdd.addEventListener('click', (e) =>{
    if (answer.value != "") {
        
        createItem(answer.value, i)
        i++
        answer.value = ""
    }
});

buttonRem.addEventListener('click', () => {
    ul.innerHTML = ""
})

let createItem = function(val, i) {
    var li = document.createElement('li')
    
    li.id = "li-" + i
    li.innerText = val
    
    ul.appendChild(li)

    var bt = document.createElement('button')
    bt.id = "d-" + i
    bt.innerText = "Done"

    ul.appendChild(bt)

    let j=0
    bt.addEventListener('click', () => {
        if (j==0) {
            li.innerHTML = "<del>" + val + "</del>"
            j=1
        } else {
            li.innerHTML = val
            j=0
        }
    })
}