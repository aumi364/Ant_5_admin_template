import React from 'react';

const GenerateMeetingsColumn = () => {
  return [
    {
      title: 'Name',
      dataIndex: '',
      key: 'name',
      render: ({ first_name, last_name } = {}) => {
        return `${first_name ?? ''} ${last_name ?? ''}`;
      },
      responsive: ['sm'],
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      responsive: ['sm'],
    },
    {
      title: 'Phone',
      dataIndex: 'phone_number',
      key: 'phone',
      responsive: ['sm'],
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
