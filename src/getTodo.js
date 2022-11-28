const Input = document.getElementById("addtodo")

export function getTodo(){
    const Value = Input.value
    const Empty = Value ===''
    if(Empty){
        alert("Please fill in the form")
    }else{
        if(editTodoId >= 0){
            //edit todo
            Todo = Todo.map((todo, index) => ({
                    ...todo,
                    value : index === editTodoId ? Value : todo.value,
                
            }))
            editTodoId = -1
        }else{
            const todo = {
                value: Value,
                checked: false
            }
            Todo.push(todo)
        }
        console.log(Todo)
        Input.value = ''
    }
}