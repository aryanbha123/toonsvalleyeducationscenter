const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer = require('nodemailer');
const cookieParser = require('cookie-parser');
const app = express();
const port = process.env.PORT || 3001;

const URI = "mongodb+srv://aryanbhandari4077:qHiT2RmS7y343QC7@cluster0.wqexvgn.mongodb.net/geo?retryWrites=true&w=majority&appName=Cluster0"


// const allowedOrigins = ['http://localhost:3000'];
const allowedOrigins = ['https://tonsvalleyeducationtrust.org/'];

const corsOptions = {
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: 'GET,POST',
    allowedHeaders: ['Content-Type', 'Authorization'], 
    credentials: true, 
  };
  

// Middleware setup
app.use(cookieParser());
app.use(cors(corsOptions));
app.use(express.json());
app.use(require('./routes/userRoutes'));
app.use(require('./routes/auth'));

app.get('/', (req, res) => {
    res.send("Server Live");
});

app.post('/api/donation', async (req, res) => {
    const { name, phone, visit } = req.body; 
   
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'aryanbhandari4077@gmail.com',
            pass: 'pijr hbnz zuhf lbvz',        },
        tls: {
            rejectUnauthorized: false 
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
        await transporter.sendMail(mailOptions);
        res.status(200).send({ message: 'Donation email sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send({ message: 'Failed to send donation email.' });
    }
});



app.get('/get/donations' , (req,res) => {
    try{

    }catch(error){

    }
    res.status(200).json({});
})

mongoose.connect(URI).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
