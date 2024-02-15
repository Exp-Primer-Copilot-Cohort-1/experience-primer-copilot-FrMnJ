// Create web server
// 1. Import the express module
const express = require('express');
const app = express();
const port = 3000;

// 2. Define a route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// 3. Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});