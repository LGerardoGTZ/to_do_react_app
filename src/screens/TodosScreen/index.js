import React, { useState } from 'react'
import './index.css';
import TodoForm from '../../components/TodoForm';
import TodoList from '../../components/TodoList';
import NightsStayIcon from '@material-ui/icons/NightsStay';

const filterState = {
  ALL: 'ALL',
  ACTIVE: 'ACTIVE',
  COMPLETED: 'COMPLETED'
}

function TodosScreen() {
  //Set up our todos array
  const [todos, setTodos] = useState([]);
  console.log('TODOS', todos)
  //Set up our input value
  const [text, setText] = useState('')

  const [filter, setFilter] = useState(filterState.ALL);
  

 // const [filteredTodos, setFilteredTodos] = useState([]);
  //console.log('FilteredTOdos',filteredTodos)

  //set input value to our todo hook
  const handleChange = (e) => {
    const inputText = e.target.value
    setText(inputText)
  }

  // const handleScreenFilter = (filter) => {
  //   //filter = all || active || completed
    
  //   // if(filter === 'all'){
  //     //
  //   }
    
  //   // if(filter === 'active'){
  //     //
  //   }

  //   // if(filter === 'completed'){
  //     //
  //   }
  // }

  // const handleScreenFilter = (filter) => {
  //   switch (filter) {
  //     case 'ALL':
  //       //handle all completed and active
  //       console.log('ALL CLICKED')
  //       setTodos(filteredTodos);
  //       break;
  //     case 'COMPLETED':
  //       //handle completed
  //       console.log('COMPLETED')
  //       setFilteredTodos(todos.map((item) => {
  //         if (item.completed === true) {
  //           return {...item};
  //         }
          
  //         return item;
         
  //       }))
  //       setTodos(filteredTodos)

  //       break;
  //     case 'ACTIVE':
  //       //handle active todos

  //       console.log('ACTIVE')
      

  //       break;
    
  //     default:
  //       //handle default state
  //       break;
  //   }
  // }

  //add todos to our todos array
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: new Date().getTime().toString(),
      text: text,
      completed: false,
      // isActive: true
    }
    setTodos([newTodo, ...todos])
    setText('');
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
          //handleScreenFilter={handleScreenFilter}
          handleDeleteCompleted={handleDeleteCompleted}
          filteredTodos={filteredTodos}
          
        />  }
       
      </div>
    </div>
  );
}

export default TodosScreen;

// {}