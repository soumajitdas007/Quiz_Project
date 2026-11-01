import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useQuiz } from "../context/QuizContext";
import "../css/instructions.css";
function Instructions() {
    const navigate = useNavigate();
    const location = useLocation();
    const { startQuiz } = useQuiz();
    const subject = location.state?.subject;
    if (!subject) {
        return (
            <>
                <Navbar />
                <main className="instructions-page">
                    <div className="no-subject-card">
                        <div className="no-subject-icon">
                            ⚠️
                        </div>
                        <h1>
                            No Subject Selected
                        </h1>
                        <p>
                            Please go back to the dashboard
                            and select a subject before starting
                            the quiz.
                        </p>
                        <button
                            className="primary-btn"
                            onClick={() => navigate("/dashboard")}
                        >
                            ← Back to Dashboard
                        </button>
                    </div>
                </main>
            </>
        );
    }
    const handleStartQuiz = () => {
        console.log("Selected Subject:", subject);
        startQuiz(subject);
        navigate("/quiz");
    };
    const getSubjectIcon = () => {
        switch (subject) {
            case "C Programming":
                return "C";
            case "Data Structures":
                return "DS";
            case "DBMS":
                return "DB";
            case "Operating Systems":
                return "OS";
            case "Computer Networks":
                return "CN";
            case "React JS":
                return "R";
            default:
                return "Q";
        }
    };

    return (
        <>
            <Navbar />
            <main className="instructions-page">
                <div className="instructions-card">
                    <div className="instructions-header">
                        <div className="subject-badge">
                            {getSubjectIcon()}
                        </div>
                        <div>
                            <p className="header-small">
                                Get ready for your quiz
                            </p>
                            <h1>
                                {subject}
                            </h1>
                        </div>
                    </div>
                    <div className="title-section">
                        <h2>
                            Quiz Instructions
                        </h2>
                        <p>
                            Please read the instructions carefully
                            before starting your quiz.
                        </p>
                    </div>
                    <div className="quiz-info-grid">
                        <div className="info-card">
                            <div className="info-icon">
                                📝
                            </div>
                            <div>
                                <span>
                                    Questions
                                </span>
                                <strong>
                                    30 Questions
                                </strong>
                            </div>
                        </div>
                        <div className="info-card">
                            <div className="info-icon">
                                ⏱️
                            </div>
                            <div>
                                <span>
                                    Time Limit
                                </span>
                                <strong>
                                    30 Minutes
                                </strong>
                            </div>
                        </div>
                        <div className="info-card">
                            <div className="info-icon">
                                🏆
                            </div>
                            <div>
                                <span>
                                    Passing Score
                                </span>
                                <strong>
                                    40%
                                </strong>
                            </div>
                        </div>
                        <div className="info-card">
                            <div className="info-icon">
                                🎯
                            </div>
                            <div>
                                <span>
                                    Question Type
                                </span>
                                <strong>
                                    Multiple Choice
                                </strong>
                            </div>
                        </div>
                    </div>
                    <section className="rules-section">
                        <h3>
                            📋 Rules & Guidelines
                        </h3>
                        <div className="rules-list">
                            <div className="rule">
                                <div className="rule-number">
                                    01
                                </div>
                                <div>
                                    <h4>
                                        Total Questions
                                    </h4>
                                    <p>
                                        The quiz contains 30 questions
                                        from {subject}.
                                    </p>
                                </div>
                            </div>
                            <div className="rule">
                                <div className="rule-number">
                                    02
                                </div>
                                <div>
                                    <h4>
                                        Time Limit
                                    </h4>
                                    <p>
                                        You will have 30 minutes to
                                        complete the entire quiz.
                                    </p>
                                </div>
                            </div>
                            <div className="rule">
                                <div className="rule-number">
                                    03
                                </div>
                                <div>
                                    <h4>
                                        Choose One Answer
                                    </h4>
                                    <p>
                                        Each question contains four
                                        options. Select only one answer.
                                    </p>
                                </div>
                            </div>
                            <div className="rule">
                                <div className="rule-number">
                                    04
                                </div>
                                <div>
                                    <h4>
                                        Navigate Freely
                                    </h4>
                                    <p>
                                        You can move between questions
                                        using the Previous and Next buttons.
                                    </p>
                                </div>
                            </div>
                            <div className="rule">
                                <div className="rule-number">
                                    05
                                </div>
                                <div>
                                    <h4>
                                        Mark for Review
                                    </h4>
                                    <p>
                                        You can mark questions that you
                                        want to review later.
                                    </p>
                                </div>
                            </div>
                            <div className="rule">
                                <div className="rule-number">
                                    06
                                </div>
                                <div>
                                    <h4>
                                        Submit Your Quiz
                                    </h4>
                                    <p>
                                        Review your answers and submit
                                        the quiz when you are finished.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="warning-box">
                        <div className="warning-icon">
                            ⚠️
                        </div>
                        <div>
                            <strong>
                                Important
                            </strong>
                            <p>
                                Once the timer starts, it will continue
                                running. Make sure you have enough time
                                before starting the quiz.
                            </p>
                        </div>
                    </div>
                    <div className="instruction-buttons">
                        {/* BACK */}
                        <button
                            className="back-btn"
                            onClick={() => navigate("/dashboard")}
                        >
                            <span className="back-arrow">
                                ←
                            </span>
                            Back
                        </button>
                        {/* START */}
                        <button
                            className="start-btn"
                            onClick={handleStartQuiz}
                        >
                            <span>
                                Start Quiz
                            </span>
                            <span className="start-arrow">
                                →
                            </span>
                        </button>
                    </div>
                </div>
            </main>
        </>
    );
}
export default Instructions;