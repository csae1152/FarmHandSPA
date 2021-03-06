var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
app = express();
app.use(serveStatic(path.join(__dirname + '/dist/pwa-mat/')));
var port = process.env.PORT || 5000;
app.listen(port);
app.use('/', express.static(path.join(__dirname + '/dist/pwa-mat/')))
app.route('/*')
    .get(function(req, res) {
          res.sendFile(path.join(__dirname + '/dist/pwa-mat/index.html'));
});

module.exports = app;
console.log('server started '+ port);
