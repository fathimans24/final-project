import React, { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Box,
  List,
  ListItem,
  ListItemText,
  CardMedia,
  CircularProgress,
} from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ClientCard = () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch client data from the backend
    axios
      .get('http://localhost:3000/users') // Adjust URL as necessary
      .then((response) => {
        setClients(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching clients:', error);
        setError('Failed to load client data');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  const handleViewProfile = (clientId) => {
    navigate(`/client-profile/${clientId}`); // Navigate to the profile page
  };

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center',mt:4 }}>
      {clients.map((client) => (
        <Card
          key={client._id}
          sx={{
            width: 300,
            marginBottom: 1,
            backgroundColor: '#E4E0E1', // Set background color to purple
             // Set background color to purple
            color: 'black', // Set text color to white
            borderRadius: 4,
          }}
        >
          <CardMedia
            component="img"
            height="140"
            image={client.cover || 'default_image.jpg'} // Placeholder image if no cover provided
            alt={client.name || 'Client Name'}
          />
          <CardContent>
            <Typography variant="h5" component="div">
              {client.name || 'N/A'}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ color: 'black' }}>
              Email: {client.email || 'No email provided'}
            </Typography>
            <Typography variant="body2" color="text.secondary" mt={1} sx={{ color: 'black' }}>
              Registered on:{' '}
              {client.registrationDate
                ? new Date(client.registrationDate).toLocaleDateString()
                : 'N/A'}
            </Typography>
            

            {/* Recent Jobs */}
            {client.recentJobs && client.recentJobs.length > 0 ? (
              <>
                <Typography variant="h6" mt={2}>
                  Recent Jobs
                </Typography>
                <List dense>
                  {client.recentJobs.map((job, index) => (
                    <ListItem key={index} alignItems="flex-start">
                      <ListItemText
                        primary={job.title || 'Untitled Job'}
                        secondary={
                          <>
                            <Typography variant="body2" color="text.secondary" sx={{ color: 'black' }}>
                              {job.description || 'No description provided'}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ color: 'black' }}>
                              Posted on:{' '}
                              {job.postedDate
                                ? new Date(job.postedDate).toLocaleDateString()
                                : 'N/A'}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ color: 'black' }}>
                              Skills: {job.skills ? job.skills.join(', ') : 'N/A'}
                            </Typography>
                          </>
                        }
                      />
                    </ListItem>
                  ))}
                </List>
              </>
            ) : (
              <Typography variant="body2" color="text.secondary" mt={2} sx={{ color: 'black' }}>
                No recent jobs available.
              </Typography>
            )}
          </CardContent>
          <CardActions>
            <Button size="small" color="primary" onClick={() => handleViewProfile(client._id)}>
              View Profile
            </Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
};

export default ClientCard;
