import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import Instructions from "./pages/Instructions";
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/courses"
                    element={
                        <ProtectedRoute>
                            <Courses />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/quiz"
                    element={
                        <ProtectedRoute>
                            <Quiz />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/result"
                    element={
                        <ProtectedRoute>
                            <Result />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/instructions"
                    element={<Instructions />}
                />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}
export default App;