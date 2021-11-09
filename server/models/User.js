const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10
const jwt = require('jsonwebtoken');
//const myPlaintextPassword = 's0/\/\P4$$w0rD';
//const someOtherPlaintextPassword = 'not_bacon';

const userSchema = mongoose.Schema({
    id:{
        type: String,
        maxlength: 50,
        unique: 1,
        required: true
    },
    password:{
        type: String,
        minlenth: 5,
        required: true
    },
    name:{
        type: String,
        maxlength: 50,
        required: true
    },

    email:{
        type: String,
        trim: true,
        unique: 1,
        required: true
    },
    phoneNumber:{
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

userSchema.pre('save',function(next){
    var user = this;
    // 비밀번호 암호화

    if(user.isModified('password')){
        bcrypt.genSalt(saltRounds, function(err,salt){
        
            if (err) return next(err)
    
            bcrypt.hash (user.password, salt, function(err,hash){
                if (err) return next(err)
                user.password = hash
                next()
            })
        
        })    
    } else{
        next()
    }

})

userSchema.methods.comparePassword = function(plainPassword, cb){

    //plainPassword 1234567 암호화된 비밀번호
    bcrypt.compare(plainPassword, this.password, function(err, isMatch){
        if(err) return cb(err);
            cb(null, isMatch)
    })
}

userSchema.methods.generateToken = function(cb){

    var user = this;

    //웹토큰 생성

    var token = jwt.sign(user._id.toHexString(), 'secretToken')

    //user._id + 'secretToken' = token
    
    //->

    //'secretToken' -> user._id
    user.token = token
    user.save(function(err,user){
        if(err) return cb(err)
        cb(null, user)
    })

}

userSchema.statics.findByToken = function(token, cb){
    var user = this;

    //토큰 디코딩
    jwt.verify(token, 'secretToken', function(err, decoded){
        //유저 아이디를 이용해 유저를 찾은 후
        //클라이언트의 토큰과 db의 토큰이 일치하는지 확인

        user.findOne({"_id":decoded,"token":token}, function(err,user){

            if (err) return cb(err);
            cb(null, user)
            
        })
            
    })


}

const User = mongoose.model('User', userSchema)

module.exports = {User}