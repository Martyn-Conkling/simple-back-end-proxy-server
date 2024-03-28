// Here you can see we are importing express, node-fetch, and cors libraries
// Express is a back-end framework that runs on node.js
// cors is a library for resolving cors errors

import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors'; 


const app = express();
const port = 3000;

// This will start the app and have it use the cors library, 
//BE CAREFUL, your locally hosted API will now accept communications from any origin so don't host this on an online server
app.use(cors())

// If you want to specify an origin that can use this API, please use your locally hosted front end url like the example below
// app.use(cors({
//     origin: 'http://127.0.0.1:5500' // Only allow this origin to access the resources
//   })
// )

app.get('/api/quotes', async (req, res) => {
  try {
    const response = await fetch('https://zenquotes.io/api/quotes/');
    const data = await response.json();
    res.send(data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Server error');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});