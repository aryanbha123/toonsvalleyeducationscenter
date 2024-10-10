import React, { useEffect, useState } from 'react';
import { Modal, Box, IconButton, Select, MenuItem, Checkbox, ListItemText } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import { useAuth } from '../AuthContext';

export default function GalleryPage() {
  const { baseurl } = useAuth();
  const [images, setImages] = useState([]);

  const [selectedCategories, setSelectedCategories] = useState(['All']);
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await axios.get(`${baseurl}/get/images`);
        console.log(res.data.img);
        setImages(res.data.img); // Set the image data array from response
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, [baseurl]);

  const handleOpen = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
  };

  const handleCategoryChange = (event) => {
    const selected = event.target.value;
    if (selected.includes('All')) {
      setSelectedCategories(['All']);
    } else {
      setSelectedCategories(selected.length ? selected : ['All']);
    }
  };

  // All images will be displayed as there is no category filtering in the provided data
  const filteredImages = images.map((image) => image.url);

  return (
    <>
      <div className="flex items-start justify-start lg:px-20 px-5 py-4 md:py-8 flex-wrap">
        <Select
          multiple
          value={selectedCategories}
          onChange={handleCategoryChange}
          renderValue={(selected) => selected.join(', ')}
          sx={{ minWidth: 200 }}
        >
          {['All'].map((category) => (
            <MenuItem key={category} value={category}>
              <Checkbox checked={selectedCategories.includes(category)} />
              <ListItemText primary={category} />
            </MenuItem>
          ))}
        </Select>
      </div>

      <div className="grid mb-10 lg:px-20 px-5 grid-cols-2 md:grid-cols-3 gap-4">
        {filteredImages.length > 0 ? (
          filteredImages.map((src, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg">
              <img
                src={src}
                alt={`Gallery ${index}`}
                className="object-cover w-full h-64 cursor-pointer"
                onClick={() => handleOpen(src)}
              />
            </div>
          ))
        ) : (
          <p>No images available</p>
        )}
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="image-modal"
        aria-describedby="image-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '80%',
            maxHeight: '80%',
            bgcolor: 'background.paper',
            borderRadius: '8px',
            boxShadow: 24,
            p: 4,
            overflow: 'hidden',
          }}
        >
          <IconButton
            sx={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              color: 'gray',
            }}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Selected"
              style={{ width: '100%', height: 'auto' }}
            />
          )}
        </Box>
      </Modal>
    </>
  );
}
