// material
import {
  Autocomplete,
  Avatar,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  TextField,
  Typography
} from '@mui/material';
import { Form, Formik, FormikProvider, useFormik } from 'formik';
import { useState, useEffect } from 'react';
import { addSubjects, getSubjects } from 'src/shared/api/request/subjects';

export default function AddDialog({ dialog, handleDialogClose }) {
  const [courses, setCourses] = useState([]);
  const [selected, setSelected] = useState([]);
  const formik = useFormik({
    initialValues: {
      courseName: ''
    },
    onSubmit: function () {
      addSubjects({
        courses: selected
      })
        .then((res) => {
          console.log('RES success');
        })
        .finally(() => {
          handleDialogClose();
        });
    }
  });
  useEffect(() => {
    if (!dialog) return;
    getSubjects().then((res) => {
      setCourses(res.data);
    });
  }, [dialog]);

  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } = formik;

  return (
    <Dialog
      open={dialog}
      onClose={handleDialogClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{'Search courses by code '}</DialogTitle>
      <DialogContent>
        <FormikProvider value={formik}>
          <Form onSubmit={handleSubmit}>
            <Stack spacing={3} width="400px">
              <Autocomplete
                id="combo-box-demo"
                options={courses}
                multiple
                sx={{ width: '100%', marginTop: '20px' }}
                getOptionLabel={(result) => `${result.code}`}
                onChange={(_, value) => {
                  setSelected(value);
                }}
                renderOption={(props, option) => (
                  <li {...props}>
                    <Typography>{option.name}</Typography>
                  </li>
                )}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Course code"
                    id="github_username"
                    {...getFieldProps('nickname')}
                    variant="outlined"
                    InputProps={{
                      ...params.InputProps,
                      endAdornment: (
                        <>
                          {/* {loading ? <CircularProgress color="inherit" size={20} /> : null} */}
                          {params.InputProps.endAdornment}
                        </>
                      )
                    }}
                  />
                )}
              />
            </Stack>
          </Form>
        </FormikProvider>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleSubmit} autoFocus>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}
