import React from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';

export const SubmitButton = ({ children, loading, block = true, ...props }) => (
  <Button
    type="primary"
    htmlType="submit"
    block={block}
    loading={loading}
    {...props}
  >
    {children}
  </Button>
);

SubmitButton.propTypes = {
  children: PropTypes.element,
  loading: PropTypes.bool,
  block: PropTypes.bool,
};
