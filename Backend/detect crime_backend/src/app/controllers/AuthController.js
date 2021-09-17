require('dotenv').config();

const ultrasonic = require('../models/Ultrasonic');
const {mutipleMongooseToObject} = require('../../util/mongoose');
const {mongooseToObject} = require('../../util/mongoose');
const axios = require('axios');

const jwt = require('jsonwebtoken');
const utils = require('./utils');

const {
  refreshTokens, COOKIE_OPTIONS, generateToken, generateRefreshToken,
  getCleanUser, verifyToken, clearTokens, handleResponse,
} = require('./utils');

const userList = [
  {
    userId: "123",
    password: "clue",
    name: "Clue",
    username: "clue",
    isAdmin: true
  },
  {
    userId: "456",
    password: "mediator",
    name: "Mediator",
    username: "mediator",
    isAdmin: true
  },
  {
    userId: "789",
    password: "123456",
    name: "Clue Mediator",
    username: "cluemediator",
    isAdmin: true
  }
]


// middleware that checks if JWT token exists and verifies it if it does exist.
// In all private routes, this helps to know if the request is authenticated or not.
// const authMiddleware = function (req, res, next) {
//   // check header or url parameters or post parameters for token
//   var token = req.headers['authorization'];
//   if (!token) return handleResponse(req, res, 401);
 
//   token = token.replace('Bearer ', '');
 
//   // get xsrf token from the header
//   const xsrfToken = req.headers['x-xsrf-token'];
//   if (!xsrfToken) {
//     return handleResponse(req, res, 403);
//   }
 
//   // verify xsrf token
//   const { signedCookies = {} } = req;
//   const { refreshToken } = signedCookies;
//   if (!refreshToken || !(refreshToken in refreshTokens) || refreshTokens[refreshToken] !== xsrfToken) {
//     return handleResponse(req, res, 401);
//   }
 
//   // verify token with secret key and xsrf token
//   verifyToken(token, xsrfToken, (err, payload) => {
//     if (err)
//       return handleResponse(req, res, 401);
//     else {
//       req.user = payload; //set the user to req so other routes can use it
//       next();
//     }
//   });
// }
 


class AuthController {
  //[GET] /news
  state = {
    persons: []
  }

  resquest(req, res, next) {
    
    //test login
    var token = req.headers['authorization'];
    if (!token) return next(); //if no token, continue
   
    token = token.replace('Bearer ', '');
    jwt.verify(token, process.env.JWT_SECRET, function (err, user) {
      if (err) {
        return res.status(401).json({
          error: true,
          message: "Invalid user."
        });
      } else {
        req.user = user; //set the user to req so other routes can use it
        next();
      }
    });
    //End //test login
    
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
  }

