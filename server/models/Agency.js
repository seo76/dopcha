const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10
const jwt = require('jsonwebtoken');
//const { default: AgencyForm } = require('../../client/src/registration/AgencyForm');
//const myPlaintextPassword = 's0/\/\P4$$w0rD';
//const someOtherPlaintextPassword = 'not_bacon';

const agencySchema = mongoose.Schema({
    id:{
        type: String,
        maxlength: 50,
        unique: true,
        required: true
    },
    password:{
        type: String,
        minlenth: 5,
        required: true
    },
    agencyName:{
        type: String,
        maxlength: 50,
        required: true
    },
    ceoName:{
        type: String,
        maxlength: 50,
        required: true
    },
    phone:{
        type: String,
        trim: true,
        required: true
    },
    fax:{
        type: String,
        trim: true,
        required: true
    },
    email:{
        type: String,
        trim: true,
        unique: 1,
        required: true
    },
    file:{
        type: String,
        trim: true,
        required: true
    },
    role:{
        type: Number,
        default: 0
    },
    image: {
        type: String
    },
    token: {
        type: String
    },
    tokenExp:{
        type: Number
    }
})

// agencySchema.pre('save',function(next){
//     var agency = this; 
//     // 비밀번호 암호화
//     if(agency.isModified('password')){
//         bcrypt.genSalt(saltRounds, function(err,salt){
//             if (err) return next(err)
//             bcrypt.hash (agency.password, salt, function(err,hash){
//                 if (err) return next(err)
//                 agency.password = hash
//                 next()
//             })
//         })    
//     } else{
//         next()
//     }
// })
// //로그인 시 비밀번호 암호화 후 디비에 저장된 비밀번호와 비교        
// agencySchema.methods.comparePassword = function(plainPassword, cb){
//     //plainPassword 1234567 암호화된 비밀번호
//     bcrypt.compare(plainPassword, this.password, function(err, isMatch){
//         if(err) return cb(err);
//             cb(null, isMatch)
//     })
// }
// //로그인 시 토큰 생성
// agencySchema.methods.generateToken = function(cb){
//     var agency = this;
//     var token = jwt.sign(agency._id.toHexString(), 'secretToken')
//     //user._id + 'secretToken' = token
//     //->
//     //'secretToken' -> user._id
//     agency.token = token
//     agency.save(function(err,user){
//         if(err) return cb(err)
//         cb(null, user)
//     })
// }

// agencySchema.statics.findByToken = function(token, cb){
//     var agency = this;
//     var agency = this;

//     //토큰 디코딩
//     jwt.verify(token, 'secretToken', function(err, decoded){
//         //유저 아이디를 이용해 유저를 찾은 후
//         //클라이언트의 토큰과 db의 토큰이 일치하는지 확인

//         agency.findOne({"_id":decoded,"token":token}, function(err,user){

//             if (err) return cb(err);
//             cb(null, user)
            
//         })
            
//     })


// }

const Agency = mongoose.model('Agency', agencySchema)

module.exports = {Agency}