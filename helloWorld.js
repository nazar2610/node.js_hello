var http = require ("http");

var app = http.createServer (function (req, res) {
	res.writeHead(200);
	res.write ("<h1>Hello World!</h1>");
	res.end();

}).listen (8080);

console.log("Listening on port 8080...")
