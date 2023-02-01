const express = require('express');
const app = express();
var path = require('path');

app.use(express.static('images'));
app.use(express.static(__dirname + '/view'));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/static/index.html'));
});

app.listen(3000, () => {
  console.log('Web application listening on port 3000');
});

module.exports = app