const express = require('express');
const router = express.Router();
const authController = require('../app/controllers/AuthController');

// const {
//     refreshTokens, COOKIE_OPTIONS, generateToken, generateRefreshToken,
//     getCleanUser, verifyToken, clearTokens, handleResponse,
//   } = require('./utils');

// const authMiddleware = function (req, res, next) {
//     // check header or url parameters or post parameters for token
//     var token = req.headers['authorization'];
//     if (!token) return handleResponse(req, res, 401);
   
//     token = token.replace('Bearer ', '');
   
//     // get xsrf token from the header
//     const xsrfToken = req.headers['x-xsrf-token'];
//     if (!xsrfToken) {
//       return handleResponse(req, res, 403);
//     }
   
//     // verify xsrf token
//     const { signedCookies = {} } = req;
//     const { refreshToken } = signedCookies;
//     if (!refreshToken || !(refreshToken in refreshTokens) || refreshTokens[refreshToken] !== xsrfToken) {
//       return handleResponse(req, res, 401);
//     }
   
//     // verify token with secret key and xsrf token
//     verifyToken(token, xsrfToken, (err, payload) => {
//       if (err)
//         return handleResponse(req, res, 401);
//       else {
//         req.user = payload; //set the user to req so other routes can use it
//         next();
//       }
//     });
//   }



// router.use('/search', authController.search);resquest

router.use('/resquest', authController.resquest);
router.get('/kq', authController.kq);
router.post('/users/signin', authController.auth);
router.post('/users/logout', authController.logout);
router.post('/verifytoken', authController.verifyToken);
router.get('/users/getlist', authController.getlist);

router.get('/', authController.index);

 module.exports = router;
