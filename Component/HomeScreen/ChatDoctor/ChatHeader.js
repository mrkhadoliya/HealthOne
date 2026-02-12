import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native"; 
import Ionicons from "react-native-vector-icons/Ionicons"; 
 

const ChatHeader = ({navigation}) => { 
	return (
		<View style={styles.container}>
			 <TouchableOpacity> 
                <Ionicons name="videocam-outline" style={{ fontSize: 20 }} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('MainScreen', {screen: 'BottomNavigation'}) }
                style={{ paddingHorizontal: 5 }}
            >
                <Ionicons name="call-outline" style={{ fontSize: 20 }} color="#fff" />
            </TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		backgroundColor:'#1F222A',  
        alignItems:'center',
        justifyContent:'center'
	},
	backButton: {
		alignSelf: "center",
		paddingHorizontal: 10,
	},
	profileOptions: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingHorizontal: 10,
	},
	profile: {
		flexDirection: "row",
		alignItems: "center",
		borderColor: "#fff",
		flex: 4,
	},
	image: {
		height: 65,
		width: 65,
		borderRadius: 32.5,
	},
	usernameAndOnlineStatus: {
		flexDirection: "column",
		justifyContent: "center",
		paddingHorizontal: 10,
	},
	username: {
		color: '#fff',
		fontSize: 18,
		fontWeight: "bold",
	},
	onlineStatus: {
		color: '#fff',
		fontSize: 16,
	},
	options: {
		// flex: 2,
		flexDirection: "row",
		justifyContent: "flex-end",
		alignItems: "center",
        gap:8,
	},
});

export default ChatHeader;