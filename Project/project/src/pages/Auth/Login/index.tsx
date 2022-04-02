import { Button, Stack, TextField } from "@mui/material";
import { withAuth } from "..";
import { Link } from "react-router-dom";
function Login() {
  return (
    <Stack spacing={2}>
      <h2>Welcome back!</h2>
      <TextField label="Nickname" id="username" variant="standard" />
      <TextField
        label="Password"
        id="password"
        type={"password"}
        variant="standard"
      />
      <Button
        variant="contained"
        color="primary"
        sx={{
          textTransform: "none",
          marginTop: "15px !important",
        }}
      >
        Log in
      </Button>
      <p>
        Don't have an account?
        <Link
          to={{
            pathname: "/signup",
          }}
        >
          Sign up
        </Link>
      </p>
    </Stack>
  );
}

export default withAuth(Login);
