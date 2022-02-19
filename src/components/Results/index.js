import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

export const Results = () => {
  return (
    <Stack spacing={2}>
      <Typography variant="body2" color="text.secondary">
        Congratulations on completing the quiz
      </Typography>
      <Button variant="contained" disableElevation>
        View Results
      </Button>
    </Stack>
  );
};
