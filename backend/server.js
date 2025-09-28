// server side Javascript
// Express.js runs on Node.js
const express = require('express');

const app = express(); // instance of express
const port = 3000;

//HTML verbs: GET (-data), POST (create), PUT (update), DELETE (-data)

// Route are the enpoints of the server, Routes respond to client requests. 
// Route for the root URL ('/') home page
app.get('/hello', (req, res) => {
    res.set('Content-type', 'text/html');
    res.status(200).send("Hello World");
})

app.listen(port, (error) => {
    if (!error) {
        console.log(`Example app listening on port ${port}`);
    }
    else {
        console.log('Error occurred, server can\'t start', error);
    }
})