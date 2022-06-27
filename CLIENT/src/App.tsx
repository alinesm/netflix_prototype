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
import ShowsList from 'screens/shows/shows';
import { SHOWS_URL } from 'screens/shows/shows.type';
import store from 'store/store/store';
import Show from 'screens/show/show';
import { SHOW_URL } from 'screens/show/show.type';

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
            <Route element={<Guard><ShowsList /></Guard>} path={SHOWS_URL} />
            <Route element={(<Guard><Show /></Guard>)} path={SHOW_URL} />
          </Routes>
        </ThemeProvider>
        <p>{this.state.apiResponse}</p>
      </Provider>
    );
  }
}

export default App;
