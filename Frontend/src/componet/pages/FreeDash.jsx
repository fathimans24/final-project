import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, CardActions, Button, Box, List, ListItem, ListItemText, CardMedia } from '@mui/material';
import axios from 'axios';

const FreeDash = () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch client data from the backend
    axios.get('http://localhost:3000/users')  // Adjust URL as necessary
      .then(response => {
        setClients(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching clients:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center', marginTop: 2 }}>
      {clients.slice(0, 4).map(client => (  // Display only first 4 clients
        <Card key={client._id} sx={{
          maxWidth: 345,
          marginBottom: 2,
          marginRight: 2,
          backgroundColor: '#E4E0E1',  // Yellow color
          borderRadius: '16px',  // Curved corners
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',  // Light shadow
          transition: 'transform 0.3s ease',
          '&:hover': {
            transform: 'translateY(-5px)',  // Hover effect to lift the card
            boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
          },
        }}>
          <CardMedia
            component="img"
            height="140"
            image={client.cover || 'default_image.jpg'}  // Placeholder image if no cover provided
            alt={client.title}
            sx={{ borderTopLeftRadius: '16px', borderTopRightRadius: '16px' }}  // Curved top corners
          />
          <CardContent>
            <Typography variant="h5" component="div">
              {client.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email: {client.email}
            </Typography>
            <Typography variant="body2" color="text.secondary" mt={1}>
              Registered on: {new Date(client.registrationDate).toLocaleDateString()}
            </Typography>

            <Typography variant="body1" color="text.primary" fontWeight="bold" mt={2}>
              ${client.price} / hour
            </Typography>

            <Typography variant="body2" color="text.secondary" mt={1}>
              Category: {client.category}
            </Typography>

            <Typography variant="body2" color="text.secondary" mt={1}>
              {client.totalStars} Stars ({client.starNumber} Reviews)
            </Typography>

            <Typography variant="body2" color="text.secondary" mt={2}>
              Short Description: {client.shortDesc}
            </Typography>

            <Typography variant="body2" color="text.secondary" mt={1}>
              Delivery Time: {client.deliveryTime} days
            </Typography>

            <Typography variant="body2" color="text.secondary" mt={1}>
              Revision Number: {client.revisionNum}
            </Typography>

            <Typography variant="body2" color="text.secondary" mt={1}>
              Features: {client.features || 'No features listed'}
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
                        primary={job.title}
                        secondary={
                          <>
                            <Typography variant="body2" color="text.secondary">
                              {job.description || 'No description provided'}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              Posted on: {new Date(job.postedDate).toLocaleDateString()}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              Skills: {job.skills.join(', ')}
                            </Typography>
                          </>
                        }
                      />
                    </ListItem>
                  ))}
                </List>
              </>
            ) : (
              <Typography variant="body2" color="text.secondary" mt={2}>
                No recent jobs available.
              </Typography>
            )}
          </CardContent>
          <CardActions>
            <Button size="small" color="primary">
              View Profile
            </Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
};

export default FreeDash;
