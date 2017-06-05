'use strict';

const express = require ('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('./Public'));

app.get('', function(request, response) {
  response.sendFile('index.html', {root: '.'})
})

app.listen(PORT, function() {
  console.log('This page is being served at localhost:5000');
})
