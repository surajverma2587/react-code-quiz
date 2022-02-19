import { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";

import { useGame } from "../../hooks/useGame";

export const Quiz = () => {
  const {
    state: { questions },
  } = useGame();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [optionSelected, setOptionSelected] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  const onClick = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setOptionSelected(false);
    }
  };

  const onChange = () => {
    setOptionSelected(true);
  };

  return (
    <div>
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
    </div>
  );
};
