import logo from './assets/logo.svg';
import './App.css';
import { Year } from './components/Year';
import React from 'react';

//В данном случае использован - декларативный подход. В данном случае это выражается через JSX. Четко описывается, что нужно сделать, а не как.

export const App = () => {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<Year />
			</header>
		</div>
	);
};
