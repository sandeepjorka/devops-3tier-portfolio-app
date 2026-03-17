const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

/* MongoDB Connection */
mongoose.connect('mongodb://mongodb:27017/portfolioDB')
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

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