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
            <span>
                <p>Porcentagem</p>
                <p>{(quizState.score / quizState.questions.length) * 100}%</p>
            </span>
            <button onClick={() => dispatch({ type: "RESTART_QUIZ" })}>Reiniciar Quiz</button>
            <button onClick={() => dispatch({ type: "RESTART" })}>Página Inicial</button>
        </div>
    );
};

export default EndGame;
