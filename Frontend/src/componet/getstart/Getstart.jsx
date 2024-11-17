
import React, { useState } from 'react';
import { Box, Typography, Button, Card, CardContent } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate, Link } from 'react-router-dom';

const JoinAsClientOrFreelancer = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  const getLinkPath = () => {
    if (selectedOption === 'client') {
      return '/create-account-client';
    } else if (selectedOption === 'freelancer') {
      return '/freelancer-dashboard';
    }
    return '#'; 
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      bgcolor="#608BC1"
      color="white"
    >
      <Typography variant="h3" gutterBottom>
        Join as a client or freelancer
      </Typography>

      <Box display="flex" gap={4} mt={3}>
        <Card
          sx={{
            minWidth: 275,
            textAlign: 'center',
            cursor: 'pointer',
            border: selectedOption === 'client' ? '2px solid white' : '1px solid grey',
            bgcolor: selectedOption === 'client' ? 'grey.800' : 'grey.900',
          }}
          onClick={() => handleSelect('client')}
        >
          <CardContent>
            <WorkIcon fontSize="large" />
            <Typography variant="h6" mt={1}>
              I'm a client, hiring for a project
            </Typography>
          </CardContent>
        </Card>

      
        <Card
          sx={{
            minWidth: 275,
            textAlign: 'center',
            cursor: 'pointer',
            border: selectedOption === 'freelancer' ? '2px solid white' : '1px solid grey',
            bgcolor: selectedOption === 'freelancer' ? 'grey.800' : 'grey.900',
          }}
          onClick={() => handleSelect('freelancer')}
        >
          <CardContent>
            <PersonIcon fontSize="large" />
            <Typography variant="h6" mt={1}>
              I'm a freelancer, looking for work
            </Typography>
          </CardContent>
        </Card>
      </Box>

      
      <Link to={'/clientacount'} style={{ textDecoration: 'none' }}>
        <Button
          variant="contained"
          color="#e7e7e7"
          sx={{ mt: 4, bgcolor: 'grey.700', color: 'white' }}
          disabled={!selectedOption}
        >
          Create Account
        </Button>
      </Link>
    </Box>
  );
};

export default JoinAsClientOrFreelancer;

