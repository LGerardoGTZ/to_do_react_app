import React from 'react'
import '../styles.css/TodoItem.css'
import ClearIcon from '@material-ui/icons/Clear';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';

function TodoItem({ completed, deleteTodo, title, id, handleCompleted }) {
 
  return (
    <li className={completed ? 'completed' : 'todo__item'}>
      <span onClick={() => handleCompleted(id)} className="checked">
        <RadioButtonUncheckedIcon/>
      </span>
      <h5>{title}</h5>
      <div className="todo-icon">
        <span onClick={()=>deleteTodo(id)} className="delete-icon" >
          <i><ClearIcon/></i>
        </span>
      </div>
    </li>
  )
}

export default TodoItem


//Notes
// recevie the done value of the array through the props min 36:28 todo with redux className={completed && '}
// 