import React from 'react';
import MenuItemCard from './menuItemCard';
import { List } from 'antd';
import { itemsData } from '../../../utils/dummyData/items';

const Items = props => {
  return (
    <List
      dataSource={itemsData}
      grid={{ lg: 3, sm: 2 }}
      renderItem={item => (
        <List.Item>
          <MenuItemCard />
        </List.Item>
      )}
    ></List>
  );
};

Items.propTypes = {};

export default Items;
