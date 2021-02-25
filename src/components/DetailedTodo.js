import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom';

function DetailedTodo() {
  const history = useHistory();
  const { todo }  = history.location.state
  const { text, id, completed, description, createdAt, updatedAt } = todo;
 
 const [todoDescription, setTodoDescription] = useState(description)

 const handleUpdateDescription = () => {
  history.replace({
      pathname:`/`, 
      state: {todoDescription, todoId: id}
      })
 }

  const handleChangeDescription = (e) => {
    setTodoDescription(e.target.value)
  }

  return (
    <div style={{ margin: 20, backgroundColor: 'lightgray' }}>
      <p>Todo Title - {text}</p>
   
      <textarea value={todoDescription} onChange={handleChangeDescription} rows={10} cols={60}/>

      <br />
      <br />

      <p style={{ color: 'gray', fontSize: 13 }}><i>Todo was created on {createdAt}</i></p>
      <p style={{ color: 'gray', fontSize: 13 }}><i>Todo was updated on {updatedAt}</i></p>
      <Link to='/'>
        <button >Go back</button>
      </Link>
       
        <button onClick={() => handleUpdateDescription()}>Save</button>
    </div>
  )
}

export default DetailedTodo
