import React from 'react';
import CodeExample from './CodeExample';
import TextField from '@mui/material/TextField';

import { Grid, Button, Typography } from '@mui/material';
import Title from '../Title';
const Documentation = () => {
  const pythonCode = `
  import requests

  url = "https://api.example.com/verify-email"
  headers = {
      "API_KEY": "your_api_key_here"
  }
  data = {
      "email": "example@example.com"
  }
  
  response = requests.post(url, headers=headers, data=data)
  ;
  `;

  const nodeCode = `
  const axios = require('axios');

  const url = 'https://api.example.com/verify-email';
  const headers = {
    'API_KEY': 'your_api_key_here'
  };
  const data = {
    'email': 'example@example.com'
  };
  
  axios.post(url, data, { headers })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error(error);
    });
  `;
const nodeCode2 = `
const apiUrl = 'https://api.example.com/verify-email';
const apiKey = 'your_api_key_here';
const email = 'example@example.com';

const requestOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'API_KEY': apiKey
  },
  body: JSON.stringify({ email })
};

fetch(apiUrl, requestOptions)
  .then(response => response.json())
  .then(data => {
    // Handle the response data
    console.log(data);
  })
  .catch(error => {
    // Handle any errors
    console.error(error);
  });
`
  return (
    <React.Fragment>

        <Title> Documentacion para usar nuestra API </Title>
        <Title> Codigos de ejemplos </Title>
            <Grid container spacing={2}>
            <Grid item xs={12} >
            <Typography component="h3" variant='h6' color="primary" gutterBottom>Python</Typography>
            <CodeExample code={pythonCode} language="python" />
            </Grid>
            <Grid item xs={12}>
            <Typography component="h3" variant='h6' color="primary" gutterBottom>Node.js con Axios</Typography>
            <CodeExample code={nodeCode} language="javascript" />
            </Grid>
            <Grid item xs={12}>
      <Typography component="h3" variant='h6' color="primary" gutterBottom>Node.js con Fetch</Typography>
      <CodeExample code={nodeCode2} language="javascript" />
              </Grid>

          </Grid>
      
    </React.Fragment>
  );
};

export default Documentation;
