import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native' 
import FontAwesome from "react-native-vector-icons/FontAwesome"; 
const OptionButtons = ({ name, size, color, onPress }) => {
	return (
		<View>
			<TouchableOpacity onPress={onPress}
             style={[styles.iconContainer, {
				width: size,
				height: size,
				borderRadius: size/2,
				backgroundColor: color
			}]}>
				<FontAwesome size={30} name={name} color={"white"} />
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	iconContainer: {
		backgroundColor: "red",
		borderRadius: 100,
		alignItems: 'center',
		justifyContent: 'center'
	}
})

export default OptionButtons