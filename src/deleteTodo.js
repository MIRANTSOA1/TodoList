export function deleteTodo(todoId){
    Todo = Todo.filter((todo, index) => index !== todoId)
    editTodoId = -1
    ListTodo()
}