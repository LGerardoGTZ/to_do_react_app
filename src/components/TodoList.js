import React, {useState} from 'react'
import '../styles.css/TodoList.css';
import TodoItem from './TodoItem';

const FILTER_STATES = {
  ALL: 'ALL',
  ACTIVE: 'ACTIVE',
  COMPLETED: 'COMPLETED'
}

//change item.item to item.text
function TodoList({ text, handleCompleted, todos, deleteTodo, handleDeleteCompleted }) {
  const [filter, setFilter] = useState(FILTER_STATES.ALL)

  const filteredTodos = todos.filter(todo => {
    console.log('TODO....', todo)
    if(todo.text.toLowerCase().includes(text.toLowerCase()))return todo
    if (filter === FILTER_STATES.ALL) return todo
    // if (filter === FILTER_STATES.ACTIVE) return todo.completed
    if (filter === FILTER_STATES.ACTIVE) return !todo.completed
    if (filter === FILTER_STATES.COMPLETED) return todo.completed
  })

  return (
    <div className="todo__list_container">
      <ul className="todo__list">
        {
          filteredTodos.map((item, index) => {
            return (
              <TodoItem
                key={`${item.id}${index}`}
                todo={item}
                deleteTodo={deleteTodo}
                handleDeleteCompleted={handleCompleted}
                handleCompleted={handleCompleted}
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
          <button onClick={() => setFilter(FILTER_STATES.ALL)}  className="btn">All</button>
          <button onClick={() => setFilter(FILTER_STATES.ACTIVE)} className="btn">Active</button>
          <button onClick={() => setFilter(FILTER_STATES.COMPLETED)} className="btn">Completed</button>
        </div>
        <div className="btn__clearItems">
          <button onClick={handleDeleteCompleted} className="btn">Clear Completed</button>
        </div>
      </div>
    </div>
  )
}

export default TodoList
