
import './todos.css'
import Card from '../Card'

const Todos=()=>{

  return(
  <div className='todo-wrapper'>
    <div className='todoHeader'>
      Todo
    </div>
    <div className='Todo-list'>
     <Card />
     <Card />
     <Card />
     <Card />
    </div>

  </div>
  )
}

export default Todos