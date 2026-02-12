import React from 'react'
import { View, Image, StyleSheet } from 'react-native'

const ProfilePicture = ({ picture }) => {
	return (
		<View>
			<Image style={styles.image} source={ require('../../Assets/AppImage/doctor3.png') } />
		</View>
	)
}

const styles = StyleSheet.create({
	image: {
		height: 200,
		width: 200,
		borderRadius: 100,
        backgroundColor:'#1F222A'
	}
})

export default ProfilePicture