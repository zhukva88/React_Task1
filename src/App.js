import logo from './assets/logo.svg';
import './App.css';
import { Year } from './components/Year';
import React from 'react';

export const App = () => {
	return React.createElement(
		'div',
		{
			className: 'App',
		},
		React.createElement(
			'header',
			{
				className: 'App-header',
			},
			React.createElement('img', {
				src: logo,
				className: 'App-logo',
				alt: 'logo',
			}),
			React.createElement(
				'p',
				null,
				'Edit <code>src/App.js</code> and save to reload.',
			),
			React.createElement(
				'a',
				{
					className: 'App-link',
					href: 'https://reactjs.org',
					target: '_blank',
					rel: 'noopener noreferrer',
				},
				'Learn React',
			),
			React.createElement(Year, null),
		),
	);
};
