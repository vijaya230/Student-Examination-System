import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/AuthService";

function Login() {

    const navigate = useNavigate();

    const [loginData, setLoginData] = useState({
        username: "",
        password: ""
    });

    const handleChange = (e) => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value
        });
    };

    const login = (e) => {

        e.preventDefault();

        AuthService.login(loginData)

            .then((response) => {

                console.log(response.data);

                localStorage.setItem("token", response.data.token);
                localStorage.setItem("role", response.data.role);
                localStorage.setItem("username", loginData.username);

                if (response.data.role === "ADMIN") {

                    navigate("/admin");

                }
                else if (response.data.role === "STUDENT") {

                    navigate("/student-dashboard");

                }
                else {

                    alert("Unknown User Role");

                }

            })

            .catch((error) => {

                console.error(error);

                if (error.response) {
                    alert(error.response.data);
                } else {
                    alert("Unable to connect to server");
                }

            });

    };

    return (

        <div className="container mt-5" style={{ maxWidth: "450px" }}>

            <div className="card shadow p-4">

                <h2 className="text-center mb-4">
                    Student Examination System
                </h2>

                <form onSubmit={login}>

                    <div className="mb-3">

                        <label className="form-label">
                            Username
                        </label>

                        <input
                            type="text"
                            className="form-control"
                            name="username"
                            value={loginData.username}
                            onChange={handleChange}
                            required
                        />

                    </div>

                    <div className="mb-3">

                        <label className="form-label">
                            Password
                        </label>

                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            value={loginData.password}
                            onChange={handleChange}
                            required
                        />

                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary w-100">

                        Login

                    </button>

                </form>

            </div>

        </div>

    );

}

export default Login;