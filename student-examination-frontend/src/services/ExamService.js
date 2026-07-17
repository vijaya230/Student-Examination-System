import axios from "axios";

const API_URL = "http://localhost:8080/exam";

const getAuthConfig = () => ({
    headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
    }
});

const ExamService = {

    getExams() {
        return axios.get(API_URL, getAuthConfig());
    },

    getExamById(id) {
        return axios.get(`${API_URL}/${id}`, getAuthConfig());
    },

    addExam(exam) {
        return axios.post(API_URL, exam, getAuthConfig());
    },

    updateExam(id, exam) {
        return axios.put(`${API_URL}/${id}`, exam, getAuthConfig());
    },

    deleteExam(id) {
        return axios.delete(`${API_URL}/${id}`, getAuthConfig());
    },

    countExams() {
        return axios.get(API_URL, getAuthConfig());
    }

};

export default ExamService;