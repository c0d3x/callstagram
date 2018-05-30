import { YellowBox } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import Feed from './src/Feed';
import Detail from './src/Detail';

YellowBox.ignoreWarnings([
	'Warning: componentWillMount is deprecated',
	'Warning: componentWillReceiveProps is deprecated',
]);

export default createStackNavigator({
	Home: {
		screen: Feed,
		navigationOptions: {
			title: 'Callstagram'
		},
	},
	Detail: {
		screen: Detail,
		navigationOptions: {
			title: 'Detail'
		},
	},
});
