import axios from "axios"


const BASE_URL='http://localhost:8000'
const getPost = axios.get(BASE_URL + '/posts');
const getPostById= (id) => axios.get(BASE_URL + '/posts/' + id)

export default {
    getPost,
    getPostById
}