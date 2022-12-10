import React from 'react';
import PropTypes from 'prop-types';
import { AvaterCardContainer } from './styled';

const AvaterCard = ({ icon, title, data }) => {
  return (
    <AvaterCardContainer>
      <div>
        <img width={48} src={icon} />
      </div>
      <div className="info">
        <div className="title">{title}</div>
        <div className="discription">{data}</div>
      </div>
    </AvaterCardContainer>
  );
};

AvaterCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
};

export default AvaterCard;
