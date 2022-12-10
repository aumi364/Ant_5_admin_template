import React from 'react';
import PropTypes from 'prop-types';
import { Popconfirm } from 'antd';

function ConfirmDialog({ children, onOk }) {
  const handleOk = () => {
    onOk();
  };

  return (
    <Popconfirm
      title="Are you sure you want to delete this item?"
      onConfirm={handleOk}
      // okButtonProps={{ loading: confirmLoading }}
    >
      {children}
    </Popconfirm>
  );
}

ConfirmDialog.propTypes = {
  children: PropTypes.node,
  onOk: PropTypes.func,
};

export default ConfirmDialog;
