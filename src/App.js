// import { deleteTodo } from './deleteTodo.js'
// import { getTodo from } './getTodo.js'
// import { editTodo } from './editTodo.js'
// import { ListTodo } from './ListTodo.js'



const form = document.getElementById("todoform")
const Input = document.getElementById("addtodo")
const TodoList = document.getElementById("todo_list")

let Todo = []
let editTodoId = -1
document.addEventListener('DOMContentLoaded', () => {
    form.addEventListener('submit', function(event){
        event.preventDefault()
        getTodo()
        ListTodo()
    })
    TodoList.addEventListener('click', (event)=>{
        const target = event.target
        const parentElement = target.parentNode
        if(parentElement.className !== 'todo') return;
        const todo = parentElement
        const todoId = Number(todo.id)
        const action = target.dataset.action
        action === "check" && checkTodo(todoId)
        action === "edit" && editTodo(todoId)
        action === "delete" && deleteTodo(todoId)
        console.log(todoId, action)
    })
})

function getTodo(){
    const Value = Input.value
    const Empty = Value ===''
    if(Empty){
        alert("Please complete the form")
    }else{
        if(editTodoId >= 0){
            //edit to do
            Todo = Todo.map((todo, index) => ({
                    ...todo,
                    value : index === editTodoId ? Value : todo.value,
                
            }))
            editTodoId = -1
        }else{
            //add to do
            const todo = {
                value: Value,
                checked: false
            }
            Todo.push(todo)
        }
        // console.log(Todo)
        Input.value = ''
    }
}
function ListTodo(){
    TodoList.innerHTML = ""
    Todo.forEach((todo, index) => {
        TodoList.innerHTML += `
            <div class="todo" id=${index}>
                <p>${todo.value}</p>
                <img src="./img/edit_property_24px.png" alt="" id="img1" data-action="edit">
                <img src="./img/Delete_24px.png" alt="" id="img2" data-action="delete">
                <img ${todo.checked ? 'src="./img/ok.png" id="img3"' : 'src="./img/circle.png" id="img4"'} data-action="check">
            </div>
        `
    })
}
function checkTodo(todoId){
    //finish to do
    Todo = Todo.map((todo, index) =>({
                ...todo,
                checked : index === todoId ? !todo.checked : todo.checked
    })) 
    ListTodo()  
}
function editTodo(todoId){
    //send value to input form for editing
    Input.value = Todo[todoId].value
    editTodoId = todoId
}
function deleteTodo(todoId){
    Todo = Todo.filter((todo, index) => index !== todoId)
    editTodoId = -1
    ListTodo()
}
