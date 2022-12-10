import React from 'react';
import {
  MailOutlined,
  PhoneOutlined,
  PushpinOutlined,
} from '@ant-design/icons';
import CustomPaper from '../../../components/paper/CustomPaper';
import Header from './Header';

const UserDetails = () => {
  const infos = [
    { value: '+8801789339847', icon: PhoneOutlined },
    { value: 'Uppsala', icon: PushpinOutlined },
    { value: 'aumi.asif@gmail.com', icon: MailOutlined },
  ];
  return (
    <CustomPaper>
      <Header infos={infos} />
    </CustomPaper>
  );
};

UserDetails.propTypes = {};

export default UserDetails;
