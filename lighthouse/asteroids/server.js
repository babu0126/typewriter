const express = require('express');
const morgan = require('morgan');
const app = express();
const PORT = 8083;

app.set('view engine', 'ejs');

// MIDDLEWARE code that will run on EVERY requests.
// use() will return callback, this callback will be running on all requests
app.use(express.urlencoded({extended:false}));
app.use(morgan("dev"));

// DATABASE
const asteroids = {
  'dimorphos': {r1: 1000, r2: 200, mass: 5000, name: 'dimorphos'},
  'dimorgrah': {r1: 800,  r2: 300, mass: 4000, name: 'dimorgrah'}
}

// ROUTE will only run on specific request

// BROWSE
app.get('/', (req, res) => {
  const templateVars = {
    asteroidList: asteroids
  };
  res.render('home', templateVars);
});

// ADD 
// Once presss submit button, POST will be triggered.
app.get('/asteroid/add', (req, res) => {
  res.render('add');
});
app.post('/asteroid/add', (req, res) => {
  console.log('rec.body', req.body);
  asteroids[req.body.name] = {
    name: req.body.name,
    mass: req.body.mass,
    r1: req.body.r1,
    r2: req.body.r2
  };
  res.redirect('/');
});


// READ /asteroid/dimorphos (req.params.name = dimorphos)
// Multiple propertys /asteroid/:name/:id/:owner
app.get('/asteroid/:name', (req, res) => {
  const name = req.params.name;
  const templateVars = {
    asteroid: asteroids[name]
  }
  res.render('asteroid', templateVars);
})

// EDIT
app.get('/asteroid/:name/edit', (req, res) => {
  const templateVars = {
    a: asteroids[req.params.name]
  };
  res.render('edit', templateVars);
});
app.post('/asteroid/:name/edit', (req, res) => {
  asteroids[req.params.name] = {
    name: req.body.name,
    mass: req.body.mass,
    r1: req.body.r1,
    r2: req.body.r2
  };
  res.redirect('/');
});


// DELETE
app.get('/asteroid/:name/delete', (req, res) => {
  delete asteroids[req.params.name];
  res.redirect('/');
})


app.listen(PORT, () => {
  console.log(`The Server is listening on ${PORT}`);
});