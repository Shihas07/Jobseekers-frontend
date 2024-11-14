import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ApplicantsGet from "./getApplicants";

export default function ApplicationTable() {

  const [applicants,serApplicants]=useState([])
  console.log("applicants",applicants)
  const employer = useSelector((state) => state.employer.employerDetails);


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
    <TableContainer>
      <Typography variant="h4" fontFamily={"-apple"}>Application details</Typography>
      <Table>
        
        <TableBody sx={{ backgroundColor: "red" }}>
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
                 
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
