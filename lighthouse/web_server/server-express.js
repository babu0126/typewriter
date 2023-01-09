// Web server written with the help of express
const express = require('express');
const port = 8080;
const app = express();

app.set('view engine', 'ejs'); 
// ejs is a particular template engine
// in the views directory, $ mv index.html index.ejs
// npm install ejs --save


// ROUTES
app.get('/', (req, res) => {
  res.render('index'); // look for index.ejs insdie a views directory
  res.end();
});

app.get('/monkeyfuzz', (req, res) => {
  res.write(`This is the monkey fuzz page.`);
  res.end();
})

// This will response to anything!! Do not put on the top!
app.get('*', (req, res) => {
  res.write(`404!`);
  res.end();
})

// START THE SERVER
app.listen(port, () => {
  console.log(`Server is listening on port ${port}!`);
});