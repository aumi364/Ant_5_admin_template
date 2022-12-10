export const meetingTypes = [
  {
    id: 'W',
    name: 'Weekly',
    value: 'W',
  },
  {
    id: 'D',
    name: 'Daily',
    value: 'D',
  },
  {
    id: 'M',
    name: 'Monthly',
    value: 'M',
  },
  {
    id: 'S',
    name: 'Spontaneous',
    value: 'S',
  },
];

export const priorities = [
  { label: 1, id: 1 },
  { label: 2, id: 2 },
  { label: 3, id: 3 },
  { label: 4, id: 4 },
  { label: 5, id: 5 },
  { label: 6, id: 6 },
  { label: 7, id: 7 },
  { label: 8, id: 8 },
  { label: 9, id: 9 },
];

export const userTypes = {
  admin: 1,
  staff: 2,
  companyUser: 3,
};

export const getUserType = type => {
  if (type === userTypes.admin) return 'Admin';
  if (type === userTypes.staff) return 'Internal user';
  if (type === userTypes.companyUser) return 'Company user';
};
