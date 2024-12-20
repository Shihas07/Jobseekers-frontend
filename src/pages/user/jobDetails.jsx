import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JobDetailsGetPage from "../../services/user/jobDetailseGet";
import JobListingCard from "../../components/Common/jobCard";
import SinglePage from "./singlePage";
import CommonModal from "../../components/Common/Modal";
import useUserFind from "../../utilities/useUserFind";
import { useSelector } from "react-redux";
import apply from "../../services/user/addApplyjob";
import Snackbar from "@mui/material/Snackbar";
import getAppliedJOb from "../../services/user/appliedJob";
import ViewAppliedDetals from "../../components/user/viewAppliedDetals";
import appliedData from "../../services/user/getAppliedDetails";

export default function JobDetails() {
  // const {id}=useParams()

  const user = useSelector((state) => state.user.userDetails);
  const [jobDetail, setJobDetail] = useState("");
  const [Open, setOpen] = useState(false);
  const [appliedJobIds, setAppliedJobIds] = useState([]);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const [viewAppliedDetalsOpen, setViewAppliedOpen] = useState(false);
  const[stausApplied,setAppliedStatus]=useState([])
  console.log("status",stausApplied);
  const vertical = "top"; // Change if needed
  const horizontal = "center";
 

  const [profile, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    skills: "",
    location: "",
    coverLetter: "",
    experience: "",
    resumePath: null,

    // for file input
  });
  // console.log("jobDetails",profile)

  const { id } = useParams();
  // console.log("jobid", id);

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

    // console.log("clicked");
  };

  const data = useUserFind();

  useEffect(() => {
    if (data) {
      setFormData(data);
    } else {
      // setOpen(true)
    }
  }, [data]);

  const fields = [
    { name: "name", type: "text", value: profile.name },
    { name: "email", type: "text", value: profile.email },
    { name: "phone", type: "text", value: profile.phone },
    { name: "skills", type: "text", value: profile.skills },
    { name: "experience", type: "text", value: profile.experience },
    { name: "location", type: "text", value: profile.location },
    { name: "coverLetter", type: "text", value: profile.coverLetter },
    { name: "resumePath", type: "file", value: profile.resumePath },
  ];

  const handleClickApply = (id) => {
    // console.log("applyClicked", id);

    if (user === null) {
      showSnackbar("please login");
    }
    if (user !== null) {
      // Proceed with application logic
      // console.log("else is working");
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFieldChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    // console.log("hello", profile);

    const response = await apply(profile, id);
    // console.log(response);

    if (response.message === "Application submitted successfully") {
      // alert("sucees add")
      showSnackbar("Application submitted successfully", "success");
    } else {
      showSnackbar("Failed to submit application", "error");
    }

    setOpen(false);
  };

  const showSnackbar = (message, severity) => {
    setSnackbarMessage(message);
    setSnackbarSeverity(severity);
    setSnackbarOpen(true);
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  // console.log("user", user);
  const appliedJob = async () => {
    if (user && user.id) {
      try {
        const response = await getAppliedJOb(user.id);
        if (response && Array.isArray(response.jobIds)) {
          setAppliedJobIds(response.jobIds);
        }
      } catch (error) {
        console.error("Error fetching applied jobs:", error);
      }
    }
  };

  useEffect(() => {
    appliedJob();

    ViewApplicationFunc();
  }, [user, snackbarOpen]);

  const isJobApplied = appliedJobIds.includes(id);

  //  console.log(isJobApplied)
  //here iam creating a function handle view applied details
  const handleView = () => {
    // console.log("shihas is here");

    setViewAppliedOpen(!viewAppliedDetalsOpen);
  };

  const ViewApplicationFunc = async () => {
    const response = await appliedData(user.id, id);
    console.log("respy",response)
     if(response){
      setAppliedStatus(response)
     }
  };

  useEffect(() => {
    ViewApplicationFunc();
  }, [id,user]);

  return (
    <div>
      {jobDetail ? (
        <JobListingCard
          key={jobDetail._id}
          job={jobDetail}
          value={isJobApplied ? "view details" : "apply"}
          apply={handleClickApply}
          handleViewDetails={handleView}
        />
      ) : (
        <div>Loading job details...</div> // Show loading message
      )}

      <div>
        <SinglePage data={jobDetail} />
      </div>

      {Open === true ? (
        <CommonModal
          title={"apply"}
          onClose={handleClose}
          isOpen={Open}
          children={fields}
          onFieldChange={handleFieldChange}
          onSubmit={handleSubmit}
        />
      ) : (
        ""
      )}

      <div>
        <Snackbar
          sx={{ backgroundColor: "#63f2a4", color: "white" }}
          anchorOrigin={{ vertical, horizontal }}
          open={snackbarOpen}
          onClose={handleCloseSnackbar}
          message={snackbarMessage}
          autoHideDuration={3000}
          // severity={snackbarSeverity} // Custom prop for Snackbar styling if needed
        />
      </div>
      <div>
        <ViewAppliedDetals
          open={viewAppliedDetalsOpen}
          setOpen={setViewAppliedOpen}
          job={jobDetail}
          status={stausApplied}
        />
      </div>
    </div>
  );
}
