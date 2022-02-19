import { createContext, useReducer } from "react";

import { questions } from "../../data/questions";

export const GameContext = createContext();

const initialState = {
  gameInProgress: false,
  category: "sports",
  questions: questions.sports,
  percentComplete: 0,
  score: 0,
  results: [],
};

const reducer = (state, action) => {
  if (action.type === "START_GAME") {
    return {
      ...state,
      gameInProgress: true,
      questions: questions[state.category],
    };
  }

  if (action.type === "CHANGE_CATEGORY") {
    return {
      ...state,
      category: action.payload,
    };
  }

  if (action.type === "NEXT_QUESTION") {
    const { currentQuestionIndex, userAnswer } = action.payload;

    const isCorrect =
      userAnswer === state.questions[currentQuestionIndex].correctOption;

    const resultObject = {
      ...state.questions[currentQuestionIndex],
      userAnswer,
      isCorrect,
    };

    return {
      ...state,
      percentComplete: state.percentComplete + 100 / state.questions.length,
      score: isCorrect ? state.score + 1 : state.score,
      results: [...state.results, resultObject],
    };
  }

  return state;
};

export const GameProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
};
