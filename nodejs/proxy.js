"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
const port = 8080; // Change if needed

// Request headers
var headers = {
  "Content-Type": "application/json",
};

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Handle incoming POST requests
app.post("/proxy", async (req, res) => {
  try {
    // Retrieve Api-Endpoint from the request header
    const apiEndpoint = req.header("Api-Endpoint");
    if (apiEndpoint === null) throw new Error("Api-Endpoint is missing!");

    // Retrieve Api-Key from the request header
    const apiKey = req.header("Api-Key");
    if (apiKey === null) throw new Error("Api-Key is missing!");

    // Add header to the outgoing request
    headers["Authorization"] = `Bearer ${apiKey}`;

    // Forward the request to the final endpoint
    const response = await axios.post(apiEndpoint, req.body, { headers: headers });

    // Send back the response from the final endpoint to the client
    res.json(response.data);
  } catch (error) {
    // If there's an error, send back an error response
    console.error("Error relaying request: ", error);
    res.status(500).json({ error: error.message });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
