import React, { useEffect, useState } from 'react';
import getAllUsers from '../../services/admin/AllUsers';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Container } from '@mui/material';
import blockUser from '../../services/admin/BlockUser';

export default function UserManagement() {
  const [user, setUser] = useState([]); // Initialize with an empty array

  const fetch = async () => {
    try {
      const data = await getAllUsers();
      setUser(data); // Update state with user data or empty array
      console.log('response fetch', data); 
    } catch (error) {
      console.error('Error fetching users:', error); // Log any errors
    }
  };

  useEffect(() => {
    fetch(); // Fetch users on component mount
  }, []);

    const BlockUser=async(userId)=>{
      console.log(userId)
      try {
        await blockUser({ userId }); // Call the imported blockUser function
        console.log(`User with ID ${userId} blocked`);
        fetch(); // Optionally refresh the user list after blocking
      } catch (error) {
        console.error('Error blocking user:', error);
      }
    }

  return (
    <Container maxWidth="xl" sx={{ padding: 4 }}>
      <h1 className="text-2xl font-bold mb-4">User List</h1>
    
      <TableContainer component={Paper} elevation={3} className="shadow-md overflow-x-auto">
        <Table>
          <TableHead className="bg-gray-100">
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {user.map((user, index) => (
              <TableRow key={user._id}>
                <TableCell>{index + 1}</TableCell> {/* Roll number */}
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phoneNo}</TableCell>
                <TableCell>
                  <Button 
                    variant="contained" 
                    color={user.status ? "error" : "primary"} 
                    className={`bg-${user.status ? 'red-500' : 'blue-500'} hover:bg-${user.status ? 'red-700' : 'blue-700'} text-white`}
                    onClick={() => BlockUser(user._id)} // Action button for blocking user
                  >
                   {user.status?"unBlock":"Block"} 
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
