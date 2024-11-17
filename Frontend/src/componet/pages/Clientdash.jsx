import React, { useState } from 'react';
import axios from 'axios';
import { Box, TextField, Button, Typography, Select, MenuItem, InputLabel, FormControl, Grid } from '@mui/material';

const CreateAccount = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    accountType: '',
    companyName: '',
    companyDescription: '',
    websiteUrl: '',
    industryType: '',
    skills: '',
    experience: '',
    hourlyRate: '',
    portfolioLinks: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Adjust skills and portfolioLinks to arrays
    const payload = {
      ...formData,
      skills: formData.skills.split(',').map((skill) => skill.trim()),
      portfolioLinks: formData.portfolioLinks.split(',').map((link) => link.trim()),
    };

    try {
      const response = await axios.post('/api/auth/register', payload);
      setSuccess(response.data.message);
      setError('');
    } catch (error) {
      setError(error.response?.data?.message || 'Something went wrong');
      setSuccess('');
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      bgcolor="background.paper"
      p={3}
    >
      <Typography variant="h4" gutterBottom>
        Create an Account
      </Typography>
      {error && <Typography color="error">{error}</Typography>}
      {success && <Typography color="success.main">{success}</Typography>}

      <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: 500 }}>
        <TextField
          label="Name"
          name="name"
          fullWidth
          required
          margin="normal"
          value={formData.name}
          onChange={handleChange}
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          fullWidth
          required
          margin="normal"
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          fullWidth
          required
          margin="normal"
          value={formData.password}
          onChange={handleChange}
        />
        
        <FormControl fullWidth required margin="normal">
          <InputLabel>Account Type</InputLabel>
          <Select
            name="accountType"
            value={formData.accountType}
            onChange={handleChange}
          >
            <MenuItem value="client">Client</MenuItem>
            <MenuItem value="freelancer">Freelancer</MenuItem>
          </Select>
        </FormControl>

        {/* Client fields */}
        {formData.accountType === 'client' && (
          <>
            <TextField
              label="Company Name"
              name="companyName"
              fullWidth
              margin="normal"
              value={formData.companyName}
              onChange={handleChange}
            />
            <TextField
              label="Company Description"
              name="companyDescription"
              fullWidth
              margin="normal"
              multiline
              rows={4}
              value={formData.companyDescription}
              onChange={handleChange}
            />
            <TextField
              label="Website URL"
              name="websiteUrl"
              fullWidth
              margin="normal"
              value={formData.websiteUrl}
              onChange={handleChange}
            />
            <TextField
              label="Industry Type"
              name="industryType"
              fullWidth
              margin="normal"
              value={formData.industryType}
              onChange={handleChange}
            />
          </>
        )}

        {/* Freelancer fields */}
        {formData.accountType === 'freelancer' && (
          <>
            <TextField
              label="Skills (comma-separated)"
              name="skills"
              fullWidth
              margin="normal"
              value={formData.skills}
              onChange={handleChange}
            />
            <TextField
              label="Experience"
              name="experience"
              fullWidth
              margin="normal"
              value={formData.experience}
              onChange={handleChange}
            />
            <TextField
              label="Hourly Rate"
              name="hourlyRate"
              type="number"
              fullWidth
              margin="normal"
              value={formData.hourlyRate}
              onChange={handleChange}
            />
            <TextField
              label="Portfolio Links (comma-separated)"
              name="portfolioLinks"
              fullWidth
              margin="normal"
              value={formData.portfolioLinks}
              onChange={handleChange}
            />
          </>
        )}

        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 3 }}>
          Create Account
        </Button>
      </form>
    </Box>
  );
};

export default CreateAccount;
