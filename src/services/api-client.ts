import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '2db7630e58df4dbb97d1b7334eafad20'
    }
})