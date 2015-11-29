const path = require('path');
const express = require('express');
const serveStatic = require('serve-static');

const app = express();
const port = process.env.PORT || 3000;

app.use(serveStatic(path.join(__dirname, 'public')));
app.listen(3000, () =>{
  console.log("Server running on port: ", port);
});
