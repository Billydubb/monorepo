import {StyleSheet} from 'react-native';
import COLORS from '../../../config/colors'

const styles = StyleSheet.create({

	container: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 20,
		paddingVertical:10,
		marginVertical: 0,
		width: '100%',
	},

	containerActive:{
		backgroundColor: 'rgba(203,37,70,0.2)',
	},

	label: {
		fontFamily: 'Dosis-Medium',
		fontSize: 23,
		fontSize: 20,
		fontWeight: '100',
		color: '#FAFAFC',
		marginHorizontal: 20
	},

	icon: {
		width: 24,
		height: 24,
		marginHorizontal: 0,
		marginRight: 20
	},

	leftBar: {
		position: 'absolute',
		left: 0,
		width: 4,
		height: '160%',
		backgroundColor: 'red'
	}
	

});

export default styles;