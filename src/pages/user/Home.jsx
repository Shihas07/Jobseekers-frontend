import React, { useEffect, useState } from "react";
import Nav from "../../pages/user/nav";
import Banner from "./banner";
import JobListingCard from "../../components/Common/jobCard";
import jobGet from "../../services/user/ftchJob";
import not_found from "../../assets/not_found.gif";

export default function Home() {
  const [jobs, setJobs] = useState([]); // Holds all fetched jobs
  const [searchJob, setSearchJob] = useState({
    title: "",
    location: "",
    category: "",
  }); // Holds search criteria

  // Fetch jobs from API
  const fetchJob = async () => {
    try {
      const response = await jobGet(); // Fetch job data from API
      console.log("Fetched jobs:", response); // Log fetched jobs
      if (response) {
        setJobs(response); // Set jobs to state
      }
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  useEffect(() => {
    fetchJob(); // Fetch jobs when component mounts
  }, []);

  // Filter jobs based on search criteria
  const filterJobs = () => {
    console.log("Current search criteria:", searchJob);
    console.log("Available jobs:", jobs);

    return jobs.filter((job) => {
      return (
        (searchJob.title
          ? job.jobTitle.toLowerCase().includes(searchJob.title.toLowerCase())
          : true) &&
        (searchJob.location
          ? job.jobLocation
              .toLowerCase()
              .includes(searchJob.location.toLowerCase())
          : true) &&
        (searchJob.category
          ? job.
          jobCategory
          
              .toLowerCase()
              .includes(searchJob.category.toLowerCase())
          : true)
      );
    });
  };

  const filteredJobs = filterJobs(); // Get the filtered job list

  return (
    <div>
      <div>
        <Banner onChange={setSearchJob} /> {/* Pass setSearchJob to Banner */}
      </div>
      <div className="">
        <div className="mt-10 mb-10 mx-auto">
          {/* Render a JobListingCard for each job */}
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <JobListingCard key={job._id} job={job} value={"jobdetails"} />
            ))
          ) : (
            <div
              className="d-flex justify-content-center align-items-center mx-auto lg-mx-80"
              style={{ height: "100vh ",width:"100%"  }}
            >
              <img className="center w-auto" src={not_found} alt="Not Found" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
