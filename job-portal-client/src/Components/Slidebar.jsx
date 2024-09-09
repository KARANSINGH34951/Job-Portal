import React from 'react'
import Locations from './Locations'
import Salary from './Salary'

const Slidebar = ({handlechange,handleclick}) => {
  return (
    <div className='space-y-5'>
      <h3 className='text-lg font-bold'>Filters</h3>
      <Locations handlechange={handlechange}/>
      <Salary handlechange={handlechange} handleclick={handleclick}/>
    </div>
  )
}

export default Slidebar