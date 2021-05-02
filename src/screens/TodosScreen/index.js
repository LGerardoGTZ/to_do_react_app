import React, { useState, useEffect } from 'react'
import './index.css';
import TodoForm from '../../components/TodoForm';
import TodoList from '../../components/TodoList';
import Alert from '../../components/Alert'
import NightsStayIcon from '@material-ui/icons/NightsStay';
import Brightness5Icon from '@material-ui/icons/Brightness5';
import { useHistory } from 'react-router-dom';
import paginate from '../../utils/paginate'


function TodosScreen() {
  //get the local storage
  const getLocalStorage = () => {
    let list = localStorage.getItem('todos');
  
    if (list) {
      return JSON.parse(localStorage.getItem('todos'));
    } else {
      return [];
    }
  }


  const history = useHistory();
  const historyState = history.location.state
  //Set up our todos array
  const [todos, setTodos] = useState(getLocalStorage());
  // console.log('TODOS', todos)
  //Set up our input value
  const [text, setText] = useState('')
  //alert
  const [alert, setAlert] = useState({
    show: false,
    msg: '',
    type: ''
  });

  //theme
  const [theme, setTheme] = useState('light-theme')

  //page for pagination
  const [page, setPage] = useState(0);
  
  //toggle theme function
  const toggleTheme = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme')
    }
    else {
      setTheme('light-theme')
    }
  }

  //testing with useEffect for pagination
  useEffect(() => {
    paginate([todos][page])
      
  },[])

  //attach the className to the html doc so we can access the variable depending on the selected theme
  useEffect(() => {
    document.documentElement.className = theme;
  },[theme])

  //set input value to our text hook
  const handleChange = (e) => {
    const inputText = e.target.value
    setText(inputText)
  }

  //add todos to our todos array
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!text || text.length > 50) return
    const newTodo = {
      id: new Date().getTime().toString(),
      text: text,
      completed: false,
      description: '',
      createdAt: `${new Date().toDateString()} ${new Date().toLocaleTimeString()}`,
      updatedAt: `${new Date().toDateString()} ${new Date().toLocaleTimeString()}`,
    }
    setTodos([newTodo, ...todos])
    setTodos([newTodo, ...todos])
    setText('');
  }

    useEffect(() => {
      if(!historyState) return
      handleUpdateTodoDescription()
      history.replace('', null);
    }, [historyState])

  
    //this functions is on charge of update the todos that have been added a description
  const handleUpdateTodoDescription = () => {
    const updatedTodos = todos.map((todo) => {
      return todo.id === historyState?.todoId ? {
        ...todo,
        description: historyState?.todoDescription,
        updatedAt: historyState?.updateDate,
        text: historyState?.newTitle || todo.text
      } : { ...todo }
    })

    setTodos(updatedTodos)
 }

  //delete todos
  const deleteTodo = (id) => {
    const confirmationResult = window.confirm('Are you sure you want to delete this item?')
    if (!confirmationResult) return //if is NOT true, then do not run the following code
    const newTodos = todos.filter((item) => item.id !== id);
    setTodos(newTodos);
    showAlert(true, 'danger','item deleted' )
  }

  const handleCompleted = (id) => {
    //HOC - Higher Order Function
    // const newTodos = todos.map(todo => ({
    //   ...todo,
    //   completed: todo.id === id ? true : todo.completed
    // }))

      //set toggle completed
    const newTodos = todos.map((todo) => {
      // if(!todo.completed)return
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
    showAlert(true, 'success', 'completed items deleted')

  }

  //create a function that we can use in many places every time we want to show the alert
  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  }

  //local storage
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])

  return (
    <div className="app">
      <div className="app__container">
        <div className="header">
          <div className="title">
            <h1>TODO</h1>
          </div>
          <button onClick={toggleTheme} className="mode__container">
            {theme === 'light-theme' ? < NightsStayIcon /> : <Brightness5Icon/> }
          </button>
        </div>
        <TodoForm
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          item={text}
          />
        {alert.show && <Alert {...alert} removeAlert={showAlert} todos={ todos}/>}
        {/* conditional rendering */}
        {todos.length > 0 && <TodoList
          text={text}
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