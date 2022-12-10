import React from 'react';
import { CardLabel, StyledTableCard } from './styled';
import { Button, Divider } from 'antd';
import Icon from '../Icon/Icon';
import PropTypes from 'prop-types';
import { Span } from '../typography';

const TableCard = ({ body, labels, actions }) => {
  return (
    <StyledTableCard>
      <div className={'cardBody'}>{body?.()}</div>
      <div className={'cardFooter'}>
        {labels?.map((content, index) => {
          const { icon: LabelIcon, text } = content || {};
          return (
            <CardLabel key={index}>
              <Icon stroke={2} size={14} component={LabelIcon} />
              <Span type={'secondary'}>{text}</Span>
            </CardLabel>
          );
        })}
      </div>
      {actions && (
        <>
          <Divider style={{ margin: '.3rem 0rem' }} />
          <div className={'cardAction'}>
            {actions?.map((action, index) => (
              <Button
                key={index}
                size={'small'}
                type={'link'}
                className={'cardButton'}
                onClick={action?.onClick}
              >
                {action.text}
              </Button>
            ))}
          </div>
        </>
      )}
    </StyledTableCard>
  );
};

TableCard.propTypes = {
  body: PropTypes.elementType,
  labels: PropTypes.array,
  actions: PropTypes.array,
};

export default TableCard;
