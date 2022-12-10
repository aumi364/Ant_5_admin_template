import React from 'react';
import { Layout } from 'antd';
import { appStore } from '../../store/app';
import SidebarWrapper from './styled';
import BrandLogo from '../../components/brand/brandLogo';
import SideBarMenu from './sidebarMenu';
import { useWindowSize } from '../../hooks/useWindowSize';
import { useTheme } from '@emotion/react';

const { Sider } = Layout;
export default function Sidebar() {
  const theme = useTheme();
  const collapsed = appStore(state => state?.collapsed);
  const toggleCollapsed = appStore(state => state?.toggleCollapsed);
  const { width: screenWidth } = useWindowSize() || {};
  const { md, sm, xs } = theme.screenSize;
  // const userType = authStore(state => state?.userType);

  return (
    <>
      {screenWidth > md && (
        <SidebarWrapper>
          <Sider breakpoint="lg" className={'styled-sidebar'}>
            <div className="styled-logo">
              <BrandLogo />
            </div>
            <SideBarMenu />
          </Sider>
        </SidebarWrapper>
      )}
    </>
  );
}
