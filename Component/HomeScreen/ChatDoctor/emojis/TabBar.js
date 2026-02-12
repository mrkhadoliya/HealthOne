import {
	View,
	TouchableOpacity,
	StyleSheet,
	Animated,
	Dimensions,
} from "react-native";
import React from 'react'

const TabBar = ({ navigationState, position, setIndex }) => {
	const inputRange = navigationState.routes.map((x, i) => i);
  return (
    <View style={styles.container}>
			{navigationState.routes.map((route, index) => {
				 
				return (
					<TouchableOpacity
						key={index}
						style={styles.tab}
						onPress={() => setIndex(index)}
					>
						<Animated.Text style={{fontSize: 18 }}>
							{route.title}
						</Animated.Text>
					</TouchableOpacity>
				);
			})}
		</View>
  )
}

export default TabBar
const styles = StyleSheet.create({
    container: {
		height: 50,
		flexDirection: 'row',
		justifyContent: 'space-around',
		borderWidth: 1,
		borderTopWidth: 0,
		borderLeftWidth: 0,
		borderRightWidth: 0,
		borderColor: '#697083'
	},
	tab: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		paddingBottom: 5
	}
})