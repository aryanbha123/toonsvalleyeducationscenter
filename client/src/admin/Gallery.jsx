import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import {
    Button,
    Box,
    Typography,
    List,
    IconButton,
    Card,
    CardMedia,
    CardContent,
    CircularProgress,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Tooltip,
    Slider,
    Grid,
    Paper,
} from '@mui/material';
import { toast } from 'react-toastify';
import DeleteIcon from '@mui/icons-material/Delete';
import CropIcon from '@mui/icons-material/Crop';
import Navbar from './Navbar';
import { useAuth } from '../AuthContext';
import Cropper from 'react-easy-crop';
import getCroppedImg from './CropImage';

const ImageUpload = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [previewUrl, setPreviewUrl] = useState(null);
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const [imageToDelete, setImageToDelete] = useState(null);
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
    const { baseurl } = useAuth();

    // Fetch images on component mount
    useEffect(() => {
        const fetchImages = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`${baseurl}/get/images`, { withCredentials: true });
                setImages(response.data.img);
            } catch (error) {
                console.error("Error fetching images:", error);
                toast.error("Failed to fetch images.");
            }
            setLoading(false);
        };

        fetchImages();
    }, [baseurl]);

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);

        // Preview the selected file
        const file = e.target.files[0];
        if (file) {
            const fileReader = new FileReader();
            fileReader.onload = () => {
                setPreviewUrl(fileReader.result);
            };
            fileReader.readAsDataURL(file);
        }
    };

    const handleCropComplete = useCallback((_, croppedAreaPixels) => {
        setCroppedAreaPixels(croppedAreaPixels);
    }, []);

    const handleUpload = async (e) => {
        e.preventDefault();
        if (!selectedFile) {
            toast.error("Please select a file to upload.");
            return;
        }

        try {
            setLoading(true);
            // Cropping the image before upload
            const croppedImage = await getCroppedImg(previewUrl, croppedAreaPixels);
            const formData = new FormData();
            formData.append('image', croppedImage);

            const response = await axios.post(`${baseurl}/upload`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                withCredentials: true,
            });
            toast.success("Image uploaded successfully!");
            setImages([...images, response.data]); // Add new image to the list
            setSelectedFile(null);
            setPreviewUrl(null);
        } catch (error) {
            console.error("Error uploading image:", error);
            toast.error("Failed to upload image.");
        }
        setLoading(false);
    };

    const openDeleteDialog = (id) => {
        setImageToDelete(id);
        setDeleteDialogOpen(true);
    };

    const handleDelete = async () => {
        try {
            await axios.post(`${baseurl}/delete/img/${imageToDelete}`, { withCredentials: true });
            setImages(images.filter(image => image._id !== imageToDelete));
            toast.success("Image deleted successfully!");
        } catch (error) {
            console.error("Error deleting image:", error);
            toast.error("Failed to delete image.");
        }
        setDeleteDialogOpen(false);
        setImageToDelete(null);
    };

    return (
        <>
            <Navbar />

            <div className='flex gap-10 lg:flex-row flex-col' >

                <Box sx={{ maxWidth: 800, mx: 'auto', mt: 5 }}>
                    <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
                        <Typography variant="h5" gutterBottom textAlign="center">
                            Upload Gallery Image
                        </Typography>

                        <form onSubmit={handleUpload}>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleFileChange}
                                required
                                style={{ margin: '10px 0', display: 'none' }}
                                id="upload-file"
                            />
                            <label htmlFor="upload-file">
                                <Button variant="outlined" component="span" color="primary" fullWidth>
                                    Select Image
                                </Button>
                            </label>

                            {previewUrl && (
                                <Box sx={{ position: 'relative', my: 2 }}>
                                    <Cropper
                                        image={previewUrl}
                                        crop={crop}
                                        zoom={zoom}
                                        aspect={4 / 3}
                                        onCropChange={setCrop}
                                        onZoomChange={setZoom}
                                        onCropComplete={handleCropComplete}
                                        style={{ containerStyle: { height: '300px', width: '100%' } }} // Adjust style
                                    />
                                    <Slider
                                        value={zoom}
                                        min={1}
                                        max={3}
                                        step={0.1}
                                        aria-labelledby="Zoom"
                                        onChange={(e, zoom) => setZoom(zoom)}
                                        sx={{ my: 2 }}
                                    />
                                </Box>
                            )}

                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                fullWidth
                                sx={{ mt: 2 }}
                                disabled={loading}
                            >
                                {loading ? <CircularProgress size={24} /> : 'Upload'}
                            </Button>
                        </form>
                    </Paper>
                </Box>

                <Box sx={{ maxWidth: 800, mx: 'auto', mt: 5 }}>
                    <Typography variant="h6" gutterBottom>
                        Uploaded Images
                    </Typography>

                    {loading ? (
                        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
                            <CircularProgress />
                        </Box>
                    ) : images.length > 0 ? (
                        <List sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
                            {images.map(image => (
                                <Card key={image._id} sx={{ width: 200, position: 'relative' }}>
                                    <CardMedia
                                        component="img"
                                        height="150"
                                        image={image.url}
                                        alt="uploaded image"
                                        sx={{ objectFit: 'cover' }}
                                    />
                                    <CardContent sx={{ textAlign: 'center' }}>
                                        <Typography variant="body2" color="textSecondary">
                                            {image._id}
                                        </Typography>
                                    </CardContent>
                                    <Tooltip title="Delete Image">
                                        <IconButton
                                            edge="end"
                                            aria-label="delete"
                                            onClick={() => openDeleteDialog(image._id)}
                                            sx={{ position: 'absolute', top: 10, right: 10, color: 'red' }}
                                        >
                                            <DeleteIcon />
                                        </IconButton>
                                    </Tooltip>
                                </Card>
                            ))}
                        </List>
                    ) : (
                        <Typography variant="body1" color="textSecondary" align="center">
                            No images uploaded yet.
                        </Typography>
                    )}
                </Box>
            </div>

            <Dialog open={deleteDialogOpen} onClose={() => setDeleteDialogOpen(false)}>
                <DialogTitle>Delete Image</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to delete this image? This action cannot be undone.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setDeleteDialogOpen(false)} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleDelete} color="secondary">
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default ImageUpload;
