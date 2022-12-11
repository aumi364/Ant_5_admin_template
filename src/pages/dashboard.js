import { useTheme } from '@emotion/react';
import React from 'react';
import { Layout } from 'antd';
import Sidebar from '../features/sidebar/sidebar';
import DashboardRouter from '../routes/dashboardRouter';
import Topbar from '../features/topbar/topbar.js';
import { DashboardContainer } from '../components/styled';

const { Content, Footer } = Layout;

export default function Dashboard() {
  const theme = useTheme();
  return (
    <DashboardContainer>
      <Layout>
        <Layout>
          <Sidebar />
          <Layout className={'styledLayout'}>
            <Topbar />
            <Content className={'styledContent'}>
              <DashboardRouter />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </DashboardContainer>
  );
}
