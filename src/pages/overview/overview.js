import React from 'react';
import { Empty, Typography } from 'antd';
import { Flex } from '../../components/styled';
import { useGetUsersQuery } from '../../services/queries/user';
import { useTranslation } from 'react-i18next';

const Overview = props => {
  const { Title } = Typography;
  const { data } = useGetUsersQuery();
  const { t } = useTranslation();
  // Cookies.set('dummy', 'hello');
  // const cookie = Cookies.get('csrftoken');
  // console.log(cookie);

  return (
    <>
      <Title level={1}>{t('Overview')}</Title>
      <Flex
        justify={'center'}
        style={{ background: 'white', borderRadius: '12px' }}
      >
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
      </Flex>
    </>
  );
};

export default Overview;
