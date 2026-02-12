import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'
import imageDr from '../../Assets/AppImage/doctor2.png'
import imageDr2 from '../../Assets/AppImage/doctor1.png'
import imageDr3 from '../../Assets/AppImage/doctor3.png'
import getry from '../../Assets/AppImage/getry.png'
import diandra from '../../Assets/AppImage/diandra.png'
import StarImg from '../../Assets/Icon/star.png'
import LocaImg from '../../Assets/Icon/location.png'


const DrCardTeam = [
  {
    cardimage:imageDr,
    title:'Dr. Marcus Horizon',
    positiontitle:'Chardiologist',
    rating:'4.9', 
    lact:'800m Away'
  },
  {
    cardimage:imageDr2,
    title:'Dr. Maria Elena',
    positiontitle:'Psychologist',
    rating:'4.2', 
    lact:'1,5km Away'
  },
  {
    cardimage:imageDr3,
    title:'Dr. Stevi Jessi',
    positiontitle:'Orthopedist',
    rating:'4.5', 
    lact:'2km Away'
  },
  {
    cardimage:getry,
    title:'Dr. Gerty Cori',
    positiontitle:'Orthopedist',
    rating:'4.9', 
    lact:'800m Away'
  },
  {
    cardimage:diandra,
    title:'Dr. Diandra',
    positiontitle:'Orthopedist',
    rating:'4.2', 
    lact:'1,5km Away'
  },
  {
    cardimage:imageDr3,
    title:'Dr. Stevi Jessi',
    positiontitle:'Orthopedist',
    rating:'4.5', 
    lact:'2km Away'
  },
]


const TopDoctors = ({navigation}) => {
  return (
    <ScrollView style={styles.TopContainerMains}>
    <StatusBar backgroundColor="#1F222A" barStyle="default" />
      <ScrollView>
          <View style={styles.flexContainerMain}>
             {DrCardTeam.map((Items, i) =>{
              return (
                <TouchableOpacity key={i} activeOpacity={0.7}  onPress={() => navigation.navigate("Find Doctor", { screen: "FindDoctor" })}>
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
      </ScrollView>
    </ScrollView>
  )
}

export default TopDoctors;

const styles = StyleSheet.create({
  TopContainerMains: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 25,
    backgroundColor: "#181A20",
  },
  flexContainerMain:{ 
    gap:10,
    marginBottom:50
  },
  CardContainer:{
    backgroundColor:'#1F222A',
    padding:8,
    borderRadius:12,
    width:'100%', 
    borderColor: "#3A4255",
    borderWidth: 1,
    flexDirection:'row',
    alignItems:'center',
    gap:15,
    flex:1,
    borderBottomWidth: 4,
    borderBottomColor: "#3A4255",
  },
  CardImage:{ 
    alignItems:'center',
  },
  DrImage:{
    width:90,
    height:90,
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
})