/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import styled from 'styled-components';

import {
  Dimensions,
} from 'react-native';

import bluePit from './assets/blue_pit.png';


const ContainerView = styled.View`
  background-color: slategray;
  flex: 1;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 25px;
  align-items: center;
`;

const MyText = styled.Text`
  color: white;
  font-size: 16px;
  line-height: 18px;
  font-family: 'gt-america-medium';
  min-width: 280px;
  letter-spacing: 1px;
  width: 90%;
`;

const MyGraphic = styled.Image`
  left: 0;
  position: absolute;
  bottom: 0;
  resize-mode: cover;
  width: ${Dimensions.get('window').width}px;
  height: ${Dimensions.get('window').width}px;
  align-self: flex-start;
`;

class App extends Component {
	render() {
		return (
			<>
				<ContainerView>
				<MyText>
				It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of light, it was the season of darkness, it was the spring of hope, it was the winter of despair - Charles Dickens
				</MyText>
				<MyGraphic source={bluePit} />
				</ContainerView>
			</>
		);
	}
};

export default App;
