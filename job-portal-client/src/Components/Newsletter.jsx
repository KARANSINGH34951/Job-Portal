import { HiOutlineMailOpen } from "react-icons/hi";
import { FaRocket } from "react-icons/fa";

const Newsletter = () => {
  return (
    <div>
      <div>
        <h3 className='text-lg font-bold mb-2 flex items-center gap-2'>Newsletters</h3>
       
        <h2 className='text-lg font-bold mb-2 flex items-center gap-2'> <HiOutlineMailOpen/>Email me for Jobs</h2>

        <p className="text-purple-600 text-base mb-4" >Ut ease auto. Sit emin Labore dolare.Aute ease cmdo</p>

      <div className='w-full space-y-4'>
          <input type="email" name='email' placeholder='name@gamil.com' className='w-full block py-2 rounded px-2' />

          <input type="submit" value={"subscribe"} className='w-full block py-2 pl-3 border focus:outline-none bg-blue-600' id="" />
      </div>

      </div>

 {/* second part */}

      <div>
        <h3 className='text-lg font-bold mb-2 flex items-center gap-2'>Newsletters</h3>
       
        <h2 className='text-lg font-bold mb-2 flex items-center gap-2'> <FaRocket/> Get Noticed Here</h2>

        <p className="text-purple-600 text-base mb-4" >Ut ease auto. Sit emin Labore dolare.Aute ease cmdo</p>

      <div className='w-full space-y-4'>
         

          <input type="submit" value={"Upload your resume"} className='w-full block py-2 pl-3 border focus:outline-none bg-blue-600' id="" />
      </div>

    
      </div>
    </div>
  )
}

export default Newsletter