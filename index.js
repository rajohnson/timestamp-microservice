var express = require('express');
var app = express();

app.listen(3000, () => {
    console.log('Listening on port 3000.');
});

function sendTime(req, res) {
  console.log('sending')
  res.send({unix: req.ts, utc: req.utc});
}

app.get('/api/:time', (req, res, next) => {
  console.log(new Date(req.params.time))
  if(isNaN(new Date(req.params.time))) {
    console.log('param is invalid')
    res.send({error: 'Invalid Date'});
  } else {
    console.log('processing')
    req.ts = new Date(req.params.time).getTime()
    req.utc = new Date(req.params.time).toUTCString()
    next()
  }
}, sendTime);

app.get('/api', (req, res, next) => {
  console.log('no param provided')
  req.ts = new Date().getTime()
  req.utc = new Date().toUTCString()
  next()
}, sendTime);