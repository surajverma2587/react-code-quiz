import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import { GameForm } from "../../components/GameForm";
import { useGame } from "../../hooks/useGame";
import { Quiz } from "../../components/Quiz";

export const Game = () => {
  const { state } = useGame();

  console.log(state);
  return (
    <Container maxWidth="md">
      {!state.gameInProgress && (
        <Box component="section" sx={{ border: "1px solid black" }}>
          <GameForm />
        </Box>
      )}
      {state.gameInProgress && (
        <Box component="section">
          <Quiz />
        </Box>
      )}
    </Container>
  );
};
