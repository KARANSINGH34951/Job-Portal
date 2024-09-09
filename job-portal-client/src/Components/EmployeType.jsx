import Input from './Input'

const EmployeType = ({handlechange}) => {
  return (
    <div>
    <h4 className='text-lg font-medium m-2'>Locations</h4>

    <div>
      <label className='sidebar-label-container'>
        <input type="radio" name='test' id='test' value="" onChange={handlechange}/>
        <span className='checkmark'></span>ALL
      </label>

      <Input handlechange={handlechange} value="Temporary" title="Temporary" name="test"/>

      <Input handlechange={handlechange} value="Full-time" title="Full-time" name="test"/>

      <Input handlechange={handlechange} value="Part-time" title="Part-time" name="test"/>

      
    </div>
  </div>
  )
}

export default EmployeType