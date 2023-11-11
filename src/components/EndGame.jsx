import { useContext } from "react";
import { MbrQuizContext } from "../context/mbrquiz";

import "./EndGame.css";

const EndGame = () => {
    const [quizState, dispatch] = useContext(MbrQuizContext);

    return (
        <div id="endgame">
            <h2>Game Over</h2>
            <span>
                <p>Acertos</p>
                <p>{quizState.score}</p>
            </span>
            <span>
                <p>Erros</p>
                <p>{(quizState.score - quizState.questions.length) * -1}</p>
            </span>
            <span style={{ backgroundColor: "#737373" }}>
                <p style={{ color: "#e3e3e3" }}>Porcentagem</p>
                <p style={{ color: "#e3e3e3" }}>{(quizState.score / quizState.questions.length) * 100}%</p>
            </span>
            <button onClick={() => dispatch({ type: "RESTART" })}>Reiniciar</button>
        </div>
    );
};

export default EndGame;
