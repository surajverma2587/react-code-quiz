import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

import { useGame } from "../../hooks/useGame";

export const GameForm = () => {
  const { category, setCategory, setGameInProgress } = useGame();

  const onChange = (event) => {
    setCategory(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    setGameInProgress(true);
  };

  return (
    <form onSubmit={onSubmit}>
      <FormControl sx={{ width: "100%" }} variant="standard">
        <InputLabel id="gameCategoryLabel">Choose a category</InputLabel>
        <Select
          labelId="gameCategoryLabel"
          id="gameCategory"
          onChange={onChange}
          value={category}
        >
          <MenuItem value="music" sx={{ width: "100%" }}>
            Music
          </MenuItem>
          <MenuItem value="movies" sx={{ width: "100%" }}>
            Movies
          </MenuItem>
          <MenuItem value="sports" sx={{ width: "100%" }}>
            Sports
          </MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ width: "100%" }} variant="standard">
        <Button fullWidth variant="contained" type="submit">
          Contained
        </Button>
      </FormControl>
    </form>
  );
};