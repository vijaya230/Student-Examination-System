import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import ResultService from "../services/ResultService";

function ResultList() {

    const [results, setResults] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        loadResults();
    }, []);

    const loadResults = async () => {

        try {

            const response = await ResultService.getResults();

            setResults(response.data);

        } catch (error) {

            console.error(error);

        }

    };

    const deleteResult = async (id) => {

        if (window.confirm("Delete this Result?")) {

            try {

                await ResultService.deleteResult(id);

                loadResults();

            } catch (error) {

                console.error(error);

            }

        }

    };

    return (
        <>
            <Navbar />

            <div className="container mt-5">

                <div className="d-flex justify-content-between align-items-center mb-4">

                    <h2>Result List</h2>

                    <button
                        className="btn btn-success"
                        onClick={() => navigate("/add-result")}
                    >
                        Add Result
                    </button>

                </div>

                <table className="table table-bordered table-striped">

                    <thead className="table-primary">

                        <tr>

                            <th>ID</th>
                            <th>Student</th>
                            <th>Exam</th>
                            <th>Marks</th>
                            <th>Grade</th>
                            <th>Actions</th>

                        </tr>

                    </thead>

                    <tbody>

                        {
                            results.map((result) => (

                                <tr key={result.resultId}>

                                    <td>{result.resultId}</td>

                                    <td>{result.student?.studentName}</td>

                                    <td>{result.exam?.examName}</td>

                                    <td>{result.marksObtained}</td>

                                    <td>{result.grade}</td>

                                    <td>

                                        <button
                                            className="btn btn-warning btn-sm me-2"
                                            onClick={() =>
                                                navigate(`/update-result/${result.resultId}`)
                                            }
                                        >
                                            Edit
                                        </button>

                                        <button
                                            className="btn btn-danger btn-sm"
                                            onClick={() =>
                                                deleteResult(result.resultId)
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

export default ResultList;