import {
  Avatar,
  Button,
  CircularProgress,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { withAuth } from "..";
import { Link } from "react-router-dom";
import Autocomplete from "@mui/material/Autocomplete";
import React, { useEffect, useState } from "react";
import { getUsersList } from "shared/api/request/usersList";
import { debounce } from "shared/lib/debounce";
import { User } from "shared/api/request/models";

function SignUp() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const searchUsers = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoading(true);
    getUsersList({
      username: e.target.value,
    }).then((res) => {
      if (res.data.message === 'Not Found') {
        setUsers([])
        return;
      }      
      setUsers([
        {
          avatar_url: res.data.avatar_url,
          label: res.data.username || '',
          name: res.data.name || e.target.value,
        },
      ]);
      setLoading(false);
    });
  };
  const debouncer = debounce(searchUsers, 400);

  return (
    <Stack spacing={2}>
      <h2>Create an account</h2>
      <TextField label="Nickname" id="username" variant="standard" />
      <Autocomplete
        disablePortal
        loading={loading}
        id="combo-box-demo"
        options={users}
        sx={{ width: 300 }}
        getOptionLabel={(result) => `${result.name}`}
        renderOption={(props, option: User) => (
          <li {...props}>
            <Avatar src={option.avatar_url} />
            <Typography sx={{marginLeft: '10px'}}>{option.name}</Typography>
          </li>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Github username"
            onInput={debouncer}
            id="github_username"
            variant="standard"
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <React.Fragment>
                  {loading ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : null}
                  {params.InputProps.endAdornment}
                </React.Fragment>
              ),
            }}
          />
        )}
      />
      <TextField
        label="Password"
        id="create_password"
        type={"password"}
        variant="standard"
      />
      <TextField
        label="Repeat password"
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
        Already have an account?
        <Link
          to={{
            pathname: "/login",
          }}
        >
          Sign in
        </Link>
      </p>
    </Stack>
  );
}
export default withAuth(SignUp);
