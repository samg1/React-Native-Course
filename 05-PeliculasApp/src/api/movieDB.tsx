import axios from "axios";

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '89b26ec1ef36a26e4b629c35cbb37ca0',
        language: 'es-ES'
    }
})

export default movieDB