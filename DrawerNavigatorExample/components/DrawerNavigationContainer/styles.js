import {StyleSheet} from 'react-native';
import COLORS from '../../../config/colors'

const styles = StyleSheet.create({

	container: {
		flex: 1,
		justifyContent: 'flex-start',
		backgroundColor: 'rgba(26,26,29,1)',
		width: '100%',
		paddingTop: '10%',
	},

	navigationContainer: {
		marginBottom: 30	
	},

	divider: {
		alignSelf: 'center',
		backgroundColor: 'rgba(50,50,50,1)',
		width: '70%',
		marginVertical: 20
	}

});

export default styles;