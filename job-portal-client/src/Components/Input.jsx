import React from 'react'

const Input = ({handlechange,value,title,name}) => {
  return (
    <div>
       <label className='sidebar-label-container'>
          <input type="radio"
           name={name}
           value={value} 
          id='test' onChange={handlechange} />
          <span className='checkmark'></span>{title}
        </label>

        
    </div>
  )
}

export default Input