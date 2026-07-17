import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ExamService from "../services/ExamService";

function StudentExamList() {

    const [exams, setExams] = useState([]);

    useEffect(() => {
        ExamService.getExams()
            .then((response) => {
                setExams(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <>
            <Navbar />

            <div className="container mt-5">

                <h2 className="text-primary mb-4">
                    My Exams
                </h2>

                <table className="table table-bordered table-striped">

                    <thead className="table-dark">
                        <tr>
                            <th>ID</th>
                            <th>Exam Name</th>
                            <th>Subject</th>
                            <th>Date</th>
                        </tr>
                    </thead>

                    <tbody>

                        {exams.map(exam => (

                            <tr key={exam.examId}>
                                <td>{exam.examId}</td>
                                <td>{exam.examName}</td>
                                <td>{exam.subject}</td>
                                <td>{exam.examDate}</td>
                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>
        </>
    );
}

export default StudentExamList;