// material
import { Stack, Button, Divider, Typography } from '@mui/material';
import { useState } from 'react';
// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

export default function AuthSocial() {
  const [isStudent, setStudent] = useState(false);
  return (
    <>
      <Stack direction="row" spacing={2}>
        <Button
          fullWidth
          size="large"
          color={isStudent ? 'inherit' : 'primary'}
          variant="contained"
          disableElevation
        >
          <Iconify icon="noto:man-student-light-skin-tone" color="#DF3E30" height={24} />
          <Typography variant="p" sx={{ ml: 2 }}>
            student
          </Typography>
        </Button>

        <Button
          fullWidth
          size="large"
          color={isStudent ? 'primary' : 'inherit'}
          variant="contained"
          disableElevation
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
