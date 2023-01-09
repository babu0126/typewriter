const PORT = 8080;
const express = require('express');
// const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const app = express();


//Database of users
const users = {
  1: {id:1, email: 'obiwan@gmail.com', password: '123'},
  2: {id:2, email: 'andyhwa@hotmail.com', password: '123'},
  3: {id:3, email: 'a@b.com', password: '123'}
}

//MIDDLEWARE
app.set('view engine', 'ejs');
// app.use(morgan('dev'));
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

app.get('/login', (req, res) => {
  return res.render('login');
})
app.post('/login', (req, res) => {
  // how do i get what the user has written?
  // need to npm install body-parser
  console.log(req.body);
  //Credentials
  // We have to get user credentials that the client wrote (form)
  // "Verify" those credentials
  // LOOP through our 'database'
  // for every iteration, we need to check IF
  for (let key in users) {
    console.log(users[key]);
    // IF user were looping through matches req.body info
    if (users[key].email === req.body.email) {
      // IF does, then check passwords
      // IF email and pass match = login!
      if (users[key].password === req.body.pass) {
        //SET A COOKIE
        res.cookie('user_id', users[key].id)
        return res.redirect('/');

        // return res.redirect(`/${users[key].id}/`);
        // return res.send("You are matched. We are logged in!");
        // what if we have the id ->localhost:8080/:id/ _______
      } else {
        // IF it doesnt send error
        return res.send("There is an error!");
      }
    }
  }
  // IF we finish loop and no match was found, send error
  return res.send('Error: user or password incorrect');
})

app.post('/logout', (req, res) => {
  res.clearCookie('user_id');
  return res.redirect('/');
});

app.get('/', (req, res) => {
  // Have to figure out who is currently logged in and visiting this page ...
  console.log(req.headers.cookie);
  console.log('user_id:  ', req.cookies);
  const user = users[req.cookies.user_id];
  const templateVars = {user};
  return res.render('home', templateVars);
});

/*//LOGGED IN ROUTES GO HERE!
app.get('/:id/', (req, res) => {
  console.log(req.params);
  const user = users[req.params.id];
  console.log(user);
  const templateVars = {
    user
  };
  return res.render('/auth_home', templateVars);
})*/

// WHY RETURN 
// One request = One respond.
// This why we need to use return making sure only one will be sent out.
// The other send will be buffing.
app.get('/test', (req, res) => {
  return res.send(':)');
  // res.send(':)');
  // res.send(':)');
});


app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
})