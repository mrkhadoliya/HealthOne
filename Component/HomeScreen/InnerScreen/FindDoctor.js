import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, StyleSheet, TextInput, StatusBar, Image, ImageBackground } from "react-native";
import React from 'react'
import Feather from "react-native-vector-icons/Feather";
import Doctor from "../../Assets/Icon/Doctor.png";
import Lungs from "../../Assets/Icon/Lungs.png";
import Dentist from "../../Assets/Icon/Dentist.png";
import Psychiatrist from "../../Assets/Icon/Psychiatrist.png"; 
import Covid from "../../Assets/Icon/Covid.png";
import Vector from "../../Assets/Icon/Vector.png";
import Cardiologist from "../../Assets/Icon/Cardiologist.png"; 
import Dr1 from '../../Assets/AppImage/doctor2.png' 
import Dr2 from '../../Assets/AppImage/doctor1.png' 
import Dr3 from '../../Assets/AppImage/doctor3.png' 
import Dr4 from '../../Assets/AppImage/getry.png'

import imageDr from '../../Assets/AppImage/doctor2.png' 
import StarImg from '../../Assets/Icon/star.png'
import LocaImg from '../../Assets/Icon/location.png'



const Drmenus = [
    {
        icons: Doctor,
        dnames: "General",
    },
    {
        icons: Lungs,
        dnames: "Lungs Specialist",
    },
    {
        icons: Dentist,
        dnames: "Dentist",
    },
    {
        icons: Psychiatrist,
        dnames: "Psychiatrist",
    },
    {
        icons: Covid,
        dnames: "Covid-19",
    },
    {
        icons: Vector,
        dnames: "Surgeon",
    },
    {
        icons: Cardiologist,
        dnames: "Cardiologist",
    },
];
 
const DrCardTeam = [
  {
    cardimage:imageDr,
    title:'Dr. Marcus Horizon',
    positiontitle:'Chardiologist',
    rating:'4.9', 
    lact:'800m Away'
  }, 
]


const FindDoctor = ({navigation}) => {
  return (
    <ScrollView style={styles.scrollContainer}>
    <StatusBar backgroundColor="#1F222A" barStyle="default" />
            <SafeAreaView> 
                <View style={styles.searchContainer}>
                    <View style={{ overflow: "hidden", position: "relative", paddingVertical: 10 }}>
                        <TextInput placeholder="Search doctor, drugs, articles..." placeholderTextColor="#A1A8B0" style={styles.InputText} keyboardType="web-search" />
                        <TouchableOpacity style={styles.mailIcons} onPress={() => navigation.navigate("Find Doctor", { screen: "FindDoctor" })}>
                            <Feather name="search" size={20} color="#00b3ff" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.DrMenuContainer}>
                    {Drmenus.map((item, i) => {
                        return (
                            <View key={i}>
                                <View style={styles.IconContainer}>
                                    <Image source={item.icons} style={styles.IConsDr} />
                                </View>
                                <View style={{ paddingVertical: 5 }}>
                                    <Text style={styles.IconName}>{item.dnames}</Text>
                                </View>
                            </View>
                        );
                    })}
                </View>
                <View style={styles.RecommendedContainer}>
                    <View style={{paddingBottom:20}}>
                      <Text style={styles.TextRecommended}>Recommended Doctors</Text>
                    </View>
                    <View style={styles.flexContainerMain}>
                    {DrCardTeam.map((Items, i) =>{
                      return (
                        <TouchableOpacity key={i} activeOpacity={0.7} onPress={() => navigation.navigate("Doctor Detail", { screen: "DoctorDetail" })}>
                            <View style={styles.CardContainer}>
                                <View style={styles.CardImage}>
                                    <Image style={styles.DrImage} source={Items.cardimage} alt=''  />
                                </View>
                                <View style={{width:'100%'}}>
                                  <View style={styles.CardTitle}>
                                      <Text style={styles.DrName}>{Items.title}</Text>
                                      <Text style={styles.DrPostions}>{Items.positiontitle}</Text>
                                  </View>
                                  <View style={styles.CardLocaOrStart}>
                                    <View style={{flexDirection:'row', alignItems:'center'}}>
                                        <Image source={StarImg} style={{width:25, height:25, resizeMode:'contain',}} />
                                        <Text style={{color:'#00EC9B'}}>
                                          {Items.rating}
                                      </Text>
                                    </View>
                                    <View style={{flexDirection:'row', alignItems:'center'}}> 
                                        <Image source={LocaImg} style={{width:20, height:20, resizeMode:'contain',}} />
                                        <Text style={{color:'#A1A8B0'}}>{Items.lact}</Text>
                                    </View>
                                  </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                      )
                    })}
                  </View>
                </View>
                <View style={styles.RecentContainer}>
                    <View style={{paddingVertical:20}}>
                        <Text style={styles.TextRecommended}>Your Recent Doctors</Text>
                    </View>
                    <ScrollView horizontal>
                      <View style={styles.ReceImageContainer}>
                          <TouchableOpacity>
                            <View style={styles.ImagesRecentContainer}>
                                <Image source={Dr1} style={{width:80, height:80, resizeMode:'contain', borderRadius:100, backgroundColor:'#1F222A',}}  />
                                <Text style={{textAlign:'center', color:'#fff'}}>Dr. Marcus</Text>
                            </View>
                          </TouchableOpacity>
                          <TouchableOpacity>
                            <View style={styles.ImagesRecentContainer}>
                                <Image source={Dr2} style={{width:80, height:80, resizeMode:'contain', borderRadius:100, backgroundColor:'#1F222A',}}  />
                                <Text style={{textAlign:'center', color:'#fff'}}>Dr. Maria</Text>
                            </View>
                          </TouchableOpacity>
                          <TouchableOpacity>
                            <View style={styles.ImagesRecentContainer}>
                                <Image source={Dr3} style={{width:80, height:80, resizeMode:'contain', borderRadius:100, backgroundColor:'#1F222A',}}  />
                                <Text style={{textAlign:'center', color:'#fff'}}>Dr. Stevi</Text>
                            </View>
                          </TouchableOpacity>
                          <TouchableOpacity>
                            <View style={styles.ImagesRecentContainer}>
                                <Image source={Dr4} style={{width:80, height:80, resizeMode:'contain', borderRadius:100, backgroundColor:'#1F222A',}}  />
                                <Text style={{textAlign:'center', color:'#fff'}}>Dr. Luke</Text>
                            </View>
                          </TouchableOpacity> 
                      </View>
                    </ScrollView>
                </View>
              </SafeAreaView>
    </ScrollView>
  )
}

