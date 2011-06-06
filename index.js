
require.paths = require.paths.unshift(__dirname + '/../node_modules');

var app = require('./lib/boot.js')();


var port = process.env.PORT || 3000;
console.log("Listening on " + port);

app.listen(port);
