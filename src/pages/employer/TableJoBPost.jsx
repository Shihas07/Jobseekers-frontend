import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const jobData = [
  {
    id: 1,
    jobTitle: "Frontend Developer",
    companyName: "TechCorp",
    jobType: "Full-Time",
    jobLocation: "Remote",
  },
  {
    id: 2,
    jobTitle: "Backend Developer",
    companyName: "CodeBase",
    jobType: "Part-Time",
    jobLocation: "On-Site",
  },
  // Add more job data here
];

export default function TableJobPost({jobs,job}) {
  const handleEdit = (id) => {
   
      job(id)  
    
  };

  const handleDelete = (id) => {
    console.log(`Deleting job with ID: ${id}`);
    // Add your delete functionality here
  };

  return (
    <TableContainer component={Paper}>
      <Table aria-label="job table">
        <TableHead>
          <TableRow>
            <TableCell>Job Title</TableCell>
            <TableCell>Company Name</TableCell>
            <TableCell>Job Type</TableCell>
            <TableCell>Location</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {jobs.map((job) => (
            <TableRow key={job.id}>
              <TableCell>{job.jobTitle}</TableCell>
              <TableCell>{job.companyName}</TableCell>
              <TableCell>{job.jobType}</TableCell>
              <TableCell>{job.jobLocation}</TableCell>
              <TableCell align="center">
                <IconButton onClick={() => handleEdit(job._id)} color="primary">
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => handleDelete(job.id)} color="secondary">
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

     
  );
}
