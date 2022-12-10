import React, { useState } from 'react';
import { Button, Drawer, Dropdown, Layout, Typography } from 'antd';
import TopbarWrapper, { StyledSwitch } from './styled';
import { authStore } from '../../store/auth';
import { useTheme } from '@emotion/react';
import { useWindowSize } from '../../hooks/useWindowSize';
import { Flex, StyledAvatar } from '../../components/styled';
import { useTranslation } from 'react-i18next';
import { DownOutlined, LogoutOutlined, MenuOutlined } from '@ant-design/icons';
import SidebarMenu from '../sidebar/sidebarMenu';
import Chicken from '../../../public/images/chicken.svg';
import Icon from '../../components/Icon/Icon';
import { languageStore } from '../../store/language';

const { Header } = Layout;

export default function Topbar() {
  const theme = useTheme();
  const { t, i18n } = useTranslation();

  const { setLanguage } = languageStore(state => state);
  const { width: screenWidth } = useWindowSize() || {};
  const { md, sm, xs } = theme.screenSize;
  const { logout } = authStore();
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const showDrawer = () => {
    setOpenDrawer(true);
  };

  const onClose = () => {
    setOpenDrawer(false);
  };
  const [loading, setLoading] = useState(false);
  const items = [
    {
      type: 'group',
      key: 'language',
      label: 'Language',
      children: [
        {
          key: 'change_language',
          label: (
            <Flex justify={'space-between'}>
              <Typography.Text type={'secondary'}>{'En'}</Typography.Text>
              <StyledSwitch
                loading={loading}
                flag={i18n.language}
                defaultChecked={i18n.language === 'sv'}
                onChange={async checked => {
                  if (checked) {
                    await i18n.changeLanguage('sv');
                    setLanguage('sv');
                  } else {
                    await i18n.changeLanguage('en');
                    setLanguage('en');
                  }
                }}
              />
              <Typography.Text type={'secondary'}>{'Sv'}</Typography.Text>
            </Flex>
          ),
        },
      ],
    },
    { type: 'divider' },
    {
      key: 'logout',
      label: 'Logout',
      icon: <LogoutOutlined />,
    },
  ];
  const onClick = e => {
    if (e.key === 'logout') {
      logout();
    }
    console.log(e);
  };
  // const items = [{''}];
  return (
    <TopbarWrapper>
      <Header className="styled-topbar">
        <Flex fullWidth justify={'space-between'}>
          {screenWidth < md && (
            <>
              <Button
                type="text"
                icon={<MenuOutlined />}
                onClick={showDrawer}
              />

              <Drawer
                title="Basic Drawer"
                placement="left"
                onClose={onClose}
                open={openDrawer}
                width={'250px'}
              >
                <SidebarMenu />
              </Drawer>
            </>
          )}
          <Flex gap="1rem" style={{ marginLeft: 'auto' }}>
            <StyledAvatar src={Chicken} size={'large'} />
            <Dropdown
              size={'normal'}
              menu={{
                items,
                onClick: onClick,
              }}
              open={openMenu}
              onOpenChange={setOpenMenu}
              trigger={['click']}
              placement="bottomRight"
            >
              <Flex align={'center'} gap={'2rem'} style={{ cursor: 'pointer' }}>
                <Flex column>
                  <Typography.Title level={5}>{'Asif Ahmed'}</Typography.Title>
                  <Typography.Text type={'secondary'}>
                    {'Admin'}
                  </Typography.Text>
                </Flex>
                <Icon component={DownOutlined} />
              </Flex>
            </Dropdown>
          </Flex>
        </Flex>
      </Header>
    </TopbarWrapper>
  );
}
