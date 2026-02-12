import { View, Text, SafeAreaView, TouchableOpacity, Image, StyleSheet, StatusBar, ImageBackground } from 'react-native'
import React from 'react'
import logo from '../Assets/Images/one-health-white.png'
import bgImages from '../Assets/AppImage/getstart-bg-img.jpeg'

const GetStarted = ({navigation}) => {
  return (
    <ImageBackground source={bgImages} style={styles.BackgroundImages}>
        <StatusBar backgroundColor="#190038" barStyle="default"/>
        <SafeAreaView style={styles.sectionContainer}> 
            <View>
                <Image source={logo} style={styles.logoImage} />
            </View>
            <View style={{paddingBottom:50}}>
                <Text style={styles.textStart}>Let’s get started!</Text>
                <Text style={styles.textLog}>
                    Login to enjoy the features we’ve provided, and stay healthy!
                </Text>
            </View>
            <View style={{width:'100%',}}>
                <TouchableOpacity style={styles.LoginButton} activeOpacity={0.7}
                    onPress={() => navigation.navigate('Login', {screen: 'Login'})}
                >
                    <Text style={styles.textLogin}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.SignButton} activeOpacity={0.7}  onPress={() => navigation.navigate("MainScreen", { screen: "Home" })}>
                    <Text style={styles.textSign}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        
        </SafeAreaView>
    </ImageBackground>
  )
}

export default GetStarted;

const styles = StyleSheet.create({
    sectionContainer:{
        paddingHorizontal:24,
        flex:1,
        position:'relative',
        // backgroundColor:'#ffffff8c',
        alignItems:'center',
        justifyContent:'center',
        textAlign:'center',
        width:'100%' 
    },
    BackgroundImages:{
        width:'100%',
        height:'100%',
        resizeMode:'contain'
    },
    logoImage:{
        resizeMode:'contain',
        width:250,
        height:100
    },
    textStart:{
        textAlign:'center',
        fontSize:22,
        fontWeight:'bold',
        color:'#00ec9b',
        paddingBottom:10
    },
    textLog:{
        color:'#ddd',
        textAlign:'center',
        fontWeight:'400',
        fontSize:16,
        letterSpacing:0.5,
        lineHeight:22
    },
    LoginButton :{
        width:'100%',
        padding:12,
        backgroundColor:'#00ec9b',
        borderRadius:12,
        marginVertical:10,
        borderBottomWidth:4,
        borderBottomColor:'#8a56ff'
    },
    textLogin:{
        color:'#130646',
        textAlign:'center',
        fontSize:18,
        fontWeight:'500'
    },
    SignButton:{
        width:'100%',
        padding:12,
        borderColor:'#00b3ff',
        borderWidth:1,
        borderRadius:12,
        marginVertical:10,
        borderBottomWidth:4, 
    },
    textSign:{
        color:'#00b3ff',
        textAlign:'center',
        fontSize:18,
        fontWeight:'500'
    },
})