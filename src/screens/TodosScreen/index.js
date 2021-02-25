import React, { useState, useEffect } from 'react'
import './index.css';
import TodoForm from '../../components/TodoForm';
import TodoList from '../../components/TodoList';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import { useHistory } from 'react-router-dom';


//get the local storage
const getLocalStorage = () => {
  let list = localStorage.getItem('todos');
  if (list) {
    return JSON.parse(localStorage.getItem('todos'));
  } else {
    return [];
  }
}


function TodosScreen() {
  const history = useHistory();
  const historyState = history.location.state
  //Set up our todos array
  const [todos, setTodos] = useState(getLocalStorage());
  // console.log('TODOS', todos)
  //Set up our input value
  const [text, setText] = useState('')

  //set input value to our text hook
  const handleChange = (e) => {
    const inputText = e.target.value
    setText(inputText)
  }

  //add todos to our todos array
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!text) return
    const newTodo = {
      id: new Date().getTime().toString(),
      text: text,
      completed: false,
      description: '',
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString(),
    }
    setTodos([newTodo, ...todos])
    setText('');
  }

    useEffect(() => {
      if(!historyState) return
      handleUpdateTodoDescription()
      history.replace('', null);
    }, [historyState])

     
  const handleUpdateTodoDescription = () => {
    const newTodos = todos.map((todo) => {
      return todo.id === historyState?.todoId ? {...todo, description: historyState?.todoDescription} : {...todo}
    })

    setTodos(newTodos)
 }

  //delete todos
  const deleteTodo = (id) => {
    const confirmationResult = window.confirm('Are you sure you want to delete this item?')
    if (!confirmationResult) return //if is NOT true, then do not run the following code
    const newTodos = todos.filter((item) => item.id !== id);
    setTodos(newTodos);
  }

  const handleCompleted = (id) => {
    //HOC - Higher Order Function
    // const newTodos = todos.map(todo => ({
    //   ...todo,
    //   completed: todo.id === id ? true : todo.completed
    // }))

      //set toggle completed
    const newTodos = todos.map((todo) => {
      return todo.id === id? {...todo, completed: !todo.completed} : {...todo}
    })
    setTodos(newTodos)
  }

  //delete completed todos
  const handleDeleteCompleted = () => {
    const completed = todos.filter((todo) => {
      return !todo.completed;
    });
    setTodos(completed)
  }

  //filter completed todos
  const filteredTodos = () => {
    const filtered = todos.filter((todo) => {
      return todo.completed;
    });
    setTodos(filtered);
  }

  //local storage
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [historyState])

  return (
    <div className="app">
      <div className="app__container">
        <div className="header">
          <div className="title">
            <h1>TODO</h1>
          </div>
          <div className="mode__container">
            <NightsStayIcon />
          </div>
        </div>
        <TodoForm
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          item={text}
        />
        {/* conditional rendering */}
        {todos.length > 0 && <TodoList
          todos={todos}
          deleteTodo={deleteTodo}
          handleCompleted={handleCompleted}
          handleDeleteCompleted={handleDeleteCompleted}
        />  }
       
      </div>
    </div>
  );
}

export default TodosScreen;

// {}