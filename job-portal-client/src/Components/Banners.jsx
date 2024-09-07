import { FaSearch } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";

const Banners = ({ query, handleQueryChange }) => {
  return (
    <div className="max-w-screen-2xl container mx-auto lg:px-24 xl:px-24 px-4 md:py-20 py-14">
      <h1 className="text-4xl font-bold text-blue-700 my-3 text-center">New Job Today?</h1>
      <p className="text-black text-center mb-6">Looking for a job? You are at the right place.</p>

      <form action="">
        <div className="flex justify-center md:flex-row flex-col md:gap-4 gap-6">
         
          <div className="flex items-center border rounded-md shadow-md md:w-1/2 lg:w-1/3">
          <span className="bg-gray-100 px-5 py-3 rounded-r-md">
              <FaSearch  />
            </span>
            <input
              type="text"
              id="title"
              name="title"
              className="block flex-1 border-none outline-none bg-gray-50 px-5 py-3 sm:text-sm rounded-l-md hover:bg-emerald-100"
              onChange={handleQueryChange}
              
              value={query}
              placeholder="Find your Job Here!"
            />
          </div>
          
          <div className="flex items-center border rounded-md shadow-md md:w-1/3 lg:w-1/4">
            <input
              type="text"
              id="location"
              name="location"
              className="block flex-1 border-none outline-none bg-gray-50 px-5 py-3 sm:text-sm rounded-l-md hover:bg-emerald-100"
              placeholder="Your Location"
            />
            <span className="bg-gray-100 px-5 py-3 rounded-r-md">
              <CiLocationOn className="text-gray-600" />
            </span>
          </div>

          <button type='submit' className='bg-blue-600 px-4 py-2 rounded-lg'>
              Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Banners;
