import axios from "axios";
import {
    CREAT_DONATE
} from '../_actions/types'

export function createdonate(dataTosubmit){
    const request = axios.post('/api/donate/Agency_Registering', dataTosubmit)
      .then(response => response.data )

      return{
        type: CREAT_DONATE,
        payload: request
      }
}