const express = require('express');
const axios = require('axios');  // Import Axios
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

// Google Cloud Function URL
const FUNCTION_URL = "https://sayfunction-197292358524.us-east1.run.app";

// Endpoint to forward requests to Google Cloud Function
app.get('/say', async (req, res) => {
    try {
        const keyword = req.query.keyword || "nothing";
        const response = await axios.get(`${FUNCTION_URL}?keyword=${encodeURIComponent(keyword)}`);
        
        res.json(response.data);
    } catch (error) {
        console.error("Error calling cloud function:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`API running at http://157.245.221.245:${port}`);
});
