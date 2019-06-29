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

const readFile = (file) => {
  return api.get(file)
}

export default { getIndex, readFile }
