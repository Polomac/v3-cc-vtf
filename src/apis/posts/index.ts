import axios from 'axios'

export default {
  async getPosts() {
    return await axios.get('https://jsonplaceholder.typicode.com/posts');
  }
}