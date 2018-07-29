import React from 'react';
import {
	Text,
	View,
} from 'react-native';

import { Navigation } from 'react-native-navigation';
import DrawerNavigatorContainer from './components/DrawerNavigationContainer/DrawerNavigationContainer';

const packageName = 'com.rnplayground';



const Tab = () => {
	return(
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Tab Screen</Text>
		  </View>
	)
}
		



function registerScreens(){
	Navigation.registerComponent(`${packageName}.Cart`, () => Tab );
	Navigation.registerComponent(`${packageName}.Wishlist`, () => Tab );
	Navigation.registerComponent(`${packageName}.Deals`, () => Tab );
	Navigation.registerComponent(`${packageName}.Browse`, () => Tab );
	Navigation.registerComponent(`${packageName}.SettingsTab`, () => Tab );
	Navigation.registerComponent(`${packageName}.DrawerScreen`, () => DrawerNavigatorContainer );
}


function getTabConfig() {
	const tabs = [
		{
			screen: `${packageName}.Cart`,
			title: 'Shopping Cart',
			iconName: 'shopping-cart',
			iconColor: 'yellow',
			icon: require('./image.png'),
			navigatorStyle: {
				tabBarHidden: true,
			},
		},
		{
			screen: `${packageName}.Wishlist`,
			title: 'Wishlist',
			iconName: 'favorite',
			iconColor: 'red',
			icon: require('./image.png'),
			navigatorStyle: {
				tabBarHidden: true,
			},

		},
		{
			screen: `${packageName}.Deals`,
			title: 'Deals',
			iconName: 'money-off',
			iconColor: 'orange',
			icon: require('./image.png'),
			navigatorStyle: {
				tabBarHidden: true,
			},

		},
		{
			screen: `${packageName}.Browse`,
			title: 'Browse',
			iconName: 'search',
			iconColor: 'green',
			icon: require('./image.png'),
			divider: true,
			navigatorStyle: {
				tabBarHidden: true,
			},
		},
		{
			screen: `${packageName}.SettingsTab`,
			title: 'Settings',
			iconName: 'settings',
			iconColor: 'grey',
			icon: require('./image.png'),
			navigatorStyle: {
				tabBarHidden: true,
			},
		},
	];

	return tabs;
}

function startApp() {

	registerScreens();
	
	const tabs = getTabConfig();

	const profileInfo = {
		firstName: 'Celsius',
		lastName: 'W.',
		imgSource: require('./image.png')
	}
	
	Navigation.startTabBasedApp(
		{
			tabs: tabs,
			drawer: { 
				left: {
				  screen: `${packageName}.DrawerScreen`, // unique ID registered with Navigation.registerScreen
				  passProps: {
						tabs: tabs,
						activeTabIndex: 0,
						profileInfo: profileInfo

				  },
				  fixedWidth: 800,
				}
			},
			tabsStyle:{
				tabBarHidden: true,
			}
		},
	);

}

startApp();
