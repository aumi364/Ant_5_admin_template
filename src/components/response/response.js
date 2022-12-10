import React from 'react';
import PropTypes from 'prop-types';
import { Flex } from '../styled';
import SuccessSvg from '../../assets/icons/success';
import { Typography } from 'antd';

const Response = ({ type, title, description, action }) => {
  const { Title, Text } = Typography;
  return (
    <Flex column gap={'.5rem'}>
      {type === 'success' ? <SuccessSvg /> : <SuccessSvg />}
      <Title level={1}>{title}</Title>
      <Text type={'secondary'}>{description}</Text>
      {action && action?.()}
    </Flex>
  );
};

Response.propTypes = {
  type: PropTypes.oneOf(['success', 'error']).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  action: PropTypes.func,
};

export default Response;
