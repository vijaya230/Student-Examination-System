import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import StudentService from "../services/StudentService";
import ResultService from "../services/ResultService";

function StudentResultList() {

    const [results, setResults] = useState([]);

    useEffect(() => {

        const username = localStorage.getItem("username");

        StudentService.getStudentByUsername(username)

            .then((studentResponse) => {

                const studentId = studentResponse.data.studentId;

                ResultService.getResultByStudentId(studentId)

                    .then((resultResponse) => {

                        setResults(resultResponse.data);

                    });

            })

            .catch((error) => {

                console.error(error);

                alert("Unable to load results");

            });

    }, []);

    return (

        <>
            <Navbar />

            <div className="container mt-5">

                <h2 className="text-primary mb-4">
                    My Results
                </h2>

                <div className="card shadow p-4">

                    <table className="table table-bordered table-striped">

                        <thead className="table-dark">

                            <tr>

                                <th>Result ID</th>
                                <th>Exam</th>
                                <th>Marks</th>
                                <th>Grade</th>

                            </tr>

                        </thead>

                        <tbody>

                            {results.length > 0 ? (

                                results.map((result) => (

                                    <tr key={result.resultId}>

                                        <td>{result.resultId}</td>

                                        <td>
                                            {result.exam?.examName}
                                        </td>

                                        <td>
                                            {result.marks}
                                        </td>

                                        <td>
                                            {result.grade}
                                        </td>

                                    </tr>

                                ))

                            ) : (

                                <tr>

                                    <td colSpan="4" className="text-center">
                                        No Results Found
                                    </td>

                                </tr>

                            )}

                        </tbody>

                    </table>

                </div>

            </div>

        </>

    );

}

export default StudentResultList;