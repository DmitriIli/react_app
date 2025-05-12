import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/posts/'

export default class PostSevice {

    static async getAll(limit = 10, page = 1) {
        const responce = await axios.get(url, {
            params: {
                _limit: limit,
                _page: page
            }
        });
        return responce;
    }

    static async getByID(id) {
        const responce = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        console.log(responce)
        return responce;
    }

    static async getCommentsByID(id) {
        const responce = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
        console.log(responce)
        return responce;
    }
}

