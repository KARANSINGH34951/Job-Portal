import React from 'react'
import Input from './Input'

const Locations = ({handlechange}) => {
  return (
    <div>
      <h4 className='text-lg font-medium m-2'>Locations</h4>

      <div>
        <label className='sidebar-label-container'>
          <input type="radio" name='test' id='test' value="" onChange={handlechange}/>
          <span className='checkmark'></span>ALL
        </label>

        <Input handlechange={handlechange} value="London" title="London" name="test"/>

        <Input handlechange={handlechange} value="seattle" title="seattle" name="test"/>

        <Input handlechange={handlechange} value="madrid" title="madrid" name="test"/>

        <Input handlechange={handlechange} value="Boston" title="Boston" name="test"/>
      </div>
    </div>
  )
}

export default Locations
