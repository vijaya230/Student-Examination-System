import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function StudentDashboard() {

    const navigate = useNavigate();

    return (
        <>
            <Navbar />

            <div className="container mt-5">

                <div className="card shadow p-5">

                    <h2 className="text-primary mb-3">
                        Student Dashboard
                    </h2>

                    <hr />

                    <h4>Welcome Student 🎓</h4>

                    <p className="text-muted">
                        You have successfully logged in.
                    </p>

                    <div className="row mt-4">

                        {/* Profile */}

                        <div className="col-md-4 mb-3">

                            <div
                                className="card shadow text-center p-4 h-100"
                                style={{
                                    cursor: "pointer",
                                    transition: "0.3s"
                                }}
                                onClick={() => navigate("/student-profile")}
                            >
                                <h3>👤</h3>

                                <h5 className="mt-2">
                                    My Profile
                                </h5>

                                <p className="text-muted">
                                    View your profile
                                </p>

                            </div>

                        </div>

                        {/* Exams */}

                        <div className="col-md-4 mb-3">

                            <div
                                className="card shadow text-center p-4 h-100"
                                style={{
                                    cursor: "pointer",
                                    transition: "0.3s"
                                }}
                                onClick={() => navigate("/student-exams")}
                            >
                                <h3>📝</h3>

                                <h5 className="mt-2">
                                    My Exams
                                </h5>

                                <p className="text-muted">
                                    View all exams
                                </p>

                            </div>

                        </div>

                        {/* Results */}

                        <div className="col-md-4 mb-3">

                            <div
                                className="card shadow text-center p-4 h-100"
                                style={{
                                    cursor: "pointer",
                                    transition: "0.3s"
                                }}
                                onClick={() => navigate("/student-results")}
                            >
                                <h3>📊</h3>

                                <h5 className="mt-2">
                                    My Results
                                </h5>

                                <p className="text-muted">
                                    View your results
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </>
    );
}

export default StudentDashboard;