import { useContext } from "react";

import { GameContext } from "../contexts/GameProvider";

export const useGame = () => {
  return useContext(GameContext);
};
