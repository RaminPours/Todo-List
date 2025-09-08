// toont de lijst bij de todo list... hier kan je de lijst verder aanpassen..
// 3 props
function TodoList({ todos, onDelete, onToggle }) {

  return (
    <ul>
    {todos.map((todo, i,) => (
     <li
      key={i}
      style={{textDecoration: todo.completed ? "line-through" : "none" }}>
      
      <input 
      type="checkbox" 
      checked={todo.completed}
      onChange={() => onToggle(i)}
      />  

     {todo.text} 
     <h5>priority is: {todo.priority.toUpperCase()}</h5>  
     <button className="delete" onClick={() => onDelete(i)}>Delete</button>
     </li>))}
    </ul>
  );
}

export default TodoList;