import {
  Container,
  Stack,
  Typography,
  Card,
  TableContainer,
  Table,
  TableBody,
  IconButton,
  TableRow,
  Button,
  TableCell,
  Checkbox
} from '@mui/material';
import { useEffect, useMemo, useState } from 'react';
import CustomButton from 'src/components/AddButton';
import Page from 'src/components/Page';
import Scrollbar from 'src/components/Scrollbar';
import { UserListHead, UserListToolbar, UserMoreMenu } from 'src/sections/@dashboard/user';
import USERLIST from '../_mocks_/user';
import { filter } from 'lodash';
import { getSubject } from 'src/shared/api/request/subjects';
import { useParams } from 'react-router-dom';
import { getRepositories } from 'src/shared/api/request/repos';
import SearchNotFound from 'src/components/SearchNotFound';
import Iconify from 'src/components/Iconify';

const TABLE_HEAD = [
  { id: 'id', label: 'ID', alignRight: false },
  { id: 'name', label: 'Name', alignRight: false },
  { id: 'description', label: 'Description', alignRight: false },
  { id: 'actions' }
];

const MENU_ITEMS = [
  {
    icon: 'carbon:add-alt',
    text: 'Add students',
    key: 'students',
    extra: {
      sx: { color: 'text.primary' }
    }
  },
  {
    icon: 'akar-icons:link-out',
    text: 'Open in github',
    key: 'github',
    extra: {
      sx: { color: 'text.primary' }
    }
  },
  {
    icon: 'eva:trash-2-outline',
    text: 'Delete',
    extra: {
      // component: { RouterLink },
      to: '#',
      sx: { color: 'red' }
    }
  }
];

const Repositories = () => {
  const [selected, setSelected] = useState([]);
  const [filterName, setFilterName] = useState('');
  const [currentSubject, setCurrentSubject] = useState(null);
  const [repositories, setRepositories] = useState([]);
  const [currentOpened, setCurrentOpened] = useState(null);
  const { id } = useParams();

  const menu_items = useMemo(
    () =>
      MENU_ITEMS.map((item) => {
        switch (item.key) {
          case 'students':
            item.extra = {
              ...item.extra,
              onClick: () => {
                console.log('HII');
              }
            };
            break;
          case 'github':
            item.extra = {
              ...item.extra,
              onClick: (event) => {
                // eslint-disable-next-line no-undef
                window.open(`${process.env.REACT_APP_GITHUB_LINK + currentOpened.name}`, '_blank');
              }
            };
            break;
          default:
            break;
        }
        return item;
      }),
    [currentOpened]
  );

  useEffect(() => {
    getSubject(id).then((res) => {
      setCurrentSubject(res);
    });
    getRepositories({ id }).then((res) => {
      setRepositories(res.repos);
    });
  }, []);

  return (
    <Page title="Repostitories">
      <Container>
        <Stack alignItems="center" direction="row" justifyContent="space-between" mb={5}>
          <Typography variant="h4">
            {currentSubject && currentSubject.subject.name + "'s repositories"}
          </Typography>
          <CustomButton
            value="Add repository"
            events={{
              onClick: () => {
                console.log('HERE WE go');
              }
            }}
          />
        </Stack>
        <Card>
          <Scrollbar>
            <TableContainer sx={{ minWidth: 800 }}>
              <Table>
                <UserListHead
                  checkbox={false}
                  headLabel={TABLE_HEAD}
                  rowCount={USERLIST.length}
                  onRequestSort={() => null}
                  numSelected={selected.length}
                />
                <TableBody>
                  {repositories.map((row) => {
                    const { id, name, description } = row;
                    const isItemSelected = selected.indexOf(name) !== -1;

                    return (
                      <TableRow
                        hover
                        key={id}
                        tabIndex={-1}
                        role="checkbox"
                        selected={isItemSelected}
                        aria-checked={isItemSelected}
                      >
                        <TableCell align="left">{id}</TableCell>
                        <TableCell align="left">
                          <Typography variant="subtitle2" sx={{ textDecoration: 'underline' }}>
                            {name}
                          </Typography>
                        </TableCell>
                        <TableCell align="left">{description}</TableCell>
                        <TableCell align="right">
                          <UserMoreMenu
                            menuList={menu_items}
                            triggerOpen={() => {
                              setCurrentOpened(row);
                              console.log(row, 'Row');
                            }}
                          />
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
                {repositories.length === 0 && (
                  <TableBody>
                    <TableRow>
                      <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                        <SearchNotFound
                          searchQuery={filterName}
                          title=""
                          descr="The course repostiroty is empty"
                        />
                      </TableCell>
                    </TableRow>
                  </TableBody>
                )}
              </Table>
            </TableContainer>
          </Scrollbar>
        </Card>
      </Container>
    </Page>
  );
};
export default Repositories;
