import React, { useEffect, useState } from 'react';
import { Select, MenuItem } from '@mui/material';
import axios from 'axios';
import { Lightbox } from 'react-modal-image'; // Correctly importing Lightbox
import { useAuth } from '../AuthContext';

export default function GalleryPage() {
  const { baseurl } = useAuth();
  const [images, setImages] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const categories = ['All', 'Students', 'Classroom', 'Outing', 'Staff', 'Others'];

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await axios.get(`${baseurl}/get/images`);
        console.log('Fetched Images:', res.data.img);
        setImages(res.data.img);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, [baseurl]);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredImages = selectedCategory === 'All'
    ? images
    : images.filter((image) => image.type === selectedCategory);

  const handleOpenLightbox = (imageUrl) => {
    setCurrentImage(imageUrl);
    setLightboxOpen(true);
  };

  return (
    <>
      <div className="flex items-start justify-start lg:px-20 px-5 py-4 md:py-8 flex-wrap">
        <Select
          value={selectedCategory}
          onChange={handleCategoryChange}
          sx={{ minWidth: 200 }}
        >
          {categories.map((category) => (
            <MenuItem key={category} value={category}>
              {category}
            </MenuItem>
          ))}
        </Select>
      </div>

      <div className="grid mb-10 lg:px-20 px-5 grid-cols-2 md:grid-cols-3 gap-4">
        {filteredImages.length > 0 ? (
          filteredImages.map((image, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg">
              <img
                src={image.url}
                alt={`Gallery ${index}`}
                className="object-cover w-full h-64 cursor-pointer"
                onClick={() => handleOpenLightbox(image.url)} // Open lightbox on click
              />
            </div>
          ))
        ) : (
          <p>No images available in the selected category</p>
        )}
      </div>

      {lightboxOpen && (
        <Lightbox
          medium={currentImage}
          large={currentImage}
          onClose={() => setLightboxOpen(false)} // Close lightbox
        />
      )}
    </>
  );
}
