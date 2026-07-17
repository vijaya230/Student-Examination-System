import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import StudentService from "../services/StudentService";

function StudentProfile() {

    const [student, setStudent] = useState(null);

    useEffect(() => {

        const username = localStorage.getItem("username");

        StudentService.getStudentProfile(username)

            .then((response) => {

                setStudent(response.data);

            })

            .catch((error) => {

                console.error(error);

                alert("Failed to load profile");

            });

    }, []);

    return (

        <>

            <Navbar />

            <div className="container mt-5">

                <h2 className="text-primary mb-4">

                    My Profile

                </h2>

                <div className="card shadow p-4">

                    {

                        student ?

                        (

                            <table className="table table-bordered">

                                <tbody>

                                    <tr>
                                        <th>ID</th>
                                        <td>{student.studentId}</td>
                                    </tr>

                                    <tr>
                                        <th>Name</th>
                                        <td>{student.studentName}</td>
                                    </tr>

                                    <tr>
                                        <th>Username</th>
                                        <td>{student.username}</td>
                                    </tr>

                                    <tr>
                                        <th>Email</th>
                                        <td>{student.email}</td>
                                    </tr>

                                    <tr>
                                        <th>Phone</th>
                                        <td>{student.phone}</td>
                                    </tr>

                                    <tr>
                                        <th>Department</th>
                                        <td>{student.department}</td>
                                    </tr>

                                    <tr>
                                        <th>Year</th>
                                        <td>{student.year}</td>
                                    </tr>

                                </tbody>

                            </table>

                        )

                        :

                        (

                            <h4 className="text-center">

                                Loading...

                            </h4>

                        )

                    }

                </div>

            </div>

        </>

    );

}

export default StudentProfile;