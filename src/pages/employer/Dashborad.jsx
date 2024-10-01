import React from 'react'
import { useSelector } from 'react-redux';

export default function Dashboard() {
  const employer = useSelector((state) => state.employer.employerDetails);
  console.log("employer",employer)
  return (
    <div>
      
        <h1>this is employer dashbord</h1>
    </div>
  )
}
