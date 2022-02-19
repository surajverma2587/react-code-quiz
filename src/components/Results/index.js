import { useState } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";

export const Results = ({ results, score }) => {
  const [showResults, setShowResults] = useState(false);

  const onClick = () => {
    setShowResults(!showResults);
  };

  console.log(results, score);

  return (
    <Stack spacing={2}>
      <Typography variant="body2" color="text.secondary">
        Congratulations on completing the quiz
      </Typography>
      <Button variant="contained" disableElevation onClick={onClick}>
        {showResults ? "Hide Results" : "View Results"}
      </Button>
      {showResults && (
        <Stack spacing={2}>
          {results.map((result) => (
            <Box sx={{ minWidth: 275 }}>
              <Card variant="outlined">
                <CardContent>
                  <Grid container spacing={2} sx={{ alignItems: "center" }}>
                    <Grid item xs={11}>
                      <Typography variant="h5" component="div">
                        {result.question}
                      </Typography>
                    </Grid>
                    <Grid item xs={1}>
                      {result.isCorrect ? (
                        <CheckIcon color="success" />
                      ) : (
                        <ClearIcon sx={{ color: "red" }} />
                      )}
                    </Grid>
                  </Grid>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Correct Answer: {result.correctOption}
                  </Typography>
                  <Typography variant="body2">
                    Your Answer: {result.userAnswer}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Stack>
      )}
    </Stack>
  );
};
