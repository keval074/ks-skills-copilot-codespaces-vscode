//Create web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

//Add body-parser middleware
app.use(bodyParser.json());

//Comments
let comments = [];

//Create a comment
app.post('/comments', (req, res) => {
    //Get the comment
    let comment = req.body;
    //Add the comment to the comments array
    comments.push(comment);
    //Send the comment
    res.json(comment);
});

//Get all comments
app.get('/comments', (req, res) => {
    //Send all comments
    res.json(comments);
});

//Get a comment by id
app.get('/comments/:id', (req, res) => {
    //Get the comment id
    let id = req.params.id;
    //Find the comment by id
    let comment = comments.find(c => c.id == id);
    //Send the comment
    res.json(comment);
});

//Update a comment by id
app.put('/comments/:id', (req, res) => {
    //Get the comment id
    let id = req.params.id;
    //Get the comment
    let comment = req.body;
    //Find the comment by id
    let index = comments.findIndex(c => c.id == id);
    //Update the comment
    comments[index] = comment;
    //Send the comment
    res.json(comment);
});

//Delete a comment by id
app.delete('/comments/:id', (req, res) => {
    //Get the comment id
    let id = req.params.id;
    //Find the comment by id
    let index = comments.findIndex(c => c.id == id);
    //Delete the comment
    comments.splice(index, 1);
    //Send the comment
    res.json({});
});

//Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});