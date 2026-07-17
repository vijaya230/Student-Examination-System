import axios from "axios";

const API_URL = "http://localhost:8080/student";

const getAuthConfig = () => ({
    headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
    }
});

const StudentService = {

    getStudents() {
        return axios.get(API_URL, getAuthConfig());
    },

    getStudentById(id) {
        return axios.get(`${API_URL}/${id}`, getAuthConfig());
    },

    // ADD THIS METHOD
    getStudentByUsername(username) {
        return axios.get(
            `${API_URL}/username/${username}`,
            getAuthConfig()
        );
    },

    addStudent(student) {
        return axios.post(API_URL, student, getAuthConfig());
    },

    updateStudent(id, student) {
        return axios.put(`${API_URL}/${id}`, student, getAuthConfig());
    },

    deleteStudent(id) {
        return axios.delete(`${API_URL}/${id}`, getAuthConfig());
    }

};

export default StudentService;