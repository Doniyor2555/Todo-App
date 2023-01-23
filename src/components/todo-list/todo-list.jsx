import TodoListItem from "../todo-list-item/todo-list-item";

const TodoList = ({data, onDelete}) => {

  const elements = data.map(item => {
    const {id, ...itemProps} = item;
    return (
        <TodoListItem 
            key={id} 
            {...itemProps}
            onDelete={() => onDelete(id)}  
            />
    )
})

  return (
    <ul>
      {elements}
    </ul>
  )
}

export default TodoList;
