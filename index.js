var express = require('express');
var app = express();

app.listen(3000, () => {
    console.log('Listening on port 3000.')
});

app.get('/api/', (req, res) => {
  const gmt = new Date().toString()
  const ts = new Date().getTime()
  res.send({unix: ts, msg: gmt});
});