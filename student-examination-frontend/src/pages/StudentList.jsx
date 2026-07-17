import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import StudentService from "../services/StudentService";
import "../css/student.css";

function StudentList() {

    const [students, setStudents] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        loadStudents();
    }, []);

    const loadStudents = async () => {

        try {

            const response = await StudentService.getStudents();

            setStudents(response.data);

        } catch (error) {

            console.log(error);

        }

    };

    const deleteStudent = async (id) => {

        if (window.confirm("Are you sure you want to delete this student?")) {

            try {

                await StudentService.deleteStudent(id);

                loadStudents();

            } catch (error) {

                console.log(error);

            }

        }

    };

    return (

        <>
            <Navbar />

            <div className="container">

                <div className="title-section">

                    <h2>Student List</h2>

                    <button
                        className="add-btn"
                        onClick={() => navigate("/add-student")}
                    >
                        Add Student
                    </button>

                </div>

                <table>

                    <thead>

                        <tr>

                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Department</th>
                            <th>Year</th>
                            <th>Actions</th>

                        </tr>

                    </thead>

                    <tbody>

                        {
                            students.map((student) => (

                                <tr key={student.studentId}>

                                    <td>{student.studentId}</td>

                                    <td>{student.studentName}</td>

                                    <td>{student.email}</td>

                                    <td>{student.phone}</td>

                                    <td>{student.department}</td>

                                    <td>{student.year}</td>

                                    <td>

                                        <button
                                            className="edit-btn"
                                            onClick={() =>
                                                navigate(`/update-student/${student.studentId}`)
                                            }
                                        >
                                            Edit
                                        </button>

                                        <button
                                            className="delete-btn"
                                            onClick={() =>
                                                deleteStudent(student.studentId)
                                            }
                                        >
                                            Delete
                                        </button>

                                    </td>

                                </tr>

                            ))
                        }

                    </tbody>

                </table>

            </div>

        </>

    );

}

export default StudentList;