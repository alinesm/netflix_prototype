import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { listSelector } from 'store/shows/shows.selector';
import { showsActions } from 'store/shows/shows.slice';

export default function Shows() {
  const list = useSelector(listSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showsActions.getList());
  }, []);

  useEffect(() => {
    console.log(list);
  }, [list]);

  return (
    <p>Hello World</p>
  );
}
