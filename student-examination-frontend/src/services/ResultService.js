import axios from "axios";

const API_URL = "http://localhost:8080/result";

const getAuthConfig = () => ({
    headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
    }
});

const ResultService = {

    getResults() {
        return axios.get(API_URL, getAuthConfig());
    },

    getResultById(id) {
        return axios.get(`${API_URL}/${id}`, getAuthConfig());
    },

    addResult(result) {
        return axios.post(API_URL, result, getAuthConfig());
    },

    updateResult(id, result) {
        return axios.put(`${API_URL}/${id}`, result, getAuthConfig());
    },

    deleteResult(id) {
        return axios.delete(`${API_URL}/${id}`, getAuthConfig());
    },

    getResultByStudentId(studentId) {
        return axios.get(`${API_URL}/student/${studentId}`, getAuthConfig());
    }

};

export default ResultService;