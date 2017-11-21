var path = require('path'),
    http = require('http'),
    https = require('https'),
    express = require('express'),
    fs = require('fs'),
    app = express(),
    sslOpts = {
      key: fs.readFileSync('certs/key.pem'),
      cert: fs.readFileSync('certs/cert.pem')
    };

app.use('/', express.static(path.join(__dirname, '/'), {
  setHeaders: setCrossOrigin
}));
app.use(function (req, res, next) {
  console.log(req);
  res.setHeader('Access-Control-Allow-Origin', req.get('origin'));
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  next();
});


http.createServer(app).listen(3000, function() {
  console.log('listening on', 3000);
});
https.createServer(sslOpts, app).listen(8443, function() {
  console.log('listening on', 8443);
});

function setCrossOrigin(res, path) {
  console.log('setting headers', arguments);
  res.setHeader('Access-Control-Allow-Origin', 'https://tpc.googlesyndication.com');
  res.setHeader('Access-Control-Allow-Credentials', true);
}