import { useEffect, useState } from "react";
import JobCard from "../Components/JobCard";


const Alljobs = () => {
    const [jobs, setJobs] = useState([])

    useEffect(() =>{
        fetch('http://localhost:3000/jobs')
        .then(res => res.json())
        .then(data => setJobs(data))
    })
    return (
        <div className="grid mt-4 mb-4 p-5 grid-cols- sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {
                jobs.map(job => <JobCard key = {job._id}  job ={job} ></JobCard>)
            }
        </div>
    );
};

export default Alljobs;