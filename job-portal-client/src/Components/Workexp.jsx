import Input from './Input'

const Workexp = ({handlechange}) => {
  return (
    <div>
      <h4 className='text-lg font-medium m-2'>Work experiments</h4>

      <div>
        <label className='sidebar-label-container'>
          <input type="radio" name='test' id='test' value="" onChange={handlechange}/>
          <span className='checkmark'></span>Any experience
        </label>

        <Input handlechange={handlechange} value="Internship" title="Internship" name="test"/>

        <Input handlechange={handlechange} value="Work remotely" title="Work remotely" name="test"/>

       
      </div>
    </div>
  )
}

export default Workexp