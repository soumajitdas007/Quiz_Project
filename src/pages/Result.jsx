import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useQuiz } from "../context/QuizContext";
import "../css/result.css";
function Result() {
    const navigate = useNavigate();
    const {
        questions,
        answers
    } = useQuiz();
    if (!questions || questions.length === 0) {
        return (
            <>
                <Navbar />
                <main className="result-page">
                    <div className="result-empty">
                        <div className="empty-icon">
                            📋
                        </div>
                        <h1>
                            No Quiz Result Found
                        </h1>
                        <p>
                            Please complete a quiz first.
                        </p>
                        <button
                            onClick={() => navigate("/courses")}
                        >
                            Go to Courses
                        </button>
                    </div>
                </main>
            </>
        );
    }
    let correctAnswers = 0;
    questions.forEach((question, index) => {
        const userAnswer =
            answers?.[index];
        const correctAnswer =
            question.answer;
        if (
            userAnswer !== undefined &&
            userAnswer !== null &&
            userAnswer === correctAnswer
        ) {
            correctAnswers++;
        }
    });
    const totalQuestions =
        questions.length;
    const wrongAnswers =
        totalQuestions - correctAnswers;
    const percentage =
        totalQuestions > 0
            ? Math.round(
                (correctAnswers / totalQuestions) * 100
            )
            : 0;
    const passed =
        percentage >= 40;
    const circleStyle = {
        background: `conic-gradient(
            #2563eb ${percentage * 3.6}deg,
            #e8eef9 ${percentage * 3.6}deg
        )`
    };
    const goDashboard = () => {
        navigate("/dashboard");
    };
    const tryAgain = () => {
        navigate("/courses");
    };
    return (
        <>
            <Navbar />
            <main className="result-page">
                <section className="result-header">
                    <h1>
                        Quiz Completed! 🎉
                    </h1>
                    <p>
                        Keep practicing and try again.
                    </p>
                </section>
                <section className="score-card">
                    <div
                        className="score-circle"
                        style={circleStyle}
                    >
                        <div className="score-circle-inner">
                            <strong>
                                {percentage}%
                            </strong>
                            <span>
                                Score
                            </span>
                        </div>
                    </div>
                    <div className="score-details">
                        <h2>
                            {correctAnswers}
                            <span>
                                {" "}/ {totalQuestions}
                            </span>
                        </h2>
                        <p>
                            Your Final Score
                        </p>
                        <div
                            className={
                                passed
                                    ? "result-status pass"
                                    : "result-status fail"
                            }
                        >
                            {passed
                                ? "PASS"
                                : "FAIL"
                            }
                        </div>
                    </div>
                </section>
                <section className="result-stats">
                    <div className="result-stat-card">
                        <div className="result-stat-icon correct-icon">
                            ✓
                        </div>
                        <div>
                            <strong>
                                {correctAnswers}
                            </strong>
                            <span>
                                Correct Answers
                            </span>
                        </div>
                    </div>
                    <div className="result-stat-card">
                        <div className="result-stat-icon wrong-icon">
                            ×
                        </div>
                        <div>
                            <strong>
                                {wrongAnswers}
                            </strong>
                            <span>
                                Wrong Answers
                            </span>
                        </div>
                    </div>
                    <div className="result-stat-card">
                        <div className="result-stat-icon total-icon">
                            📝
                        </div>
                        <div>
                            <strong>
                                {totalQuestions}
                            </strong>
                            <span>
                                Total Questions
                            </span>
                        </div>
                    </div>
                </section>
                <section className="answer-review">
                    <div className="review-header">
                        <h2>
                            Answer Review
                        </h2>
                        <p>
                            Check your answers and correct
                            answers below.
                        </p>
                    </div>
                    <div className="review-list">
                        {questions.map((question, index) => {
                            const userAnswer =
                                answers?.[index];
                            const correctAnswer =
                                question.answer;
                            const isCorrect =
                                userAnswer === correctAnswer;
                            return (
                                <div
                                    className={
                                        isCorrect
                                            ? "review-card correct-review"
                                            : "review-card wrong-review"
                                    }
                                    key={
                                        question.id ||
                                        index
                                    }
                                >
                                    <div className="review-question">
                                        <div className="question-number">
                                            {index + 1}
                                        </div>
                                        <div className="question-text">
                                            <h3>
                                                {question.question}
                                            </h3>
                                        </div>
                                        <div
                                            className={
                                                isCorrect
                                                    ? "review-result correct-result"
                                                    : "review-result wrong-result"
                                            }
                                        >
                                            {isCorrect
                                                ? "✓"
                                                : "×"
                                            }
                                        </div>
                                    </div>
                                    <div className="review-divider"></div>
                                    <div className="answer-row">
                                        <span className="answer-label">
                                            Your Answer:
                                        </span>
                                        <span
                                            className={
                                                isCorrect
                                                    ? "user-answer correct-text"
                                                    : "user-answer wrong-text"
                                            }
                                        >
                                            {userAnswer !== undefined &&
                                            userAnswer !== null &&
                                            userAnswer !== ""
                                                ? userAnswer
                                                : "Not Answered"
                                            }
                                        </span>
                                    </div>
                                    <div className="answer-row">
                                        <span className="answer-label">
                                            Correct Answer:
                                        </span>
                                        <span className="correct-text">
                                            {correctAnswer}
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>
                <div className="result-buttons">
                    <button
                        className="dashboard-btn"
                        onClick={goDashboard}
                    >
                        ← Dashboard
                    </button>
                    <button
                        className="try-again-btn"
                        onClick={tryAgain}
                    >
                        Try Another Quiz →
                    </button>
                </div>
            </main>
        </>
    );
}
export default Result;