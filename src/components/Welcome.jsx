import React, { useContext } from "react";
import { MbrQuizContext } from "../context/mbrquiz";
import Favicon from "../imgs/favicon.png";

import "./Welcome.css";

const Welcome = () => {
    const [quizState, dispatch] = useContext(MbrQuizContext);
    console.log(quizState);

    const startQuiz = () => {
        const name = document.querySelector("#welcome input").value;
        if (name != null) {
            quizState.username = name;
            localStorage.setItem("username", name);
            dispatch({ type: "CHANGE_GAME_STAGE" });
        } else {
            alert("Por favor, digite seu nome");
        }
    };

    const typingTitle = () => {
        const $title = document.querySelector("#welcome span").innerHTML.split("");
        const $colors = ["#E11859", "#0076C0", "#5EC42E", "#FFF", "#E11859", "#0076C0", "#5EC42E", "#E11859"];

        document.querySelector("#welcome span").innerHTML = "";
        $title.forEach((el, index) => {
            setTimeout(() => {
                const p = document.createElement("p");
                const pText = document.createTextNode(el);

                p.appendChild(pText);
                document.querySelector("#welcome span").appendChild(p);

                const ee = document.querySelectorAll("#welcome span p");
                ee.forEach((el, index) => {
                    el.style.color = $colors[index];
                });
            }, 95 * index);
        });
    };

    return (
        <div id="welcome" onLoad={typingTitle}>
            <div>
                <img src={Favicon} alt="" />
                <span>MBR-Quiz</span>
            </div>
            <h2>Nome</h2>
            <input type="text" />
            <button onClick={startQuiz}>Acessar</button>
        </div>
    );
};

export default Welcome;
