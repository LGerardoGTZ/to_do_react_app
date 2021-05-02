import React, { useState, useEffect } from 'react'
import '../styles.css/TodoItem.css'
import ClearIcon from '@material-ui/icons/Clear';
import CreateIcon from '@material-ui/icons/Create';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import DetailedTodo from './DetailedTodo';
import { useHistory } from 'react-router-dom';

function TodoItem({ todo, handleCompleted, deleteTodo }) {
const { id, text, completed, description, createdAt, updatedAt} = todo

  //execute useHistory
  const history = useHistory();
 
  const handleClick = (id) => {
    history.push({
      pathname:`/DetailedTodo/${id}`, 
      state: {todo}
      })
  }


    return (
      <li  className={completed ? 'completed' : 'todo__item'}>
        <span onClick={() => handleCompleted(id)} className="svg checked">
          {completed ? <CheckCircleOutlineIcon /> : <RadioButtonUncheckedIcon /> } 
        </span>
        <h5>{text}</h5>
        <div className="todo-icon">
          <span onClick={() => handleClick(id)}  className="svg edit-icon" >
            <i><CreateIcon/></i>
          </span>
          <span onClick={()=>deleteTodo(id)} className="svg delete-icon" >
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