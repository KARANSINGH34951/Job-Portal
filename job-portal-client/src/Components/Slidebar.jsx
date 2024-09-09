import React from 'react'
import Locations from './Locations'
import Salary from './Salary'
import JobPostingData from './JobPostingData'
import Workexp from './Workexp'
import EmployeType from './EmployeType'

const Slidebar = ({handlechange,handleclick}) => {
  return (
    <div className='space-y-5'>
      <h3 className='text-lg font-bold'>Filters</h3>
      <Locations handlechange={handlechange}/>
      <Salary handlechange={handlechange} handleclick={handleclick}/>
      <JobPostingData handlechange={handlechange}/>
      <Workexp  handlechange={handlechange}/>
      <EmployeType handlechange={handlechange}/>
    </div>
  )
}

export default Slidebar