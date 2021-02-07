import React from 'react'
import '../styles.css/TodoList.css';
import TodoItem from './TodoItem';

function TodoList({completed, handleCompleted, todos, deleteTodo}) {
  return (
    <div className="todo__list_container">
      <ul className="todo__list">
        {
          todos.map((item) => {
            console.log('DATA',item)
            return (
              
              <TodoItem
                key={item.id} 
                deleteTodo={deleteTodo}
                id={item.id}
                title={item.item}
                handleCompleted={handleCompleted}
                completed={completed.completed}
                />
                )
                
          })
        }
      </ul>
      <div className="todo__list_footer">

      </div>
    </div>
  )
}

export default TodoList
