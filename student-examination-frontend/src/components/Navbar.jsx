import { Link, useNavigate } from "react-router-dom";
import "../css/navbar.css";

function Navbar() {

    const navigate = useNavigate();

    const logout = () => {

        localStorage.removeItem("token");
        localStorage.removeItem("role");

        navigate("/");

    };

    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">

            <div className="container-fluid">

                <Link
                    className="navbar-brand fw-bold"
                    to="/admin"
                >
                    Student Examination System
                </Link>

                <div className="d-flex align-items-center">

                    <Link
                        className="btn btn-outline-light me-2"
                        to="/admin"
                    >
                        Dashboard
                    </Link>

                    <Link
                        className="btn btn-outline-light me-2"
                        to="/students"
                    >
                        Students
                    </Link>

                    <Link
                        className="btn btn-outline-light me-2"
                        to="/exams"
                    >
                        Exams
                    </Link>

                    <Link
                        className="btn btn-outline-light me-3"
                        to="/results"
                    >
                        Results
                    </Link>

                    <button
                        className="btn btn-danger"
                        onClick={logout}
                    >
                        Logout
                    </button>

                </div>

            </div>

        </nav>

    );

}

export default Navbar;