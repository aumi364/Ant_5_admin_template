import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Dropdown, Avatar } from 'antd';
import styled from '@emotion/styled';

import { UserOutlined } from '@ant-design/icons';
import { authStore } from '../../store/auth';
const { Item } = Menu;

const MenuItem = styled(Item)`
  padding: 1rem 10rem 1rem 3rem;
`;
function UserSettings() {
  const logout = authStore(state => state?.logout);
  const menu = (
    <Menu>
      <MenuItem key="1">
        <Link to="/dashboard/settings">Settings</Link>
      </MenuItem>
      <MenuItem key="2" onClick={() => logout()}>
        Logout
      </MenuItem>
    </Menu>
  );

  return (
    <Dropdown placement="bottomRight" overlay={menu} trigger="click">
      <Avatar
        size={40}
        src="https://muzotakt.pl/wp-content/uploads/2017/05/Thom-Yorke-1200x900.jpg"
        icon={<UserOutlined />}
      />
    </Dropdown>
  );
}

export default UserSettings;
