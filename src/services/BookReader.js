import axios from 'axios'

const api = axios.create({
  baseURL: '/json',
  withCredentials: false,
  headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
  }
})

const getIndex = () => {
  return api.get('index.json')
}

export default { getIndex }
