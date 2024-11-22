import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
  Paper,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ApplicantsGet from "./getApplicants";
import ApplicationDetails from "./applicationDetails";

export default function ApplicationTable() {

  const [applicants,serApplicants]=useState([])
  const [modalData,setModalData]=useState([])
  console.log("applicants",applicants)
  const employer = useSelector((state) => state.employer.employerDetails);


  const [open,setOpen]=useState(false)

    const handleModalOpen=(key)=>{
      // console.log("key",key)
        
       const result= applicants.filter((data,ind)=>ind===key)

       setModalData(result)

      //  console.log("result",result)
        
        setOpen(true)
    }

  const handleClose=()=>{
    setOpen(false)
  }


  const getApplicant=async()=>{
      
     const response=await ApplicantsGet(employer._id)
       console.log("response",response)
       if(response){
        serApplicants(response.result)
       }
       
  }

   useEffect(()=>{
     getApplicant()
   },[])

  


  return (
    <>
    <TableContainer component={Paper} elevation={3}>
      
      <Typography variant="h4" fontFamily={"-apple"}>Application details</Typography>
      <Table>
        
        <TableBody sx={{ backgroundColor: "" }}>
          <TableRow>
            <TableCell>applicant  name</TableCell>
            <TableCell>position forr applied</TableCell>
            <TableCell>applied date</TableCell>
            <TableCell>status</TableCell>
            <TableCell>actions</TableCell>
          </TableRow>
          {applicants.map((applicant, index) => {
            const appliedDate = new Date(applicant.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            });

            return (
              <TableRow key={index}>
                <TableCell>{applicant.name}</TableCell>
                <TableCell>{applicant.jobDetails?.jobTitle}</TableCell>
                <TableCell>{appliedDate}</TableCell>
                <TableCell>{applicant.status}</TableCell>
                <TableCell>
                  <Button variant="outlined" backgroundColor="primary" key={index} onClick={()=>handleModalOpen(index)}> view detais</Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>

       <div>
       <ApplicationDetails applicant={modalData} open={open} handleClose={handleClose} />    
       </div>
       </>
  );
}
