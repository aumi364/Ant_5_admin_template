import React from 'react';
import CustomPaper from '../../components/paper/CustomPaper';
import { Table, Typography } from 'antd';
import { useTranslation } from 'react-i18next';
import { StyledTableWrapper } from '../../components/styled';
import generateStudentsTableColumn from '../../features/table/generateUsersTableColumn';
import { usersData } from './dummydata';

const Users = () => {
  const { t } = useTranslation();
  const columns = generateStudentsTableColumn();
  return (
    <CustomPaper>
      <CustomPaper.Head>
        <Typography.Title>{t('Users')}</Typography.Title>
      </CustomPaper.Head>
      <CustomPaper.Body>
        <StyledTableWrapper>
          <Table columns={columns} dataSource={usersData} />
        </StyledTableWrapper>
      </CustomPaper.Body>
    </CustomPaper>
  );
};

Users.propTypes = {};

export default Users;
