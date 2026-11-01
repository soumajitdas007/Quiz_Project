import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import cQuestions from "../data/cQuestions";
import dataStructureQuestions from "../data/dataStructureQuestions";
import dbmsQuestions from "../data/dbmsQuestions";
import operatingSystemQuestions from "../data/operatingSystemQuestions";
import computerNetworkQuestions from "../data/computerNetworkQuestions";
import reactQuestions from "../data/reactQuestions";
import "../css/course.css";
function Courses() {
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
        console.log(
            "Selected Subject from Courses:",
            subjectName
        );
        navigate("/instructions", {
            state: {
                subject: subjectName
            }
        });
    };
    return (
        <>
            <Navbar />
            <main className="courses-page">
                <section className="courses-header">
                    <h1>
                        Available Subjects
                    </h1>
                    <p>
                        Choose a subject and start practicing.
                    </p>
                </section>
                <section className="courses-grid">
                    {subjects.map((subject) => (
                        <div
                            className="course-card"
                            key={subject.name}
                        >
                            <div className="course-icon">
                                {subject.shortName}
                            </div>
                            <h2>
                                {subject.name}
                            </h2>
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
                </section>
            </main>
        </>
    );
}
export default Courses;