require('dotenv').config();

const express = require('express');
const path = require('path');
var methodOverride = require('method-override');
const handlebars = require('express-handlebars');
const morgan = require('morgan');
const app = express();

const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

const port = 3000;

const route = require('./routes');
const db = require('./config/db'); //database mongodb

const axios = require('axios');



// enable CORS
// enable CORS
app.use(cors({
  origin: 'http://localhost:3000', // url of the frontend application
  credentials: true // set credentials true for secure httpOnly cookie
}));

// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
 
// use cookie parser for secure httpOnly cookie
app.use(cookieParser(process.env.COOKIE_SECRET));
//Connect to DB

db.connect();



axios.get('http://localhost:3000/device/show')
  .then(function (response) {
    // handle success
    console.log(response.request.path);
  })

// axios.get('http://10.45.232.225/')
//   .then(response => {
//     console.log(response.data);
//     // console.log(response.data.explanation);
//   })
//   .catch(error => {
//     console.log(error);
//   });

app.use(express.static(path.join(__dirname, 'public')));

//middleware
app.use(
  express.urlencoded({
    extend: true,
  }),
); //
app.use(express.json()); //

app.use(function(req, res, next) {

  //test login
  // var token = req.headers['authorization'];
  // if (!token) return next(); //if no token, continue
 
  // token = token.replace('Bearer ', '');
  // jwt.verify(token, process.env.JWT_SECRET, function (err, user) {
  //   if (err) {
  //     return res.status(401).json({
  //       error: true,
  //       message: "Invalid user."
  //     });
  //   } else {
  //     req.user = user; //set the user to req so other routes can use it
  //     next();
  //   }
  // });
  //End //test login
  
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

app.use(methodOverride('_method')); //chuyển đổi method ở form
//HTTP logger
// app.use(morgan('combined')); //gửi các request URL

//template engine
app.engine(
  'hbs',
  handlebars({
    extname: '.hbs',
    helpers:{
      sum: (a,b) => a + b,
    }
  }),
  
);

function intervalFunc() {
  axios.get('http://localhost:3000/api')
  .then(response => {
    console.log(response.data);
    // console.log(response.data.explanation);
  })
  .catch(error => {
    console.log(error);
  });
}


// setInterval(intervalFunc, 5000); //60s

function intervalSendmail() {
  axios.get('http://localhost:3000/api/sendmail')
  .then(response => {
    console.log(response.data);
    // console.log(response.data.explanation);
  })
  .catch(error => {
    console.log(error);
  });
}
// setInterval(intervalSendmail, 5000); //60 giây

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources','views')); // chỉnh sửa thư mục Views để render như ý muốn của mình

//route init
route(app);

  app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
