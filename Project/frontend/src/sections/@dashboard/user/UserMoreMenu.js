import { useRef, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
// material
import { Menu, MenuItem, IconButton, ListItemIcon, ListItemText } from '@mui/material';
// component
import Iconify from '../../../components/Iconify';

// ----------------------------------------------------------------------

const defaultValue = [
  {
    icon: 'eva:trash-2-outline',
    text: 'Delete',
    extra: {
      // component: { RouterLink },
      to: '#',
      sx: { color: 'text.secondary' }
    }
  },
  {
    icon: 'eva:edit-fill',
    text: 'Edit',
    extra: {
      to: '#',
      sx: { color: 'text.secondary' }
    }
  }
];

export default function UserMoreMenu({ menuList = defaultValue, triggerOpen }) {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const open = () => {
    setIsOpen(true);
    triggerOpen();
  };
  return (
    <>
      <IconButton ref={ref} onClick={open}>
        <Iconify icon="eva:more-vertical-fill" width={20} height={20} />
      </IconButton>

      <Menu
        open={isOpen}
        anchorEl={ref.current}
        onClose={() => setIsOpen(false)}
        PaperProps={{
          sx: { width: 200, maxWidth: '100%' }
        }}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        {menuList.map((res, id) => (
          <MenuItem {...res.extra} key={id}>
            <ListItemIcon>
              <Iconify icon={res.icon} width={24} height={24} />
            </ListItemIcon>
            <ListItemText primary={res.text} primaryTypographyProps={{ variant: 'body2' }} />
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
