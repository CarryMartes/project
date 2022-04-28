import PropTypes from 'prop-types';
// material
import { Paper, Typography } from '@mui/material';

// ----------------------------------------------------------------------

SearchNotFound.propTypes = {
  searchQuery: PropTypes.string
};

export default function SearchNotFound({
  searchQuery = '',
  title = 'Not found',
  descr = 'No results found for',
  ...other
}) {
  return (
    <Paper {...other}>
      <Typography gutterBottom align="center" variant="subtitle1">
        {title}
      </Typography>
      <Typography variant="body2" align="center">
        {descr} &nbsp;
      </Typography>
    </Paper>
  );
}
