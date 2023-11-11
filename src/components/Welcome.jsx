import React, { useState, useContext } from "react";
import { MbrQuizContext } from "../context/mbrquiz";

import "./Welcome.css";

const Welcome = () => {
    const [quizState, dispatch] = useContext(MbrQuizContext);
    const [name, setName] = useState(null);

    const saveName = (e) => {
        setName(e.target.value);
    };

    const startQuiz = () => {
        if (name != null) {
            quizState.username = name;
            dispatch({ type: "CHANGE_GAME_STAGE" });
        } else {
            alert("Por favor, digite seu nome");
        }
    };

    return (
        <div id="welcome">
            <h2>Nome</h2>
            <input type="text" onChange={saveName} />
            <button onClick={startQuiz}>Acessar</button>
        </div>
    );
};

export default Welcome;
