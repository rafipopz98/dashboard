import React from 'react'
import './Headings.css'
const Heading = ({children}) => {
  return (
    <div className='heading'>
    <h3>{children}</h3>
    <button onClick={()=>children+1}>+</button>
    </div>
  )
}

export default Heading