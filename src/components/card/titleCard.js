import React, { useId } from 'react';
import { CardLabel, StyledCard, StyledTitleCard } from './styled';
import Icon from '../Icon/Icon';
import { StyledAvatar } from '../styled';
import { Skeleton, Typography } from 'antd';
import { Span } from '../typography';

import PropTypes from 'prop-types';

const TitleCard = ({ icon, title, labels, action, loading = false }) => {
  const { Title } = Typography;
  return (
    <StyledCard>
      <Skeleton loading={loading} avatar paragraph={{ rows: 1 }} active>
        <StyledTitleCard>
          {icon && typeof icon === 'string' ? (
            <img width={50} height={50} src={icon} />
          ) : (
            <StyledAvatar icon={<Icon component={icon} />} size={50} />
          )}
          <div className={'title-card-content'}>
            <Title level={2}>{title}</Title>
            <div className={'title-label-section'}>
              {labels?.map(content => {
                const generatedId = useId();
                const { icon: LabelIcon, text } = content || {};
                return (
                  text && (
                    <CardLabel key={generatedId}>
                      <Icon stroke={2} size={14} component={LabelIcon} />
                      <Span type={'secondary'}>{text}</Span>
                    </CardLabel>
                  )
                );
              })}
            </div>
          </div>
          {action && <div className={'title-card-actions'}>{action()}</div>}
        </StyledTitleCard>
      </Skeleton>
    </StyledCard>
  );
};

TitleCard.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  title: PropTypes.string,
  labels: PropTypes.array,
  action: PropTypes.func,
  loading: PropTypes.bool,
};
export default TitleCard;
