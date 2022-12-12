import React from 'react';
import { StyledMenuItemCard } from './styled';
import { Avatar, Button, Segmented, Typography } from 'antd';
import Burger from '../../../public/images/burger.png';
import { Flex } from '../styled';

const MenuItemCard = props => {
  return (
    <StyledMenuItemCard>
      <Flex justify={'space-between'} column gap={'.5rem'}>
        <Flex fullWidth>
          <Typography.Title level={5}>Chicken Cheese Burger</Typography.Title>
        </Flex>
        <Flex fullWidth gap={'1rem'} align={'center'}>
          <Avatar src={Burger} size={110} />

          <div className={'menuitem-price-tag'}>250/=</div>
        </Flex>
        <Flex fullWidth justify={'center'}>
          <Segmented options={['S', 'M', 'L']} />
        </Flex>
        <Button block type={'primary'}>
          Add to cart
        </Button>
      </Flex>
    </StyledMenuItemCard>
  );
};

MenuItemCard.propTypes = {};

export default MenuItemCard;
