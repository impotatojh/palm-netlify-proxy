// functions/rpc.ts
import { Handler } from '@netlify/functions';
import axios from 'axios';

const handler: Handler = async (event, context) => {
  console.log(event.body);
  try {
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

export { handler };
