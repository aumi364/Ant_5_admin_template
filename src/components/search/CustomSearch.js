import React from 'react';
import { Input } from 'antd';
import PropTypes from 'prop-types';

const CustomSearch = ({ setSearch, placeholder, fullWidth, ...props }) => {
  const searchHandler = e => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };
  return (
    <Input
      allowClear
      style={{
        maxWidth: fullWidth ? '100%' : '400px',
      }}
      {...props}
      onChange={searchHandler}
      placeholder={placeholder}
    />
  );
};

CustomSearch.propTypes = {
  setSearch: PropTypes.func.isRequired,
  fullWidth: PropTypes.bool,
  placeholder: PropTypes.string,
};

export default CustomSearch;
