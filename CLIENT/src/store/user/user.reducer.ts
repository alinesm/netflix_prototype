import { PayloadAction } from '@reduxjs/toolkit';
import { AuthPayload } from 'services/user/user.type';
import { Data, User } from './user.type';

const authentication = (_state: User, _action: PayloadAction<AuthPayload>) => {};

const setData = (state: User, action: PayloadAction<Data>) => {
  state.data = action.payload;
};

const setError = (state: User, action: PayloadAction<User['error']>) => {
  state.error = action.payload;
};

const reducers = {
  setError,
  setData,
  authentication,
};

export default reducers;
