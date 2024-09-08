import { useEffect, useState } from 'react';
import Banners from '../Components/Banners'
import Cards from '../Components/Cards';
import Jobs from './Jobs';
import Slidebar from '../Components/Slidebar';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch("jobs.json").then(res => res.json()).then(data => {
      setJobs(data);
    });
  }, []);

  const filtereditem = jobs.filter((job) =>
    job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );
  
  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const handlechange = (event) => {
    setSelectedCategory(event.target.value);
  }

  const handleclick = (event) => {
    setSelectedCategory(event.target.value);
  }

  const filteredData = (jobs, selected, query) => {
    let filterJobs = jobs;

    // Filtering by query (search input)
    if (query) {
      filterJobs = filtereditem;
    }

    // Filtering by category
    if (selected) {
      filterJobs = filterJobs.filter(({ jobLocation, maxPrice, experienceLevel, companyName, employmentType,companyLogo ,postingDate,description}) =>
        jobLocation.toLowerCase() === selected.toLowerCase() ||
        parseInt(maxPrice) === parseInt(selected) ||
        experienceLevel.toLowerCase() === selected.toLowerCase() ||
        employmentType.toLowerCase() === selected.toLowerCase() ||
        companyLogo.toLowerCase()== selected.toLowerCase() ||
        companyName.toLowerCase()==selected.toLowerCase() ||
        maxPrice.toLowerCase()== selected.toLowerCase() ||
        postingDate.toLowerCase()==selected.toLowerCase()||
        description.toLowerCase()== selected.toLowerCase()
      );
    }

    // Return JSX for filtered jobs
    return filterJobs.map((data, index) => (
      
        <Cards key={index} data={data} />
     
    ));
  }

  const result = filteredData(jobs, selectedCategory, query);

  return (
    <div className='text-primary'>
      <Banners query={query} handleQueryChange={handleQueryChange} />
      {/* Main content */}

    <div className='bg-gray-300 md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12'>
      {/* left side */}
      <div>
        <Slidebar handlechange={handlechange} handleclick={handleclick}/>
      </div>

      {/* center part */}
      <div className='col-span-2 p-4 rounded-sm'><Jobs result={result} /></div>

      {/* right side */}
      <div></div>
    </div>

    </div>
  );
}

export default Home;
