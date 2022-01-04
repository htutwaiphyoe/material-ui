import { Button, IconButton } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Send, Delete } from "@mui/icons-material";

function Buttons() {
  return (
    <>
      <Button
        variant="text"
        type="button"
        size="small"
        href="#"
        sx={{
          color: "blueviolet",
        }}
      >
        Text
      </Button>
      <Button variant="contained" disabled disableElevation>
        Contained
      </Button>
      <Button
        variant="outlined"
        onClick={() => alert("You clicked button.")}
        color="success"
        endIcon={<Send />}
      >
        Outlined
      </Button>
      <IconButton>
        <Delete />
      </IconButton>
      <LoadingButton loading variant="outlined">
        Submit
      </LoadingButton>
      <LoadingButton loading loadingIndicator="Loading…" variant="outlined">
        Fetch data
      </LoadingButton>
      <LoadingButton
        loading
        loadingPosition="start"
        startIcon={<Send />}
        variant="outlined"
      >
        Save
      </LoadingButton>
    </>
  );
}

export default Buttons;
