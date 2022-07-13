import React, {useContext, useState} from 'react'
import { GlobalContext } from '../context/GlobalState'

const AddTask = () => {
   const[text, setText] = useState("")
   const[day, setDay] = useState('')
   const[reminder, setReminder] = useState(false)

   const {addTask} = useContext(GlobalContext)


   const onSubmit = (e) =>{
     e.preventDefault()

     if(!text, !day){
       alert(`PLease Add a Text or Day`)
       return
     }

     const newTask={
       id:Math.floor(Math.random()*100000),
       text,
       day,
       reminder
     }
      addTask(newTask)

      setText("")
      setDay("")
      setReminder(false)
   }


  return (

    <>
      <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
          <label htmlFor="text">Add Text</label>
          <input type="text" placeholder='Input a Task' value={text} onChange={(e) => setText(e.target.value)}/>
        </div>

        <div className='form-control'>
          <label htmlFor="date">Add Day & Time</label>
          <input type="datetime-local" placeholder='Input a Day % Time' value={day} onChange={(e) => setDay(e.target.value)}/>
        </div>

        <div className='form-control form-control-check'>
          <label htmlFor='reminder'>Reminder</label>
          <input type="checkbox" checked={reminder}  value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
        </div>

        <input type="submit" value='Save Task' className='btn btn-block'/>
      </form>
    </>
  )
}

export default AddTask
