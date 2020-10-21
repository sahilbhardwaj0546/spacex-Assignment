const express = require('express');
const http = require('http')
const path = require('path');
const app = express();
app.use(path.join(__dirname, "path/to/index"));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/publicis/index.html'));
});
const port = process.env.PORT || 3000;
app.set('port', port);
const server = http.createServer(app);
server.listen(port, () => console.log('running'));