import React from 'react';
import Navbar from './Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'; // For navigation

export default function AdminDashboard() {
  const navigate = useNavigate(); // Initialize navigate for routing

  // Function to trigger the popup for contact developer access
  const showContactDeveloperPopup = () => {
    toast.info('Contact Developer for Access', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
  };

  // Function to navigate to the donation page
  const navigateToDonationPage = () => {
    navigate('/admin/donation'); // Change this to the correct path for your donation page
  };

  return (
    <>
      <Navbar />

      {/* Admin Panel Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 p-8">
        
        {/* 1st Div - Manage Gallery Section */}
        <div 
          className="border p-6 bg-gray-100 rounded-lg shadow-lg flex flex-col justify-between"
          onClick={showContactDeveloperPopup} // Trigger the popup on click
        >
          <h2 className="text-xl font-semibold text-gray-800">Manage Gallery</h2>
          <p className="mt-4 text-gray-600">Upload, edit, or delete gallery images for the website.</p>
          <button className="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 transition">
            Manage Gallery
          </button>
        </div>

        {/* 2nd Div - Text Content Management */}
        <div 
          className="border p-6 bg-gray-100 rounded-lg shadow-lg flex flex-col justify-between"
          onClick={showContactDeveloperPopup} // Trigger the popup on click
        >
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Text Content Management</h2>
          <p className="text-gray-600">Edit or update the text content displayed on the website.</p>
          <button className="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 transition">
            Manage Text
          </button>
        </div>

        {/* 3rd Div - Web Images Management */}
        <div 
          className="border p-6 bg-gray-100 rounded-lg shadow-lg flex flex-col justify-between"
          onClick={showContactDeveloperPopup} // Trigger the popup on click
        >
          <h2 className="text-xl font-semibold text-gray-800">Manage Web Images</h2>
          <p className="mt-4 text-gray-600">Upload, edit, or delete images used on the website.</p>
          <button className="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 transition">
            Manage Images
          </button>
        </div>

        {/* 4th Div - Donation Requests Section */}
        <div 
          className="border p-6 bg-red-100 text-red-700 rounded-lg shadow-lg flex flex-col justify-between"
          onClick={navigateToDonationPage} // Navigate to the donation page on click
        >
          <h2 className="text-xl font-semibold">Donation Requests</h2>
          <p className="mt-4">Review real-time donation requests and track the progress of donations.</p>
          <button 
            className="mt-6 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500 transition">
            View Donation Page
          </button>
        </div>
      </div>

      {/* ToastContainer for Popup Notifications */}
      <ToastContainer />
    </>
  );
}
