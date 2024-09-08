import React from 'react'
import Locations from './Locations'

const Slidebar = ({handlechange,handleclick}) => {
  return (
    <div className='space-y-5'>
      <h3 className='text-lg font-bold'>Filters</h3>
      <Locations handlechange={handlechange}/>
    </div>
  )
}

export default Slidebar