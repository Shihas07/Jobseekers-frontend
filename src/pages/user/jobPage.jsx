import React, { useEffect, useState } from "react";
import JobListingCard from "../../components/Common/jobCard";
import jobGet from "../../services/user/ftchJob";
import FilterPage from "./filter";
import getJobTitle from "../../services/user/jobTitleFilter";
import getjobLocation from "../../services/user/searchJobLocation";

export default function JobPage() {
  const [jobs, setJobs] = useState([]); // To hold all jobs
  const [searchJobTitle, setSearchJobTitle] = useState(""); // To hold the current search title
  const [filteredJobs, setFilteredJobs] = useState([]); 
  const [searchLocation,setSearchLocation]=useState("")

 
  const fetchJob = async () => {
    const response = await jobGet();
    if (response) {
      setJobs(response);
      setFilteredJobs(response); // Initially set filtered jobs to all jobs
    }
  };

  useEffect(() => {
    fetchJob();
  }, []);

  // Search for jobs based on the title
  const searchJob = async (title) => {
    if (!title) {
      setFilteredJobs(jobs); // If search title is empty, reset to all jobs
      return;
    }
    
    const response = await getJobTitle(title);
    if (response) {
      setFilteredJobs(response); // Set the filtered jobs based on search
    }
  };

  // Debounce search
  useEffect(() => {
    const debounceSearch = setTimeout(() => {
      searchJob(searchJobTitle); // Trigger search based on the job title
    }, 600);
    
    return () => clearTimeout(debounceSearch); // Cleanup the timeout
  }, [searchJobTitle, jobs]); 
  // Add jobs dependency to reset on jobs update

   
  const LocationSearch=async (title)=>{
      
     const response=  await getjobLocation(title)

     

       
  }
     

  return (
    <div style={{ display: "flex", height: "100vh" }} className="gap-8">
      <div className="w-1/4 sticky top-0">
        <FilterPage onChange={setSearchJobTitle} /> {/* Ensure onChange updates searchJobTitle */}
      </div>
      <div className="w-2/3 mt-10 overflow-y-auto">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => <JobListingCard key={job._id} job={job} />)
        ) : (
          <p>No jobs found...</p>
        )}
      </div>
    </div>
  );
}
