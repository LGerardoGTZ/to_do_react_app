import React,{useEffect} from 'react';
import '../styles.css/Alert.css'



const Alert = ({ type, msg, todos, removeAlert }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();//here we call the showAlert function passed as removeAlert
    }, 3000);
    return () => clearTimeout(timeout)
  }, [todos])
  return (
  <p className={`alert alert-${type}`}>{msg}</p>
  )
}

export default Alert
