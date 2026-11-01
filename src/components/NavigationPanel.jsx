import { useQuiz } from "../context/QuizContext";
import "../css/navigationPanel.css";

function NavigationPanel(){
    const {
        questions,
        currentQuestion,
        answers,
        reviewQuestions,
        goToQuestion
    }=useQuiz();

    if(!questions||questions.length===0){
        return(
            <div className="navigation-panel">
                <h3>Quiz Navigation</h3>
                <p>No questions available.</p>
            </div>
        );
    }

    return(
        <div className="navigation-panel">
            <h3>Quiz Navigation</h3>
            <div className="question-grid">
                {questions.map((question,index)=>{
                    const isAnswered=answers&&answers[index]!==undefined;
                    const isReview=reviewQuestions&&reviewQuestions.includes(index);
                    const isCurrent=currentQuestion===index;

                    return(
                        <button
                            key={question.id||index}
                            className={`question-number ${isCurrent?"current":""} ${isAnswered?"answered":""} ${isReview?"review":""}`}
                            onClick={()=>goToQuestion(index)}
                        >
                            {index+1}
                        </button>
                    );
                })}
            </div>

            <div className="navigation-legend">
                <div className="legend-item">
                    <span className="legend-box current-box"></span>
                    <span>Current</span>
                </div>
                <div className="legend-item">
                    <span className="legend-box answered-box"></span>
                    <span>Answered</span>
                </div>
                <div className="legend-item">
                    <span className="legend-box review-box"></span>
                    <span>Review</span>
                </div>
                <div className="legend-item">
                    <span className="legend-box unanswered-box"></span>
                    <span>Unanswered</span>
                </div>
            </div>
        </div>
    );
}

export default NavigationPanel;