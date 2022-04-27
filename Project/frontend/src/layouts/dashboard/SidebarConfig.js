// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'subjects',
    path: '/dashboard/subjects',
    icon: getIcon('eva:shopping-bag-fill')
  },
  {
    title: 'Students',
    path: '/dashboard/user',
    icon: getIcon('eva:people-fill')
  },
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: getIcon('eva:pie-chart-2-fill')
  },
  {
    title: 'News',
    path: '/dashboard/blog',
    icon: getIcon('eva:file-text-fill')
  }
];

export default sidebarConfig;
