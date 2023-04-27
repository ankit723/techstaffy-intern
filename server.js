// import required modules
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

// create express app
const app = express();

// set up middleware to parse request body as JSON
app.use(bodyParser.json());

// define endpoint for form submission
app.post('/submit-form', (req, res) => {
  // extract form data from request body
  const formData = req.body;

  // write form data to a text file on the server
  fs.writeFile('form-data.txt', JSON.stringify(formData), (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error saving form data');
    } else {
      res.send('Form data saved successfully');
    }
  });
});

// start server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
