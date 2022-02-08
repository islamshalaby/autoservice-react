import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UserSettings from './Context/UserSettings/UserSettings';
import {
  Router
} from "react-router-dom";
import history from "./domains/services/history";
import Countries from './Context/Countries/Countries'
import { ThemeProvider } from '@material-ui/core';
import theme from './assets/theme/default'
import { SnackbarProvider } from 'notistack';


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <SnackbarProvider 
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          maxSnack={1} 
          SnackbarProps={{ autoHideDuration: 3000 }}
        >
        <Router history={history}>
          <Countries>
            <UserSettings>
              <App />
            </UserSettings>
          </Countries>
        </Router>
      </SnackbarProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
