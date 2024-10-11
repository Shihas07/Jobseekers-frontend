import React, { useEffect, useState } from "react";
import Nav from "../../pages/user/nav";
import Banner from "./banner";
import JobListingCard from "../../components/Common/jobCard";
import jobGet from "../../services/user/ftchJob";

export default function Home() {
  const [jobs, setJobs] = useState([]); // State to store fetched jobs

  const fetchJob = async () => {
    try {
      const response = await jobGet(); // Fetch job data from API
      if (response) {
        setJobs(response); // Set jobs to state
      }
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  useEffect(() => {
    fetchJob(); 
  }, []);

  return (
    <div>
      <div className="">
      
        <div className="mt-10 mb-10">
          {/* Render a JobListingCard for each job */}
          {jobs.length > 0 ? (
            jobs.map((job) => (
              <JobListingCard key={job._id} job={job} /> // Pass individual job as a prop to JobListingCard
            ))
          ) : (
            <p>No jobs available right now</p>
          )}
        </div>
      </div>
    </div>
  );
}
