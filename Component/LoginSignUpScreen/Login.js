import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, StatusBar, ImageBackground, TextInput, Image, ScrollView } from "react-native";
import React from "react";
import bgImages from "../Assets/AppImage/gradient-cool-art.jpg";
import Feather from "react-native-vector-icons/Feather";

import orImage from "../Assets/Icon/or-line.png";
import googleImage from "../Assets/Icon/Google.png";
import appleImage from "../Assets/Icon/Apple.png";
import fbImage from "../Assets/Icon/Facebook.png";



const Login = ({ navigation }) => {
    return (
        <ImageBackground source={bgImages} style={styles.BackgroundImages}>  
                <StatusBar backgroundColor="#020202" barStyle="default" />
                <SafeAreaView style={styles.sectionContainer}>
                    <View style={{ width: "100%" }}>
                        <View style={{ overflow: "hidden", position: "relative", paddingVertical: 10 }}>
                            <TextInput placeholder="Enter your email" value="jamesschleifer@gmail.com" placeholderTextColor="#A1A8B0" style={styles.InputText} keyboardType="email-address" />
                            <TouchableOpacity style={styles.mailIcons}>
                                <Feather name="mail" size={20} color="#e5e7ebe0" />
                            </TouchableOpacity>
                        </View>
                        <View style={{ overflow: "hidden", position: "relative", paddingVertical: 10 }}>
                            <TextInput placeholder="Enter your password" value="**********" placeholderTextColor="#A1A8B0" style={styles.InputText} keyboardType="visible-password" />
                            <TouchableOpacity style={styles.mailIcons}>
                                <Feather name="lock" size={20} color="#e5e7ebe0" />
                            </TouchableOpacity>
                        </View>
                        <View style={{ overflow: "hidden", position: "relative", paddingVertical: 10 }}>
                            <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate("Forgot Password", { screen: "ResetPassword" })}>
                                <Text style={styles.Forgot}>Forgot Password?</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ width: "100%" }}>
                        <TouchableOpacity style={styles.LoginButton} activeOpacity={0.7} onPress={() => navigation.navigate("Login Success", { screen: "LoginSuccess" })}>
                            <Text style={styles.textLogin}>Login</Text>
                        </TouchableOpacity>

                        <View style={styles.dFlex}>
                            <Text style={styles.accountSign}>Don’t have an account?</Text>
                            <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate("Sign Up", { screen: "SignUp" })}>
                                <Text style={{ fontSize: 16, color: "#00ec9b", fontWeight: "500" }}>Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        <Image source={orImage} style={styles.orLineImg} />
                    </View>
                    <View style={{ width: "100%", flexDirection:'row', alignItems:'center', justifyContent:'space-around' }}>
                        <TouchableOpacity activeOpacity={0.7} style={styles.IConButton}>
                            <Image source={googleImage} style={styles.IConSocails} />
                             <Text>&nbsp;Google</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.7} style={styles.IConButton}>
                            <Image source={appleImage} style={styles.IConSocails} />
                             <Text>&nbsp;Apple</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.7} style={styles.IConButton}>
                            <Image source={fbImage} style={styles.IConSocails} />
                            <Text>&nbsp; Facebook</Text>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView> 
        </ImageBackground>
    );
};

export default Login;

const styles = StyleSheet.create({
    sectionContainer: {
        width: "100%",
        paddingHorizontal: 20,
    }, 
    BackgroundImages: {
        width: "100%",
        height: "100%",
        resizeMode: "contain",
        flex: 1,
        position: "relative",
        // backgroundColor:'#ffffff8c',
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
    },

    InputText: {
        width: "100%", 
        borderRadius: 12,
        paddingLeft: 50,
        paddingRight: 15,
        color: "#fff",
        fontSize: 16,
        paddingVertical: 12,
        backgroundColor: "#130646",
        borderLeftWidth: 3, 
        borderLeftColor: "#00b3ff",
        borderRightWidth: 3, 
        borderRightColor: "#00b3ff",

    },
    mailIcons: {
        position: "absolute",
        left: 8,
        top: 0,
        bottom: 0,
        alignItems: "center",
        justifyContent: "center",
        padding: 8,
        marginVertical: 5,
        zIndex: 1,
    },
    Forgot: {
        textAlign: "right",
        color: "#00ec9b",
        fontSize: 16,
        fontWeight: "500",
    },
    LoginButton: {
        width: "100%",
        padding: 12,
        backgroundColor: "#00ec9b",
        borderRadius: 12,
        marginVertical: 10,
        borderBottomWidth: 4,
        borderBottomColor: "#8a56ff",
    },
    textLogin: {
        color: "#130646",
        textAlign: "center",
        fontSize: 18,
        fontWeight: "500",
    },
    dFlex: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    accountSign: {
        textAlign: "center",
        color: "#ddd",
        fontSize: 15,
        fontWeight: "400",
    },
    orLineImg: {
        resizeMode: "contain",
        width: 'auto',
        height: 70,alignItems:'center',
        justifyContent:'center'
    },
    IConButton:{
        backgroundColor:'#ddd',
        paddingHorizontal:8,
        paddingVertical:4,
        borderRadius:100 ,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around'
    },
    IConSocails:{
        resizeMode: "contain",
        width: 25,
        height: 25,
    }
});
