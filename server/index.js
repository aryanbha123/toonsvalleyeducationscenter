const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer = require('nodemailer');
const cookieParser = require('cookie-parser');
const path = require('path');
const multer = require('multer');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 3001;


const URI = "mongodb+srv://aryanbhandari4077:qHiT2RmS7y343QC7@cluster0.wqexvgn.mongodb.net/geo?retryWrites=true&w=majority&appName=Cluster0";

app.use(cookieParser());
const allowedOrigins = ['https://www.tonsvalleyeducationtrust.org' , 'http://localhost:3000'];
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


const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});
const upload = multer({ storage });

const imageSchema = new mongoose.Schema({
    url: { type: String, required: true },
});
const Image = mongoose.model('Image', imageSchema);

app.use(express.json());
app.use(cors(corsOptions));

app.use(require('./routes/userRoutes'));
app.use(require('./routes/auth'));
app.use(express.static('uploads'));

app.post('/upload', upload.single('image'), async (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }

    const imageUrl = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;
    const newImage = new Image({ url: imageUrl });

    try {
        await newImage.save();
        res.status(200).json({ message: 'Image uploaded successfully', imageUrl });
    } catch (error) {
        res.status(500).json({ message: 'Error saving image', error });
    }
});


app.get('/uploads/:id', (req, res) => {
    const imageId = req.params.id;
    const imagePath = path.join(__dirname, 'uploads', imageId);

    res.sendFile(imagePath, (err) => {
        if (err) {
            res.status(404).send('Image not found');
        }
    });
});


app.post('/delete/img/:id', async (req, res) => {
    const { id } = req.params;

    try {
        // Wait for the deletion to complete
        const img = await Image.findByIdAndDelete(id);

        // Check if the image was found and deleted
        if (!img) {
            return res.status(404).json({ success: false, msg: "Image not found" });
        }

        // If deleted successfully, return success response
        res.status(200).json({ success: true, msg: "Deleted Successfully" });
    } catch (err) {
        // Handle errors and return error response
        res.status(500).json({ success: false, err: "Server Error" });
    }
});

app.get('/get/images', async (req, res) => {
    try {
        const img = await Image.find();
        res.status(200).json({ img });
    } catch (error) {
        res.status(400).json({ error });
    }
});

// Basic test route
app.get('/', (req, res) => {
    res.send("Server Live");
});

// Donation request handling route with email notification
app.post('/api/donation', async (req, res) => {
    const { name, phone, visit } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'aryanbhandari4077@gmail.com',
            pass: 'pijr hbnz zuhf lbvz', // Don't expose sensitive credentials in production!
        },
        tls: {
            rejectUnauthorized: false,
        },
    });

    const mailOptions = {
        from: 'aryanbhandari4077@gmail.com',
        to: 'chhavibhandari15jun@gmail.com',
        subject: 'New Donation Request',
        text: `Donation details:
        Name: ${name}
        Phone: ${phone}
        Visit preference: ${visit === 'yes' ? 'Scheduled Visit' : 'No Visit'}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send({ message: 'Donation email sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send({ message: 'Failed to send donation email.' });
    }
});

// MongoDB connection
mongoose.connect(URI)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
