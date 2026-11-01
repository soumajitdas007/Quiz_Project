import { createContext, useContext, useState } from "react";

import cQuestions from "../data/cQuestions";
import dataStructureQuestions from "../data/dataStructureQuestions";
import dbmsQuestions from "../data/dbmsQuestions";
import operatingSystemQuestions from "../data/operatingSystemQuestions";
import computerNetworkQuestions from "../data/computerNetworkQuestions";
import reactQuestions from "../data/reactQuestions";

const QuizContext = createContext();

export function QuizProvider({ children }) {

    const [subject, setSubject] = useState("");

    const [questions, setQuestions] = useState([]);

    const [currentQuestion, setCurrentQuestion] = useState(0);

    const [answers, setAnswers] = useState({});

    const [reviewQuestions, setReviewQuestions] = useState([]);

    const getQuestionsBySubject = (selectedSubject) => {
        switch (selectedSubject) {
            case "C Programming":
                return cQuestions;
            case "Data Structures":
                return dataStructureQuestions;
            case "DBMS":
                return dbmsQuestions;
            case "Operating Systems":
                return operatingSystemQuestions;
            case "Computer Networks":
                return computerNetworkQuestions;
            case "React JS":
                return reactQuestions;
            default:
                return [];
        }
    };
    const startQuiz = (selectedSubject) => {
        console.log(
            "QuizContext received:",
            selectedSubject
        );
        const selectedQuestions =
            getQuestionsBySubject(selectedSubject);
        console.log(
            "Questions loaded:",
            selectedQuestions.length
        );
        setSubject(selectedSubject);
        setQuestions(selectedQuestions);
        setCurrentQuestion(0);
        setAnswers({});
        setReviewQuestions([]);
    };
    const selectAnswer = (answer) => {
        setAnswers((previousAnswers) => ({
            ...previousAnswers,
            [currentQuestion]: answer
        }));
    };
    const nextQuestion = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(
                currentQuestion + 1
            );
        }
    };
    const previousQuestion = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(
                currentQuestion - 1
            );
        }
    };
    const goToQuestion = (questionIndex) => {
        if (
            questionIndex >= 0 &&
            questionIndex < questions.length
        ) {
            setCurrentQuestion(questionIndex);
        }
    };
    const markReview = () => {
        setReviewQuestions((previousReviews) => {
            if (
                previousReviews.includes(currentQuestion)
            ) {
                return previousReviews.filter(
                    (index) =>
                        index !== currentQuestion
                );
            }
            return [
                ...previousReviews,
                currentQuestion
            ];
        });
    };
    const isMarkedForReview = (questionIndex) => {
        return reviewQuestions.includes(
            questionIndex
        );
    };
    const calculateScore = () => {
        const score = questions.reduce(
            (total, question, index) => {
                if (
                    answers[index] === question.answer
                ) {
                    return total + 1;
                }
                return total;
            },
            0
        );
        return score;
    };
    const getCurrentAnswer = () => {
        return answers[currentQuestion] || null;
    };
    const getAnsweredCount = () => {
        return Object.keys(answers).length;
    };
    const resetQuiz = () => {
        setSubject("");
        setQuestions([]);
        setCurrentQuestion(0);
        setAnswers({});
        setReviewQuestions([]);
    };
    const value = {
        subject,
        setSubject,
        questions,
        setQuestions,
        currentQuestion,
        setCurrentQuestion,
        answers,
        setAnswers,
        reviewQuestions,
        setReviewQuestions,
        startQuiz,
        getQuestionsBySubject,
        nextQuestion,
        previousQuestion,
        goToQuestion,
        selectAnswer,
        getCurrentAnswer,
        markReview,
        isMarkedForReview,
        getAnsweredCount,
        calculateScore,
        resetQuiz
    };
    return (
        <QuizContext.Provider value={value}>
            {children}
        </QuizContext.Provider>
    );
}
export const useQuiz = () => {
    const context = useContext(QuizContext);
    if (!context) {
        throw new Error(
            "useQuiz must be used inside QuizProvider"
        );
    }
    return context;
};
export default QuizContext;