  index(req, res, next) {
    

    
  }
  kq(req, res){
    if (!req.user) return res.status(401).json({ success: false, message: 'Invalid user to access it.' });
    res.send('Welcome to the Node.js Tutorial! - ' + req.user.name);
  };
  auth(req, res, next) {
    console.log(req.body);
    console.log("username: "+ req.body.username);
    console.log("password: "+ req.body.password);
    const user = req.body.username;
    const pwd = req.body.password;

    // const user = "cluemediator";
    // const pwd = "123456";

  
    // return 400 status if username/password is not exist
    if (!user || !pwd) {
      return handleResponse(req, res, 400, null, "Username and Password required.");
    }
  
    const userData = userList.find(x => x.username === user && x.password === pwd);
  
    // return 401 status if the credential is not matched
    if (!userData) {
      return handleResponse(req, res, 401, null, "Username or Password is Wrong.");
    }
  
    // get basic user details
    const userObj = getCleanUser(userData);
  
    // generate access token
    const tokenObj = generateToken(userData);
  
    // generate refresh token
    const refreshToken = generateRefreshToken(userObj.userId);
  
    // refresh token list to manage the xsrf token
    refreshTokens[refreshToken] = tokenObj.xsrfToken;
  
    // set cookies
    res.cookie('refreshToken', refreshToken, COOKIE_OPTIONS);
    res.cookie('XSRF-TOKEN', tokenObj.xsrfToken);
  
    return handleResponse(req, res, 200, {
      user: userObj,
      token: tokenObj.token,
      expiredAt: tokenObj.expiredAt
    });
  }

  
  logout(req, res, next){
    clearTokens(req, res);
    return handleResponse(req, res, 204);
  }
  verifyToken(req, res, next) {
    // var token = req.body.token || req.query.token;
    // if (!token) {
    //   return res.status(400).json({
    //     error: true,
    //     message: "Token is required."
    //   });
    // }
    // // check token that was passed by decoding token using secret
    // jwt.verify(token, process.env.JWT_SECRET, function (err, user) {
    //   if (err) return res.status(401).json({
    //     error: true,
    //     message: "Invalid token."
    //   });
  
    //   // return 401 status if the userId does not match.
    //   if (user.userId !== userData.userId) {
    //     return res.status(401).json({
    //       error: true,
    //       message: "Invalid user."
    //     });
    //   }
    //   // get basic user details
    //   var userObj = utils.getCleanUser(userData);
    //   return res.json({ user: userObj, token });
    // });

    const { signedCookies = {} } = req;
    const { refreshToken } = signedCookies;
    if (!refreshToken) {
      return handleResponse(req, res, 204);
    }
  
    // verify xsrf token
    const xsrfToken = req.headers['x-xsrf-token'];
    if (!xsrfToken || !(refreshToken in refreshTokens) || refreshTokens[refreshToken] !== xsrfToken) {
      return handleResponse(req, res, 401);
    }
  
    // verify refresh token
    verifyToken(refreshToken, '', (err, payload) => {
      if (err) {
        return handleResponse(req, res, 401);
      }
      else {
        const userData = userList.find(x => x.userId === payload.userId);
        if (!userData) {
          return handleResponse(req, res, 401);
        }
  
        // get basic user details
        const userObj = getCleanUser(userData);
  
        // generate access token
        const tokenObj = generateToken(userData);
  
        // refresh token list to manage the xsrf token
        refreshTokens[refreshToken] = tokenObj.xsrfToken;
        res.cookie('XSRF-TOKEN', tokenObj.xsrfToken);
  
        // return the token along with user details
        return handleResponse(req, res, 200, {
          user: userObj,
          token: tokenObj.token,
          expiredAt: tokenObj.expiredAt
        });
      }
    });
  }
  getlist(req, res,next){
    var token = req.headers['authorization'];
    console.log("token111"+token);
    if (!token) return handleResponse(req, res, 401);
   
    token = token.replace('Bearer ', '');
   
    // get xsrf token from the header
    const xsrfToken = req.headers['x-xsrf-token'];
    
    console.log("xsrfToken111"+xsrfToken);
    if (!xsrfToken) {
      return handleResponse(req, res, 403);
    }
   
    // console.log(req)
    // verify xsrf token
    const { signedCookies = {} } = req;

    const { refreshToken } = signedCookies;
    // console.log("tesst"+{refreshToken});
    
    // console.log(JSON.stringify(req.headers));
    
    console.log(refreshToken);
    // console.dir({ refreshToken });
    // refreshToken.entries(refreshToken);
    if (!refreshToken || !(refreshToken in refreshTokens) || refreshTokens[refreshToken] !== xsrfToken) {
      console.log("error verify xsrf token");
      return handleResponse(req, res, 401);
    }
   
    // verify token with secret key and xsrf token
    verifyToken(token, xsrfToken, (err, payload) => {
      if (err){
        
        // console.log("error verify");
        return handleResponse(req, res, 401);
      }
      else {
        
        req.user = payload; //set the user to req so other routes can use it
        next();
      }
    });


    const list = userList.map(x => {
      const user = { ...x };
      delete user.password;
      return user;
    });
    return handleResponse(req, res, 200, { random: Math.random(), userList: list });
  }

}
module.exports = new AuthController();

// const ApiController = require('./ApiController');
