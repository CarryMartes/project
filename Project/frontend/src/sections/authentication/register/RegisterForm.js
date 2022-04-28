import * as Yup from 'yup';
import { Fragment, useEffect, useMemo, useState } from 'react';
import { useFormik, Form, FormikProvider } from 'formik';
import { useNavigate } from 'react-router-dom';
// material
import {
  Stack,
  TextField,
  IconButton,
  InputAdornment,
  CircularProgress,
  Avatar,
  Autocomplete,
  Typography
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
// component
import Iconify from 'src/components/Iconify';
import { debounce } from 'src/shared/lib/debounce';
import { getUsersList, signUp } from 'src/shared/api/request/users';
import { useSelector } from 'react-redux';

// ----------------------------------------------------------------------

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const status = useSelector((state) => state.user['signup'].isStudent);
  const navigate = useNavigate();

  const RegisterSchema = Yup.object().shape({
    first_name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('First name required'),
    last_name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Last name required'),
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    nickname: Yup.string().required('Please fill github nickname'),
    password: Yup.string().required('Password is required')
  });

  const formik = useFormik({
    initialValues: {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      nickname: ''
    },
    validationSchema: RegisterSchema,
    onSubmit: () => {
      signUp({ ...formik.values, status: status, username: formik.values.nickname }).then((res) => {
        navigate('/login');
      });
    }
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik;

  const searchUsers = (e) => {
    setLoading(true);
    getUsersList({
      username: e.target.value
    })
      .then((res) => {
        setUsers([
          {
            ...res,
            label: res.username ? res.username : res.login,
            name: res.name ? res.name : res.login
          }
        ]);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const debouncer = useMemo(() => debounce(searchUsers, 400), []);

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <TextField
              fullWidth
              label="First name"
              {...getFieldProps('first_name')}
              error={Boolean(touched.first_name && errors.first_name)}
              helperText={touched.first_name && errors.first_name}
            />

            <TextField
              fullWidth
              label="Last name"
              {...getFieldProps('last_name')}
              error={Boolean(touched.last_name && errors.last_name)}
              helperText={touched.last_name && errors.last_name}
            />
          </Stack>

          <TextField
            fullWidth
            autoComplete="username"
            type="email"
            label="Email address"
            {...getFieldProps('email')}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
          />

          <Autocomplete
            loading={loading}
            id="combo-box-demo"
            options={users}
            sx={{ width: '100%' }}
            getOptionLabel={(result) => `${result.name}`}
            renderOption={(props, option) => (
              <li {...props}>
                <Avatar src={option.avatar_url} />
                <Typography>{option.name}</Typography>
              </li>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Github username"
                onInput={debouncer}
                id="github_username"
                error={Boolean(touched.nickname && errors.nickname)}
                helperText={touched.nickname && errors.nickname}
                {...getFieldProps('nickname')}
                variant="outlined"
                InputProps={{
                  ...params.InputProps,
                  endAdornment: (
                    <>
                      {loading ? <CircularProgress color="inherit" size={20} /> : null}
                      {params.InputProps.endAdornment}
                    </>
                  )
                }}
              />
            )}
          />

          <TextField
            fullWidth
            autoComplete="current-password"
            type={showPassword ? 'text' : 'password'}
            label="Password"
            {...getFieldProps('password')}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton edge="end" onClick={() => setShowPassword((prev) => !prev)}>
                    <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                  </IconButton>
                </InputAdornment>
              )
            }}
            error={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password}
          />

          <LoadingButton
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            loading={isSubmitting}
          >
            Register
          </LoadingButton>
        </Stack>
      </Form>
    </FormikProvider>
  );
}
