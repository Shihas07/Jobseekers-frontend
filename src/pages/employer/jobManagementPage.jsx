import { AddBox } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import { Flex } from "antd";
import React, { useEffect, useState } from "react";
import ModalJob from "./modalJob";
import postData from "../../services/addJobData";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TableJobPost from "./TableJoBPost";
import fetch from "../../services/Jobdetailsget";
import EditModalJob from "./editTableModal";
import editJobPost from "../../services/employer/editJobPost";
import postdelete from "../../services/employer/deletePost";

export default function JobManagementPage() {
  const [jobs, setJobs] = useState([]);
  const [editJobDetails, setEditJobDetails] = useState(null);
  // console.log("editjobDetails",editJobDetails)

  const employer = useSelector((state) => state.employer.employerDetails);

  // console.log("sss", jobs);

  const [Open, setOpen] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [editjob, setEditJob] = useState("");
  // console.log("editjob:", editjob);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditModal(false);
  };

  const onSubmit = async (data) => {
    try {
      // console.log("datas", data);
      const id = employer._id;

      // Call postData and await the result
      const response = await postData(data, id);

      // Check the response message
      if (response.message === "No tokens left to decrement") {
        toast("Please recharge");
      } else {
        toast("Job posted successfully!");
        fetchJobDetails();
      }

      // Close modal and reset form if successful
      handleClose();
      reset();
    } catch (error) {
      // Handle any other errors, such as network issues
      console.error("Error in onSubmit:", error);
      // toast("An error occurred while posting the job.");
    }
  };

  const fetchJobDetails = async () => {
    const id = employer._id;

    const response = await fetch(id);
    if (response) {
      setJobs(response.data);
    }
  };


  const handledelete = async (id) => {
    try {
        console.log(id);

        // Call the delete function
        const response = await postdelete(id);

        console.log("responseDelete", response);

        if (response.message === "Job deleted successfully") {
            toast("Delete successful");

           
            fetchJobDetails();
        }
    } catch (error) {
        console.error("Error deleting job:", error);
        toast("Failed to delete job");
    }
};


  useEffect(() => {
    fetchJobDetails();
    
  }, []);

  const EditModal = (job) => {
    setEditJob(job);

    setEditModal(true);
  };

  useEffect(() => {
    if (editjob && jobs.length > 0) {
      const jobDetails = jobs.find(job => job._id === editjob);
      setEditJobDetails(jobDetails);
    }
  }, [editjob, jobs]);


  const editModalSubmit=async(data)=>{
     
      // console.log("jobdetailsedit",data) 

      const response=await editJobPost(data)
      // console.log("reponseeee",response)

      if (response.message === "Job updated successfully") {
        toast("update sucess");
        fetchJobDetails();
      } 
  }


 

      

  return (
    <div>
      <ToastContainer />
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "40px",
          marginBottom: "30px",
        }}
      >
        <Button variant="contained" onClick={handleOpen}>
          Add Job
        </Button>
        <ModalJob open={Open} handleClose={handleClose} onSubmit={onSubmit} />
      </Box>
      <TableJobPost jobs={jobs} job={EditModal} handledelete={handledelete}  />

      <EditModalJob open={editModal} onSubmit={editModalSubmit}  handleClose={handleClose} jobDetails={editJobDetails} />
    </div>
  );
}
