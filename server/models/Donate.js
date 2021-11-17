const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')

const donateSchema = mongoose.Schema({
    
    // 기부 제목
    title: {                
        type: String,
        maxLength: 50,
        required: true
    },

    // 기부 단체명
    company_name: {
        type: String,
        maxLength: 50,
        required: true
    },

    // 기부 상세 내용
    content: {
        type: String,
        maxLength: 500,
        required: true
    },

    // 기부 사용계획서
    usage_plan:{
        type: String,
        maxLength: 500,
        required: true
    },

    // 목표금액
    target_fundraising: {
        type: Number,
        required: true
    },

    // 기부 회사 Web사이트
    webAddress: {
        type:String,
        trim: true,
        //required: true
    },

    // 모금 시작 날짜
    Date: {
        type:[],
        maxLength: 100,
        //required: true
    },
    file: {
        type:[],
        default: []
        //required: true
    }
})

const Donate = mongoose.model('Donate', donateSchema)

module.exports = { Donate }