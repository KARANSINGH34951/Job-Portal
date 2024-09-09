import Button from './Button'
import Input from './Input'

const Salary = ({handlechange,handleclick}) => {
  return (
    <div>
        <h4 className='text-lg font-medium mb-2'>salary</h4>
        <div className='mb-3'>
          <Button onclickhandler={handleclick} value="" title="Hourly"/>
          <Button onclickhandler={handleclick} value="Monthly" title="Monthly"/>
          <Button onclickhandler={handleclick} value="yearly" title="Yearly"/>
        </div>

        <div>
        <label className='sidebar-label-container'>
          <input type="radio" name='test' id='test' value="" onChange={handlechange}/>
          <span className='checkmark'></span>ALL
        </label>

        <Input handlechange={handlechange} value={30} title="< 30000k" name="test2"/>
        <Input handlechange={handlechange} value={50} title="< 50000k" name="test2"/>
        <Input handlechange={handlechange} value={100} title="< 100000k" name="test2"/>
        </div>
    </div>
  )
}

export default Salary