import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";

// Admin Pages
import AdminDashboard from "./pages/AdminDashboard";
import StudentList from "./pages/StudentList";
import AddStudent from "./pages/AddStudent";
import UpdateStudent from "./pages/UpdateStudent";

import ExamList from "./pages/ExamList";
import AddExam from "./pages/AddExam";
import UpdateExam from "./pages/UpdateExam";

import ResultList from "./pages/ResultList";
import AddResult from "./pages/AddResult";
import UpdateResult from "./pages/UpdateResult";

// Student Pages
import StudentDashboard from "./pages/StudentDashboard";
import StudentProfile from "./pages/StudentProfile";
import StudentExamList from "./pages/StudentExamList";
import StudentResultList from "./pages/StudentResultList";

// Protected Route
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
    return (
        <Routes>

            {/* Login */}
            <Route path="/" element={<Login />} />

            {/* ================= ADMIN ================= */}

            <Route
                path="/admin"
                element={
                    <ProtectedRoute role="ADMIN">
                        <AdminDashboard />
                    </ProtectedRoute>
                }
            />

            {/* Student Management */}

            <Route
                path="/students"
                element={
                    <ProtectedRoute role="ADMIN">
                        <StudentList />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/add-student"
                element={
                    <ProtectedRoute role="ADMIN">
                        <AddStudent />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/update-student/:id"
                element={
                    <ProtectedRoute role="ADMIN">
                        <UpdateStudent />
                    </ProtectedRoute>
                }
            />

            {/* Exam Management */}

            <Route
                path="/exams"
                element={
                    <ProtectedRoute role="ADMIN">
                        <ExamList />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/add-exam"
                element={
                    <ProtectedRoute role="ADMIN">
                        <AddExam />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/update-exam/:id"
                element={
                    <ProtectedRoute role="ADMIN">
                        <UpdateExam />
                    </ProtectedRoute>
                }
            />

            {/* Result Management */}

            <Route
                path="/results"
                element={
                    <ProtectedRoute role="ADMIN">
                        <ResultList />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/add-result"
                element={
                    <ProtectedRoute role="ADMIN">
                        <AddResult />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/update-result/:id"
                element={
                    <ProtectedRoute role="ADMIN">
                        <UpdateResult />
                    </ProtectedRoute>
                }
            />

            {/* ================= STUDENT ================= */}

            <Route
                path="/student-dashboard"
                element={
                    <ProtectedRoute role="STUDENT">
                        <StudentDashboard />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/student-profile"
                element={
                    <ProtectedRoute role="STUDENT">
                        <StudentProfile />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/student-exams"
                element={
                    <ProtectedRoute role="STUDENT">
                        <StudentExamList />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/student-results"
                element={
                    <ProtectedRoute role="STUDENT">
                        <StudentResultList />
                    </ProtectedRoute>
                }
            />

        </Routes>
    );
}

export default App;