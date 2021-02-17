console.log("getting stuff ready and loading external resources...")
var textwrite = {
  makeserver : function(portToHost) {
    const http = require('http');
    const fs = require('fs')

const hostname = '127.0.0.1'
const port = portToHost;
    
    function addToFile() {
      var text_to_add = prompt("Please enter some text to add to the file (it will appear on a new line)")
      fs.appendFile('textwrite.tw', "<br>" + text_to_add, function (err) {
  if (err) throw err;
  console.log('Saved!');
});
    }

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.write('<h1 style="font-family: Courier;">TextWrite server</h1>');
  res.write(`<head><title>TextWrite</title></head>`)
  res.write(`<p style="font-family: Courier;">TextWrite servers don't do much yet, you can only view files.<br>The file has to be in the same place as the server, and must be <b>textwrite.tw</b>.</p><br><button onclick='addToFile()'>Add to file textwrite.tw</button>`)
    fs.readFile('textwrite.tw', function(err, data) {
    res.write('<p>' + data + '</p>');
    return res.end();
  });
});

server.listen(port, hostname, () => {
  console.log(`TextWrite server running at http://${hostname}:${port}/`);
});
},
}
textwrite.makeserver(1560)
textwrite.makeserver(7650)
