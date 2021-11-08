//서버
const express = require('express');
const router = express.Router();
const app = express()
const port = 5000

//디비 
//const config = require('./config/dev')
const config = require('./config/key'); 
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://ssy:1234@cluster0.1bw63.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
.then(() => console.log('MongoDB Connected...')) .catch((err)=> console.log('MongoDB error:',err))

app.get('/api/hello', (req, res) => {
  res.send('Hello World! 안녕하세요 하하하')})

//회원가입
const bodyParser = require('body-parser');
const {auth} = require('./middleware/auth');
const {User} = require("./models/User");
const {Agency} = require("./models/Agency");
//application/x-www-forn-urlencoded
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// router.get("/", (req,res)=>{
//       res.send("hi");
//     });
    app.post('/register_A',(req,res)=>{
  //회원가입시 필요한 정보들을 클라이언트에서 가져오면 db에 넣어줌
  const agency = new Agency(req.body)
  agency.save((err, agencyInfo)=>{
    if(err) return res.json({success: false, err})
    return res.status(200).json({success: true})
  })
})

//로그인
const cookieParser = require('cookie-parser');
const { request } = require('express');
app.use(cookieParser());
app.post('/login',(req, res)=>{
  //요청된 이메일이 데이터베이스에 있는지 
  Agency.findOne({email:req.body.email},(err,user)=>{
    if(!agency){
      return res.json({
        loginSuccess: false,
        message:"제공된 이메일에 해당하는 유저가 없습니다."
      })
    }
  //요청된 이메일이 데이터베이스에 있다면 비밀번호가 맞는지 확인
    agency.comparePassword(req.body.password,(err,isMatch)=>{
      if(!isMatch)
        return res.json({loginSuccess: false, message:"비밀번호가 틀렸습니다." })
      //비밀번호가 같다면 토큰 생성
      agency.generateToken((err,agency)=>{
        if(err) return res.status(400).send(err);
        // 토큰을 cookie 에 저장-
        res.cookie("x_auth", agency.token)
          .status(200)
          .json({loginSuccess: true, agencyrId: agency._id})

      })
    })
  })
})
//인증
const {auth} = require("./auth")

app.get('/api/age/auth', auth ,(req, res)=>{

  //여기까지 미들웨어 통과해왔다 = 인증이 참이라는 말.
  res.status(200).json({
    _id: req.agency._id,
    isAdmin: req.agency.role === 0? false:true,
    isAtuth: true,
    email: req.agency.email,
    name:req.agency.agencyName,
    ceoName: req.agency.ceoName,
    phone:req.agency.phoe,
    fax:req.agency.fax,
    file:req.agency.file,
    role: req.agency.role,
    image: req.agency.image
  })
})

app.get('/api/users/logout', auth, (req, res)=>{
  User.findOneAndUpdate({_id: req.user._id},
    {token:""}
    ,(err,user)=>{
      if(err) return res.json({success:false, err});
      return res.status(200).send({
        success: true
      })
    })


})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

module.exports = router;