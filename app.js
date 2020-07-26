var list = document.getElementById('listID')


function addtodo() {
    var todo_items = document.getElementById('todoInputID')

    // Create li with textnode

    var todolist = document.createElement('li')
    var litext = document.createTextNode(todo_items.value + " ")
    todolist.appendChild(litext)

    //Button Creation

    var delbtn = document.createElement('button')
    var deltext = document.createTextNode('Delete')
    delbtn.appendChild(deltext)
    todolist.appendChild(delbtn)
    delbtn.setAttribute("class", "btn")
    delbtn.setAttribute("onclick", "deleteItem(this)")

    // Create edit btn

    var editbtn = document.createElement('button')
    var edittext = document.createTextNode("Edit")
    editbtn.appendChild(edittext)
    todolist.appendChild(editbtn)
    editbtn.setAttribute("class", "btn")
    editbtn.setAttribute("onclick", "edit(this)")

    list.appendChild(todolist)

    todo_items.value = ""
    console.log(todolist)


}

function deleteItem(e) {
    e.parentNode.remove()
}

function deleteAll() {
    list.innerHTML = ""
}

function edit(e) {
    var val = e.parentNode.firstChild
    var editValue = prompt("Enter Edit Value", val)
    e.parentNode.firstChild.nodeValue = editValue
        // console.log(val)
}