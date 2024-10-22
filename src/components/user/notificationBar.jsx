

 import { Box, Typography } from '@mui/material'
import React from 'react'
   
   export default function NotificationBar() {
     return (
      <Box sx={{width:"20%",height:"90%",boxShadow:"30px"}} bgcolor={"#f7f8fa"} borderRadius={"20px"}>
          
               <Box sx={{marginLeft:"50px",marginTop:"40px",marginBottom:"40px"}}>
               <Typography>
                   saved
               </Typography>
               <Typography>
                   resume
               </Typography>
               <Typography>
                   notification
               </Typography>
               </Box>
      </Box>
     )
   }
   