import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import ExamService from "../services/ExamService";

function ExamList() {

    const [exams, setExams] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        loadExams();
    }, []);

    const loadExams = async () => {
        try {
            const response = await ExamService.getExams();
            setExams(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const deleteExam = async (id) => {

        if (window.confirm("Delete this exam?")) {

            try {

                await ExamService.deleteExam(id);

                loadExams();

            } catch (error) {

                console.error(error);

                alert("Unable to delete exam.");

            }

        }

    };

    return (
        <>
            <Navbar />

            <div className="container mt-5">

                <div className="d-flex justify-content-between align-items-center mb-4">

                    <h2>Exam List</h2>

                    <button
                        className="btn btn-success"
                        onClick={() => navigate("/add-exam")}
                    >
                        Add Exam
                    </button>

                </div>

                <table className="table table-bordered table-striped table-hover">

                    <thead className="table-primary">

                        <tr>

                            <th>ID</th>
                            <th>Exam Name</th>
                            <th>Subject</th>
                            <th>Exam Date</th>
                            <th>Actions</th>

                        </tr>

                    </thead>

                    <tbody>

                        {
                            exams.length === 0 ?

                                (
                                    <tr>

                                        <td colSpan="5" className="text-center">

                                            No Exams Found

                                        </td>

                                    </tr>
                                )

                                :

                                exams.map((exam) => (

                                    <tr key={exam.examId}>

                                        <td>{exam.examId}</td>

                                        <td>{exam.examName}</td>

                                        <td>{exam.subject}</td>

                                        <td>{exam.examDate}</td>

                                        <td>

                                            <button
                                                className="btn btn-warning btn-sm me-2"
                                                onClick={() =>
                                                    navigate(`/update-exam/${exam.examId}`)
                                                }
                                            >
                                                Edit
                                            </button>

                                            <button
                                                className="btn btn-danger btn-sm"
                                                onClick={() =>
                                                    deleteExam(exam.examId)
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

export default ExamList;