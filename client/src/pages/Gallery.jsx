import React, { useState } from 'react';
import { Modal, Box, IconButton, Select, MenuItem, Checkbox, ListItemText } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import g1 from './gallery/1.jpg';
import g2 from './gallery/2.jpg';
import g3 from './gallery/3.jpg';
import g4 from './gallery/4.jpg';
import g5 from './gallery/5.jpg';
import g6 from './gallery/6.jpg';
import g7 from './gallery/7.jpg';
import g8 from './gallery/8.jpg';
// import g10 from './gallery/10.jpg';
// import g11 from './gallery/11.jpg';
// import g14 from './gallery/14.jpg';
// import g17 from './gallery/17.jpg';
// import g20 from './gallery/20.jpg';
// import g21 from './gallery/21.jpg';
import g22 from './gallery/22.jpg';
import g31 from '../assets/IMG-20240823-WA0009.jpg';
import g30 from '../assets/IMG-20190424-WA0005.jpg';
import g29 from '../assets/IMG-20240824-WA0000.jpg';
import g24 from './gallery/24.jpg';
import g25 from './gallery/25.jpg';
import g26 from './gallery/26.jpg';
import g27 from './gallery/27.jpg';
import g28 from './gallery/28.jpg';

const images = {
  All: [g1, g2, g3, g4, g5, g6, g7, g8, g22, g24, g25, g26, g27, g28, g29, g30, g31],
  Classroom: [g3, g8],
  Team: [g5, g7],
  Outing: [g1, g2, g4, g8],
  Students: [g1, g2, g3, g6, g8],
};

export default function GalleryPage() {
  const [selectedCategories, setSelectedCategories] = useState(['All']);
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleOpen = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategories(event.target.value);
  };

  const filteredImages = Array.from(
    new Set(selectedCategories.flatMap((category) => images[category]))
  );

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
          {['All', 'Classroom', 'Team', 'Outing', 'Students'].map((category) => (
            <MenuItem key={category} value={category}>
              <Checkbox checked={selectedCategories.includes(category)} />
              <ListItemText primary={category} />
            </MenuItem>
          ))}
        </Select>
      </div>

      <div className="grid mb-10 lg:px-20 px-5 grid-cols-2 md:grid-cols-3 gap-4">
        {filteredImages.map((src, index) => (
          <div key={src} className="relative overflow-hidden rounded-lg">
            <img
              src={src}
              alt={`Gallery ${index}`}
              className="object-cover w-full h-64 cursor-pointer"
              onClick={() => handleOpen(src)}
            />
          </div>
        ))}
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="image-modal"
        aria-describedby="image-modal-description"
      >
        <Box sx={{
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
        }}>
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
