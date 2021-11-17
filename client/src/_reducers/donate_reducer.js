import{
    CREAT_DONATE
} from '../_actions/types'

export default function (state = {}, action){
    switch (action.type) {
        case CREAT_DONATE:
            return{...state, creatDoateSuccess: action.payload}
            break;
    
        default:
           return state;
    }
}