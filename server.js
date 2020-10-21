const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/publicis'));
app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname+'/dist/publicis/index.html'));
});
app.listen(process.env.PORT || 8080);


const express = require('express');
const http = require('http')
const path = require('path');

const app = express();
path.join(__dirname, "path/to/index") 
app.use(express.static(path.join(__dirname, 'dist/publicis')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/publicis/index.html'));
});

const port = process.env.PORT || 3000;
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => console.log('running'));