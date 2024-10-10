import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { TextField, Button, IconButton, Radio, FormControlLabel, RadioGroup } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { motion } from 'framer-motion';
import { toast } from 'react-hot-toast';
import { useAuth } from '../AuthContext';

Modal.setAppElement('#root');

const DonationModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [visit, setVisit] = useState('');
  const [isPhoneValid, setIsPhoneValid] = useState(false); // Track phone validation
  const [errorMessage, setErrorMessage] = useState(''); // Error message for phone number validation

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const { baseurl } = useAuth();

  // Validate phone number when the input changes
  useEffect(() => {
    const phonePattern = /^[0-9]{10}$/; // Regular expression for exactly 10 digits
    if (!phonePattern.test(phone)) {
      setIsPhoneValid(false);
      setErrorMessage('Phone number must be exactly 10 digits.');
    } else {
      setIsPhoneValid(true);
      setErrorMessage(''); // Clear the error message when valid
    }
  }, [phone]); // Re-validate on phone input change

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { name, phone, visit };

    try {
      const response = await toast.promise(
        fetch(`${baseurl}/api/donation`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        }),
        {
          loading: 'Submitting your donation...',
          success: 'Donation submitted successfully!',
          error: 'Failed to submit donation.',
        }
      );
      if (response.ok) {
        setName('');
        setPhone('');
        setVisit('');
        closeModal();
      }
    } catch (error) {
      console.error('Error submitting donation:', error);
    }
  };

  return (
    <div className="relative top-0">
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
        className="modal-content fixed top-[100px] z-[999] flex justify-center h-full lg:mx-10 w-full"
        overlayClassName="modal-overlay"
        style={{
          display: 'flex',
          zIndex: 999,
          justifyContent: 'center',
          alignItems: 'center',
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
              label="Phone Number"
              variant="outlined"
              fullWidth
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              helperText={errorMessage} // Display the error message below the input field
              error={!isPhoneValid} // Highlight field in red if invalid
            />

            <RadioGroup value={visit} onChange={(e) => setVisit(e.target.value)}>
              <FormControlLabel value="yes" control={<Radio />} label="Schedule a Visit" />
              <FormControlLabel value="no" control={<Radio />} label="No Visit Required" />
            </RadioGroup>

            <Button
              type="submit"
              variant="contained"
              style={{
                background: isPhoneValid ? 'linear-gradient(to right, #f50057, #ff4081)' : 'grey',
                color: 'white',
                borderRadius: '20px',
              }}
              disabled={!isPhoneValid} // Disable button if the phone is invalid
            >
              Send
            </Button>
          </form>

          <p className="text-sm text-gray-500 mt-4">*PAN card is mandatory for donation</p>
        </motion.div>
      </Modal>
    </div>
  );
};

export default DonationModal;
