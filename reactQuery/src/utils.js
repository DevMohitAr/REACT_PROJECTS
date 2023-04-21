import axios from "axios";

const customFetch = axios.create({
    baseURL:"http://localhost:3000/api/tasks"
})

export default customFetch