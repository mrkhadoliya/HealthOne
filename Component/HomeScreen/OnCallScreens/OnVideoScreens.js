import React, { useState } from 'react'
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native'
import ProfilePicture from './ProfilePicture';  
import OptionButtons from './OptionButtons';  
import callImageBg from '../../Assets/AppImage/liveCallVideo.png'

const OnVideoScreens = ({ navigation, route }) => {
	const { username, picture } = route.params;
	const [speakerOn, setSpeakerOn] = useState(false);
	const [isMuted, setIsMuted] = useState(false);
	const [isCalled, setIsCalled] = useState(false);

	return (
        <ImageBackground source={callImageBg} style={{flex:1, }}>
            <View style={{ backgroundColor: '#181a20b8', flex: 1, position:'relative' }}>
                <View style={styles.profileContainer}>
                    <View style={styles.usernameAndTime}>
                        <Text style={styles.username}>Dr. Sunil</Text>
                        <Text style={styles.time}>00:45</Text>
                    </View>
                   <View style={styles.liveView}>
                        <Image style={styles.liveCalled} source={ require('../../Assets/AppImage/doctor3.png') } /> 
                   </View>
                </View>
                <View style={{position:'absolute', bottom:30, left:0, right:0}}>
                    <View style={styles.optionsContainer}>
                        <OptionButtons 
                            onPress={() => setIsMuted(value => !value)}
                            name="microphone-slash"
                            size={60}
                            color={isMuted ? '#829460' : '#181a2063'}
                        />
                        <OptionButtons 
                            onPress={() => setSpeakerOn(value => !value)}
                            name="volume-up"
                            size={60}
                            color={speakerOn ? '#181a2063' : '#54B435'}
                        />
                        <OptionButtons 
                            onPress={() => setIsCalled(value => !value)}
                            name={isCalled ? 'video-camera' : 'phone'}
                            size={60}
                            color={isCalled ? '#181a2063' : '#FC5404'}
                        />
                    </View>
                    <View style={styles.endCallContainer}>
                        <OptionButtons 
                            onPress={() => navigation.goBack()}
                            name="phone"
                            size={60}
                            color={'red'}
                        />
                    </View>
                </View>
            </View>
        </ImageBackground>
	)
};

const styles = StyleSheet.create({
	profileContainer: {
		alignItems: 'center',
		justifyContent: 'space-around',
		paddingBottom: 50
	},
	usernameAndTime: {
		paddingVertical: 50,
		alignItems: 'center'
	},
	username: {
		fontSize: 18,
		color: '#fff'
	},
	time: {
		fontSize: 12,
		color: '#ccc'
	},
    liveView:{
        position:'absolute',
        right:15,
        top:20
    },
    liveCalled:{
        width:100,
        height:150,
        borderRadius:12,
        backgroundColor:'#181A20',
        resizeMode:'contain'
    },
	optionsContainer: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		paddingHorizontal: 50,
		paddingBottom: 70
	},
	endCallContainer: {
		alignItems: 'center'
	}
})

export default OnVideoScreens