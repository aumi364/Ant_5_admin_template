import React from 'react';
import { useTheme } from '@emotion/react';
import PropTypes from 'prop-types';

const Icon = ({
  component: Component,
  color,
  stroke = 1.5,
  inherit,
  style,
}) => {
  const theme = useTheme();
  return (
    <Component
      strokeWidth={stroke}
      style={{
        color: inherit ? 'inherit' : color ?? theme.textColor.secondary,
        ...style,
      }}
    />
  );
};

Icon.propTypes = {
  component: PropTypes.elementType.isRequired,
  color: PropTypes.string,
  size: PropTypes.number,
  stroke: PropTypes.number,
  inherit: PropTypes.bool,
};

export default Icon;
