import { MdLocationOn } from "react-icons/md";
import { AiTwotoneDollarCircle } from "react-icons/ai";
import { Link } from "react-router-dom";


const Job = ({job}) => {
    // console.log(job)
    const {logo, id, job_title, company_name, remote_or_onsite, location, job_type, salary} = job; 
    return (
        <div className="card-compact bg-base-100 shadow-xl">
        <figure>
          <img className="p-7"
            src={logo}
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{job_title}</h2>
          <p>{company_name}</p>
          <div className="space-x-3">
            <button className=" px-6 py-2 border rounded text-[#7E90FE] border-[#7E90FE] font-extrabold">{remote_or_onsite}</button>
            <button className=" px-6 py-2 border text-[#7E90FE] rounded border-[#7E90FE] font-extrabold">{job_type}</button>
          </div>
          <div className=" flex my-4">
            <h2 className="flex items-center  mr-10"><MdLocationOn  className="text-2xl mr-2"></MdLocationOn>{location}</h2>
            <h2 className="flex items-center"><AiTwotoneDollarCircle className="text-2xl mr-2"></AiTwotoneDollarCircle>{salary}</h2>
          </div>
          <div className="card-actions">
            <Link to={`/job/${id}`}>
            <button className="btn text-white bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default Job;