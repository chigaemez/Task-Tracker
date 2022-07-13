import React, { useState } from 'react'
import Header from './component/Header'
import Tasks from './component/Tasks'
import AddTask from './component/AddTask'

import { GlobalProvider } from './context/GlobalState'

const App = () => {
  const [showAddTask, setShowAddTask]= useState(false)
  return (
    <GlobalProvider>
    <div className="container">
     
     <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd ={showAddTask}/>
     { showAddTask && <AddTask/>}
     <Tasks/>
    </div>
   </GlobalProvider >
 );
}

export default App
