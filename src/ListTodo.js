export function ListTodo(){
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