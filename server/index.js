//서버
const express = require('express');
//const {request} = require('express');
const router = express.Router();
const app = express();
const cors = require('cors');
const port = 5000

//디비 
//const config = require('./config/key'); 
const config = require('./config/dev')
const mongoose = require('mongoose')
mongoose.connect(config.mongoURI, {
  useNewUrlParser: true, useUnifiedTopology: true//, userCreateIndex: true, useFindAndModify: false
})
  .then(() => console.log('MongoDB Connected...')).catch((err) => console.log('MongoDB error:', err))

app.get('/api/hello', (req, res) => {
  res.send('Hello World! 안녕하세요 하하하')
})

//회원가입
const bodyParser = require('body-parser'); 
const { auth } = require('./middleware/auth'); 
const { User } = require("./models/User"); 
const { Agency } = require("./models/Agency"); 

//CORS
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

//application/x-www-forn-urlencoded
// router.get("/", (req,res)=>{
//       res.send("hi");
//     });
app.post('/api/agency/registration', (req, res) => {
  //회원가입시 필요한 정보들을 클라이언트에서 가져오면 db에 넣어
  const agency = new Agency(req.body)
  agency.save((err, agency) => {
    if (err) return res.json({ success: false, err })
    return res.status(200).json({ success: true })
  })
})
app.post('/api/user/registration', (req, res) => {
  //회원가입시 필요한 정보들을 클라이언트에서 가져오면 db에 넣어
  const user = new User(req.body)
  user.save((err, agency) => {
    if (err) return res.json({ success: false, err })
    return res.status(200).json({ success: true })
  })
})

//로그인
const cookieParser = require('cookie-parser');
app.use(cookieParser());
app.post('/api/login/agency', (req, res) => {
  console.log({req, res})
  //요청된 이메일이 데이터베이스에 있는지 
  Agency.findOne({ id: req.body.id }, (err, agency) => { 
    if (!agency) { 
      return res.json({
        loginSuccess: false,
        message: "제공된 아이디에 해당하는 유저가 없습니다."
      })
    }
    //요청된 아이디가 데이터베이스에 있다면 비밀번호가 맞는지 확인
    agency.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch)
        return res.json({ loginSuccess: false, message: "비밀번호가 틀렸습니다." })
      //비밀번호가 같다면 토큰 생성
      agency.generateToken((err, agency) => {
        if (err) return res.status(400).send(err);
        // 토큰을 cookie 에 저장-
        res.cookie("x_auth", agency.token)
          .status(200)
          .json({ loginSuccess: true, agencyrId: agency._id })
          agencyname: req.body.agencyName

      })
    })
  })
})

app.post('/api/login/user', (req, res) => {
  console.log({req, res})
  //요청된 이메일이 데이터베이스에 있는지 
  User.findOne({ id: req.body.id }, (err, user) => { 
    if (!user) { 
      return res.json({
        loginSuccess: false,
        message: "제공된 아이디에 해당하는 유저가 없습니다."
      })
    }
    //요청된 아이디가 데이터베이스에 있다면 비밀번호가 맞는지 확인
    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch)
        return res.json({ loginSuccess: false, message: "비밀번호가 틀렸습니다." })
      //비밀번호가 같다면 토큰 생성
      user.generateToken((err, user) => {
        if (err) return res.status(400).send(err);
        // 토큰을 cookie 에 저장-
        res.cookie("x_auth", user.token)
          .status(200)
          .json({ loginSuccess: true, userrId: user._id })
          agencyname: req.body.agencyName

      })
    })
  })
})
//인증

app.get('/api/agency/auth', auth, (req, res) => {

  //여기까지 미들웨어 통과해왔다 = 인증이 참이라는 말.
  res.status(200).json({
    _id: req.agency._id,
    isAdmin: req.agency.role === 0 ? false : true,
    isAtuth: true,
    id: req.agency.id,
    email: req.agency.email,
    agencyName: req.agency.agencyName,
    ceoName: req.agency.ceoName,
    phone: req.agency.phoe,
    fax: req.agency.fax,
    website: req.agency.website,
    wallet: req.agency.wallet,
    file: req.agency.file,
    role: req.agency.role,
    image: req.agency.image
  })
})

app.get('/api/user/auth', auth, (req, res) => {
  
  res.status(200).json({
    _id: req.user._id,
    isAdmin: req.user.role === 0 ? false : true,
    isAtuth: true,
    id: req.user.id,
    email: req.user.email,
    name: req.user.name,
    phone: req.user.phone,
    wallet: req.user.wallet,
    file: req.user.file,
    role: req.user.role,
    image: req.user.image
  })
})

app.get('/api/users/logout', auth, (req, res) => { 
  User.findOneAndUpdate({ _id: req.user._id }, 
    { token: "" } 
    , (err, user) => { 
      if (err) return res.json({ success: false, err }); 
      return res.status(200).send({ 
        success: true 
      }) 
    })  
}) 


// })
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

module.exports = router;