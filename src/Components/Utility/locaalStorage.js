const getStoredJobApplicatins = () =>{
    const storedJobApplications = localStorage.getItem('job-applications'); 
    if(storedJobApplications){
        return JSON.parse(storedJobApplications); 
    }
    return []; 
}


const saveJobApplicatin = id =>{
    const storedJobApplications = getStoredJobApplicatins();
    const exitsts = storedJobApplications.find(jobId => jobId === id); 
    if(!exitsts){
        storedJobApplications.push(id); 
        localStorage.setItem('job-applications', JSON.stringify(storedJobApplications)); 
    }

}

export {getStoredJobApplicatins,saveJobApplicatin}