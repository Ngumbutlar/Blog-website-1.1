import axios from "axios"


const BASE_URL='https://json-server-neon.vercel.app'
const getPost = axios.get(BASE_URL + '/

posts');
const getPostById= (id) => axios.get(BASE_URL + '/posts/' + id)

export default {
    getPost,
    getPostById
}