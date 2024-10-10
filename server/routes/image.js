const router = require('express').Router();
const Image = require('../models/image');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
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

router.post('/upload', upload.single('image'), async (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }

    const { type } = req.body; // Get the 'type' from request body
    if (!type || !['Students', 'Classroom', 'Outing', 'Staff', 'Others'].includes(type)) {
        return res.status(400).json({ message: 'Invalid image type' });
    }

    const imageUrl = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;
    const newImage = new Image({ url: imageUrl, type });

    try {
        await newImage.save();
        res.status(200).json({ message: 'Image uploaded successfully', imageUrl });
    } catch (error) {
        res.status(500).json({ message: 'Error saving image', error });
    }
});

router.get('/uploads/:id', (req, res) => {
    const imageId = req.params.id;
    const imagePath = path.join(__dirname, 'uploads', imageId);

    res.sendFile(imagePath, (err) => {
        if (err) {
            res.status(404).send('Image not found');
        }
    });
});

router.post('/delete/img/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const img = await Image.findByIdAndDelete(id);
        if (!img) {
            return res.status(404).json({ success: false, msg: "Image not found" });
        }

        const filePath = path.join(__dirname, 'uploads', path.basename(img.url));
        fs.unlink(filePath, (err) => {
            if (err) {
                console.error('Error deleting file:', err);
            }
        });

        res.status(200).json({ success: true, msg: "Deleted Successfully" });
    } catch (err) {
        res.status(500).json({ success: false, err: "Server Error" });
    }
});

router.get('/get/images', async (req, res) => {
    try {
        const img = await Image.find();
        res.status(200).json({ img });
    } catch (error) {
        res.status(400).json({ error });
    }
});

module.exports = router;
