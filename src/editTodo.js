let editTodoId = -1
export function editTodo(todoId){
    Input.value = Todo[todoId].value
    editTodoId = todoId
}
