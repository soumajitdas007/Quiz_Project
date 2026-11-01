import { useNavigate } from "react-router-dom";
import "../css/introduction.css";
import Navbar from "../components/Navbar";
import { useQuiz } from "../context/QuizContext";

function Introductions() {

    const navigate = useNavigate();

    return (
        <div className="intro-page">

            {/* Navbar */}

            <Navbar />

            <nav className="intro-navbar">

                <div className="intro-logo">
                    Master
                </div>

                <div className="intro-nav-links">

                    <button
                        onClick={() => navigate("/login")}
                    >
                        Login
                    </button>

                    <button
                        className="nav-register"
                        onClick={() => navigate("/login")}
                    >
                        Get Started
                    </button>

                </div>

            </nav>


            {/* Hero Section */}

            <main className="intro-hero">

                <div className="intro-content">

                    <div className="intro-badge">
                        🎯 Online Quiz Platform
                    </div>

                    <h1>
                        Test Your Knowledge.
                        <br />

                        <span>
                            Improve Your Skills.
                        </span>
                    </h1>

                    <p className="intro-description">
                        Master is an interactive online quiz platform
                        designed to help students practice programming,
                        computer science and technical subjects through
                        engaging quizzes.
                    </p>


                    {/* Buttons */}

                    <div className="intro-buttons">

                        <button
                            className="start-button"
                            onClick={() => navigate("/login")}
                        >
                            Start Quiz
                            <span>→</span>
                        </button>

                        <button
                            className="learn-button"
                            onClick={() => {
                                document
                                    .getElementById("features")
                                    .scrollIntoView({
                                        behavior: "smooth"
                                    });
                            }}
                        >
                            Learn More
                        </button>

                    </div>


                    {/* Small information */}

                    <div className="intro-info">

                        <div>
                            <strong>180+</strong>
                            <span>Questions</span>
                        </div>

                        <div>
                            <strong>6</strong>
                            <span>Subjects</span>
                        </div>

                        <div>
                            <strong>30</strong>
                            <span>Minutes</span>
                        </div>

                    </div>

                </div>


                {/* Hero Quiz Card */}

                <div className="intro-visual">

                    <div className="quiz-preview">

                        <div className="preview-header">

                            <div>
                                <span className="preview-small">
                                    Today's Quiz
                                </span>

                                <h3>
                                    Computer Science
                                </h3>
                            </div>

                            <div className="preview-icon">
                                🧠
                            </div>

                        </div>


                        <div className="preview-progress">

                            <div className="preview-progress-top">
                                <span>Question 12 of 30</span>
                                <span>40%</span>
                            </div>

                            <div className="preview-progress-bar">

                                <div className="preview-progress-fill">
                                </div>

                            </div>

                        </div>


                        <div className="preview-question">

                            <span className="question-number">
                                Q12
                            </span>

                            <h4>
                                Which data structure follows
                                the LIFO principle?
                            </h4>

                        </div>


                        <div className="preview-options">

                            <div className="preview-option">
                                <span>A</span>
                                Queue
                            </div>

                            <div className="preview-option selected">
                                <span>B</span>
                                Stack
                                <b>✓</b>
                            </div>

                            <div className="preview-option">
                                <span>C</span>
                                Linked List
                            </div>

                            <div className="preview-option">
                                <span>D</span>
                                Tree
                            </div>

                        </div>


                        <div className="preview-footer">

                            <span>
                                ⏱️ 18:42 remaining
                            </span>

                            <button>
                                Next →
                            </button>

                        </div>

                    </div>


                    {/* Floating Cards */}

                    <div className="floating-card score-card">

                        <div className="floating-icon">
                            🏆
                        </div>

                        <div>
                            <strong>80%</strong>
                            <span>Great Score!</span>
                        </div>

                    </div>


                    <div className="floating-card question-card">

                        <div className="floating-icon">
                            ✓
                        </div>

                        <div>
                            <strong>24 / 30</strong>
                            <span>Correct Answers</span>
                        </div>

                    </div>

                </div>

            </main>


            {/* Features Section */}

            <section
                className="intro-features"
                id="features"
            >

                <div className="features-heading">

                    <span>
                        WHY MASTER?
                    </span>

                    <h2>
                        Everything You Need
                        <br />
                        to Practice Better
                    </h2>

                    <p>
                        Practice your technical knowledge with
                        a simple and interactive quiz experience.
                    </p>

                </div>


                <div className="feature-grid">

                    <div className="feature-card">

                        <div className="feature-icon">
                            📚
                        </div>

                        <h3>
                            Multiple Subjects
                        </h3>

                        <p>
                            Practice C Programming, Data Structures,
                            DBMS, Operating Systems, Computer Networks
                            and React JS.
                        </p>

                    </div>


                    <div className="feature-card">

                        <div className="feature-icon">
                            🎯
                        </div>

                        <h3>
                            Practice Questions
                        </h3>

                        <p>
                            Test yourself with carefully prepared
                            questions covering important technical
                            concepts.
                        </p>

                    </div>


                    <div className="feature-card">

                        <div className="feature-icon">
                            ⏱️
                        </div>

                        <h3>
                            Timed Quiz
                        </h3>

                        <p>
                            Challenge yourself with a 30-minute quiz
                            and improve your speed and accuracy.
                        </p>

                    </div>


                    <div className="feature-card">

                        <div className="feature-icon">
                            📊
                        </div>

                        <h3>
                            Detailed Results
                        </h3>

                        <p>
                            Review your answers, check your score
                            and identify areas where you need improvement.
                        </p>

                    </div>

                </div>

            </section>


            {/* Subjects Section */}

            <section className="intro-subjects">

                <div className="subjects-heading">

                    <span>
                        EXPLORE
                    </span>

                    <h2>
                        Practice Across
                        <br />
                        Different Subjects
                    </h2>

                </div>


                <div className="intro-subject-list">

                    <div className="intro-subject">
                        <span>C</span>
                        <div>
                            <strong>C Programming</strong>
                            <small>30 Questions</small>
                        </div>
                    </div>


                    <div className="intro-subject">
                        <span>DS</span>
                        <div>
                            <strong>Data Structures</strong>
                            <small>30 Questions</small>
                        </div>
                    </div>


                    <div className="intro-subject">
                        <span>DB</span>
                        <div>
                            <strong>DBMS</strong>
                            <small>30 Questions</small>
                        </div>
                    </div>


                    <div className="intro-subject">
                        <span>OS</span>
                        <div>
                            <strong>Operating Systems</strong>
                            <small>30 Questions</small>
                        </div>
                    </div>


                    <div className="intro-subject">
                        <span>CN</span>
                        <div>
                            <strong>Computer Networks</strong>
                            <small>30 Questions</small>
                        </div>
                    </div>


                    <div className="intro-subject">
                        <span>R</span>
                        <div>
                            <strong>React JS</strong>
                            <small>30 Questions</small>
                        </div>
                    </div>

                </div>

            </section>


            {/* CTA */}

            <section className="intro-cta">

                <div>

                    <h2>
                        Ready to Test Yourself?
                    </h2>

                    <p>
                        Start your quiz and see how much
                        you really know.
                    </p>

                </div>

                <button
                    onClick={() => navigate("/login")}
                >
                    Start Quiz →
                </button>

            </section>


            {/* Footer */}

            <footer className="intro-footer">

                <div>
                    <strong>Master</strong>
                    <p>
                        Learn. Practice. Improve.
                    </p>
                </div>

                <p>
                    © 2026 Master Quiz Platform
                </p>

            </footer>

        </div>
    );
}

export default Introductions;