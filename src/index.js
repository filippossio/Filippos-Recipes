import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import App from './App';
import * as serviceWorker from './serviceWorker';

const theme = createMuiTheme({
	palette: {
		common: {
			black: 'rgba(0, 0, 0, 1)',
			white: '#fff'
		},
		background: {
			paper: '#fff',
			'default': '#fafafa'
		},
		primary: {
			light: 'rgba(103, 183, 247, 1)',
			main: 'rgba(66, 165, 245, 1)',
			dark: 'rgba(46, 115, 171, 1)',
			contrastText: '#fff'
		},
		secondary: {
			light: 'rgba(154, 210, 156, 1)',
			main: 'rgba(129, 199, 132, 1)',
			dark: 'rgba(90, 139, 92, 1)',
			contrastText: '#fff'
		},
		error: {
			light: '#e57373',
			main: '#f44336',
			dark: '#d32f2f',
			contrastText: '#fff'
		},
		text: {
			primary: 'rgba(0, 0, 0, 0.87)',
			secondary: 'rgba(0, 0, 0, 0.54)',
			disabled: 'rgba(0, 0, 0, 0.38)',
			hint: 'rgba(0, 0, 0, 0.38)'
		}
	}
});

ReactDOM.render(
	<MuiThemeProvider theme={theme}>
		<CssBaseline />
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</MuiThemeProvider >,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
