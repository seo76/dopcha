import{
    LOGIN_AGENCY, REGISTER_AGENCY, AUTH_AGENCY
} from '../_actions/types'

export default function (state={}, action){
    switch(action.type){
        case LOGIN_AGENCY:
            return{...state, loginSuccess: action.payload}
            break;
        case REGISTER_AGENCY:
            return{...state, register: action.payload}
            break;
        case AUTH_AGENCY:
            return{...state, agencydata: action.payload}//**state, 뒤의 문자들은 여기서 변수 생성
            break;
        default:
            return state;
    }
}