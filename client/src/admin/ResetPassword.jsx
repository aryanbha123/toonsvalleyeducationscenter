import React, { useState } from 'react';
import {
    TextField,
    Button,
    Grid,
    Paper,
    Box,
    Typography,
    Container
} from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../AuthContext';

const ResetPassword = () => {
    const { token } = useParams();
    const navigate = useNavigate(); // Initialize useNavigate
    const [newPassword, setNewPassword] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const { baseurl } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate password length
        if (newPassword.length < 8) {
            setError('Password must be at least 8 characters long.');
            setMessage(''); // Clear any success message
            return;
        }

        try {
            const response = await axios.post(`${baseurl}/reset-password/${token}`, { newPassword });
            setMessage(response.data.message); // Set success message
            setError(''); // Clear error
            navigate('/login'); // Navigate to login after success
        } catch (err) {
            setError(err.response?.data.message || 'An error occurred'); // Handle error
            setMessage(''); // Clear success message
        }
    };

    return (
        <Grid container component="main" sx={{ height: '100vh', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f5f5f5' }}>
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <Box
                    sx={{
                        my: 8,
                        mx: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography component="h1" variant="h5" sx={{ fontWeight: 'bold', color: '#1976d2' }}>
                        Enter New Password
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            label="New Password"
                            type="password"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            required
                        />
                        {/* Display error message if password is less than 8 characters */}
                        {error && <Typography color="error.main" variant="body2">{error}</Typography>}
                        <Button type="submit" variant="contained" color="primary" fullWidth>
                            Update Password
                        </Button>
                    </form>
                    {message && <Typography color="success.main">{message}</Typography>}
                </Box>
            </Grid>
        </Grid>
    );
};

export default ResetPassword;
