import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export const Question = ({
  currentQuestion,
  onChange,
  optionSelected,
  onClick,
}) => {
  return (
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
  );
};
