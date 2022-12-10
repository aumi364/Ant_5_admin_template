import React from 'react';
import { NavLink } from 'react-router-dom';

const GenerateMeetingsColumn = () => {
  return [
    {
      title: 'Student name',
      dataIndex: '',
      key: 'name',
      render: ({ first_name, last_name, uuid } = {}) => {
        return (
          <NavLink className="hyper-link" to={`/dashboard/students/${uuid}`}>
            {`${first_name ?? ''} ${last_name ?? ''}`}
          </NavLink>
        );
      },
      responsive: ['sm'],
    },
    {
      title: 'Municipality',
      dataIndex: 'municipality',
      key: 'municipality',
      responsive: ['sm'],
    },
    {
      title: 'Assigned traffic school',
      dataIndex: 'assigned_traffic_school',
      key: 'assigned_traffic_school',
      responsive: ['sm'],
      render: ({ name } = {}) => {
        return name;
      },
    },
    {
      title: 'Assigned teacher',
      dataIndex: 'assigned_teacher',
      key: 'assigned_teacher',
      responsive: ['sm'],
      render: ({ name } = {}) => {
        return name;
      },
    },
    {
      title: 'Assigned mentor',
      dataIndex: 'assigned_mentor',
      key: 'assigned_mentor',
      responsive: ['sm'],
      render: ({ name } = {}) => {
        return name;
      },
    },

    // {
    //   title: 'Meeting Details',
    //   dataIndex: '',
    //   key: 'decisions',
    //   responsive: ['xs'],
    //   render: ({ title, portfolio_company, meeting_date, id }) => {
    //     return (
    //       <TableCard
    //         body={() => {
    //           return (
    //             <NavLink
    //               style={{ color: 'black', '&:hover': { color: 'blue' } }}
    //               to={`/dashboard/meetings/${id}`}
    //             >
    //               {title}
    //             </NavLink>
    //           );
    //         }}
    //         labels={[
    //           { icon: IconBuildingSkyscraper, text: portfolio_company?.name },
    //           {
    //             icon: IconCalendarTime,
    //             text: moment(meeting_date).format('MMM DD, YY'),
    //           },
    //         ]}
    //       />
    //     );
    //   },
    // },
  ];
};
export default GenerateMeetingsColumn;
