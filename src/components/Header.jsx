import { useContext } from "react";
import { MbrQuizContext } from "../context/mbrquiz";

import "./Header.css";

const Header = () => {
    const [quizState, dispatch] = useContext(MbrQuizContext);

    // if (quizState.gameStage === "Home") {
    //     quizState.username = null;
    // }

    return (
        <header id="header">
            <h2>{quizState.username}</h2>
        </header>
    );
};

export default Header;
