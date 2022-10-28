import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import MineApp from './MineApp';

export default function MineSweeper() {
	return (
		ReactDom.render(
			<Provider store={store}>
				<MineApp />
			</Provider>,
			document.getElementById('react-root')
		)
	);
}