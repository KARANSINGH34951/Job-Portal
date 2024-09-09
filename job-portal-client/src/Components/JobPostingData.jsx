import Input from './Input';

const JobPostingData = ({handlechange}) => {
  const now= new Date();
  const twentyfourhoursago= new Date(now- 24*60*60*1000);
  const sevendaysago= new Date(now- 7*24*60*60*1000);
  const thirtydaysago= new Date(now- 30*24*60*60*1000);
  
  // console.log(twentyfourhoursago);
  
//convert day to string
const twentyfourhoursagoDate=twentyfourhoursago.toISOString().slice(0,10);
const sevendaysagoDate= sevendaysago.toISOString().slice(0,10);
const thirtydaysagoDate= thirtydaysago.toISOString().slice(0,10);
// console.log(twentyfourhoursagoDate);

  return (
    <div>

        <h4 className='text-lg font-medium mb-2'>Job posting Date</h4>
        <label className='sidebar-label-container'>
          <input type="radio" name='test' id='test' value="" onChange={handlechange}/>
          <span className='checkmark'></span>All Time
        </label>

        <Input handlechange={handlechange} value="twentyfourhoursago" title="Last twenty Hours" name="test"/>

        <Input handlechange={handlechange} value="sevendaysago" title="A week Ago" name="test"/>

        <Input handlechange={handlechange} value="thirtydaysago" title="A month Ago" name="test"/>

      </div>
  )
}

export default JobPostingData;