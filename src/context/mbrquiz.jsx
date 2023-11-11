import { createContext, useReducer } from "react";

const STAGES = ["Home", "Playing", "EngGame"];
const questions = [];
const username = null;

fetch("https://be-teste-tec-b5dc1a90bbd0.herokuapp.com/api/atividades/list")
    .then((res) => res.json())
    .then((item) => {
        for (let i = 0; i < item.data.length; i++) {
            const options = [];

            options.push(item.data[i].resposta_errada1);
            options.push(item.data[i].resposta_correta);
            options.push(item.data[i].resposta_errada2);

            const suffleOptions = options.sort(() => {
                return Math.random() - 0.5;
            });

            questions.push({
                question: item.data[i].pergunta,
                options: options,
                answer: item.data[i].resposta_correta,
            });
        }
    })
    .catch((err) => console.log(err));

const initialState = {
    gameStage: STAGES[0],
    questions,
    currentQuestion: 0,
    username,
    score: 0,
    isAnswerSelected: false,
};

const quizReducer = (state, action) => {
    switch (action.type) {
        case "CHANGE_GAME_STAGE":
            return {
                ...state,
                gameStage: STAGES[1],
            };

        case "CHANGE_QUESTION":
            const continueQuestion = state.currentQuestion + 1;
            let gameOver = false;

            if (questions[continueQuestion] == null) {
                gameOver = true;
            }

            return {
                ...state,
                currentQuestion: continueQuestion,
                gameStage: gameOver ? STAGES[2] : state.gameStage,
                isAnswerSelected: false,
            };

        case "SHUFFLE_QUESTIONS":
            const suffleQuestions = state.questions.sort(() => {
                return Math.random() - 0.5;
            });

            return {
                ...state,
                questions: suffleQuestions,
            };

        case "CHECK_ANWSER":
            if (state.isAnswerSelected) return state;

            const answer = action.payload.answer;
            const option = action.payload.option;
            let isCorrectAnswer = 0;

            if (answer === option) isCorrectAnswer = 1;
            console.log(answer, option);
            return {
                ...state,
                score: state.score + isCorrectAnswer,
                isAnswerSelected: true,
            };

        case "RESTART":
            const newSuffleQuestions = state.questions.sort(() => {
                return Math.random() - 0.5;
            });
            return {
                gameStage: STAGES[0],
                questions: newSuffleQuestions,
                currentQuestion: 0,
                username,
                score: 0,
            };

        default:
            return state;
    }
};

export const MbrQuizContext = createContext();

export const MbrQuizProvider = ({ children }) => {
    const value = useReducer(quizReducer, initialState);

    return <MbrQuizContext.Provider value={value}>{children}</MbrQuizContext.Provider>;
};
