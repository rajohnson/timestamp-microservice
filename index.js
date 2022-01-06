var express = require('express');
var app = express();

app.listen(3000, () => {
    console.log('Listening on port 3000.')
});

app.get('/api/', (req, res) => {
  const utc = new Date().toUTCString()
  const ts = new Date().getTime()
  res.send({unix: ts, utc: utc});
});