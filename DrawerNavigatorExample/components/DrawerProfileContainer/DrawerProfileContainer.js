/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import React from 'react';
import {View, Text} from 'react-native';
import {Avatar} from 'react-native-elements';

import { action } from '@storybook/addon-actions';
	

import PropTypes from 'prop-types';
import styles from './styles';


/**
 * 
 * tabs object:
 * {
 *  screen: string
 * 	label: string 
 *  icon: image source?
 *  iconName: string (material icons from react-native-elements)
 * }
 */
export default DrawerProfileContainer = (props) => {
	
	const {source, firstName, lastName, containerStyle} = props;
	const iconProps = source ? {source: source} : {icon: {name: 'account-circle'}}

	return(
		<View style={[styles.container, containerStyle]}>
			<Avatar
				width={80}
				height={80}
				activeOpacity={0.7}	
				rounded={true}
				containerStyle={styles.avatar}
				{...iconProps}
			/>
			<Text
				style={styles.nameText}>
				{firstName} {lastName}
			</Text>
		</View>
	);

		
}

DrawerProfileContainer.defaultProps = {
	children: null,
	onPress: () => {},
};

DrawerProfileContainer.propTypes = {
	children: PropTypes.node,
	source: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.number
	]),
	firstName: PropTypes.string,
	lastName: PropTypes.string,
	containerStyle: PropTypes.object

};
