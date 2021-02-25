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
 
 const test = () => {
   return console.log('asd')
 }
 
  const handleClick = (text, id) => {
    history.push({
      pathname:`/DetailedTodo/${id}`, 
      state: {todo}
      })
  }

  // useEffect(() => {
  //   history.push('/DetailedTodo')
   
  // }, [selected])

  // if (selected) {
  //   return <DetailedTodo/>
  // } else if (!selected) {
    return (
      <li  className={completed ? 'completed' : 'todo__item'}>
        <span onClick={() => handleCompleted(id)} className="checked">
          {completed ? <CheckCircleOutlineIcon /> : <RadioButtonUncheckedIcon /> } 
        </span>
        <h5>{text}</h5>
        <div className="todo-icon">
          <span onClick={() => handleClick(text, id)} className="edit-icon" >
            <i><CreateIcon/></i>
          </span>
          <span onClick={()=>deleteTodo(id)} className="delete-icon" >
            <i><ClearIcon/></i>
          </span>
        </div>
      </li>
    )

  }
// }

export default TodoItem


//Notes
// recevie the done value of the array through the props min 36:28 todo with redux className={completed && '}
// 