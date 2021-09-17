var session = require("express-session");


const adminRouter = require('./admin');
const admindeviceRouter = require('./admins/devices');


const deviceRouter = require('./device');
const authRouter = require('./auth');
const apiRouter = require('./api');
const loginRouter = require('./pages/login');
const loginadminRouter = require('./loginadmin');


const logoutRouter = require('./pages/logout');

function route(app) {

  app.use(
    session({
      secret: "work hard",
      resave: false,
      saveUninitialized: true,
      cookie: { maxAge: 30 * 1000 * 60 },
      // store: new MongoStore({
      //   mongooseConnection: db
      // })
    })
  );

//user  
  
  app.use("/login", checkNotLoggedIn , loginRouter);
  app.use("/logout" , logoutRouter);
  
  app.use('/auth',authRouter);
  app.use('/api',apiRouter);
  app.use('/admin', adminRouter);
  app.use('/device', deviceRouter);
//admin

app.use("/loginadmin" , loginadminRouter);

app.use('/admindevice', admindeviceRouter);
  
}

const checkLoggedInAdmin = (req, res, next) => {
  if (req.session.adminloggedIn) {
    next();
  } else {
    res.redirect("/adminlogin");
  }
};
const checkNotLoggedInAdmin = (req, res, next) => {
  if (!req.session.adminloggedIn) {
    next();
  } else {
    res.redirect("/admin-dashboard");
  }
};
function checkLogged(req, res, next) {
  console.log(req.session.loggedIn);
  if (req.session.loggedIn) {
    next();
  } else {
    res.redirect("/login");
  }
  // if (req.session.loggedIn){
  //   next();
  // }
  // console.log(req.session.loggedIn)
  // next();
}
const checkNotLoggedIn = (req, res, next) => {
  if (!req.session.loggedIn) {
      next()
  } else {
      res.redirect('http://localhost:3001/zestreact/app/dashboard');
  }
}

module.exports = route;
