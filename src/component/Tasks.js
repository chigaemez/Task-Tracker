import React, { useContext } from 'react'
import Task from './Task'
import { GlobalContext } from '../context/GlobalState'

const Tasks = () => {
  const {task} = useContext(GlobalContext)
  return (
    <>
    {
     task.length > 0 ? task.map((task) => (<Task key={task.id} task={task}/>)): 'No Task Availabel'
    }
     
    </>
  )
}

export default Tasks
