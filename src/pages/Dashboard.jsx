import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import "../css/dashboard.css";
// Question files
import cQuestions from "../data/cQuestions";
import dataStructureQuestions from "../data/dataStructureQuestions";
import dbmsQuestions from "../data/dbmsQuestions";
import operatingSystemQuestions from "../data/operatingSystemQuestions";
import computerNetworkQuestions from "../data/computerNetworkQuestions";
import reactQuestions from "../data/reactQuestions";
function Dashboard() {
    const navigate = useNavigate();
    const subjects = [
        {
            name: "C Programming",
            shortName: "C",
            questions: cQuestions
        },
        {
            name: "Data Structures",
            shortName: "DS",
            questions: dataStructureQuestions
        },
        {
            name: "DBMS",
            shortName: "DB",
            questions: dbmsQuestions
        },
        {
            name: "Operating Systems",
            shortName: "OS",
            questions: operatingSystemQuestions
        },
        {
            name: "Computer Networks",
            shortName: "CN",
            questions: computerNetworkQuestions
        },
        {
            name: "React JS",
            shortName: "R",
            questions: reactQuestions
        }
    ];
    const handleStartQuiz = (subjectName) => {
        console.log("Selected Subject:", subjectName);
        navigate("/instructions", {
            state: {
                subject: subjectName
            }
        });
    };
    return (
        <>
            <Navbar />
            <main className="dashboard">
                <section className="welcome-section">
                    <div>
                        <p className="welcome-small">
                            Welcome back
                        </p>
                        <h1>
                            Ready for your next quiz?
                        </h1>
                        <p>
                            Test your knowledge and improve
                            your technical skills.
                        </p>
                    </div>
                    <button
                        onClick={() => navigate("/courses")}
                    >
                        Start Quiz →
                    </button>
                </section>
                <section className="stats-grid">
                    <div className="stat-card">
                        <div className="stat-icon">
                            📝
                        </div>
                        <div>
                            <h2>30</h2>
                            <p>
                                Questions / Quiz
                            </p>
                        </div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon">
                            ⏱️
                        </div>
                        <div>
                            <h2>30</h2>
                            <p>
                                Minutes
                            </p>
                        </div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon">
                            📚
                        </div>
                        <div>
                            <h2>6</h2>
                            <p>
                                Subjects
                            </p>
                        </div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon">
                            🏆
                        </div>
                        <div>
                            <h2>40%</h2>
                            <p>
                                Pass Mark
                            </p>
                        </div>
                    </div>
                </section>
                <section className="subjects-section">
                    <div className="section-heading">
                        <div>
                            <h2>
                                Available Subjects
                            </h2>
                            <p>
                                Choose a subject and start practicing.
                            </p>
                        </div>
                    </div>
                    <div className="subject-grid">
                        {subjects.map((subject) => (
                            <div
                                className="subject-card"
                                key={subject.name}
                            >
                                <div className="subject-icon">
                                    {subject.shortName}
                                </div>
                                <h3>
                                    {subject.name}
                                </h3>
                                <p>
                                    {subject.questions.length} Questions
                                </p>
                                <button
                                    onClick={() =>
                                        handleStartQuiz(
                                            subject.name
                                        )
                                    }
                                >
                                    Start
                                </button>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </>
    );
}
export default Dashboard;