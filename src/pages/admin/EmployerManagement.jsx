import React, { useEffect, useState } from 'react';

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Container } from '@mui/material';
import getEmployer from '../../services/admin/AllEmployer';
import BlockEmployer from '../../services/admin/BlockEmployer';


export default function EmployerManagement() {

  const  [Employer,setEmployer]=useState([])

    

      const Fetch=async()=>{
          
           const response=await getEmployer()
             
           setEmployer(response)

          //  console.log(response) 
           
      }

      useEffect(()=>{
             
          Fetch()
         
      },[])

      const Block=async(id)=>{
          
         const response=await BlockEmployer({id})
         Fetch()
            console.log(id)
      }
 
           

  return (
    <Container maxWidth="xl" sx={{ padding: 4 }}>
      <h1 className="text-2xl font-bold mb-4">Employer List</h1>
    
      <TableContainer component={Paper} elevation={3} className="shadow-md overflow-x-auto">
        <Table>
          <TableHead className="bg-gray-100">
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Employer</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Employer.map((Employer, index) => (
              <TableRow key={Employer._id}>
                <TableCell>{index + 1}</TableCell> {/* Roll number */}
                <TableCell>{Employer.name}</TableCell>
                <TableCell>{Employer.email}</TableCell>
                <TableCell>{Employer.phoneNo}</TableCell>
                <TableCell>
                  <Button 
                    variant="contained" 
                    color={Employer.status ? "error" : "primary"} 
                    className={`bg-${Employer.status ? 'red-500' : 'blue-500'} hover:bg-${Employer.status ? 'red-700' : 'blue-700'} text-white`}
                    onClick={() => Block(Employer._id)} // Action button for blocking user
                  >
                   {Employer.status?"unBlock":"Block"} 
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
