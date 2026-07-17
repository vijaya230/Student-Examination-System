import axios from "axios";

const BASE_URL = "http://localhost:8080/auth";

const login = (loginData) => {
    return axios.post(`${BASE_URL}/login`, loginData);
};

const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("username");
};

const getToken = () => {
    return localStorage.getItem("token");
};

const getRole = () => {
    return localStorage.getItem("role");
};

export default {
    login,
    logout,
    getToken,
    getRole
};