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

import DeviceInfo from 'react-native-device-info';

const ContainerView = styled.View`
  background-color: slategray;
  flex: 1;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 25px;
  align-items: center;
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

/**
 * Base Text for variable sized Text components.
 * It has the defaults we want for all Text
 * components, like white, special font, etc.
 * Below, more components extend this base class.
 */
const SizedText = styled.Text`
  color: white;
  font-family: 'gt-america-medium';
  min-width: 280px;
  letter-spacing: 1px;
  width: 90%;
`;

const LargeText = styled(SizedText)`
  font-size: 24px;
  line-height: 28px;
`;

const MediumText = styled(SizedText)`
  font-size: 20px;
  line-height: 22px;
`;

const SmallText = styled(SizedText)`
  font-size: 16px;
  line-height: 18px;
`;

const TinyText = styled(SizedText)`
  font-size: 14px;
  line-height: 16px;
`;

const TeenyWeenyText = styled(SizedText)`
  font-size: 10px;
  line-height: 12px;
`;

class App extends Component {
	constructor(props) {
		super(props);
		// Assume fontScale is 1 by default, in case it is not discoverable.
		this.state = {
			fontScale : 1
		}
	}
	getSizedContent(content) {
		if (this.state.fontScale < 0.9) {
			return <LargeText>{content}</LargeText>;
		} else if (this.state.fontScale >= 0.9 && this.state.fontScale < 1.2) {
			return <MediumText>{content}</MediumText>;
		} else if (this.state.fontScale >= 1.2 && this.state.fontScale < 1.6) {
			return <SmallText>{content}</SmallText>;
		} else if (this.state.fontScale >= 1.6 && this.state.fontScale < 1.7) {
			return <TinyText>{content}</TinyText>;
		} else {
			return <TeenyWeenyText>{content}</TeenyWeenyText>;
		}
	}
	async componentDidMount() {
		const fontScale = await DeviceInfo.getFontScale();
		// fontScale is 2 on Android A20 all the way to the right.
		// fontScale is 1.7000000476837158 on Android A20 6th setting from left.
		// fontScale is 1.5 on Android A20 5th setting from left.
		// fontScale is 1.2999999523162842 on Android A20 4th setting from left.
		// fontScale is 1.100000023841858 3rd setting from left.
		// fontScale is 1 2nd setting from left.
		// fontScale is 0.8999999761581421 1st setting from left.
		// fontScale is 0.800000011920929 all the way left.
		// console.log("fontScale " + fontScale);
		this.setState({fontScale});
	}
	render() {
		let Comp = this.getSizedContent("It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of light, it was the season of darkness, it was the spring of hope, it was the winter of despair - Charles Dickens");
		return (
			<>
				<ContainerView>
				{Comp}
				<MyGraphic source={bluePit} />
				</ContainerView>
			</>
		);
	}
};

export default App;
