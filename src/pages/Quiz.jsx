import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import QuestionCard from "../components/QuestionCard";
import NavigationPanel from "../components/NavigationPanel";
import Timer from "../components/Timer";
import { useQuiz } from "../context/QuizContext";
import "../css/quiz.css";
// import "../css/QuestionCard.css";
function Quiz() {
    const navigate = useNavigate();
    const {
        currentQuestion,
        questions,
        nextQuestion,
        previousQuestion,
        markReview
    } = useQuiz();
    const submitQuiz = () => {
        if (window.confirm("Submit Quiz?")) {
            navigate("/result");
        }
    };
    return (
        <>
            <Navbar />
            <div className="quiz-container">
                <div className="left-panel">
                    <Timer onTimeUp={submitQuiz} />
                    <div className="progress">
                        <div
                            className="progress-fill"
                            style={{
                                width: `${((currentQuestion + 1) / questions.length) * 100}%`
                            }}
                        >
                        </div>
                    </div>
                    <p className="question-count">
                        Question {currentQuestion + 1} of {questions.length}
                    </p>
                    <QuestionCard />
                    <div className="buttons">
                        <button
                            onClick={previousQuestion}
                            disabled={currentQuestion === 0}
                        >
                            Previous
                        </button>
                        <button onClick={markReview}>
                            Mark For Review
                        </button>
                        {currentQuestion < questions.length - 1 ? (
                            <button onClick={nextQuestion}>
                                Next
                            </button>
                        ) : (
                            <button onClick={submitQuiz}>
                                Submit
                            </button>
                        )}
                    </div>
                </div>
                <div className="right-panel">
                    <NavigationPanel />
                </div>
            </div>
        </>
    );
}
export default Quiz;