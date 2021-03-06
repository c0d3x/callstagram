import React from 'react';
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';

import FeedItem from './FeedItem';

class Feed extends React.Component {
	state = {
		isLoading: true,
		images: null
	};

	componentDidMount() {
		this.fetchImages();
	}

	fetchImages = async () => {
		const response = await fetch(
			'https://callstagram-api.now.sh/api'
		);
		const { data } = await response.json();
		this.setState({
			isLoading: false,
			images: []
		});
	};

	onItemPress = item => {0
		this.props.navigation.push('Detail', { item });
	};

	render() {
		const { images, isLoading } = this.state;

		return (
			<React.Fragment>
				{isLoading && (
					<View style={styles.container}>
						<ActivityIndicator size="large" />
					</View>
				)}
				{!isLoading && (
					<FlatList
						data={images}
						keyExtractor={item => item.id}
						contentContainerStyle={styles.list}
						renderItem={({ item }) => (
							<FeedItem item={item} onItemPress={this.onItemPress} />
						)}
						numColumns={3}
					/>
				)}
			</React.Fragment>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center'
	},
	list: {
		margin: -2
	}
});

export default Feed;
