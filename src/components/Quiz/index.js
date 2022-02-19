import { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import { useGame } from "../../hooks/useGame";

export const Quiz = () => {
  const {
    state: { questions, percentComplete },
    dispatch,
  } = useGame();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [optionSelected, setOptionSelected] = useState(false);
  const [displayQuestion, setDisplayQuestion] = useState(true);

  const currentQuestion = questions[currentQuestionIndex];

  const onClick = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setOptionSelected(false);
    } else {
      setDisplayQuestion(false);
    }
    dispatch({ type: "NEXT_QUESTION" });
  };

  const onChange = () => {
    setOptionSelected(true);
  };

  return (
    <div>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box
          sx={{ width: "100%", mr: 1, color: displayQuestion ? "" : "green" }}
        >
          <LinearProgress
            variant="determinate"
            value={percentComplete}
            color={displayQuestion ? "primary" : "inherit"}
          />
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body2" color="text.secondary">{`${Math.round(
            percentComplete
          )}%`}</Typography>
        </Box>
      </Box>
      {displayQuestion && (
        <Box>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">
              {currentQuestion.question}
            </FormLabel>
            <RadioGroup name="radio-buttons-group" onChange={onChange}>
              {currentQuestion.options.map((option, index) => {
                return (
                  <FormControlLabel
                    value={option}
                    control={<Radio />}
                    label={option}
                    key={index}
                  />
                );
              })}
            </RadioGroup>
          </FormControl>
          {optionSelected && (
            <FormControl sx={{ width: "100%" }} variant="standard">
              <Button variant="contained" onClick={onClick}>
                Next
              </Button>
            </FormControl>
          )}
        </Box>
      )}
      {!displayQuestion && (
        <Stack spacing={2}>
          <Typography variant="body2" color="text.secondary">
            Congratulations on completing the quiz
          </Typography>
          <Button variant="contained" disableElevation>
            View Results
          </Button>
        </Stack>
      )}
    </div>
  );
};
