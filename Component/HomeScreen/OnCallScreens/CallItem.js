import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native"; 

import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import image1 from '../../Assets/DateImage/Success-done2.png'

const callsmap = [
  {
    picture: image1,
    username:"Mercy Patrick",
    callStatus:0,
    time:"12:00 PM Today",
  },
  {
    picture: image1,
    username:"Mercy Patrick",
    callStatus:1,
    time:"12:00 PM Today",
  },{
    picture: image1,
    username:"Mercy Patrick",
    callStatus:2,
    time:"12:00 PM Today",
  },
  {
    picture: image1,
    username:"Mercy Patrick",
    callStatus:0,
    time:"12:00 PM Today",
  },{
    picture: image1,
    username:"Mercy Patrick",
    callStatus:3,
    time:"12:00 PM Today",
  },
  {
    picture: image1,
    username:"Mercy Patrick",
    callStatus:4,
    time:"12:00 PM Today",
  },
]


const CallItem = () => { 
  const navigation = useNavigation();
	return (
    <>
    {callsmap.map((items, index) => {
      return (
        <View style={styles.container} key={index}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={items.picture} />
        </View>
        <View style={styles.usernameAndCall}>
          <View style={styles.usernameAndStatus}>
            <Text style={styles.username}>{items.username}</Text>
            <View style={styles.callStatusContainer}>
              <Ionicons
                style={styles.iconStyles}
                name="arrow-back-outline"
                size={15}
                color="#00EC9B"
              />
              <Text style={styles.time}>{items.time}</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row" }}> 
            <TouchableOpacity 
             onPress={() => navigation.navigate("on call", { screen: "OnCallScreens" })}
              style={{ padding: 10 }}
            >
              <Ionicons name="call-outline"
                size={25}
                color={'#fff'}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      )
    })}
      
    </>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingTop: 25,
		paddingRight: 20,
		paddingLeft: 10,
		flexDirection: "row",
	},
	imageContainer: {
		borderRadius: 25,
		height: 50,
		width: 50,
		overflow: "hidden",
		alignItems: "center",
		justifyContent: "center",
		alignSelf: "center",
    backgroundColor:'#1F222A'
	},
	image: {
		height: 50,
		width: 50,
		borderRadius: 100,
    resizeMode:'contain',

	},
	usernameAndCall: {
		flexDirection: "row",
		justifyContent: "space-between",
		flex: 1,
		alignItems: "center",
	},
	usernameAndStatus: {
		paddingHorizontal: 10,
	},
	username: {
		color: '#fff',
		fontSize: 18,
	},
	callStatusContainer: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	iconStyle: {
		alignSelf: 'center'
	},
	time: {
		color: '#ccc',
		paddingHorizontal: 5
	}
});

export default CallItem;