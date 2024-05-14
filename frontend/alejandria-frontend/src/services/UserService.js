import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api/users";

export const login = (data) => {
    return axios.post(REST_API_BASE_URL + "/login", data)
}