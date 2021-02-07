import React, { useState } from 'react'
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import NightsStayIcon from '@material-ui/icons/NightsStay';

function App() {
  
  //Set up our todos array
  const [todos, setTodos] = useState([]);
  
  //Set up our input value
  const [todo, setTodo] = useState({
    item: '',
    id: '',
    completed: false,
    isActive:true,
  })
  

  //Set completed
  const [completed, setCompleted] = useState([]);
  console.log('COMPLETED',completed);

  //set inputa value to our todo hook
  const handleChange = (e) => {
    setTodo({ item: e.target.value })
    console.log('TODO INPUT',todo);
  }
  
  //add todos to our todos array
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      ...todo,
      id: new Date().getTime().toString(),
      item: todo.item,
      completed: false,
      isActive:true
    }
    setTodos((todos) => {
      return [...todos, newTodo]
    });
    setTodo({item:''});
    console.log('TODOS=>',todos)
  }

  //delete todos
  const deleteTodo = (id) => {
    const newTodos = todos.filter((item) => item.id !== id);
    setTodos(newTodos);
  }

  const handleCompleted = (id) => {
    const selectedItem = todos.find((item => item.id === id))
    setCompleted({
      
      id : id,
      item: selectedItem.item,//like this, instead of item:selectedItem, otherwise you copy the whole obj
      completed: true,
      isActive: false,
    })
    
}



  return (
    <div className="app">
      <div className="app__container">
        <div className="header">
        <div className="title">
        <h1>TODO</h1>
          </div>
          <div className="mode__container">
            <NightsStayIcon/>
          </div>
        </div>
        <TodoForm
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          item={todo.item}
        />
        <TodoList
          todos={todos}
          deleteTodo={deleteTodo}
          handleCompleted={handleCompleted}
          completed={completed}

        />
    </div>
    </div>
  );
}

export default App;


//i could set another pair of hooks
//  one for active and another to completed

// const [complete, setComplete] = useState(completed)


// const completed = () => {
//
//}

// the active hook actually is compound of the todos that haven't been marked
// as completed

// At this point i have the new completed hook, the next is try to use the complete:true value to 
// modify the css of the choosen item.