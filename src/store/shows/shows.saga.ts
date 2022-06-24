import { AxiosResponse } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { showsService } from 'services/shows/shows';
import { showsActions } from './shows.slice';
import { List } from './shows.type';

function* getList() {
  try {
    yield put(showsActions.setSetting({ loading: true }));
    const response: AxiosResponse<List> = yield call(showsService().getList);

    yield put(showsActions.setData({ list: response.data }));
    yield put(showsActions.setError(''));
  } catch (exception) {
    yield put(showsActions.setError('Error'));
  } finally {
    yield put(showsActions.setSetting({ loading: false }));
  }
}

const showsSaga = [
  takeLatest('shows/getList', getList),
];

export default showsSaga;
