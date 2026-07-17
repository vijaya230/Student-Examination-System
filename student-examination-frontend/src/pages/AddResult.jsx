import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import ResultService from "../services/ResultService";
import StudentService from "../services/StudentService";
import ExamService from "../services/ExamService";

function AddResult() {

    const navigate = useNavigate();

    const [students, setStudents] = useState([]);
    const [exams, setExams] = useState([]);

    const [result, setResult] = useState({
        student: {},
        exam: {},
        marksObtained: "",
        grade: ""
    });

    useEffect(() => {
        loadStudents();
        loadExams();
    }, []);

    const loadStudents = async () => {
        try {
            const response = await StudentService.getStudents();
            setStudents(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const loadExams = async () => {
        try {
            const response = await ExamService.getExams();
            setExams(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleStudent = (e) => {

        const student = students.find(
            s => s.studentId === parseInt(e.target.value)
        );

        setResult({
            ...result,
            student
        });

    };

    const handleExam = (e) => {

        const exam = exams.find(
            ex => ex.examId === parseInt(e.target.value)
        );

        setResult({
            ...result,
            exam
        });

    };

    const handleChange = (e) => {

        setResult({
            ...result,
            [e.target.name]: e.target.value
        });

    };

    const saveResult = async (e) => {

        e.preventDefault();

        try {

            await ResultService.addResult(result);

            alert("Result Added Successfully");

            navigate("/results");

        } catch (error) {

            console.error(error);

            alert("Failed to Add Result");

        }

    };

    return (

        <>
            <Navbar />

            <div
                className="container mt-5"
                style={{ maxWidth: "650px" }}
            >

                <div className="card shadow">

                    <div className="card-header bg-success text-white">

                        <h3 className="text-center">
                            Add Result
                        </h3>

                    </div>

                    <div className="card-body">

                        <form onSubmit={saveResult}>

                            <div className="mb-3">

                                <label className="form-label">
                                    Student
                                </label>

                                <select
                                    className="form-select"
                                    onChange={handleStudent}
                                    required
                                >

                                    <option value="">
                                        Select Student
                                    </option>

                                    {
                                        students.map(student => (

                                            <option
                                                key={student.studentId}
                                                value={student.studentId}
                                            >
                                                {student.studentName}
                                            </option>

                                        ))
                                    }

                                </select>

                            </div>

                            <div className="mb-3">

                                <label className="form-label">
                                    Exam
                                </label>

                                <select
                                    className="form-select"
                                    onChange={handleExam}
                                    required
                                >

                                    <option value="">
                                        Select Exam
                                    </option>

                                    {
                                        exams.map(exam => (

                                            <option
                                                key={exam.examId}
                                                value={exam.examId}
                                            >
                                                {exam.examName}
                                            </option>

                                        ))
                                    }

                                </select>

                            </div>

                            <div className="mb-3">

                                <label className="form-label">
                                    Marks Obtained
                                </label>

                                <input
                                    type="number"
                                    className="form-control"
                                    name="marksObtained"
                                    min="0"
                                    max="100"
                                    value={result.marksObtained}
                                    onChange={handleChange}
                                    required
                                />

                            </div>

                            <div className="mb-3">

                                <label className="form-label">
                                    Grade
                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                    name="grade"
                                    value={result.grade}
                                    onChange={handleChange}
                                    required
                                />

                            </div>

                            <button
                                className="btn btn-success"
                                type="submit"
                            >
                                Save Result
                            </button>

                            <button
                                className="btn btn-secondary ms-2"
                                type="button"
                                onClick={() => navigate("/results")}
                            >
                                Cancel
                            </button>

                        </form>

                    </div>

                </div>

            </div>

        </>

    );

}

export default AddResult;