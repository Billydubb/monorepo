/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import React from 'react';
import {View} from 'react-native';
import {Divider} from 'react-native-elements';

import { action } from '@storybook/addon-actions';
	

import DrawerItem from '../DrawerItem/DrawerItem';
import DrawerProfileContainer from '../DrawerProfileContainer/DrawerProfileContainer';

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
 * 	iconColor: string, rgba or hex color code
 * }
 */


export default class DrawerNavigationContainer extends React.Component {

	state = {
		activeTabIndex: 0
	}

	navigationItemPressed = (route, index) => {
		action(`Should go to screen ${route.label} and close drawer.`)

		this.props.navigator.switchToTab({
			tabIndex: index,
		});
		this.props.navigator.toggleDrawer({
			side: 'left',
			to: 'closed',
			animated: 'true',
		});

		this.setState({
			activeTabIndex: index
		});
	}

	render(){
		const {tabs, profileInfo} = this.props;
		const {imgSource, ...rest} = profileInfo;

		if (!tabs) {
			return null;
		} else {
			return (
				<View style={styles.container}>

					<DrawerProfileContainer
						source={imgSource}
						{...rest}
					
					/>

					<View style={styles.navigationContainer}>
						{tabs.map((route, index) => {
							const navigationLabel = route.title;
							const navigationIconName = route.iconName;
							const iconColor = route.iconColor;

							return (
								<React.Fragment key={route.screen}>
									<DrawerItem
										label={navigationLabel}
										iconName={navigationIconName}
										isActive={this.state.activeTabIndex === index}
										iconColor={iconColor}
										onPress={() => {this.navigationItemPressed(route, index)}}
									>
									</DrawerItem>
									{route.divider && <Divider style={styles.divider} /> }
								</React.Fragment>
							);
						})}
					</View>
				</View>

			
			);
		}	
		
	}
}

DrawerNavigationContainer.defaultProps = {
	children: null,
	onPress: () => {},
};

DrawerNavigationContainer.propTypes = {
	children: PropTypes.node,
	tabs: PropTypes.array,
	activeTabIndex: PropTypes.number,
	profileInfo:  PropTypes.object
};
