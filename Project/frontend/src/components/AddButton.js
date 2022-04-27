import { Button } from '@mui/material';
import { forwardRef } from 'react';
import Iconify from './Iconify';

// eslint-disable-next-line react/display-name
const CustomButton = forwardRef((props, ref) => (
  <Button
    variant="contained"
    startIcon={<Iconify icon="eva:plus-fill" />}
    ref={ref}
    {...props.events}
  >
    {props.value}
  </Button>
));

export default CustomButton;
