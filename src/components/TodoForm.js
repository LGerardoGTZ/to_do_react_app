import React from 'react'
import '../styles.css/TodoForm.css';

function TodoForm({item, handleChange, handleSubmit}) {

  return (
    <div >
      <form className="todo__form" onSubmit={handleSubmit} >
        <input type="text"
          placeholder="Create a new todo"
          className="todo__input"
          value={item}
          onChange={ handleChange}/>
      </form>
      
    </div>
  )
}

export default TodoForm
