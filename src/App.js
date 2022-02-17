import Box from "@mui/material/Box";
import { useState } from "react";

import { Game } from "./containers/Game";
import { GameProvider } from "./contexts/GameProvider";

export const App = () => {
  return (
    <div>
      <Box component="header">Nav Bar goes here</Box>
      <GameProvider>
        <Game />
      </GameProvider>
    </div>
  );
};

export default App;
