import {
  GetList,
  SetData, SetError, SetSettings,
} from './shows.type';

const getList: GetList = (_state, _actions) => {};
const setData: SetData = (state, action) => {
  state.data = action.payload;
};

const setSetting: SetSettings = (state, action) => {
  state.settings = { ...state.settings, ...action.payload };
};

const setError: SetError = (state, action) => {
  state.error = action.payload;
};

const reducers = {
  getList,
  setData,
  setSetting,
  setError,
};

export default reducers;
