import { call, put, takeLatest } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import userService from 'services/user/user';
import { AuthResponse, AuthPayload, ErrorMessageEnum } from 'services/user/user.type';
import { AxiosError } from 'axios';
import userSlice, { initialState } from './user.slice';
import { USER_TOKEN_COOKIE } from './user.type';

function* authentication(action: PayloadAction<AuthPayload>) {
  try {
    const response: AuthResponse = yield call(userService().auth, action.payload);

    yield put(userSlice.actions.setData(response.data));
    yield put(userSlice.actions.setError(initialState.error));
    localStorage.setItem(USER_TOKEN_COOKIE, response.data.token);
  } catch (expection) {
    // @ts-ignore
    const { response: { data } } = expection as AxiosError;
    // @ts-ignore
    yield put(userSlice.actions.setError(ErrorMessageEnum[data?.message] || ''));
  }
}

function* logoff() {
  const { data } = userSlice.getInitialState();

  yield put(userSlice.actions.setData(data));
  localStorage.removeItem(USER_TOKEN_COOKIE);
}

const userSaga = [
  takeLatest('user/authentication', authentication),
  takeLatest('user/logoff', logoff),
];

export default userSaga;
