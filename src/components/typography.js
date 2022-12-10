import React from 'react';
import PropTypes from 'prop-types';

export const Span = ({ children }) => {
  return <span>{children}</span>;
};
Span.propTypes = {
  children: PropTypes.element,
};
