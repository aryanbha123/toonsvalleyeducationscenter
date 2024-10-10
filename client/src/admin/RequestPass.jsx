import React, { useState } from 'react';
import {
    TextField,
    Button,
    Typography,
    Container,
    Grid,
    Box,
    Paper
} from '@mui/material';
import axios from 'axios';
import { useAuth } from '../AuthContext';
import { toast } from 'react-toastify';

const RequestResetPassword = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false); // New state for loading
    const { baseurl } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); 
        try {
            const response = await axios.post(`${baseurl}/forgot-password`, { email });
            toast.success(response.data.message);
            setEmail(''); 
        } catch (err) {
            toast.error(err.response?.data.message || 'An error occurred'); 
        } finally {
            setLoading(false); 
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
                        Rest Password
                    </Typography>
                    <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                        <TextField
                            label="Email"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            type="email" // Ensure it's an email input
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                            style={{ marginTop: '16px' }}
                            disabled={loading} // Disable button while loading
                        >
                            {loading ? 'Sending...' : 'Send Reset Link'} {/* Change button text based on loading state */}
                        </Button>
                    </form>
                </Box>
            </Grid>
        </Grid>
    );
};

export default RequestResetPassword;
