import { useContext } from "react";
import { MbrQuizContext } from "../context/mbrquiz";

import "./Answer.css";

const Answer = ({ option, selectAnswer, answer }) => {
    const [quizState, dispatch] = useContext(MbrQuizContext);

    return (
        <div className={`answer ${quizState.isAnswerSelected && option === answer ? "correct" : " "} ${quizState.isAnswerSelected && option !== answer ? "wrong" : ""}`} onClick={() => selectAnswer()}>
            <p style={{ margin: 0 }}>{option}</p>
        </div>
    );
};

export default Answer;
