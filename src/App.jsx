import { useContext, useEffect } from "react";
import { MbrQuizContext } from "./context/mbrquiz";

import Welcome from "./components/Welcome";
import Header from "./components/Header";
import Question from "./components/Question";
import EndGame from "./components/EndGame";

import "./App.css";

function App() {
    const [quizState, dispatch] = useContext(MbrQuizContext);

    useEffect(() => {
        dispatch({ type: "SHUFFLE_QUESTIONS" });
    }, []);

    document.addEventListener("contextmenu", (e) => {
        e.preventDefault();
    });

    return (
        <div className="App">
            <Header />
            {quizState.gameStage === "Home" && <Welcome />}
            {quizState.gameStage === "Playing" && <Question />}
            {quizState.gameStage === "EngGame" && <EndGame />}
        </div>
    );
}

export default App;
