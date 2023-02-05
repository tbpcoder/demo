const express = require('express');
const app = express();
var path = require('path');


app.use(express.static(__dirname + '/view'));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(3000, () => {
  console.log('Web application listening on port 3000');
});
