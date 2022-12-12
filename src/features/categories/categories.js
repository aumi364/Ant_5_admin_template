import React from 'react';
import { Avatar } from 'antd';

import { StyledSegmented } from './styled';
import { categories } from '../../utils/dummyData/categories';

const Categories = props => {
  return (
    <StyledSegmented
      style={{ gap: '.5rem' }}
      options={categories.map(category => ({
        label: (
          <div style={{ padding: 2 }}>
            <Avatar src={category?.icon} />
            <div>{category?.name}</div>
          </div>
        ),
        value: category.key,
      }))}
    />
  );
};

Categories.propTypes = {};

export default Categories;
