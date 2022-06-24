import axiosIntance from 'modules/axios/axios';
import { useSelector } from 'react-redux';
import { List } from 'store/shows/shows.type';
import { tokenSelector } from 'store/user/user.selector';

export const showsService = () => {
  const token = useSelector(tokenSelector);

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const getList = () => axiosIntance.get<List>('/shows', { headers });

  return {
    getList,
  };
};

export default showsService;
