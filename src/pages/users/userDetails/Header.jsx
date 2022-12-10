import React from 'react';
import { Avatar, Button, Typography } from 'antd';
import { MessageOutlined, UserOutlined } from '@ant-design/icons';
import { Flex } from '../../../components/styled';
import { CardLabel } from '../../../components/card/styled';
import Icon from '../../../components/Icon/Icon';
import { Span } from '../../../components/typography';

const Header = ({ infos }) => {
  return (
    <Flex wrap gap={'1rem'}>
      <Avatar icon={<UserOutlined />} size={70} />
      <Flex column>
        <Typography.Title level={2} style={{ marginBottom: '0' }}>
          Asif Ahmed
        </Typography.Title>
        <Flex wrap gap={'1rem'}>
          {infos?.map(info => {
            return (
              <CardLabel key={1}>
                <Icon stroke={2} size={14} component={info.icon} />
                <Span type={'secondary'}>
                  <Typography.Text type={'secondary'}>
                    {info.value}
                  </Typography.Text>
                </Span>
              </CardLabel>
            );
          })}
        </Flex>
      </Flex>
      <div style={{ marginLeft: 'auto' }}>
        <Button type={'primary'} icon={<MessageOutlined />}>
          Chat
        </Button>
      </div>
    </Flex>
  );
};

Header.propTypes = {};

export default Header;
