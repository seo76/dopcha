import axios from 'axios'

export cont getAPIHost = () => {
  // TODO: get from env
  return 'http://localhost:5000';
}

export const restApi = axios.create({
  baseURL: getAPIHost(),
})