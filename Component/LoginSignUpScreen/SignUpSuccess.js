import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, StatusBar, ImageBackground, TextInput, Modal, Pressable, Image,  } from "react-native";
import React, { useState } from "react";
import bgImages from "../Assets/AppImage/gradient-cool-art.jpg";
import Feather from "react-native-vector-icons/Feather"; 
import CheckBox from "@react-native-community/checkbox";
 
import doneImage from "../Assets/Icon/Done.png";


const SignUpSuccess = ({ navigation }) => {

    const [modalVisible, setModalVisible] = useState(false);
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    return (
        <ImageBackground source={bgImages} style={styles.BackgroundImages}>   
                <SafeAreaView style={styles.sectionContainer}>
                    <View style={{ width: "100%" }}>
                        <View style={{ overflow: "hidden", position: "relative", paddingVertical: 10 }}>
                            <TextInput placeholder="Enter your name" value="James Schleifer" placeholderTextColor="#A1A8B0" style={styles.InputText} keyboardType="default" />
                            <TouchableOpacity style={styles.mailIcons}>
                                <Feather name="user" size={20} color="#e5e7ebe0" />
                            </TouchableOpacity>
                        </View>
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
                        <View style={{ overflow: "hidden", position: "relative", paddingVertical: 10, flexDirection:'row', alignItems:'center' }}> 
                            <CheckBox
                                disabled={false}
                                value={toggleCheckBox}
                                onValueChange={(newValue) => setToggleCheckBox(newValue)} 
                            />
                            <Text style={styles.Forgot}>I agree to the medidoc <Text style={{color:'#00ec9b'}}>Terms of Service</Text> and <Text style={{color:'#00ec9b'}}>Privacy Policy</Text></Text> 
                        </View>
                    </View>
                    <View style={{ width: "100%" }}>
                        <TouchableOpacity style={styles.LoginButton} activeOpacity={0.7}  onPress={() => navigation.navigate("MainScreen", { screen: "Home" })}>
                            <Text style={styles.textLogin}>Sign Up</Text>
                        </TouchableOpacity>
                        {/* <TouchableOpacity style={styles.LoginButton} activeOpacity={0.7} onPress={() => setModalVisible(true)}>
                            <Text style={styles.textLogin}>Sign Up</Text>
                        </TouchableOpacity> */}

                        {/* Modal Popup */}
                        <View style={styles.centeredView}>
                            <Modal
                                animationType="fade"
                                transparent={true}
                                visible={modalVisible}
                                onRequestClose={() => {
                                Alert.alert('Modal has been closed.');
                                setModalVisible(!modalVisible);
                                }}>
                                <View style={styles.centeredView}>
                                    <View style={styles.modalView}>
                                        <View>
                                            <Image source={doneImage} style={styles.DoneImage} />
                                        </View>
                                        <View>
                                            <Text style={styles.modalText}>Success</Text>
                                            <Text style={styles.modalsuccessfully}>Your account has been successfully registered</Text>
                                        </View>
                                        <Pressable
                                            style={[styles.button, styles.buttonClose]}
                                            onPress={() => setModalVisible(!modalVisible)}
                                            >
                                            <Text style={styles.textStyle}>Login</Text>
                                        </Pressable>
                                    </View>
                                </View>
                            </Modal>
                        </View>
                        {/* Modal Popup */}


                        <View style={styles.dFlex}>
                            <Text style={styles.accountSign}>Don’t have an account? </Text>
                            <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate("Sign Up", { screen: "SignUp" })}>
                                <Text style={{ fontSize: 16, color: "#00ec9b", fontWeight: "500" }}>Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                    </View> 
                </SafeAreaView> 
        </ImageBackground>
    );
};

export default SignUpSuccess;

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
        textAlign: "left",
        color: "#ddd",
        fontSize: 13,
        fontWeight: "400",
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
 // Modal open css
 centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', 
    width:'100%',
    paddingHorizontal: 15,
    backgroundColor:'#101623ab'
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    width:'100%',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  DoneImage:{
    width:130,
    height:130,
    resizeMode:"contain"
  }, 
  buttonClose: {
    width: "100%",
    padding: 12,
    backgroundColor: "#00ec9b",
    borderRadius: 12,
    marginVertical: 10,
    borderBottomWidth: 4,
    borderBottomColor: "#130646",
  },
  textStyle: {
    color: '#101623',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginVertical: 15,
    textAlign: 'center',
    fontSize:22,
    color:'#101623',
    fontWeight:'600'
  },
  modalsuccessfully:{
    marginBottom: 15,
    textAlign: 'center',
    fontSize:16,
    color:'#A1A8B0',
    fontWeight:'400',
    lineHeight:22
  }
});
