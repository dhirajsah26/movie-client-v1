import axios from 'axios';

export default axios.create({
    baseURL:'https://317b-142-113-201-173.ngrok-free.app',
    headers: {"ngrok-skip-browser-warning": "true"}
});