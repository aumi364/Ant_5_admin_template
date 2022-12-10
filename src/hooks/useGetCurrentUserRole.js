import { useLocation } from 'react-router';

export const useGetCurrentUserRole = () => {
  const location = useLocation();
  return location.pathname.split('/').slice(1)[0];
};
