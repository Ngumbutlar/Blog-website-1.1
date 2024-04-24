import axios from "axios"


const BASE_URL='http://localhost:8000'
const getPost = axios.get(BASE_URL + '/posts')

export default {
    getPost
}