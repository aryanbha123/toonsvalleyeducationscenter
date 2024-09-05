const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer = require('nodemailer'); // Import nodemailer

const app = express();
const port = process.env.PORT || 8000;
// const URI = process.env.URI || "mongodb+srv://aryanbhandari4077:<password>@cluster0.wqexvgn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Middleware
app.use(express.json());
app.use(cors());

// Default Route
app.get('/', (req, res) => {
    res.send("Server Live");
});

// Donation Route
app.post('/api/donation', async (req, res) => {
    const { name, phone, visit } = req.body; // Updated email to phone

    // Set up Nodemailer to send the email
    const transporter = nodemailer.createTransport({
        service: 'gmail', // Use your preferred email service
        auth: {
            user: 'aryanbhandari4077@gmail.com', // Replace with your email
            pass: 'pijr hbnz zuhf lbvz',  // Replace with your email password
        },
        tls: {
            rejectUnauthorized: false // Allow self-signed certificates
        }
    });
    

    const mailOptions = {
        from: 'aryanbhandari4077@gmail.com', // Replace with your email
        to: 'chhavibhandari15jun@gmail.com', // Replace with the recipient email
        subject: 'New Donation Request',
        text: `Donation details:
        Name: ${name}
        Phone: ${phone}
        Visit preference: ${visit === 'yes' ? 'Scheduled Visit' : 'No Visit'}`
    };

    try {
        // Send the email using nodemailer
        await transporter.sendMail(mailOptions);
        res.status(200).send({ message: 'Donation email sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send({ message: 'Failed to send donation email.' });
    }
});

// Connect to MongoDB
// mongoose.connect(URI).then(() => {
//     console.log('Connected to MongoDB');
// }).catch((error) => {
//     console.error('Error connecting to MongoDB:', error);
// });

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
