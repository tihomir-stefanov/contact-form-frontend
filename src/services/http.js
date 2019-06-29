import axios from 'axios';

const API_URL = 'http://lingoda.dev';

export default class http {
    static get(url) {
        return axios.post(API_URL + url)
    }

    static post(url, data) {
        return axios.post(API_URL + url, data)
    }
}
