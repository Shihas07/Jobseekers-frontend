import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JobDetailsGetPage from "../../services/user/jobDetailseGet";
import JobListingCard from "../../components/Common/jobCard";
import SinglePage from "./singlePage";
import CommonModal from "../../components/Common/Modal";
import useUserFind from "../../utilities/useUserFind";
import { useSelector } from "react-redux";

export default function JobDetails() {
  const user = useSelector((state) => state.user.userDetails);
  const [jobDetail, setJobDetail] = useState("");
   const [Open,setOpen]=useState(false)

   const [profile, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    skills: "",
    location: "",
    experience: "",
    resumePath: null, // for file input
  });
  console.log("jobDetails",profile)

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

  const handleClick = () => {
    navigate(`/JobDetails/${job._id}`);

    console.log("clicked");
  };


   const data=useUserFind()


   useEffect(()=>{
       if(data){
          setFormData(data) 
       }
        else{
          // setOpen(true)
        }
   },[data])
     


  const fields = [
    { name: "name", type: "text", value: profile.name },
    { name: "email", type: "text", value: profile.email },
    { name: "phone", type: "text", value: profile.phone },
    { name: "skills", type: "text", value: profile.skills },
    { name: "experience", type: "text", value: profile.experience },
    { name: "location", type: "text", value: profile.location },
    { name: "resumePath", type: "file", value: profile.resumePath },
  ];

    const handleClickApply = (id) => {
    console.log("applyClicked", id);

    if (user === null) {
      handleClickSnack("Please log in");
    } 
      if(user!==null) {
      // Proceed with application logic
     console.log("else is working")
        setOpen(true)
    }
  };

   const handleClose=()=>{
        
          setOpen(false)
   }

   const handleFieldChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };



  return (
    <div>
      {jobDetail ? ( // Check if jobDetail is available
        <JobListingCard key={jobDetail._id} job={jobDetail} value={"apply"} apply={handleClickApply}  />
      ) : (
        <div>Loading job details...</div> // Show loading message
      )}
        
      <div>
        <SinglePage data={jobDetail}/>
      </div>

        { Open===true? <CommonModal title={"apply"} onClose={handleClose} isOpen={Open} children={fields} onFieldChange={handleFieldChange}  />:""}
    </div>
  );
}
