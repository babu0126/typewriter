const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const PORT = 8080;
const app = express();


// DATABASE for URLs
const urlDatabase = {
  "b2xVn2": "http://www.lighthouselabs.ca",
  "9sm5xk": "http://www.google.com"
};

// DATABASE for Users
const users = {
  userRandomID: {
    id: "userRandomID",
    email: "user@example.com",
    password: "purple-monkey-dinosaur",
  },
  user2RandomID: {
    id: "user2RandomID",
    email: "user2@example.com",
    password: "dishwasher-funk",
  },
};

// FUNCTIONS: Random ID Generator
const generateRandomString = function () {
  return Math.random().toString(36).substring(2,8);
};

const getUserByEmail = function (email, users) {
  for (const userId in users) {
    if (email === users[userId].email) {
      return userId;
    }
  }
  return null; 
}


// MIDWARES 
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

app.listen(PORT, (req, res) => {
  console.log(`The Server is listening on PORT ${PORT}`);
})


// ROUTES FOR GET
// HOMEPAGE
app.get('/', (req, res) => {
  res.redirect('/urls');
})

app.get('/urls.json', (req, res) => {
  res.json(urlDatabase);
});

app.get('/urls', (req, res) => {
  console.log(req.cookies.user_id);
  const templateVars = {
    urls: urlDatabase,
    user: req.cookies.user_id
  };
  console.log(templateVars);
  res.render('urls_index', templateVars);
});

app.get('/urls/new', (req, res) => {
  console.log(req.cookies.user_id);
  const templateVars = {
    user: req.cookies.user_id
  }
  res.render('urls_new', templateVars);
})

// Showing the user their newly created short url 
app.get('/urls/:id', (req, res) => {
  const templateVars = {
    id: req.params.id,
    longURL: urlDatabase[req.params.id],
    user: req.cookies.user_id
  };
  res.render('urls_show', templateVars);
});

// Directing to the longURL
app.get("/u/:id", (req, res) => {
  const longURL = urlDatabase[req.params.id];
  res.redirect(longURL);
});

// REGISTER
app.get('/register', (req, res) => {
  const templateVars = {
    user: req.cookies.user_id
  };
  res.render('urls_register',templateVars);
});

// ROUTES FOR POST
app.post('/urls', (req, res) => {
  const newShortURL = generateRandomString();
  urlDatabase[newShortURL] = req.body.longURL;
  res.redirect(`/urls/${newShortURL}`);
});

// DELETE
app.post('/urls/:id/delete', (req, res) => {
  const shortURL = req.params.id;
  delete urlDatabase[shortURL];
  res.redirect('/urls');
});

// EDIT
app.post('/urls/:id', (req, res) => {
  urlDatabase[req.params.id] = req.body.newURL;
  res.redirect('/urls');
});

// LOGIN
app.post('/login', (req, res) => {
  const user = req.cookies.user_id;
  if (user) {
    res.redirect('/urls');
  }
});

// LOGOUT
app.post('/logout', (req, res) => {
  res.clearCookie('user_id');
  res.redirect('/urls');
});

// REGISTER
app.post('/register', (req, res) => {
  const inputEmail = req.body.email;
  const inputPassword = req.body.password;
  if (!inputEmail || !inputPassword) {
    res.status(400).send("Please enter valid e-mail and password");
  } else if (getUserByEmail(inputEmail, users) !== null) {
    res.status(400).send("Email is in used!");
  } else {
    const user = generateRandomString();
    users[user] = {
      id: user,
      email: inputEmail,
      password: inputPassword,
    };
    res.cookie('user_id', user);
    console.log(users);
    res.redirect('/urls');
  }
});
