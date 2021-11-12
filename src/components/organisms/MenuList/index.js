import { memo } from 'react';
import { ListItem } from 'components/molecules';
import { routePaths } from 'routes';
import { useRouter } from 'next/router';
import { logout } from 'services';
import { screenLoading } from 'controls';
import { toast } from 'react-toastify';
import { getAuthDataFromCookie } from 'utils';

const menus = [
  {
    id: 1,
    title: 'Edit Profile',
    icon: 'ic-edit',
    path: routePaths.PROFILE
  },
  {
    id: 2,
    title: 'Undanganku',
    icon: 'ic-paper',
    path: routePaths.USER_INVITATIONS
  },
  {
    id: 3,
    title: 'Informasi Lainnya',
    icon: 'ic-info',
    path: routePaths.INFO
  },
  {
    id: 4,
    title: 'Keluar',
    icon: 'ic-logout',
    path: routePaths.LOGOUT
  }
];

const MenuList = () => {
  const router = useRouter();
  const isAuthenticated = Boolean(getAuthDataFromCookie());

  const authPath = [
    routePaths.PROFILE,
    routePaths.USER_INVITATIONS,
    routePaths.LOGOUT
  ];

  const navigate = menu => {
    if (menu.path === routePaths.LOGOUT) {
      screenLoading(true);
      return logout().then(() => {
        screenLoading(false);
        router.replace(routePaths.HOME);
      }).catch(err => {
        toast.error(err?.message);
        screenLoading(false);
      });
    }

    return router.push(menu.path);
  };

  return (
    <>
      {menus.map(menu => {
        if (authPath.includes(menu.path) && !isAuthenticated) {
          return null;
        }

        return (
          <ListItem
            key={menu.id}
            title={menu.title}
            icon={menu.icon}
            onPress={() => navigate(menu)}
          />
        );
      })}
    </>
  );
};

export default memo(MenuList);