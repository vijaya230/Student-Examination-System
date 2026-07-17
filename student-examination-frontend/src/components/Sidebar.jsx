import { Link, useNavigate } from "react-router-dom";
import "../css/dashboard.css";

function Sidebar() {

    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
        navigate("/");
    };

    return (
        <div className="sidebar">

            <h3>Admin</h3>

            <Link to="/dashboard">Dashboard</Link>

            <Link to="/students">Students</Link>

            <Link to="/exams">Exams</Link>

            <Link to="/results">Results</Link>

            <button onClick={logout}>Logout</button>

        </div>
    );
}

export default Sidebar;