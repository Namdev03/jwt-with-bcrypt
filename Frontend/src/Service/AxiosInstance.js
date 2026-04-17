import axios from 'axios';
const AxiosInstance = axios.create({
    baseURL: 'http://localhost:9000',
    headers: {
        'Authorization': `Bearer ${token}`
    },
    withCredentials: true
})
export default AxiosInstance;