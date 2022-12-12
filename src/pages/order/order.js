import React from 'react';
import Categories from '../../features/categories/categories';
import { Flex } from '../../components/styled';
import { Typography } from 'antd';
import { useTranslation } from 'react-i18next';
import Items from './items/items';

const Order = props => {
  const { t } = useTranslation();
  return (
    <Flex fullWidth column gap={'2rem'}>
      <Flex column gap={'.2rem'}>
        <Typography.Title level={5}>{t('Category')}</Typography.Title>
        <Categories />
      </Flex>
      <Flex fullWidth column gap={'.2rem'}>
        <Typography.Title level={5}>{t('Items')}</Typography.Title>
        <Items />
      </Flex>
    </Flex>
  );
};
Order.propTypes = {};

export default Order;
