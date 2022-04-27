import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
// material
import { Box, Card, Link, Typography, Stack, Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';
// utils
import { fCurrency } from '../../../utils/formatNumber';
//
import Label from '../../../components/Label';
import ColorPreview from '../../../components/ColorPreview';
import Iconify from 'src/components/Iconify';

// ----------------------------------------------------------------------

const ProductImgStyle = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute'
});

// ----------------------------------------------------------------------

ShopProductCard.propTypes = {
  product: PropTypes.object
};

export default function ShopProductCard({ product }) {
  const { students, repositories, subject } = product;

  return (
    <Card>
      <Box sx={{ pt: '70%', position: 'relative' }}>
        {status && (
          <Label
            variant="filled"
            color={(status === 'sale' && 'error') || 'info'}
            sx={{
              zIndex: 9,
              top: 16,
              right: 16,
              position: 'absolute',
              textTransform: 'uppercase'
            }}
          >
            {status}
          </Label>
        )}
        <Stack position="absolute" top="50%" left="50%" sx={{ transform: 'translate(-50%, -50%)' }}>
          <Avatar sx={{ backgroundColor: '#212B36', height: '100px', width: '100px' }}>
            {subject.code}
          </Avatar>
        </Stack>
      </Box>

      <Stack spacing={2} sx={{ p: 3 }}>
        <Link to="/dashboard/repositories" color="inherit" underline="hover" component={RouterLink}>
          <Typography variant="subtitle2" noWrap>
            {subject.name}
          </Typography>
        </Link>

        <Stack direction="row" alignItems="center" justifyContent="space-between">
          {/* <ColorPreview colors={colors} /> */}
          <Typography variant="subtitle1">
            <Stack display="flex" alignItems="center" flexDirection="row">
              <Iconify color="#4d5461" icon="ri:git-repository-line" width="20px" height="20px" />
              {repositories}
              <Iconify
                icon="openmoji:man-student-light-skin-tone"
                width="20px"
                height="20px"
                sx={{ marginLeft: '20px' }}
              />
              {students}
            </Stack>
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
}
