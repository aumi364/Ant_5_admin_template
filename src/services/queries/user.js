import * as endpoints from '../endpoints';
import http from '../https';
import { useMutation, useQuery } from 'react-query';
import configUrl from '../../utils/helpers/configUrl';

// Companies -> GET
export const getUsers = async queries => {
  const url = configUrl({
    endpoint: endpoints.users,
    query: queries,
  });
  const response = await http.get(url);
  return response?.data;
};

export const useGetUsersQuery = ({ queries } = {}) =>
  useQuery(['users', queries], () => getUsers(queries));

// User Update -> Patch
export const updateUser = async data => {
  const response = await http.patch(`${endpoints.users}/${data.id}/`, data);
  return response?.data;
};

export const useUpdateUser = () => useMutation(updateUser);

// User Create -> POST
export const createUser = async data => {
  const response = await http.post(`${endpoints.users}/`, data);
  return response?.data;
};

export const useCreateUser = () => useMutation(createUser);
