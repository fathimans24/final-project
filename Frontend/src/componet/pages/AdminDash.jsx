// import React, { useEffect, useState } from 'react';
// import { Box, Grid, Card, CardContent, Typography, CircularProgress, Container } from '@mui/material';
// import axios from 'axios';

// // Example of the Admin Dashboard
// const AdminDashboard = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [stats, setStats] = useState({ totalUsers: 0, activeUsers: 0 });

//   useEffect(() => {
//     // Fetch users and stats data
//     const fetchData = async () => {
//       try {
//         // Get total users, active users, etc.
//         const response = await axios.get('http://localhost:3000/api/admin/dashboard');  // Adjust this URL based on your backend route
//         setUsers(response.data.users);
//         setStats(response.data.stats);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) {
//     return (
//       <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
//         <CircularProgress />
//       </Box>
//     );
//   }

//   return (
//     <Container>
//       <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, marginTop: 2 }}>
//         {/* Stats Section */}
//         <Grid container spacing={3}>
//           <Grid item xs={12} md={6} lg={3}>
//             <Card>
//               <CardContent>
//                 <Typography variant="h5">Total Users</Typography>
//                 <Typography variant="h4" color="primary">{stats.totalUsers}</Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//           <Grid item xs={12} md={6} lg={3}>
//             <Card>
//               <CardContent>
//                 <Typography variant="h5">Active Users</Typography>
//                 <Typography variant="h4" color="primary">{stats.activeUsers}</Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         </Grid>

//         {/* User List Section */}
//         <Typography variant="h6">User List</Typography>
//         <Grid container spacing={3}>
//           {users.map((user) => (
//             <Grid item xs={12} sm={6} md={4} key={user._id}>
//               <Card>
//                 <CardContent>
//                   <Typography variant="h6">{user.username}</Typography>
//                   <Typography variant="body2">{user.email}</Typography>
//                   <Typography variant="body2">Role: {user.role}</Typography>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Box>
//     </Container>
//   );
// };


// export default AdminDashboard;
import React, { useEffect, useState } from 'react';
import { Box, Grid, Card, CardContent, Typography, CircularProgress, Container, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import axios from 'axios';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({ totalUsers: 0, activeUsers: 0 });
  const [open, setOpen] = useState(false);  // For Add/Edit user modal
  const [currentUser, setCurrentUser] = useState(null); // To handle updates
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    role: 'client', // Default to 'client' role
  });

  useEffect(() => {
    // Fetch users and stats data
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/admin/dashboard');
        setUsers(response.data.users);
        setStats(response.data.stats);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Handle opening modal for Add/Edit
  const handleOpen = (user = null) => {
    if (user) {
      setCurrentUser(user);  // If editing, set the current user
      setFormData({ username: user.username, email: user.email, role: user.role });
    } else {
      setFormData({ username: '', email: '', role: 'client' }); // For adding new user
    }
    setOpen(true);
  };

  // Handle closing modal
  const handleClose = () => {
    setOpen(false);
    setCurrentUser(null);  // Reset current user when closing
  };

  // Handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle Add or Update user
  const handleSubmit = async () => {
    try {
      if (currentUser) {
        // Update existing user
        await axios.put(`http://localhost:3000/api/admin/users/${currentUser._id}`, formData);
      } else {
        // Add new user
        await axios.post('http://localhost:3000/api/admin/users', formData);
      }
      handleClose();
      // Refetch data after submitting
      fetchData();
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  // Handle Delete user
  const handleDelete = async (userId) => {
    try {
      await axios.delete(`http://localhost:3000/api/admin/users/${userId}`);
      // Refetch data after deleting
      fetchData();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  // Handle Block user
  const handleBlock = async (userId) => {
    try {
      await axios.put(`http://localhost:3000/api/admin/users/${userId}/block`);
      fetchData();  // Refresh the user list after blocking
    } catch (error) {
      console.error('Error blocking user:', error);
    }
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, marginTop: 2 }}>
        {/* Stats Section */}
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <Card>
              <CardContent>
                <Typography variant="h5">Total Users</Typography>
                <Typography variant="h4" color="primary">{stats.totalUsers}</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Card>
              <CardContent>
                <Typography variant="h5">Active Users</Typography>
                <Typography variant="h4" color="primary">{stats.activeUsers}</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Add User Button */}
        <Button variant="contained" color="primary" onClick={() => handleOpen()}>Add User</Button>

        {/* User List Section */}
        <Typography variant="h6">User List</Typography>
        <Grid container spacing={3}>
          {users.map((user) => (
            <Grid item xs={12} sm={6} md={4} key={user._id}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{user.username}</Typography>
                  <Typography variant="body2">{user.email}</Typography>
                  <Typography variant="body2">Role: {user.role}</Typography>
                  <Button variant="outlined" color="primary" onClick={() => handleOpen(user)}>Edit</Button>
                  <Button variant="outlined" color="secondary" onClick={() => handleDelete(user._id)}>Delete</Button>
                  <Button variant="outlined" color="error" onClick={() => handleBlock(user._id)}>
                    {user.isBlocked ? 'Unblock' : 'Block'}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Modal for Add/Edit User */}
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>{currentUser ? 'Edit User' : 'Add User'}</DialogTitle>
          <DialogContent>
            <TextField
              label="Username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              fullWidth
              margin="normal"
              select
              SelectProps={{
                native: true,
              }}
            >
              <option value="client">Client</option>
              <option value="freelancer">Freelancer</option>
            </TextField>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleSubmit} color="primary">Submit</Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Container>
  );
};

export default AdminDashboard;
