import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Ionicons from "react-native-vector-icons/Ionicons";
import Octicons from "react-native-vector-icons/Octicons";

import DrupImage from '../../Assets/AppImage/doctor3.png'

const UpcomingAppointment = () => {
  return (
    <ScrollView style={styles.UpcomingContainer}>
        <SafeAreaView> 
            <View style={styles.upcomingButton}>
                <View style={styles.UpcomingViews}>
                    <View style={styles.upcomeDrImage}>
                        <View style={styles.mainHeading}>
                            <Text style={styles.titles}>Dr. Marcus Horizon</Text>
                            <Text style={styles.postionstext}>Chardiologist</Text>
                        </View>
                        <View style={styles.userimageViews}>
                            <Image source={DrupImage} style={styles.userRightImage} />
                        </View>
                    </View>
                    <View style={styles.timeViews}>
                        <View 
                        style={{ 
                            flexDirection:'row',
                            alignItems:'center',
                            gap:5,
                        }}>
                            <Ionicons name="calendar" style={{ fontSize: 18 }} color="#fff" />
                            <Text style={styles.timeText}>26/04/2023</Text>
                        </View>
                        <View 
                            style={{ 
                                flexDirection:'row',
                                alignItems:'center',
                                gap:5,
                            }}>
                            <Ionicons name="time-outline" style={{ fontSize: 18 }} color="#fff" />
                            <Text style={styles.timeText}>10:30 AM</Text>
                        </View>
                        {/* <View 
                            style={{ 
                                flexDirection:'row',
                                alignItems:'center',
                                gap:5,
                            }}>
                            <Octicons name="dot-fill" style={{ fontSize: 18 }} color="#00EC9B" />
                            <Text style={styles.timeText}>Confirmed</Text>
                        </View> */}
                    </View>
                    <View style={styles.ViewBTNSContainer}>
                        {/* <TouchableOpacity style={styles.CancelButtonsContainer}>
                            <Text style={{fontSize:18, color:'#fff'}}>Cancel</Text>
                        </TouchableOpacity> */}
                        <TouchableOpacity style={styles.RescheduleButtonsContainer}>
                            <Text style={{fontSize:18, color:'#fff'}}>Confirmed</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.upcomingButton}>
                <View style={styles.UpcomingViews}>
                    <View style={styles.upcomeDrImage}>
                        <View style={styles.mainHeading}>
                            <Text style={styles.titles}>Dr. Alysa Hana</Text>
                            <Text style={styles.postionstext}>Psikeater</Text>
                        </View>
                        <View style={styles.userimageViews}>
                            <Image source={DrupImage} style={styles.userRightImage} />
                        </View>
                    </View>
                    <View style={styles.timeViews}>
                        <View 
                        style={{ 
                            flexDirection:'row',
                            alignItems:'center',
                            gap:5,
                        }}>
                            <Ionicons name="calendar" style={{ fontSize: 18 }} color="#fff" />
                            <Text style={styles.timeText}>26/04/2023</Text>
                        </View>
                        <View 
                            style={{ 
                                flexDirection:'row',
                                alignItems:'center',
                                gap:5,
                            }}>
                            <Ionicons name="time-outline" style={{ fontSize: 18 }} color="#fff" />
                            <Text style={styles.timeText}>10:30 AM</Text>
                        </View>
                        {/* <View 
                            style={{ 
                                flexDirection:'row',
                                alignItems:'center',
                                gap:5,
                            }}>
                            <Octicons name="dot-fill" style={{ fontSize: 18 }} color="#00EC9B" />
                            <Text style={styles.timeText}>Confirmed</Text>
                        </View> */}
                    </View>
                    <View style={styles.ViewBTNSContainer}>
                        {/* <TouchableOpacity style={styles.CancelButtonsContainer}>
                            <Text style={{fontSize:18, color:'#fff'}}>Cancel</Text>
                        </TouchableOpacity> */}
                        <TouchableOpacity style={styles.RescheduleButtonsContainer}>
                            <Text style={{fontSize:18, color:'#fff'}}>Confirmed</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View> 
        </SafeAreaView> 
    </ScrollView>
  )
}

export default UpcomingAppointment;
const styles = StyleSheet.create({
    UpcomingContainer:{
        flex:1,
        backgroundColor:'#181A20',
        padding:10
    },
    upcomingButton:{
        backgroundColor:'#1F222A',
        padding:10,
        borderRadius:12,
        borderWidth:1,
        borderColor:'#3A4255',
        borderBottomWidth:4,
        borderBottomColor:'#3A4255',
        marginBottom:10
    },
    UpcomingViews:{
        paddingVertical:10,
        paddingHorizontal:10
    },
    upcomeDrImage:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingBottom:15
    },
    mainHeading:{},
    titles:{
        fontSize:19,
        color:'#fff',
        paddingBottom:10
    },
    postionstext:{
        color:'#ccc'
    },
    userimageViews:{
        width:55,
        height:55,
        borderRadius:100,
        backgroundColor:'#3A4255',
    },
    userRightImage:{
        width:'100%',
        height:'100%',
        resizeMode:'contain',
        borderRadius:100
    },
    timeViews:{
        flexDirection:'row',
        alignItems:'center',
        gap:10,
        paddingVertical:10
    },
    timeText:{
        color:'#999A9E',
    },
    ViewBTNSContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        gap:15,
        marginVertical:10
    },

    CancelButtonsContainer:{
        backgroundColor:'#181A20',
        paddingHorizontal:15,
        paddingVertical:12,
        borderRadius:12,
        borderColor: "#3A4255",
        borderWidth: 1, 
        alignItems:'center',  
        borderBottomWidth: 4,
        borderBottomColor: "#3A4255",
        width:'50%'
      },
      RescheduleButtonsContainer:{
          backgroundColor:'#00EC9B',
          paddingHorizontal:15,
          paddingVertical:12,
          borderRadius:12,
          borderColor: "#3A4255",
          borderWidth: 1, 
          alignItems:'center',  
          borderBottomWidth: 4,
          borderBottomColor: "#3A4255",
          width:'100%'
        },
})