import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import { GameForm } from "../../components/GameForm";
import { useGame } from "../../hooks/useGame";

export const Game = () => {
  const { gameInProgress } = useGame();

  return (
    <Container maxWidth="md">
      {!gameInProgress && (
        <Box component="section" sx={{ border: "1px solid black" }}>
          <GameForm />
        </Box>
      )}
      {gameInProgress && <Box component="section">Quiz goes here</Box>}
    </Container>
  );
};
