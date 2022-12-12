import React from 'react';
import MenuItemCard from '../order/items/menuItemCard';
import { List } from 'antd';

const Items = props => {
  return (
    <List>
      <MenuItemCard />
    </List>
  );
};

Items.propTypes = {};

export default Items;
