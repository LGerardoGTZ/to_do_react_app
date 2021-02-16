import React from 'react'
import '../styles.css/TodoList.css';
import TodoItem from './TodoItem';


//change item.item to item.text
function TodoList({ handleCompleted, todos, deleteTodo, handleScreenFilter, handleDeleteCompleted, filteredTodos }) {
  //  const handlerFilter = (filter) => {

  //  }

  return (
    <div className="todo__list_container">
      <ul className="todo__list">
        {
          todos.map((item) => {
            //console.log('item',item)
    
            return (
              <TodoItem
                key={item.id}
                id={item.id}
                deleteTodo={deleteTodo}
                title={item.text}
                handleCompleted={handleCompleted}
                completed={item.completed}

              />
            )
          })
        }
      </ul>
      <div className="todo__list_footer">
        <span>
          <h5>{`${todos.length} items left`}</h5>
        </span>
        <div className="btns__center">
          <button  className="btn">All</button>
          <button onClick={() => handleScreenFilter('ACTIVE')} className="btn">Active</button>
          <button onClick={filteredTodos} className="btn">Completed</button>
        </div>
        <div className="btn__clearItems">
          <button onClick={handleDeleteCompleted} className="btn">Clear Completed</button>
        </div>
      </div>
    </div>
  )
}

export default TodoList
