const express = require('express');
const axios = require('axios');
const app = express();
const cors = require('cors');
const port = 5000; // Choose an appropriate port number

app.use(cors()); // Enable CORS for all routes
app.use(express.json());

app.get('/image-proxy', async (req, res) => {
  const { imageUrl } = req.query;
  try {
    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
    res.setHeader('Content-Type', response.headers['content-type']);
    res.send(response.data);
  } catch (error) {
    res.status(500).send('Error fetching the image');
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});