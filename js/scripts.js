const btnSubmit = document.querySelector(".form-control button")
const btnSaveEdit = document.querySelector("#edit-form button")
const btnCancelEdit = document.querySelector("#cancel-edit-btn")

const inputTarefa = document.querySelector(".form-control input")
const inputEdit = document.getElementById("edit-input")
const editForm = document.querySelector("#edit-form")
const toDoForm = document.querySelector("#todo-form")
const toolBar = document.querySelector("#toolbar")

const toDoList = document.querySelector("#todo-list")

btnSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    let nomeTarefa = inputTarefa.value
    if(nomeTarefa) {
        criarTarefa(nomeTarefa)
    }
})



function criarTarefa(texto) {
 
    const todo = document.createElement("div")
    todo.classList.add("todo")

    const todoTitulo = document.createElement("h3")
    todoTitulo.innerText = texto;   
    todo.appendChild(todoTitulo)

    const finishBtn = document.createElement("button")
    finishBtn.classList.add("finish-todo")
    finishBtn.innerHTML = '<i class="fa-solid fa-check"></i>'
    todo.appendChild(finishBtn)

    const editBtn = document.createElement("button")
    editBtn.classList.add("edit-todo")
    editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>'
    todo.appendChild(editBtn)

    const removeBtn = document.createElement("button")
    removeBtn.classList.add("remove-todo")
    removeBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>'
    todo.appendChild(removeBtn)

    toDoList.appendChild(todo)

    inputTarefa.value = '';
    inputTarefa.focus();

    removerTarefa(removeBtn, todo)
    tarefaCompleta(finishBtn, todo)
    editarTarefa(editBtn, todoTitulo)
}


function removerTarefa(removeBtn, todo) {

    removeBtn.addEventListener("click", () => {
        toDoList.removeChild(todo)
    })
}

function tarefaCompleta(finishBtn, todo) {
    finishBtn.addEventListener("click", () => {
        todo.classList.toggle("done")
    })
}

function editarTarefa (editBtn, todoTitulo) {
    editBtn.addEventListener("click", () => {
        editForm.classList.remove("hide")
        toDoForm.classList.add("hide")
        toolBar.classList.add("hide")
        inputEdit.value = todoTitulo.innerText;
    })

    btnSaveEdit.addEventListener("click", (e) => {
        e.preventDefault();
        todoTitulo.innerText = inputEdit.value;
        editForm.classList.add("hide")
    })

    btnCancelEdit.addEventListener("click", (e) => {
        e.preventDefault();
        editForm.classList.add("hide")
    })

}



