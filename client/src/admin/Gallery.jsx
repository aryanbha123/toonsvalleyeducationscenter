import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Box, Typography, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material';
import { toast } from 'react-toastify';
import DeleteIcon from '@mui/icons-material/Delete'; // Import the delete icon
import Navbar from './Navbar';

const ImageUpload = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [images, setImages] = useState([]);
    const baseurl = "http://localhost:3001"; // Change to your API URL

    // Fetch the images when the component mounts
    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await axios.get(`${baseurl}/get/images`, { withCredentials: true });
                setImages(response.data.img);
            } catch (error) {
                console.error("Error fetching images:", error);
                toast.error("Failed to fetch images.");
            }
        };

        fetchImages();
    }, []);

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const handleUpload = async (e) => {
        e.preventDefault();
        if (!selectedFile) {
            toast.error("Please select a file to upload.");
            return;
        }

        const formData = new FormData();
        formData.append('image', selectedFile);

        try {
            const response = await axios.post(`${baseurl}/upload`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                withCredentials: true // Include credentials if needed
            });
            toast.success("Image uploaded successfully!");
            setImages([...images, response.data]); // Assuming response.data returns the new image object
            setSelectedFile(null); // Reset the file input
        } catch (error) {
            console.error("Error uploading image:", error);
            toast.error("Failed to upload image.");
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`${baseurl}/images/${id}`, { withCredentials: true });
            setImages(images.filter(image => image.id !== id)); // Assuming each image has a unique `id`
            toast.success("Image deleted successfully!");
        } catch (error) {
            console.error("Error deleting image:", error);
            toast.error("Failed to delete image.");
        }
    };

    return (
        <>
            <Navbar />

            <Box sx={{ maxWidth: 400, mx: "auto", mt: 5 }}>
                <Typography variant="h5" gutterBottom>
                    Upload Gallery Image
                </Typography>
                <form onSubmit={handleUpload}>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        required
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        sx={{ mt: 2 }}
                    >
                        Upload
                    </Button>
                </form>
            </Box>

            <Box sx={{ maxWidth: 600, mx: "auto", mt: 5 }}>
                <Typography variant="h6" gutterBottom>
                    Uploaded Images
                </Typography>
                <List>
                    {images.map(image => (
                        <ListItem key={image.id}>
                            <img src={image.url} alt="img" />
                            {/* <ListItemText primary={image.url} /> */}
                            <ListItemSecondaryAction>
                                <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(image.id)}>
                                    <DeleteIcon />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </>
    );
};

export default ImageUpload;
