import { useEffect, useState } from 'react';
import Banners from '../Components/Banners'

const Home = () => {
  const [selectedCategory,setselectedCategory]=useState(null);
  const [jobs,setjobs]=useState([]);
  const [query, setQuery] = useState("");

  useEffect(()=>{
    fetch("jobs.json").then(res=> res.json()).then(data=> {
      
      setjobs(data)
    })
  },[])
// console.log(job);

  const filtereditem=jobs.filter((job)=>job.jobTitle.toLowerCase().indexOf(query.toLowerCase())!==-1);
  
  console.log(filtereditem);
    
  const handleQueryChange = (e) => {
    setQuery(e.target.value);
    console.log(e.target.value); 
  };
  console.log(query);
  return (
    <div className='text-primary'>
      <Banners query={query} handleQueryChange={handleQueryChange}/>
    </div>
  )
}

export default Home