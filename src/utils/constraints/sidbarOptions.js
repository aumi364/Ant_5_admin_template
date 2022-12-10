import { FileOutlined, UserOutlined } from '@ant-design/icons';
import React from 'react';
import { appUrls } from './appUrls';

export const options = [
  {
    title: 'Home',
    path: appUrls.home,
    icon: <UserOutlined />,
  },
  {
    title: 'SubSection',
    icon: <FileOutlined />,
    children: [
      {
        title: 'SubOption1',
        path: appUrls.subOption1,
      },
      {
        title: 'SubOption-2',
        path: appUrls.subOption2,
      },
    ],
  },
];
