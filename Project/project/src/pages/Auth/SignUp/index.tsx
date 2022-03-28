import Box from "@mui/material/Box";
import { Button, TextField } from "@mui/material";

function SignUp() {
  return (
    <div className="d-flex">
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "300px" },
          "& .MuiButton-root": { m: 1, p: 1 },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField label="Username" id="username" variant="outlined" />
        <TextField label="Password" id="password" variant="outlined" />
        <Button variant="contained" color="primary">
          Sign up
        </Button>
      </Box>
    </div>
  );
}
export default SignUp;
