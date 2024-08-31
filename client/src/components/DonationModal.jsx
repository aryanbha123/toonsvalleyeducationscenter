import React, { useState } from 'react';
import Modal from 'react-modal';
import { TextField, Button, IconButton, Radio, FormControlLabel, RadioGroup } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { motion } from 'framer-motion';

// Set the app element to avoid accessibility issues
Modal.setAppElement('#root');

const DonationModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [visit, setVisit] = useState('');

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Donation submitted:', { name, email, visit });
    closeModal();
  };

  return (
    <div className='relative top-0' >
      <Button
        variant="contained"
        style={{
          background: 'linear-gradient(to right, #f50057, #ff4081)',
          color: 'white',
          borderRadius: '20px',
        }}
        onClick={openModal}
      >
        Donate Now
      </Button>

      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Donate Modal"
        className="modal-content fixed top-0  z-50 flex justify-center items-end h-full mx-10 w-full"
        overlayClassName="modal-overlay"
        style={{
          position: "",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: "flex",
          zIndex:999,
          justifyContent: "center",
          alignItems: "center",
          background: 'rgba(0, 0, 0, 0.7)',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3 }}
          className="modal-body bg-white p-8 rounded-lg shadow-lg w-full max-w-lg"
        >
          <div className="modal-header flex justify-between items-center">
            <h2 className="text-2xl font-bold">Make a Donation</h2>
            <IconButton onClick={closeModal}>
              <CloseIcon />
            </IconButton>
          </div>

          <form onSubmit={handleSubmit} className="modal-body flex flex-col gap-4 mt-4">
            <TextField
              label="Your Name"
              variant="outlined"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              label="Email Address"
              variant="outlined"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <RadioGroup value={visit} onChange={(e) => setVisit(e.target.value)}>
              <FormControlLabel value="yes" control={<Radio />} label="Schedule a Visit" />
              <FormControlLabel value="no" control={<Radio />} label="No Visit Required" />
            </RadioGroup>

            <Button
              type="submit"
              variant="contained"
              style={{
                background: 'linear-gradient(to right, #f50057, #ff4081)',
                color: 'white',
                borderRadius: '20px',
              }}
            >
              Send
            </Button>
          </form>

          <p className="text-sm text-gray-500 mt-4">
            *PAN card is mandatory for donation
          </p>
        </motion.div>
      </Modal>
    </div>
  );
};

export default DonationModal;
