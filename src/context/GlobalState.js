import React,  { createContext, useReducer } from "react";
import AppReducer from './AppReducer';

const initialState = {
  task:[
    {
      id: 1,
      text:'Meet The Teacher',
      day: 'Dec 10th 1:00 AM',
      reminder: true

    },
    {
      id: 2,
      text:'Meet The Lawyer',
      day: 'April 20th 12:00 AM',
      reminder: true
    },
    {
      id: 3,
      text:'Visit the Poor',
      day: 'Dec 45th 1:30 AM',
      reminder: false
    }
   
  ]
}


export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function deleteTask(id){
    dispatch({
      type:'DELETE_TASK',
      payload: id
    })

  }


  function taskReminder(id){
    dispatch({
      type:'REMINDER_TASK',
      payload: id
    })
  }

  function addTask(task){
    dispatch({
      type:'ADD_TASK',
      payload: task
    })
  }

  return(<GlobalContext.Provider value={{
    task:state.task,
    deleteTask,
    taskReminder,
    addTask
    
  }}>
    {children}
  </GlobalContext.Provider>)
}