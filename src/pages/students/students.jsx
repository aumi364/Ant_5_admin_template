import React from 'react';
import CustomPaper from '../../components/paper/CustomPaper';
import { Table, Typography } from 'antd';
import { useTranslation } from 'react-i18next';
import { StyledTableWrapper } from '../../components/styled';
import generateStudentsTableColumn from '../../features/table/generateStudentsTableColumn';
import { studentData } from './dummydata';

const Students = () => {
  const { t } = useTranslation();
  const columns = generateStudentsTableColumn();
  return (
    <CustomPaper>
      <CustomPaper.Head>
        <Typography.Title>{t('Students')}</Typography.Title>
      </CustomPaper.Head>
      <CustomPaper.Body>
        <StyledTableWrapper>
          <Table columns={columns} dataSource={studentData} />
        </StyledTableWrapper>
      </CustomPaper.Body>
    </CustomPaper>
  );
};

Students.propTypes = {};

export default Students;
