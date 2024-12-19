import axios from 'axios';

export default axios.create({
    baseURL:'https://764b-74-14-1-107.ngrok-free.app',
    headers: {"ngrok-skip-browser-warning": "true"}
});