import React from 'react'

const Button = ({onclickhandler,value,title}) => {
  return (
   <button className='px-4 py-1 border text-base hover:bg-blue-500 hover:text-white' onClick={onclickhandler} value={value} title={title}>
    {title}
   </button>
  )
}

export default Button