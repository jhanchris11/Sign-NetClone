import axios from 'axios'

const userAxios = axios.create({
    // baseURL: 'https://netflix-application.herokuapp.com'
    baseURL: 'http://localhost:5000'
})

export default userAxios