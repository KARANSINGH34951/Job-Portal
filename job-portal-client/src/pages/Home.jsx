import { useState } from 'react';
import Banners from '../Components/Banners'

const Home = () => {
  const [query, setQuery] = useState("");

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