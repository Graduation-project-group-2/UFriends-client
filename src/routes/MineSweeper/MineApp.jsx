import React from 'react';
import { 
	SettingsContainer,
	StatusContainer,
	BoardContainer
} from './containers';
import {
	Wrapper,
	Title
} from './AppStyle';

const MineApp = () => {
	return (
		<Wrapper>
			<Title>Minesweeper Game in React</Title>
			<SettingsContainer />
			<StatusContainer />
			<BoardContainer />
		</Wrapper>
	);
};

export default MineApp;