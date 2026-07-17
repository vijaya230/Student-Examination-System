import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import ExamService from "../services/ExamService";

function AddExam() {

    const navigate = useNavigate();

    const [exam, setExam] = useState({
        examName: "",
        subject: "",
        examDate: ""
    });

    const handleChange = (e) => {
        setExam({
            ...exam,
            [e.target.name]: e.target.value
        });
    };

    const saveExam = async (e) => {

        e.preventDefault();

        try {

            await ExamService.addExam(exam);

            alert("Exam Added Successfully");

            navigate("/exams");

        } catch (error) {

            console.error(error);

            alert("Failed to Add Exam");

        }

    };

    return (
        <>
            <Navbar />

            <div
                className="container"
                style={{
                    maxWidth: "650px",
                    marginTop: "100px"
                }}
            >

                <div className="card shadow-lg border-0">

                    <div className="card-header bg-success text-white">

                        <h3 className="text-center">
                            Add Exam
                        </h3>

                    </div>

                    <div className="card-body">

                        <form onSubmit={saveExam}>

                            <div className="mb-3">

                                <label className="form-label">
                                    Exam Name
                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                    name="examName"
                                    value={exam.examName}
                                    onChange={handleChange}
                                    required
                                />

                            </div>

                            <div className="mb-3">

                                <label className="form-label">
                                    Subject
                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                    name="subject"
                                    value={exam.subject}
                                    onChange={handleChange}
                                    required
                                />

                            </div>

                            <div className="mb-3">

                                <label className="form-label">
                                    Exam Date
                                </label>

                                <input
                                    type="date"
                                    className="form-control"
                                    name="examDate"
                                    value={exam.examDate}
                                    onChange={handleChange}
                                    required
                                />

                            </div>

                            <button
                                type="submit"
                                className="btn btn-success"
                            >
                                Save
                            </button>

                            <button
                                type="button"
                                className="btn btn-secondary ms-2"
                                onClick={() => navigate("/exams")}
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

export default AddExam;