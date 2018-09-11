const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const passport = require('passport');
const path = require('path');

// Routes
const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

const app = express();

// Body parser middleware
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());


// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
  .connect(db, {useNewUrlParser: true})
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// We get rid of this in Section 3: Passport JWT Authentication Strategy and replace it with the middleware + config
// app.get('/', (req, res) => res.send('hello word'));

// Passport Middleware
app.use(passport.initialize());

// Passport Config
require('./config/passport')(passport);

// Use Routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

// Server static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));