import {StyleSheet} from 'react-native';
import COLORS from '../../../config/colors'

const styles = StyleSheet.create({

	container: {
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 30
	},
	avatar :{
		borderWidth: 1,
		borderColor: 'white',
		marginBottom: 10
	},
	nameText: {
		fontFamily: 'Dosis-Medium',
		color: 'white',
		fontSize: 18,
		marginBottom: 10
	}

});

export default styles;