export default FindDoctor;


const styles = StyleSheet.create({
  scrollContainer: {
      flex: 1,
      paddingHorizontal: 10,
      paddingVertical: 15,
      backgroundColor: "#181A20",
  },  
  InputText: {
      width: "100%",
      borderRadius: 12,
      paddingLeft: 50,
      paddingRight: 15,
      color: "#fff",
      fontSize: 16,
      paddingVertical: 12,
      backgroundColor: "#1F222A",
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
  DrMenuContainer: { 
      alignItems: "center",
      flexDirection: "row", 
      paddingVertical: 20,
      flexWrap:'wrap',
      gap:10,
      justifyContent:'center'
  },
  IconContainer: {
      backgroundColor: "#1F222A",
      padding: 6,
      borderRadius: 12, 
      borderColor: "#3A4255",
      borderWidth: 1,
      width: 69,
      height: 60,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 5,
      marginLeft:'auto',
      marginRight:'auto', 
      borderBottomWidth: 4,
      borderBottomColor: "#3A4255",
  },
  IConsDr: {
      width: 40,
      height: 40,
      resizeMode: "contain",
  },
  IconName: {
      textAlign: "center",
      color: "#A1A8B0",
      fontSize: 12,
      fontWeight: "500",
  },
  RecommendedContainer:{},
  TextRecommended:{
    fontSize:20,
    color:'#fff',
    fontWeight:'500',
    letterSpacing:0.5
  },

  flexContainerMain:{ 
    gap:10, 
  },
  CardContainer:{
    backgroundColor:'#1F222A',
    padding:8,
    borderRadius:10,
    width:'100%',  
    borderWidth: 0,
    flexDirection:'row',
    alignItems:'center',
    gap:15,
    flex:1,
    borderBottomWidth: 3,
    borderBottomColor: "#00b3ff",
  },
  CardImage:{ 
    alignItems:'center',
  },
  DrImage:{
    width:100,
    height:100,
    borderRadius:12,
    // borderColor: "#3A4255",
    // borderWidth: 1,
    backgroundColor:'#181A20',
    resizeMode:'contain'
  },
  CardTitle:{ 
    textAlign:'center'
  },
  DrName:{
    fontSize:18,
    color:'#fff', 
  },
  DrPostions:{
    fontSize:13,
    color:'#E1E1E1',
    letterSpacing:0.5,
    paddingVertical:5, 
  },
  CardLocaOrStart:{
    paddingVertical:10,
    flexDirection:'row',
    alignItems:'center', 
    gap:15
  },
  RecentContainer:{
    marginBottom:50
  },
  ReceImageContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-start',
    gap:6,
  },
  ImagesRecentContainer:{},
});
