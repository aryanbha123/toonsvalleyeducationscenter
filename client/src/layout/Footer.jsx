import { Facebook, Instagram, LinkedIn, Twitter, YouTube } from '@mui/icons-material';
import { Divider, IconButton, TextField } from '@mui/material';
import React from 'react';
import { toast } from 'react-hot-toast';
import { useInputValidation, isValidEmail } from '6pp';

export default function Footer() {
  const checkEmail = (email) => {
    return isValidEmail(email);
  };
  const name = useInputValidation("");
  const email = useInputValidation("", checkEmail);

  const handelSubscribe = async (e) => {
    e.preventDefault();

    const subscriptionData = {
      name: name.value,  // Replace with your input values
      email: email.value, // Replace with your input values
    };

    // Show toast promise during fetch
    toast.promise(
      fetch('https://pukaar-main-server.vercel.app/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(subscriptionData),
      }),
      {
        loading: 'Subscribing...',
        success: 'Subscribed successfully!',
        error: 'Subscription failed!',
      }
    ).then(response => response.json())
      .then(data => {
        // Handle your API response data here
        console.log('Success:', data);
      })
      .catch(error => {
        // Handle any errors that occur during the fetch
        console.error('Error:', error);
      });
  };

  return (
    <form onSubmit={handelSubscribe} className=' flex flex-col lg:px-20 py-10 bg-[#f1f1f1] text-[#010101] px-4'>
      <div className='flex justify-between lg:items-start items-start flex-col lg:flex-row lg:gap-0 gap-6'>
        <div className='font-medium'>
          <p>Toons Valley Education Trust</p>
          <p>Unit Guniyal Gaon Education Center</p>
          <i>A Charitable Institute for Girls</i>
          <br />
          <p>Guniyal Gaon, P.O .SINOLA , Dehradun  248003</p>
          <p>C-3 , Maharani Bagh , NEW DELHI  - 110065</p>
          <br />
          <div className='flex items-center'>
            <span>Contact Us : Tel: +91 9897631812 | Email : guniyaleducent@gmail.com</span>
          </div>
        </div>
        <div className='flex flex-col justify-start gap-3'>
          <p className='text-[#010101] font-medium mb-2'>Subscribe to our Newsletter</p>
          <div className='flex flex-wrap justify-between gap-5'>
            <div className='flex gap-5 flex-wrap'>
              <TextField className='text-[#010101] w-full lg:w-[380px]' required label="Email" value={email.value} onChange={email.changeHandler} type="email" variant="standard" />
              <TextField className='text-[#010101] w-full lg:w-[270px]' required label="Name" value={name.value} onChange={name.changeHandler} variant='standard' />
            </div>
            <button id='subscribe-btn' type='submit' className="bg-gradient-to-r from-slate-200 to-slate-400 text-[#222] font-medium py-2 px-4 rounded">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="py-7 pr-4">
        <Divider className='my-5 bg-[#666]' />
        <div className="flex justify-between items-center">
          <div className="text-sm text-[#666]">
            &copy; {new Date().getFullYear()} Toons Valley Education Trust. All rights reserved.
          </div>
          <div className="flex gap-2">
            <IconButton><Facebook className='text-[#010101]' /></IconButton>
            <IconButton><Instagram className='text-[#010101]' /></IconButton>
            <IconButton><LinkedIn className='text-[#010101]' /></IconButton>
            <IconButton><Twitter className='text-[#010101]' /></IconButton>
            <IconButton><YouTube className='text-[#010101]' /></IconButton>
          </div>
        </div>
      </div>
    </form>
  )
}
