import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image, StyleSheet, Modal, Pressable } from 'react-native'
import React, { useState } from 'react'
import userImage from '../Assets/AppImage/getry.png' 
import LogOutImage from "../Assets/Icon/log-out.png";
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'



const Profile = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.ProfileContainer}>
        <SafeAreaView>
            <View style={styles.UserProfileContainer}>
              <View style={styles.MoreIconView}>
                  <TouchableOpacity>
                    <Feather name="more-vertical" size={25} color="#fff" />
                  </TouchableOpacity>
              </View>
              <View style={styles.ProfileImageContainer}>
                  <View style={{position:'relative'}}>
                    <View style={styles.ImageRows}>
                        <Image source={userImage} style={styles.ImageConat} />
                    </View>
                    <View style={styles.IconsCamera}>
                      <TouchableOpacity>
                          <Feather name="camera" size={20} color="#00ec9b" />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={{paddingVertical:8}}>
                    <Text style={styles.UserName}>Amelia Renata</Text>
                  </View>
              </View>
                <View style={styles.userHeartbetContainer}>
                    <View style={{justifyContent:'center', alignItems:'center'}}>
                        <View>
                          <FontAwesome name="heartbeat" size={25} color="#f00" />
                        </View>
                        <View style={{paddingVertical:8}}>
                          <Text style={styles.weCalHeatText}>Heart rate</Text>
                          <Text style={styles.weCalHeat}>215bpm</Text>
                        </View>
                    </View>
                    <View style={{justifyContent:'center', alignItems:'center',}}>
                        <View>
                          <FontAwesome5 name="fire-alt" size={25} color="#008eff" />
                        </View>
                        <View style={{paddingVertical:8}}>
                          <Text style={styles.weCalHeatText}>Calories</Text>
                          <Text style={styles.weCalHeat}>756cal</Text>
                        </View>
                    </View>
                    <View style={{justifyContent:'center', alignItems:'center'}}>
                        <View>
                          <MaterialCommunityIcons name="weight-lifter" size={25} color="#ff9800" />
                        </View>
                        <View style={{paddingVertical:8}}>
                          <Text style={styles.weCalHeatText}>Weight</Text>
                          <Text style={styles.weCalHeat}>103lbs</Text>
                        </View>
                    </View>
                </View>
            </View> 
        </SafeAreaView>
        <ScrollView style={styles.MenuContainer}>
          <View style={{marginBottom:30}}>
              <TouchableOpacity style={styles.MenuList}>
                  <View style={{flexDirection:'row', alignItems:'center', gap:15}}>
                      <View style={styles.heartBgColor}>
                        <FontAwesome name="heart-o" size={20} color="#00ec9b" />
                      </View>
                      <Text style={styles.weCalHeat}>My Saved</Text>
                  </View>
                  <View>
                    <FontAwesome name="angle-right" size={25} color="#3A4255" />
                  </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.MenuList}>
                  <View style={{flexDirection:'row', alignItems:'center', gap:15}}>
                      <View style={styles.heartBgColor}>
                        <AntDesign name="calendar" size={20} color="#00ec9b" />
                      </View>
                      <Text style={styles.weCalHeat}>Appointmnet</Text>
                  </View>
                  <View>
                    <FontAwesome name="angle-right" size={25} color="#3A4255" />
                  </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.MenuList}>
                  <View style={{flexDirection:'row', alignItems:'center', gap:15}}>
                      <View style={styles.heartBgColor}>
                        <Entypo name="wallet" size={20} color="#00ec9b" />
                      </View>
                      <Text style={styles.weCalHeat}>Payment Method</Text>
                  </View>
                  <View>
                    <FontAwesome name="angle-right" size={25} color="#3A4255" />
                  </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.MenuList}>
                  <View style={{flexDirection:'row', alignItems:'center', gap:15}}>
                      <View style={styles.heartBgColor}>
                        <AntDesign name="message1" size={20} color="#00ec9b" />
                      </View>
                      <Text style={styles.weCalHeat}>FAQs</Text>
                  </View>
                  <View>
                    <FontAwesome name="angle-right" size={25} color="#3A4255" />
                  </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.MenuList} onPress={() => setModalVisible(true)}>
                  <View style={{flexDirection:'row', alignItems:'center', gap:15}}>
                      <View style={styles.heartBgColor}>
                        <AntDesign name="login" size={20} color="#00ec9b" />
                      </View>
                      <Text style={styles.weCalHeat}>Logout</Text>
                  </View>
                  <View>
                    <FontAwesome name="angle-right" size={25} color="#3A4255" />
                  </View>
              </TouchableOpacity> 
          </View>
      </ScrollView>

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
                          <Image source={LogOutImage} style={styles.DoneImage} />
                      </View>
                      <View>
                          <Text style={styles.modalText}>Are you sure to log out of your account?</Text>
                          {/* <Text style={styles.modalsuccessfully}>Once again you login successfully into medidoc app</Text> */}
                      </View>
                      <Pressable
                          style={[styles.button, styles.buttonClose]} >
                          <Text style={styles.textStyle}>Log Out</Text>
                      </Pressable>

                      <Pressable style={{paddingVertical:15}} 
                          onPress={() => setModalVisible(!modalVisible)}>
                          <Text style={[styles.textStyle,styles.fontSize18]}>Cancel</Text>
                      </Pressable>
                  </View>
              </View>
          </Modal>
      </View>
      {/* Modal Popup */}
    </View>
  )
}

export default Profile;

const styles = StyleSheet.create({
  ProfileContainer:{
    flex:1,
    backgroundColor:'#181A20',
    width:'100%', 
  },
  UserProfileContainer:{
    backgroundColor:'#1F222A',
    paddingTop:20,
    paddingHorizontal:15,
    paddingBottom:40,
    borderBottomLeftRadius:25,
    borderBottomRightRadius:25,
    alignItems:'center',
    borderBottomWidth:4,
    borderBottomColor:'#3A4255',
    position:'relative',
    width:'100%',
  },
  MoreIconView:{
    position:'absolute',
    top:25,
    right:15
  },
  ProfileImageContainer:{
    paddingVertical:30,
    position:'relative'
  },
  ImageRows:{
    width:120,
    height:120,
    overflow:'hidden',
    borderRadius:100,
    backgroundColor:'#181A20',
    borderWidth:2,
    borderColor:'#3A4255',
    borderStyle:'dashed',
  },
  ImageConat:{
    width:'100%',
    height:'100%',
    resizeMode:'contain', 
  },
  IconsCamera:{
    width:30,
    height:30,
    backgroundColor:'#1F222A',
    borderRadius:100,
    position:'absolute',
    bottom:0,
    right:10,
    alignItems:'center',
    justifyContent:'center',
    borderWidth:1,
    borderColor:'#3A4255',
  },
  UserName:{
    color:'#fff',
    textAlign:'center',
    fontSize:17,
  },
  userHeartbetContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around',
    width:'100%'
  },
  weCalHeatText:{
    textAlign:'center',
    color:'#ccc',
    fontSize:10
  },
  weCalHeat:{
    color:'#fff',
    fontSize:15
  },
  MenuContainer:{
    paddingTop:20,
    paddingHorizontal:15, 
  },
  MenuList:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal:10,
    paddingVertical:8,
    backgroundColor:'#1F222A',
    borderRadius:12,
    marginBottom:10,
    borderBottomWidth:3,
    borderBottomColor:'#3A4255',

  },
  heartBgColor:{
    width:35,
    height:35,
    backgroundColor:'#181A20',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:100
  },

    // Modal open css Strat
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
    fontSize18:{
      fontSize:16
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
})