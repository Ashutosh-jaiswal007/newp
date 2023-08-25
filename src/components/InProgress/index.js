
import './inProgress.css'
import Card from '../Card'

const InProgress=()=>{

  return(
  <div className='inProgress-wrapper'>
    <div className='inProgressHeader'>
      InProgress
    </div>
    <div className='inProgress-list'>
     <Card />
     <Card />
     <Card />
     <Card />
    </div>

  </div>
  )
}

export default InProgress