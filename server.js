const express = require('express');
const bodyParser = require('body-parser'); //вижда какъв content type е заявката и според това парсира контента в body.
const bcrypt = require('bcrypt-nodejs'); //hashing функция
const cors = require('cors'); //дава възможност да рекуестваш към други домейни
const knex = require('knex'); // SQL query builder

const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');

const db = knex({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : 'YOUR_USERNAME',
      password : 'YOUR_PASSWORD',
      database : 'YOUR_DATABASE_NAME'
    }
  });


const app = express();

app.use(bodyParser.json());
app.use(cors()); //middleware to enable CORS 

app.get('/', (req,res) => {
    res.send(db.users);
})

app.post('/signin', (req,res) => { signin.handleSignIn(req, res, db, bcrypt) }); // dependency injection

app.post('/register', (req, res) => { register.handleRegister(req, res, db, bcrypt) });

app.get('/profile/:id', (req,res) => { profile.handleProfile(req, res, db) });

app.put('/image', (req, res) => { image.handleImage(req, res, db) });

app.post('/imageurl', (req, res) => { image.handleApiCall(req, res) });

app.listen(3000, () => {
    console.log('app is running');
})

/* 
    /signin --> post = succ/fail
    /register --> post = user
    /profile/:userid --> GET = user
    /image --> PUT --> user rank
*/