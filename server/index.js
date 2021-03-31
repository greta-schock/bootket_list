const express = require('express');
const morgan = require('morgan');
const axios = require('axios');
const path = require('path');
const app = express();
const port = 3000;
const API_KEY_NP = require('../keyAPI.js');

const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');

app.use(express.json());
app.use(morgan('dev'));
app.use(express.static(PUBLIC_DIR));

app.get('/api/parksInfo', (req, res) => {
  axios.get(`https://developer.nps.gov/api/v1/parks?limit=271&q=hiking&api_key=${API_KEY_NP}`)
    .then((results) => {
      res.send(results.data.data);
    })
    .catch((err) => {
      console.log(err);
      res.send(500);
    })
})

app.get('/api/hikingTrailsInfo', (req, res) => {
  //the request object is the parkCode so we can find the specific hiking information for that parl
  const parkCode = 'acad'; //req.body
  axios.get(`https://developer.nps.gov/api/v1/thingstodo?parkCode=${parkCode}&q=hiking&api_key=${API_KEY_NP}`)
    .then((results) => {
      res.send(results.data.data);
    })
    .catch((err) => {
      console.log(err);
      res.send(500);
    })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})