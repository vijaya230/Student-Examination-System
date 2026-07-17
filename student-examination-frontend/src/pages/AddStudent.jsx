import { useState } from "react";
import { useNavigate } from "react-router-dom";
import StudentService from "../services/StudentService";

function AddStudent() {

    const navigate = useNavigate();

    const [student, setStudent] = useState({
        studentName: "",
        email: "",
        phone: "",
        department: "",
        year: ""
    });

    const handleChange = (e) => {

        setStudent({
            ...student,
            [e.target.name]: e.target.value
        });

    };

    const saveStudent = (e) => {

        e.preventDefault();

        StudentService.addStudent(student)
            .then(() => {

                alert("Student Added Successfully");

                navigate("/students");

            })
            .catch((error) => {

                console.log(error);

                alert("Failed to Add Student");

            });

    };

    return (

        <div className="container mt-5">

            <h2>Add Student</h2>

            <form onSubmit={saveStudent}>

                <div className="mb-3">

                    <label>Student Name</label>

                    <input
                        type="text"
                        name="studentName"
                        className="form-control"
                        value={student.studentName}
                        onChange={handleChange}
                        required
                    />

                </div>

                <div className="mb-3">

                    <label>Email</label>

                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        value={student.email}
                        onChange={handleChange}
                        required
                    />

                </div>

                <div className="mb-3">

                    <label>Phone</label>

                    <input
                        type="text"
                        name="phone"
                        className="form-control"
                        value={student.phone}
                        onChange={handleChange}
                        required
                    />

                </div>

                <div className="mb-3">

                    <label>Department</label>

                    <input
                        type="text"
                        name="department"
                        className="form-control"
                        value={student.department}
                        onChange={handleChange}
                        required
                    />

                </div>

                <div className="mb-3">

                    <label>Year</label>

                    <input
                        type="number"
                        name="year"
                        className="form-control"
                        value={student.year}
                        onChange={handleChange}
                        required
                    />

                </div>

                <button
                    type="submit"
                    className="btn btn-success"
                >
                    Save Student
                </button>

            </form>

        </div>

    );

}

export default AddStudent;