import axios from "axios"; 
import { restApi } from "../apis";
import {
    LOGIN_AGENCY, REGISTER_AGENCY, AUTH_AGENCY
} from './types'
//const {request}  = require('express');

export function loginAgency(dataToSubmit){
    const request = restApi.post('/api/login', dataToSubmit)
        .then(response => response.data)
    
    return {
        type: LOGIN_AGENCY,
        payload: request
    }
}

export function registerAgency(dataToSubmit){
    const request = restApi.post('/api/agency/registration',dataToSubmit)
        .then(response => response.data)
    return {
        type: REGISTER_AGENCY,
        payload: request
    }
}

export function auth(){
    const request = restApi.get('./api/agency/auth')
        .then(response => response.data)
    return {
        type: AUTH_AGENCY,
        payload: request
    }
}







