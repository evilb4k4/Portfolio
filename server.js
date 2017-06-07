'use strict';

const express = require ('express');

const app = express();

const requestProxy = require('express-request-proxy');

const PORT = process.env.PORT || 3000;

app.use(express.static('./Public'));

app.get('/github/*', proxyGitHub);

function proxyGitHub(request, response) {
  console.log('proxyGitHub function');
  (requestProxy({
    url: `https://api.github.com/${request.params[0]}`,
    headers: {Authorization: `token ${process.env.GITHUB_TOKEN}`}
  }))(request, response);
}

app.listen(PORT, function() {
  console.log('This page is being served at localhost:5000');
})
