import React, { useEffect, useState } from 'react'
import JobListingCard from '../../components/Common/jobCard' 
import jobGet from '../../services/user/ftchJob' 

export default function JobPage() {
  const [jobs, setJobs] = useState([]) 
  console.log("jobs", jobs)

  const fetchJob = async () => {
    const response = await jobGet() 

    if (response) {
      setJobs(response) 
    }
  }

  useEffect(() => {
    fetchJob() 
  }, [])

  return (
    <div>
      {jobs.length > 0 ? ( 
        jobs.map((job) => (
          <JobListingCard key={job._id} job={job} /> 
        ))
      ) : (
        <p>Loading jobs...</p> 
      )}
    </div>
  )
}
