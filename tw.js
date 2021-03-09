console.log("getting stuff ready and loading external resources...")
var textwrite = {
  makeserver : function(portToHost) {
    const http = require('http');
    const fs = require('fs')

const hostname = '127.0.0.1'
const port = portToHost;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.write('<h1 style="font-family: Courier;">TextWrite server</h1>');
  res.write(`<head><title>TextWrite</title></head>`)
  res.write(`<p style="font-family: Courier;">TextWrite servers don't do much yet, you can only view files.<br>The file has to be in the same place as the server, and must be <b>textwrite.tw</b>.</p>`)
    fs.readFile('textwrite.tw', function(err, data) {
    res.write('<p>' + data + '</p>');
    return res.end();
  });
});

server.listen(port, hostname, () => {
  console.log(`TextWrite server running at http://${hostname}:${port}/, visit in your browser.`);
});
},
}
textwrite.makeserver(1560)
