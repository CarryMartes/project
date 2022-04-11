// material
import { Stack, Button, Divider, Typography } from '@mui/material';
import { useEffect, useLayoutEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'src/hooks/useQuery';
// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

export default function AuthSocial() {
  const [isStudent, setStudent] = useState(false);
  const history = useNavigate();
  let query = useQuery();
  useLayoutEffect(() => {
    setStudent(query.get('status') === 'student');
  }, [query]);
  return (
    <>
      <Stack direction="row" spacing={2}>
        <Button
          fullWidth
          size="large"
          color={isStudent ? 'primary' : 'inherit'}
          variant="contained"
          disableElevation
          onClick={() => history('?status=student')}
        >
          <Iconify icon="noto:man-student-light-skin-tone" color="#DF3E30" height={24} />
          <Typography variant="p" sx={{ ml: 2 }}>
            student
          </Typography>
        </Button>

        <Button
          fullWidth
          size="large"
          color={isStudent ? 'inherit' : 'primary'}
          variant="contained"
          disableElevation
          onClick={() => history('?status=teacher')}
        >
          <Iconify
            icon="noto-v1:woman-teacher-medium-light-skin-tone"
            color="#1877F2"
            height={24}
          />
          <Typography variant="p" sx={{ ml: 2 }}>
            teacher
          </Typography>
        </Button>
      </Stack>

      <Divider sx={{ my: 3 }}>
        {/* <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          OR
        </Typography> */}
      </Divider>
    </>
  );
}
