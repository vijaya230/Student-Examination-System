import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import StudentService from "../services/StudentService";

function UpdateStudent() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [student, setStudent] = useState({
        studentName: "",
        email: "",
        phone: "",
        department: "",
        year: ""
    });

    useEffect(() => {
        loadStudent();
    }, []);

    const loadStudent = async () => {
        try {
            const response = await StudentService.getStudentById(id);
            setStudent(response.data);
        } catch (error) {
            console.error(error);
            alert("Failed to load student details");
        }
    };

    const handleChange = (e) => {
        setStudent({
            ...student,
            [e.target.name]: e.target.value
        });
    };

    const updateStudent = async (e) => {
        e.preventDefault();

        try {
            await StudentService.updateStudent(id, student);
            alert("Student Updated Successfully");
            navigate("/students");
        } catch (error) {
            console.error(error);
            alert("Failed to Update Student");
        }
    };

    return (
        <>
            <Navbar />

            <div
                className="container"
                style={{
                    maxWidth: "650px",
                    marginTop: "100px",
                    marginBottom: "40px"
                }}
            >
                <div className="card shadow-lg border-0 rounded-4">

                    <div className="card-header bg-primary text-white text-center rounded-top-4">
                        <h2 className="mb-0">Update Student</h2>
                    </div>

                    <div className="card-body p-4">

                        <form onSubmit={updateStudent}>

                            <div className="mb-3">
                                <label className="form-label fw-bold">
                                    Student Name
                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                    name="studentName"
                                    value={student.studentName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label fw-bold">
                                    Email
                                </label>

                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    value={student.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label fw-bold">
                                    Phone
                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                    name="phone"
                                    value={student.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label fw-bold">
                                    Department
                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                    name="department"
                                    value={student.department}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label className="form-label fw-bold">
                                    Year
                                </label>

                                <input
                                    type="number"
                                    className="form-control"
                                    name="year"
                                    min="1"
                                    max="4"
                                    value={student.year}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="d-flex justify-content-end gap-2">

                                <button
                                    type="submit"
                                    className="btn btn-success"
                                >
                                    Update Student
                                </button>

                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    onClick={() => navigate("/students")}
                                >
                                    Cancel
                                </button>

                            </div>

                        </form>

                    </div>

                </div>
            </div>
        </>
    );
}

export default UpdateStudent;