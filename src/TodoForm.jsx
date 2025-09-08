import React, { useState } from "react";

// todoform om input en add button te weergeven...
// 1 prop onAdd
// 2 usestate.. 1 voor de inputtekst en 1 voor de prioriteit van de taken.
function TodoForm({ onAdd }) {
  
  const [text, setText] = useState("");
  const [priority, setPriority] = useState("high");


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd({ text, priority });
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>

      <input
        placeholder="Add something..."
        value={text} 
        onChange={(e) => setText(e.target.value)}
      />

      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="high">High Priority</option>
        <option value="medium">Medium Priority</option>
        <option value="low">Low Priority</option>
      </select>

      <button>Add</button>
      
    </form>
  );
}

export default TodoForm;