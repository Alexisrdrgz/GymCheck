const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Create a schema for your data
const itemSchema = new mongoose.Schema({
    name: String,
    description: String,
});

// Create a model based on the schema
const Item = mongoose.model('Item', itemSchema);

// Create an Express app
const app = express();
app.use(bodyParser.json());

// Define a route to handle POST requests
app.post('/items', async (req, res) => {
    try {
        const newItem = new Item({
            name: req.body.name,
            description: req.body.description,
        });
        await newItem.save();
        res.status(201).json(newItem);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

// Define a route to handle GET requests to fetch all items
app.get('/items', async (req, res) => {
    try {
        // Utiliza el método find() de Mongoose para buscar todos los elementos en la colección
        const items = await Item.find();
        // Envía los elementos encontrados como respuesta al cliente
        res.status(200).json(items);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});