import { Context } from "@netlify/edge-functions";

// functions/rpc.js
const axios = require('axios');

exports.handler = async (event, context) => {
  try {
    console.log(event.body);
    const response = await axios.post('https://generativelanguage.googleapis.com', event.body);

    return {
      statusCode: response.status,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    return {
      statusCode: error.response.status,
      body: JSON.stringify({ error: error.message }),
    };
  }
};

