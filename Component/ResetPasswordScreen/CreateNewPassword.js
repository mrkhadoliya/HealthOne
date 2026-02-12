import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    StyleSheet,
    ImageBackground,
    Pressable,
    Modal,
    Image
  } from 'react-native';
  import React, {useState} from 'react';
  import Feather from 'react-native-vector-icons/Feather';
  import bgImages from '../Assets/AppImage/gradient-cool-art.jpg';
  import {TextInput} from 'react-native-gesture-handler';

  import doneImage from "../Assets/Icon/Done.png";
  
  const CreateNewPassword = ({navigation}) => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
      <ImageBackground source={bgImages} style={styles.BackgroundImages}>
        <SafeAreaView style={styles.safeContainer}>
          <View style={styles.gorgotRow}>
            <Text style={styles.textForgot}>Create New Password</Text>
            <Text style={styles.textEmailPhone}>
            Create your new password to login
            </Text>
          </View>
          <View>
            <View style={{position: 'relative', paddingVertical: 10}}>
                <TextInput
                placeholder="Enter Password"
                value="***********"
                placeholderTextColor="#A1A8B0"
                style={styles.InputText}
                keyboardType="visible-password"
                />
                <TouchableOpacity style={styles.mailIcons}>
                <Feather name="lock" size={20} color="#e5e7ebe0" />
                </TouchableOpacity>
            </View>
            <View style={{position: 'relative', paddingVertical: 10}}>
                  <TextInput
                    placeholder="Confirm password" 
                    placeholderTextColor="#A1A8B0"
                    style={styles.InputText}
                    keyboardType="visible-password"
                  />
                  <TouchableOpacity style={styles.mailIcons}>
                    <Feather name="lock" size={20} color="#e5e7ebe0" />
                  </TouchableOpacity>
                </View>
          </View>
          <View>
            <View>
              <TouchableOpacity
                style={styles.LoginButton}
                activeOpacity={0.7}
                // onPress={() => navigation.navigate('Login Success', {screen: 'LoginSuccess'})}
                onPress={() => setModalVisible(true)}
                >
                <Text style={styles.textLogin}>Create Password</Text>
              </TouchableOpacity>
            </View> 
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
                                            <Text style={styles.modalsuccessfully}>You have successfully reset your password.</Text>
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
          </View>
        </SafeAreaView>
      </ImageBackground>
    );
  };
  
  export default CreateNewPassword;
  
  const styles = StyleSheet.create({
    BackgroundImages: {
      width: '100%',
      height: '100%',
      resizeMode: 'contain',
      flex: 1,
      position: 'relative',
      // backgroundColor:'#ffffff8c',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      position: 'relative',
    },
    safeContainer: {
      width: '100%',
      paddingVertical: 30,
      paddingHorizontal: 20,
    },
    gorgotRow: {},
    textForgot: {
      fontSize: 24,
      color: '#fff',
      fontWeight: '600',
      paddingVertical: 5,
    },
    textEmailPhone: {
      fontSize: 16,
      color: '#A1A8B0',
      fontWeight: '400',
      paddingVertical: 5,
      lineHeight: 22,
    },
    BackgroundEmailStyle: {
      // paddingTop: 15,
      width: '100%',
    },
    //  TextInput Css
  
    InputText: {
        width: '100%',
        borderRadius: 12,
        paddingLeft: 50,
        paddingRight: 15,
        color: '#fff',
        fontSize: 16,
        paddingVertical: 12,
        backgroundColor: '#130646',
        borderLeftWidth: 3,
        borderLeftColor: '#00b3ff',
        borderRightWidth: 3,
        borderRightColor: '#00b3ff',
      },
      mailIcons: {
        position: 'absolute',
        left: 8,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
        marginVertical: 5,
        zIndex: 1,
      },
    LoginButton: {
      width: '100%',
      padding: 12,
      backgroundColor: '#00ec9b',
      borderRadius: 12,
      marginVertical: 10,
      borderBottomWidth: 4,
      borderBottomColor: '#8a56ff',
    },
    textLogin: {
      color: '#130646',
      textAlign: 'center',
      fontSize: 18,
      fontWeight: '500',
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
   