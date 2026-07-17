import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";

import StudentService from "../services/StudentService";
import ExamService from "../services/ExamService";
import ResultService from "../services/ResultService";

function AdminDashboard() {

    const navigate = useNavigate();

    const [studentCount, setStudentCount] = useState(0);
    const [examCount, setExamCount] = useState(0);
    const [resultCount, setResultCount] = useState(0);

    useEffect(() => {
        loadDashboard();
    }, []);

    const loadDashboard = async () => {

        try {

            const students = await StudentService.getStudents();
            setStudentCount(students.data.length);

            const exams = await ExamService.getExams();
            setExamCount(exams.data.length);

            const results = await ResultService.getResults();
            setResultCount(results.data.length);

        } catch (error) {

            console.error(error);

        }

    };

    return (

        <>
            <Navbar />

            <div className="container mt-5">

                <h2 className="text-center mb-5">

                    Admin Dashboard

                </h2>

                <div className="row">

                    <div className="col-md-4">

                        <div className="card shadow text-center">

                            <div className="card-body">

                                <h3>Students</h3>

                                <h1>{studentCount}</h1>

                                <button
                                    className="btn btn-primary mt-3"
                                    onClick={() => navigate("/students")}
                                >
                                    Manage Students
                                </button>

                            </div>

                        </div>

                    </div>

                    <div className="col-md-4">

                        <div className="card shadow text-center">

                            <div className="card-body">

                                <h3>Exams</h3>

                                <h1>{examCount}</h1>

                                <button
                                    className="btn btn-success mt-3"
                                    onClick={() => navigate("/exams")}
                                >
                                    Manage Exams
                                </button>

                            </div>

                        </div>

                    </div>

                    <div className="col-md-4">

                        <div className="card shadow text-center">

                            <div className="card-body">

                                <h3>Results</h3>

                                <h1>{resultCount}</h1>

                                <button
                                    className="btn btn-warning mt-3"
                                    onClick={() => navigate("/results")}
                                >
                                    Manage Results
                                </button>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </>
    );
}

export default AdminDashboard;