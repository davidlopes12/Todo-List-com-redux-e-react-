
import { useSelector, useDispatch } from 'react-redux'
import { toggleTodo, removerTodo, filterTodo } from '../slices/todoSlice'

function TodoList() {
  const {list, filter} = useSelector((state) => state.todos)
  
  const dispatch = useDispatch()

  const filterList = list.filter((todo) => {
    if(filter === 'all') return true
    if(filter === 'completed') return todo.completed;
    if(filter === 'incomplete') return !todo.completed;
    return true
  })
  
  return (
    <div>
      <button onClick={() => dispatch(filterTodo('all'))}>Todas</button>
      <button onClick={() => dispatch(filterTodo('completed'))}>Completas</button>
      <button onClick={() => dispatch(filterTodo('incomplete'))}>Incompletas</button>
      <ul>
        {filterList.map((todo) => (
           <li key={todo.id}>
           <span
            onClick={() => dispatch(toggleTodo(todo.id))}
            className={todo.completed ? 'line-through' : null}>{todo.text}</span>
           <button onClick={() => dispatch(removerTodo(todo.id))}>Remover</button>
         </li>
        ))}
       
      </ul>
    </div>
  )
}

export default TodoList