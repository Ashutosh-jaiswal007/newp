import React from 'react'

import './card.css'

const Card=()=>{

  return(
  <div className='card-wrapper'>
    <div className='card-Content'>
      <div className='card-heading'>
        This is heading 
      </div>
      <div className='sub-heading'>
      <div className='task status'>
        Todo
      </div>
      <div className='logo'>
         logo
      </div>

    </div>
    </div>

  </div>
  )
}

export default Card