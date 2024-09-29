import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplicatin } from "../Utility/locaalStorage";

const JobDetails = () => {
    const jobs = useLoaderData(); 
    const {id} = useParams();  
    const idInt = parseInt(id); 
    // const job = jobs.find(job => job.id === id);
    const job = jobs.find(job => job.id === idInt); 
    // console.log(id, jobs, id)
    console.log(job)
    const handleAppyJob =  () =>{
        saveJobApplicatin(id)
        toast('You have Applied job successfully'); 
    }
    return (
        <div>
            
            <div className="grid gap-8 md:grid-cols-4 my-7">
                <div className="md:col-span-3 space-y-7 ">
                <h2>Job Details Of : {job.job_title}</h2>
                    <p className="text-xl">{job.company_name}</p>
                   <p><span className="font-bold ">Job Description</span>: A UI/UX (User Interface/User Experience) designer is responsible for designing and creating engaging and effective interfaces for software and web applications. This includes designing the layout, visual design, and interactivity of the user interface.</p>

                   <p><span className="font-bold">Job Responsibility</span>: Collaborating with cross-functional teams: UI/UX designers often work closely with other teams, including product management, engineering, and marketing, to ensure that the user interface is aligned with business and technical requirements. You will need to be able to effectively communicate your design ideas and gather feedback from other team members.</p>
                   <p className="font-bold">Educational Requirements:</p>
                   <p>Bachelor degree to complete any reputational university.</p>
                   <p>Experiences:</p>
                   <p>2-3 Years in this field.</p>
                </div>
                <div className="border md:col-span-1">
                    <h2>Side things</h2>
                    <button onClick={handleAppyJob} className="btn w-full text-white bg-gradient-to-r from-[#7E90FE]  to-[#9873FF] mx-auto my-7">Apply Now</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;