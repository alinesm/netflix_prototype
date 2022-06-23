/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/sort-comp */
import React from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Guard from 'components/guard/guard';
import Login from 'screens/login/login.screen';
import { LOGIN_URL } from 'screens/login/login.types';
import theme from 'themes/main/theme';
import { GlobalStyles } from 'themes/main/global-styles';
import MoviesList from 'screens/movies-list/movies-list';
import { MOVIES_LIST_URL } from 'screens/movies-list/movies-list.type';
import store from 'store/store/store';

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { apiResponse: '' };
  }

  callAPI() {
    fetch('http://localhost:5000/testApi')
      .then((res) => res.text())
      .then((res) => this.setState({ apiResponse: res }));
  }

  componentDidMount() {
    this.callAPI();
  }

  render() {
    return (
      <Provider store={store}>
        <GlobalStyles />
        <ThemeProvider theme={theme}>
          <Routes>
            <Route element={<Login />} path={LOGIN_URL} />
            <Route element={<Guard><MoviesList /></Guard>} path={MOVIES_LIST_URL} />
          </Routes>
        </ThemeProvider>
        <p>{this.state.apiResponse}</p>
      </Provider>
    );
  }
}

export default App;
