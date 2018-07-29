/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import React from 'react';
import { 
	TouchableNativeFeedback, 
	Text,
	View,
	TouchableOpacity} from 'react-native';

import {Icon} from 'react-native-elements';
import PropTypes from 'prop-types';
import styles from './styles';

export default DrawerItem = (props) => {
	const {label, iconName, iconColor, isActive} = props;
	const containerStyles = isActive ? [styles.container, styles.containerActive] : [styles.container]
	return (
		<TouchableOpacity onPress={props.onPress}
			underlayColor='blue'>
			<View style={containerStyles}>
				{isActive && 
					<View style={styles.leftBar}/>
				}

				<Icon name={iconName}
					color={iconColor || 'white'}
					size={24}
					containerStyle={styles.icon}
				/>
				<Text style={styles.label}>
					{label}
				</Text>
			</View>
		</TouchableOpacity>
	);
}

DrawerItem.defaultProps = {
	children: null,
	onPress: () => {},
};

DrawerItem.propTypes = {
	children: PropTypes.node,
	label: PropTypes.string.isRequired,
	onPress: PropTypes.func,
	iconName: PropTypes.string.isRequired,
	isActive: PropTypes.bool.isRequired,
	iconColor: PropTypes.string
};
