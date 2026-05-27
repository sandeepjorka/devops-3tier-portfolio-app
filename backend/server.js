const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

/* CORS */
const allowedOrigins = [
    'https://master.d3zq8gdcn7z7c.amplifyapp.com',
    'https://sandeep1.xyz',
    'https://www.sandeep1.xyz'
];

app.use(cors({
    origin: allowedOrigins,
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type']
}));

app.options('*', cors());

app.use(express.json());

/* Health check */
app.get('/', (req, res) => {
    res.send("Backend is running");
});

app.get('/health', (req, res) => {
    res.json({
        status: "OK",
        message: "Backend healthy"
    });
});

/* MongoDB Connection */
mongoose.connect('mongodb://127.0.0.1:27017/portfolioDB')
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log("MongoDB Error:", err));

/* Schema */
const ContactSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String
});

const Contact = mongoose.model('Contact', ContactSchema);

/* API */
app.post('/contact', async (req, res) => {
    try {
        const data = new Contact(req.body);
        await data.save();
        res.send("Message saved");
    } catch (err) {
        res.status(500).send(err);
    }
});

app.get('/contacts', async (req, res) => {
    const data = await Contact.find();
    res.json(data);
});

/* Server */
app.listen(5000, () => console.log("Server running on port 5000"));