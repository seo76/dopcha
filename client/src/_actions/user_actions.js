import { restApi } from "../apis"
import { AUTH_USER, LOGIN_USER, REGISTER_USER } from './types'

export function loginUser(dataToSubmit) {
    const request = restApi.post('/api/login/user', dataToSubmit)
    .then(response => response.data)

    return {
        type: LOGIN_USER,
        payload: request
    }
}

export function registerUser(dataToSubmit) {
    const request = restApi.post('/api/user/registration', dataToSubmit)
    .then(response => response.data)

    return {
        type: REGISTER_USER,
        payload: request
    }
}

export function auth() {
    const request = restApi.get('/api/user/auth')
    .then(response => response.data)

    return {
        type: AUTH_USER,
        payload: request
    }
}