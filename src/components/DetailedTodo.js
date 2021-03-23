import React, { useState } from 'react'
import '../styles.css/DetailedTodo.css'
import { useHistory, Link } from 'react-router-dom';

function DetailedTodo() {
  const history = useHistory();
  const { todo }  = history.location.state
  const { text, id, completed, description, createdAt, updatedAt } = todo;
 
  const [todoDescription, setTodoDescription] = useState(description)
  const [updateDate, setUpdateDate] = useState(updatedAt);
  const [newTitle, setNewTitle] = useState('')

 const handleUpdateDescription = () => {
  history.replace({
      pathname:`/`, 
    state: {
      todoDescription,
      todoId: id,
      updateDate,
      newTitle
    }
  })
   setNewTitle('')
 }

  const handleChangeDescription = (e) => {
    setTodoDescription(e.target.value)
    setUpdateDate(`${new Date().toDateString()} ${new Date().toLocaleTimeString()}`);
  }

  const handleNewTitle = (e) => {
     setNewTitle(e.target.value)
  }

  return (
    <div className="container">
      <div className="detailed__container">
      <form action="">
      <label>Title</label>
        <input type="text" value={newTitle}  placeholder={text} onChange={handleNewTitle}/>
      </form>
      <div className="detailed__date">
          <small><p>Todo was created on {createdAt}</p></small>
          <small><p>Todo was updated on {updatedAt}</p></small>
        </div>
        <Link to='/'>
          <button className="btn alert-danger">Go back</button>
        </Link>
      <main className="todo__description">
          <textarea placeholder="write here your description..." value={todoDescription} onChange={handleChangeDescription} rows={10} cols={60} />

      </main>
      <div className="btn">
        <button onClick={() => handleUpdateDescription()}>Save</button>
      
      </div>
      </div>
    </div>
   
  )
}

export default DetailedTodo

{/* <div style={{ margin: 20, backgroundColor: 'lightgray' }}>
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
    </div> */}