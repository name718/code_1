import axios from 'axios'

const service = axios.create({
    baseURL:"",
    timeout:1000
})
export default service