import { useEffect, useState } from 'react';
import Banners from '../Components/Banners'
import Cards from '../Components/Cards';
import Jobs from './Jobs';
import Slidebar from '../Components/Slidebar';
import { FaSlash } from 'react-icons/fa';
import Newsletter from '../Components/Newsletter';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [query, setQuery] = useState("");
  const [isloading,setloading]=useState(true);
  const [currentpage,setcurrentpage]=useState(1);
  const itemperpage=6;

  useEffect(() => {
    setloading(true)
    fetch("jobs.json").then(res => res.json()).then(data => {
      setJobs(data);
      setloading(false)
    });
  }, []);

  const filtereditem = jobs.filter((job) =>
    job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );
  
  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  // radio based filter
  const handlechange = (event) => {
    setSelectedCategory(event.target.value);
  }


//button based filter
  const handleclick = (event) => {
    setSelectedCategory(event.target.value);
  }

  //calculate the index range

  const caculatepageRange=()=>{
    const startIndex= (currentpage-1)* itemperpage;
    const endIndex= startIndex+itemperpage;
    return {startIndex,endIndex};
  }

  //functions for the next page

  const nextpage=()=>{
    if(currentpage < Math.ceil(filtereditem.length / itemperpage)){
      setcurrentpage(currentpage+1);
    }
  }

  //functions for the previous page

  const previouspage=()=>{
    if(currentpage >1){
      setcurrentpage(currentpage-1);
    }
  }

  //main functions or login here
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
        // postingDate.toLowerCase()==selected.toLowerCase()||
        description.toLowerCase()== selected.toLowerCase() ||
        postingDate >= selected 
      );
    }

    // return JSX for filtered jobs
    //slice the data based on current page
    const {startIndex,endIndex}= caculatepageRange();
    filterJobs = filterJobs.slice(startIndex,endIndex);
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
      <div className='col-span-2 p-4 rounded-sm'>
        {
          isloading ? (<p className='mb-2'>Loading...</p>) : result.length>0 ? <Jobs result={result} /> : <> 
          
          <h3 className='mb-2 fond-bold'>{result.length} jobs</h3> 
          <p>No data Found</p>
          </>
        }

      {
        result.length>0 ?  (
          <div className='flex justify-center mt-4 space-x-8'>
            <button onClick={previouspage} disabled={currentpage===1}>Previous</button>
              <span>Page {currentpage}of {Math.ceil(filtereditem.length/itemperpage)}</span>
            <button className='hover:underline' onClick={nextpage} disabled={currentpage === Math.ceil(filtereditem.length/ itemperpage)}>Next</button>
          </div>
        ):""
      }
      </div>

      {/* paginations */}
      

      {/* right side */}
      <div>
        <Newsletter/>
      </div>
    </div>

    </div>
  );
}

export default Home;
