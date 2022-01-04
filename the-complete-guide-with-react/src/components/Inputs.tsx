import { InputAdornment, TextField } from "@mui/material";
import { AccountBalanceRounded } from "@mui/icons-material";

function Inputs() {
  return (
    <div>
      <TextField
        placeholder="Name"
        variant="outlined"
        type="text"
        color="success"
      />
      <TextField
        label="Email"
        size="small"
        variant="filled"
        type="email"
        error
      />
      <TextField
        label="Address"
        placeholder="Address"
        variant="standard"
        type="text"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountBalanceRounded />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
}

export default Inputs;
