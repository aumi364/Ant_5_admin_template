import React, { useState } from 'react';
import Icon from '../../components/Icon/Icon';
import { NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { HomeOutlined, TeamOutlined } from '@ant-design/icons';
import { NavigationMenu } from '../../components/styled';

const SideBarMenu = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState(
    location.pathname.split('/').length === 2
      ? location.pathname.split('/')[1]
      : location.pathname.split('/')[2],
  );

  const adminMenu = [
    {
      key: 'dashboard',
      icon: <Icon inherit component={HomeOutlined} />,
      label: <NavLink to={'/dashboard'}>{t('Overview')}</NavLink>,
    },
    {
      key: 'users',
      icon: <Icon inherit component={TeamOutlined} />,
      label: <NavLink to={'users'}>{t('Users')}</NavLink>,
    },
  ];

  const getMenu = () => {
    // if (userType === userTypes.admin) return adminMenu;
    return adminMenu;
  };

  const onClick = e => {
    setCurrentPath(e.key);
  };

  return (
    <NavigationMenu
      mode="inline"
      className={'styled-sider'}
      items={getMenu().map(({ icon, label, key }) => ({
        key: key,
        icon: icon,
        label: label,
      }))}
      selectedKeys={[currentPath]}
      onClick={onClick}
    />
  );
};

// SideBarMenu.propTypes = {
//   userType: PropTypes.number.isRequired,
// };

export default SideBarMenu;
