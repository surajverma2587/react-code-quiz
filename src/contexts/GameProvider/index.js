import { createContext, useState } from "react";

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [gameInProgress, setGameInProgress] = useState(false);
  const [category, setCategory] = useState("sports");

  return (
    <GameContext.Provider
      value={{ gameInProgress, setGameInProgress, category, setCategory }}
    >
      {children}
    </GameContext.Provider>
  );
};
