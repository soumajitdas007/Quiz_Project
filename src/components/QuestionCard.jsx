import { useQuiz } from "../context/QuizContext";
import "../css/questionCard.css";

function QuestionCard(){
    const {
        questions,
        currentQuestion,
        answers,
        selectAnswer
    }=useQuiz();

    const question=questions[currentQuestion];

    return(
        <div className="question-card">
            <div className="question-header">
                <span className="question-label">
                    Question {currentQuestion+1}
                </span>
            </div>

            <div className="question-content">
                <h2>{question.question}</h2>
            </div>

            <div className="options-container">
                {question.options.map((option,index)=>{
                    const isSelected=answers[currentQuestion]===option;

                    return(
                        <button
                            key={option}
                            className={isSelected?"option selected":"option"}
                            onClick={()=>selectAnswer(option)}
                        >
                            <span className="option-letter">
                                {String.fromCharCode(65+index)}
                            </span>
                            <span className="option-text">{option}</span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}

export default QuestionCard;