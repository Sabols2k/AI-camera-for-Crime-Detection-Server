require("dotenv").config();

const ultrasonic = require("../models/Ultrasonic");
const { mutipleMongooseToObject } = require("../../util/mongoose");
const { mongooseToObject } = require("../../util/mongoose");
const axios = require("axios");

const jwt = require("jsonwebtoken");
const utils = require("./utils");

const nodemailer = require("nodemailer");

const userData = {
  userId: "789789",
  password: "123456",
  name: "Clue Mediator",
  username: "cluemediator",
  isAdmin: true,
};
const lastvalue = []
// var transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'henrytranls2k@gmail.com',
//     pass: 'Henry1234'
//   }
// });
// var mailOptions = {
//   from: 'henrytranls2k@gmail.com',
//   to: 'dangducchau2000@gmail.com',
//   subject: 'Sending Email using Node.js',
//   text: 'That was easy!'
// };
class ApiController {
  //[GET] /news
  // state = {
  //   persons: []
  // }
  constructor() {
    // this.ssweek = this.ssweek.bind(this);
    this.state = {
      kqweek: 0,
    };
    // this.kqweek = 0;
  }

  resquest(req, res, next) {
    //test login
    var token = req.headers["authorization"];
    if (!token) return next(); //if no token, continue

    token = token.replace("Bearer ", "");
    jwt.verify(token, process.env.JWT_SECRET, function (err, user) {
      if (err) {
        return res.status(401).json({
          error: true,
          message: "Invalid user.",
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
    // Có esp32

    // const formData;
    const options = {
      sensor_id: "4",
      value: 110,
    };
    // ko cắm esp32
    const ultra = new ultrasonic(options);

    ultra.save(function (err) {
      console.log(err);
    });
    res.json(options);

    // có cắm esp32
    // axios.get('http://10.45.232.225/get-message')
    // .then(response => {

    //
    //   // const formData = response.data;
    //   // options.value=formData.message;

    //   // const ultra = response.json(options);
    //   const ultra = new ultrasonic(options);

    //   ultra.save(function (err) {
    //     console.log(err);
    //   });
    //   res.json(options);
    // //   ultra.save();

    // })
    // .catch(error => {
    //   console.log(error);
    // });
  }

  ultrasonic(req, res) {
    ultrasonic.find({}, function (err, ultrasonic) {
      if (!err) {
        res.json(ultrasonic);
      } else {
        res.status(400).json({ error: "ERROR" });
      }
    });
  }

  showday(req, res, next) {
    //[GET]

    var d = new Date();
    const day = d.getDate();
    const month = d.getMonth();
    const year = d.getFullYear();
    console.log("Day: " + d.getDate());
    console.log("Month: " + d.getMonth());

    // const day= d.getDate()-7;
    // console.log("day:"+day);
    ultrasonic
      .find({}, function (err, ultrasonic) {
        if (!err) {
          // res.json(ultrasonic);
          var ultrasonic2 = [];
          for (var i = 0; i < ultrasonic.length; i++) {
            // for(var i = 0; i < 7; i++){
            //   console.log(ultrasonic[i].createdAt);
            //   const str = ultrasonic[i].createdAt;
            //   console.log(str.getDate());
            // }

            // const kq = ssweek(ultrasonic[i].createdAt, d);
            // console.log(this.kqweek);
            console.log(d);
            const dayofultra = ultrasonic[i].createdAt.getDate();
            const monthofultra = ultrasonic[i].createdAt.getMonth();
            const yearofultra = ultrasonic[i].createdAt.getFullYear();

            //7-day + sonagofhang Ultra(31) - dayofultra < 7
            console.log("thang current:" + month);
            console.log("thang ultra:" + monthofultra);

            if (day == dayofultra && month == monthofultra) {
              // console.log(dayofultra);
              // ultrasonic2 += ultrasonic[i];
              ultrasonic2.push(ultrasonic[i]);
            }
          }
          res.json(ultrasonic2);

          // console.log(ultrasonic[0].createdAt);
          // const str = ultrasonic[0].createdAt;
          // console.log(str.getDate());

          // var d = new Date();
          // console.log(d.getDate());
        } else {
          res.status(400).json({ error: "ERROR" });
        }
      })
      .sort({ createdAt: -1 });

    // }).limit(100).sort({createdAt: -1})

    // var options = {
    //   id: '124',
    //   name: "Chaau",
    //   username: "sabo",

    // }
    // res.json(options);
  }

  showweek(req, res, next) {
    //[GET]

    var d = new Date();
    const day = d.getDate();
    const month = d.getMonth();
    console.log("Day: " + d.getDate());
    console.log("Month: " + d.getMonth());

    // const day= d.getDate()-7;
    // console.log("day:"+day);
    ultrasonic
      .find({}, function (err, ultrasonic) {
        if (!err) {
          // res.json(ultrasonic);
          var ultrasonic2 = [];
          for (var i = 0; i < ultrasonic.length; i++) {
            // for(var i = 0; i < 7; i++){
            //   console.log(ultrasonic[i].createdAt);
            //   const str = ultrasonic[i].createdAt;
            //   console.log(str.getDate());
            // }

            // const kq = ssweek(ultrasonic[i].createdAt, d);
            // console.log(this.kqweek);
            console.log(d);
            const dayofultra = ultrasonic[i].createdAt.getDate();
            const monthofultra = ultrasonic[i].createdAt.getMonth();

            //7-day + sonagofhang Ultra(31) - dayofultra < 7

            if (day >= 7) {
              if (dayofultra >= day - 7 && month == monthofultra) {
                console.log(dayofultra);
                //ultrasonic2 += ultrasonic[i];
                ultrasonic2.push(ultrasonic[i]);
              }
            } else {
              if (7 - day + 31 - dayofultra < 7 && month == monthofultra + 1) {
                //fix cai 31 . no chua chuan
                console.log(dayofultra);
                //ultrasonic2 += ultrasonic[i];
                ultrasonic2.push(ultrasonic[i]);
              }
            }
          }
          res.json(ultrasonic2);

          // console.log(ultrasonic[0].createdAt);
          // const str = ultrasonic[0].createdAt;
          // console.log(str.getDate());

          // var d = new Date();
          // console.log(d.getDate());
        } else {
          res.status(400).json({ error: "ERROR" });
        }
      })
      .sort({ createdAt: -1 });

    // }).limit(100).sort({createdAt: -1})

    // var options = {
    //   id: '124',
    //   name: "Chaau",
    //   username: "sabo",

    // }
    // res.json(options);
  }

  showmonth(req, res, next) {
    //[GET]

    var d = new Date();
    const day = d.getDate();
    const month = d.getMonth();
    const year = d.getFullYear();
    console.log("Day: " + d.getDate());
    console.log("Month: " + d.getMonth());

    // const day= d.getDate()-7;
    // console.log("day:"+day);
    ultrasonic
      .find({}, function (err, ultrasonic) {
        if (!err) {
          // res.json(ultrasonic);
          var ultrasonic2 = [];
          for (var i = 0; i < ultrasonic.length; i++) {
            // for(var i = 0; i < 7; i++){
            //   console.log(ultrasonic[i].createdAt);
            //   const str = ultrasonic[i].createdAt;
            //   console.log(str.getDate());
            // }

            // const kq = ssweek(ultrasonic[i].createdAt, d);
            // console.log(this.kqweek);
            console.log(d);
            const dayofultra = ultrasonic[i].createdAt.getDate();
            const monthofultra = ultrasonic[i].createdAt.getMonth();
            const yearofultra = ultrasonic[i].createdAt.getFullYear();

            //7-day + sonagofhang Ultra(31) - dayofultra < 7
            console.log("thang current:" + month);
            console.log("thang ultra:" + monthofultra);

            if (month == monthofultra) {
              if (year == yearofultra) {
                // console.log(dayofultra);
                // ultrasonic2 += ultrasonic[i];
                ultrasonic2.push(ultrasonic[i]);
              }
            }
          }
          res.json(ultrasonic2);

          // console.log(ultrasonic[0].createdAt);
          // const str = ultrasonic[0].createdAt;
          // console.log(str.getDate());

          // var d = new Date();
          // console.log(d.getDate());
        } else {
          res.status(400).json({ error: "ERROR" });
        }
      })
      .sort({ createdAt: -1 });

    // }).limit(100).sort({createdAt: -1})

    // var options = {
    //   id: '124',
    //   name: "Chaau",
    //   username: "sabo",

    // }
    // res.json(options);
  }

  showyear(req, res, next) {
    //[GET]

    var d = new Date();
    const day = d.getDate();
    const month = d.getMonth();
    const year = d.getFullYear();
    // console.log("Day: "+d.getDate());
    // console.log("Month: "+d.getMonth());

    // const day= d.getDate()-7;
    // console.log("day:"+day);
    ultrasonic
      .find({}, function (err, ultrasonic) {
        if (!err) {
          // res.json(ultrasonic);
          var ultrasonic2 = [];
          for (var i = 0; i < ultrasonic.length; i++) {
            // for(var i = 0; i < 7; i++){
            //   console.log(ultrasonic[i].createdAt);
            //   const str = ultrasonic[i].createdAt;
            //   console.log(str.getDate());
            // }

            // const kq = ssweek(ultrasonic[i].createdAt, d);
            // console.log(this.kqweek);
            // console.log(d);
            const dayofultra = ultrasonic[i].createdAt.getDate();
            const monthofultra = ultrasonic[i].createdAt.getMonth();
            const yearofultra = ultrasonic[i].createdAt.getFullYear();

            //7-day + sonagofhang Ultra(31) - dayofultra < 7
            // console.log("thang current:"+month);
            // console.log("thang ultra:"+monthofultra);

            if (year == yearofultra) {
              ultrasonic2.push(ultrasonic[i]);
            }
          }
          res.json(ultrasonic2);

          // console.log(ultrasonic[0].createdAt);
          // const str = ultrasonic[0].createdAt;
          // console.log(str.getDate());

          // var d = new Date();
          // console.log(d.getDate());
        } else {
          res.status(400).json({ error: "ERROR" });
        }
      })
      .sort({ createdAt: -1 });

    // }).limit(100).sort({createdAt: -1})

    // var options = {
    //   id: '124',
    //   name: "Chaau",
    //   username: "sabo",

    // }
    // res.json(options);
  }

  kq(req, res) {
    if (!req.user)
      return res
        .status(401)
        .json({ success: false, message: "Invalid user to access it." });
    res.send("Welcome to the Node.js Tutorial! - " + req.user.name);
  }
  auth(req, res, next) {
    // const user = req.body.username;
    // const pwd = req.body.password;
    const user = "cluemediator";
    const pwd = "123456";

    console.log("user" + user);
    // return 400 status if username/password is not exist
    if (!user || !pwd) {
      return res.status(400).json({
        error: true,
        message: "Username or Password required.",
      });
    }

    // return 401 status if the credential is not match.
    if (user !== userData.username || pwd !== userData.password) {
      return res.status(401).json({
        error: true,
        message: "Username or Password is Wrong.",
      });
    }

    // generate token
    const token = utils.generateToken(userData);
    // get basic user details
    const userObj = utils.getCleanUser(userData);
    // return the token along with user details
    return res.json({ user: userObj, token });
  }

  verifyToken(req, res, next) {
    var token = req.body.token || req.query.token;
    if (!token) {
      return res.status(400).json({
        error: true,
        message: "Token is required.",
      });
    }
    // check token that was passed by decoding token using secret
    jwt.verify(token, process.env.JWT_SECRET, function (err, user) {
      if (err)
        return res.status(401).json({
          error: true,
          message: "Invalid token.",
        });

      // return 401 status if the userId does not match.
      if (user.userId !== userData.userId) {
        return res.status(401).json({
          error: true,
          message: "Invalid user.",
        });
      }
      // get basic user details
      var userObj = utils.getCleanUser(userData);
      return res.json({ user: userObj, token });
    });
  }

  
  sendmail(req, res, next){
   
    ultrasonic.find({}, function (err, ultrasonic) {
      if(!err) {
      
        

        var d = new Date();
        const day = d.getDate();
        const month = d.getMonth();
        const year = d.getFullYear();


        var length = ultrasonic.length;
        lastvalue.push(ultrasonic[length-1]);
        res.json(lastvalue[0].createdAt)
        console.log(lastvalue[0].createdAt.getHours());
        console.log(d.getHours());

        var day_ultra =lastvalue[0].createdAt;

        var transporter = nodemailer.createTransport({
          // config mail server
          host: "smtp.gmail.com",
          port: 465,
          secure: true,
          auth: {
            user: "henrytranls2k@gmail.com",
            pass: "Henry1234",
          },
          tls: {
            // do not fail on invalid certs
            rejectUnauthorized: false,
          },
        });
        var content = "";
        content += `
        <div style="padding: 10px; background-color: #003375">
            <div style="padding: 10px; background-color: white;">
                <h4 style="color: #0085ff">Gửi mail với nodemailer và express</h4>
                <span style="color: black">Đây là mail test</span>
            </div>
        </div>
    `;
        // var 
        var mainOptions = {
          // thiết lập đối tượng, nội dung gửi mail
          from: "henrytranls2k@gmail.com",
          to: "dangducchau2000@gmail.com",
          subject: "Test Nodemailer",
          text: "Warning", //Thường thi mình không dùng cái này thay vào đó mình sử dụng html để dễ edit hơn
          html: "Cảnh báo: Giá trị đã vượt mức an toàn vào lúc"+day_ultra, //Nội dung html mình đã tạo trên kia :))
        };
        // console.log(lastvalue[0].value);
        

        if(day_ultra.getHours() == d.getHours() && day_ultra.getDate() == d.getDate()&&day_ultra.getMonth() == d.getMonth() &&day_ultra.getFullYear() == d.getFullYear()){
          console.log("11111111");
          if(lastvalue[0].value >= 100){
            console.log("2222");
            transporter.sendMail(mainOptions, function (err, info) {
              if (err) {
                console.log(err);
                req.flash("mess", "Lỗi gửi mail: " + err); //Gửi thông báo đến người dùng
                res.redirect("/");
              } else {
                console.log("Message sent: " + info.response);
                req.flash("mess", "Một email đã được gửi đến tài khoản của bạn"); //Gửi thông báo đến người dùng
                res.redirect("/");
              }
            });
          }else{
            console.log("3333")
          }
          
        }
        else{
          console.log("0000");
        }
      } else{
          
      res.status(400).json({error: "ERROR"});
     
      }
      
    })
   
  }

  test(req, res, next) {
    const options = {
      sensor_id: "4",
      value: 50,
    };
    // const ultra = new ultrasonic(options);

    // ultra.save(function (err) {
    //   console.log(err);
    // });
    res.json(options);

    var transporter = nodemailer.createTransport({
      // config mail server
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "henrytranls2k@gmail.com",
        pass: "Henry1234",
      },
      tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false,
      },
    });
    var content = "";
    content += `
    <div style="padding: 10px; background-color: #003375">
        <div style="padding: 10px; background-color: white;">
            <h4 style="color: #0085ff">Gửi mail với nodemailer và express</h4>
            <span style="color: black">Đây là mail test</span>
        </div>
    </div>
`;
    var mainOptions = {
      // thiết lập đối tượng, nội dung gửi mail
      from: "henrytranls2k@gmail.com",
      to: "dangducchau2000@gmail.com",
      subject: "Test Nodemailer",
      text: "Your text is here", //Thường thi mình không dùng cái này thay vào đó mình sử dụng html để dễ edit hơn
      html: content, //Nội dung html mình đã tạo trên kia :))
    };
    transporter.sendMail(mainOptions, function (err, info) {
      if (err) {
        console.log(err);
        req.flash("mess", "Lỗi gửi mail: " + err); //Gửi thông báo đến người dùng
        res.redirect("/");
      } else {
        console.log("Message sent: " + info.response);
        req.flash("mess", "Một email đã được gửi đến tài khoản của bạn"); //Gửi thông báo đến người dùng
        res.redirect("/");
      }
    });
  }
  
  // [GET] /news/:slug  // slug là 1 biến động
}
module.exports = new ApiController();

// const ApiController = require('./ApiController');
