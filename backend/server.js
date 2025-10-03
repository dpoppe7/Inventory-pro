// server side Javascript
// Express.js runs on Node.js
const express = require('express');
const express = require('cors');

const app = express(); // instance of express
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

//HTML verbs: GET (-data), POST (create), PUT (update), DELETE (-data)
// Route are the enpoints of the server, Routes respond to client requests. 

// health check route
app.get('/health', (req, res) => {
    res.json({
        status: 'ok',
        timestamp: new Date().toISOString,
        service: 'Inventory API'
    });
});

// Routes
// product route
const productRoutes = require('./routes/products.js');
app.use('/api/products', productRoutes);

app.listen(port, (error) => {
    if (!error) {
        console.log(`Example app listening on port ${port}`);
    }
    else {
        console.log('Error occurred, server can\'t start', error);
    }
})