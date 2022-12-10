import React, { useState } from 'react';
import { Drawer, FloatButton, Menu, Typography } from 'antd';
import {
  CompassOutlined,
  FolderOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import Icon from '../../components/Icon/Icon';
import { useTranslation } from 'react-i18next';

const DevDrawer = props => {
  const { Text } = Typography;
  const [openDrawer, setOpenDrawer] = useState(false);
  const { t } = useTranslation();
  const showDrawer = () => {
    setOpenDrawer(true);
  };

  const onClose = () => {
    setOpenDrawer(false);
  };

  return (
    <div>
      <FloatButton
        icon={<SettingOutlined />}
        placement="right"
        onClick={showDrawer}
      />
      <Drawer onClose={onClose} open={openDrawer}>
        <Text type={'danger'}>For development purpose</Text>
        <Menu
          items={[
            {
              key: 'login',
              icon: <Icon inherit component={FolderOutlined} />,
              label: <a href={'/login'}>{t('Login')}</a>,
            },
            {
              key: 'resetPassword',
              icon: <Icon inherit component={CompassOutlined} />,
              label: <a href={'/reset-password'}>{t('Reset password')}</a>,
            },
            // {
            //   key: 'verifyOtp',
            //   icon: <Icon inherit component={ToolOutlined} />,
            //   label: <a href={'/verify-otp'}>{t('Verify otp')}</a>,
            // },
            // {
            //   key: 'requestOtp',
            //   icon: <Icon inherit component={ApiOutlined} />,
            //   label: <a href={'/request-otp'}>{t('Request otp')}</a>,
            // },
          ]}
        />
      </Drawer>
    </div>
  );
};

DevDrawer.propTypes = {};

export default DevDrawer;
