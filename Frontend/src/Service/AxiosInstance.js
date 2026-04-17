import axios from 'axios';
let token = localStorage.getItem("token");
const AxiosInstance = axios.create({
    baseURL: 'http://localhost:9000',
    headers: {
        'Authorization': `Bearer ${token}`
    },
    withCredentials: true
})
export default AxiosInstance;