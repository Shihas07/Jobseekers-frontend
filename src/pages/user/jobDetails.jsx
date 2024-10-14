import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JobDetailsGetPage from "../../services/user/jobDetailseGet";
import JobListingCard from "../../components/Common/jobCard";
import SinglePage from "./singlePage";

export default function JobDetails() {
  const [jobDetail, setJobDetail] = useState(""); // Use a single job object
  console.log("jobDetails",jobDetail)

  const { id } = useParams();

  const jobGetFunc = async () => {
    try {
      const response = await JobDetailsGetPage(id);
      // Assuming response is an object with job details
      if (response) {
        setJobDetail(response);
      }
    } catch (error) {
      console.error("Error fetching job details:", error);
      // Handle error (e.g., set an error state or show a message)
    }
  };

  useEffect(() => {
    jobGetFunc();
  }, [id]); // Include id in dependency array

  return (
    <div>
      {jobDetail ? ( // Check if jobDetail is available
        <JobListingCard key={jobDetail._id} job={jobDetail} value={"apply"} />
      ) : (
        <div>Loading job details...</div> // Show loading message
      )}
        
      <div>
        <SinglePage data={jobDetail}/>
      </div>
    </div>
  );
}
