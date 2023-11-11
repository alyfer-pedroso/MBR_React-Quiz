import { useContext } from "react";
import { MbrQuizContext } from "../context/mbrquiz";

import Answer from "./Answer";

import "./Question.css";

const Question = () => {
    const [quizState, dispatch] = useContext(MbrQuizContext);
    const currentQues = quizState.questions[quizState.currentQuestion];

    const selectOption = (option) => {
        dispatch({
            type: "CHECK_ANWSER",
            payload: { answer: currentQues.answer, option },
        });
    };

    return (
        <div id="question">
            <p>
                Questão {quizState.currentQuestion + 1} de {quizState.questions.length}
            </p>
            <h2>{currentQues.question}</h2>
            <div id="options-container">
                {currentQues.options.map((option) => (
                    <Answer option={option} key={option} answer={currentQues.answer} selectAnswer={() => selectOption(option)} />
                ))}
            </div>
            {quizState.isAnswerSelected && <button onClick={() => dispatch({ type: "CHANGE_QUESTION" })}>Continuar</button>}
        </div>
    );
};

export default Question;
