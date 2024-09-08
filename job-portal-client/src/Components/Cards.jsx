import { CiLocationOn } from "react-icons/ci";
import { CiTimer } from "react-icons/ci";
import { MdOutlineAttachMoney } from "react-icons/md";
import { CiCalendarDate } from "react-icons/ci";
import {Link} from "react-router-dom"
const Cards = ({ data }) => {
  // console.log(data);
  
  const { jobTitle,companyName, jobLocation,employmentType,companyLogo,maxPrice,postingDate,description } = data;

  return (
    <section className='card'>
      <Link to={"/"}>
        <img src={companyLogo} alt="Logo" />

        <div>
          <h4 className='text-purple-400 mb-1'>{companyName}</h4>
          <h3 className='text-lg font-semibold mb-2'>{jobTitle}</h3>

            <div className='items-center flex gap-4'>
                  <span className='flex items-center gap-2'><CiLocationOn/>{jobLocation}</span>
                  <span className='flex items-center gap-2'><CiTimer/>{employmentType}</span>
                  <span className='flex items-center gap-2'><MdOutlineAttachMoney/>{maxPrice}K</span>
                  <span className='flex items-center gap-2'><CiCalendarDate/>{postingDate}</span>
            </div>

            <p className='text-base text-black'>{description}</p>
        </div>
      </Link>
    </section>
  );
};

export default Cards;
