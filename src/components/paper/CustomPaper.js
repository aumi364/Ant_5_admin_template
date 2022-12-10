import React from 'react';
import PropTypes from 'prop-types';
import { StyledPaper, StyledPaperBody, StyledPaperHead } from './styled';

const CustomPaper = ({ children }) => {
  return <StyledPaper>{children}</StyledPaper>;
};

CustomPaper.Head = ({ children }) => {
  return <StyledPaperHead>{children}</StyledPaperHead>;
};

CustomPaper.Body = ({ children }) => {
  return <StyledPaperBody>{children}</StyledPaperBody>;
};

CustomPaper.Head.displayName = 'Head';
CustomPaper.Body.displayName = 'Body';

CustomPaper.propTypes = {
  children: PropTypes.element,
};

CustomPaper.Head.propTypes = {
  children: PropTypes.element,
};
CustomPaper.Body.propTypes = {
  children: PropTypes.element,
};
export default CustomPaper;
