export default(state, action) =>{
  switch(action.type){
    case 'DELETE_TASK':
      return{
        ...state,
        task:state.task.filter(task => task.id !== action.payload)
      }

      case 'REMINDER_TASK':
        return{
          ...state,
          task:state.task.map((task) => task.id === action.payload ? {...task, reminder: !task.reminder} : task)
        }

        case 'ADD_TASK':
          return{
            ...state,
            task:[action.payload, ...state.task]
          }


    default:
      return state;

  }

 
}