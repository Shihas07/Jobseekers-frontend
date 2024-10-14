import React, { useEffect, useState } from "react";
import JobListingCard from "../../components/Common/jobCard";
import jobGet from "../../services/user/ftchJob";
import FilterPage from "./filter";
import getJobTitle from "../../services/user/jobTitleFilter";
import getjobLocation from "../../services/user/searchJobLocation";
import SortingDropdown from "./sort";
import notFound from "../../assets/not_found.gif"

export default function JobPage() {
  const [jobs, setJobs] = useState([]); // To hold all jobs
  const [searchJobTitle, setSearchJobTitle] = useState(""); // To hold the current search title
  const [filteredJobs, setFilteredJobs] = useState([]); // Filtered jobs for display
  const [searchLocation, setSearchLocation] = useState(""); // To hold the location filter
  const [titleFilteredJobs, setTitleFilteredJobs] = useState([]); // To store jobs filtered by title
  const [categoryFilter, setCategoryFilter] = useState(""); // To store the selected category filter

  // Fetch all jobs initially
  const fetchJob = async () => {
    const response = await jobGet();
    if (response) {
      setJobs(response);
      setFilteredJobs(response); // Initially set filtered jobs to all jobs
      setTitleFilteredJobs(response); // Initialize title-filtered jobs to all jobs
    }
  };

  useEffect(() => {
    fetchJob();
  }, []);

  // Search for jobs based on the title
  const searchJob = async (title) => {
    if (!title) {
      setFilteredJobs(jobs); // If search title is empty, reset to all jobs
      setTitleFilteredJobs(jobs); // Reset title-filtered jobs to all jobs
      return;
    }

    const response = await getJobTitle(title);
    if (response) {
      setFilteredJobs(response); // Set the filtered jobs based on title search
      setTitleFilteredJobs(response); // Store title-filtered jobs separately
    }
  };

  // Debounce search for the job title
  useEffect(() => {
    const debounceSearch = setTimeout(() => {
      searchJob(searchJobTitle); // Trigger search based on job title
    }, 600);

    return () => clearTimeout(debounceSearch); // Cleanup the timeout
  }, [searchJobTitle, jobs]);

  // Location search combined with title filtering
  const locationSearch = async (location) => {
    if (!location) {
      setFilteredJobs(titleFilteredJobs); // Reset to title-filtered jobs if no location is provided
      return;
    }

    const response = await getjobLocation(location);

    if (response && Array.isArray(response)) {
      // Show jobs that match both title and location
      const jobsMatchingLocation = titleFilteredJobs.filter((job) =>
        response.some((locationJob) => locationJob._id === job._id)
      );
      setFilteredJobs(jobsMatchingLocation);
    } else if (response && response._id) {
      // Single job result: check if it's in title-filtered jobs
      const jobMatches = titleFilteredJobs.find(
        (job) => job._id === response._id
      );
      if (jobMatches) {
        setFilteredJobs([response]);
      } else {
        setFilteredJobs([]); // No match, show no results
      }
    } else {
      setFilteredJobs([]);
    }
  };

  // Debounce location search
  useEffect(() => {
    const debounceLocationSearch = setTimeout(() => {
      locationSearch(searchLocation); // Trigger location search
    }, 600);

    return () => clearTimeout(debounceLocationSearch);
  }, [searchLocation, titleFilteredJobs]);

  // Filter jobs by category
  const checkFunc = () => {
    const result = titleFilteredJobs.filter(
      (job) => job.jobCategory === categoryFilter
    );
    setFilteredJobs(result);
  };

  useEffect(() => {
    checkFunc();
  }, [categoryFilter]);

  // Sorting logic
  const handleSort = (sortOption) => {
    let sortedJobs = [...filteredJobs];
    if (sortOption === "A-Z") {
      sortedJobs.sort((a, b) => a.jobTitle.localeCompare(b.jobTitle)); // Sort by job title A-Z
    } else if (sortOption === "Z-A") {
      sortedJobs.sort((a, b) => b.jobTitle.localeCompare(a.jobTitle)); // Sort by job title Z-A
    } else if (sortOption === "Date") {
      sortedJobs.sort(
        (a, b) => new Date(b.postedDate) - new Date(a.postedDate)
      ); // Sort by date posted, most recent first
    }

    setFilteredJobs(sortedJobs); // Update filtered jobs with the sorted list
  };

  return (
    <div>
      <div
        style={{ display: "flex", marginRight: "100px" }}
        className="justify-end mt-10"
      >
        <SortingDropdown onSort={handleSort} /> {/* Pass sorting handler */}
      </div>
      <div style={{ display: "flex", height: "100vh" }} className="gap-8 lg:gap-8 sm:gap-3 flex-col sm:flex-row">
  <div className="sticky top-0 w-full md:w-1/3 lg:w-1/4">
    <FilterPage
      onChange={setSearchJobTitle}
      location={setSearchLocation}
      categoryCheck={setCategoryFilter}
    />
  </div>
  <div className="w-full sm:w-2/3 sm:h-4/5 mt-10 overflow-y-auto">
    {filteredJobs.length > 0 ? (
      filteredJobs.map((job) => <JobListingCard key={job._id} job={job} value={"job Details"} />)
    ) : (
      <div className="flex justify-center items-center">
        <img width="50%" height="50%" src={notFound} alt="Not Found" />
      </div>
    )}
  </div>
</div>

    </div>
  );
}
