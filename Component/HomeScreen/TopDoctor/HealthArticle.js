import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react' 
import imageDr from '../../Assets/AppImage/medication.png' 
import bookmark from '../../Assets/Icon/bookmark.png'
import covidimg from '../../Assets/AppImage/covid-19.png'



const DrCardTeam = [
    {
      cardimage:imageDr,
      title:'The 25 Healthiest Fruits You Can Eat, According to a Nutritionist', 
      dates:'April 17, 2023 ', 
      timemint:"10 Day's ago"
    }, {
      cardimage:covidimg,
      title:'Traditional Herbal Medicine Treatments for COVID-19', 
      dates:'April 25, 2023 ', 
      timemint:"1 Day's ago",
    }, {
      cardimage:imageDr,
      title:"Beauty Tips For Face: 10 Dos and Don'ts for Naturally Beautiful Skin", 
      dates:'April 26, 2023 ', 
      timemint:'1min ago'
    }, 
  ]
  
  

const HealthArticle = () => {
  return (
    <View>
       <ScrollView >
          <View style={styles.flexContainerMain}>
             {DrCardTeam.map((Items, i) =>{
              return (
                <TouchableOpacity key={i} activeOpacity={0.7}>
                    <View style={styles.CardContainer}>
                        <View style={styles.CardImage}>
                            <Image style={styles.DrImage} source={Items.cardimage} alt=''  />
                        </View>
                        <View style={{position:'absolute', top:8, right:8}}>
                            <Image source={bookmark} style={{width:25, height:25, resizeMode:'contain',}} />
                        </View>
                        <View>
                            <View style={styles.CardTitle}>
                                <Text style={styles.DrName}>{Items.title}</Text> 
                            </View>
                            <View style={styles.CardLocaOrStart}>
                                <View style={{flexDirection:'row', alignItems:'center'}}> 
                                    <Text style={{color:'#00EC9B', fontSize:12}}>
                                        {Items.dates}
                                    </Text>
                                </View>
                                <View style={{flexDirection:'row', alignItems:'center'}}>  
                                    <Text style={{color:'#A1A8B0', fontSize:11}}>{Items.timemint}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
              )
             })}
          </View>
      </ScrollView>
    </View>
  )
}

export default HealthArticle

const styles = StyleSheet.create({
    flexContainerMain:{ 
      gap:15,
    },
    CardContainer:{
      backgroundColor:'#1F222A',
      padding:5,
      borderRadius:12,
      borderColor: "#3A4255",
      borderWidth: 1,
      flexDirection:'row',
      alignItems:'center',
      gap:5,
      width:'100%',
      position:'relative',
      borderBottomWidth: 4,
      borderBottomColor: "#3A4255",
    },
    CardImage:{},
    DrImage:{
      width:90,
      height:90,
      borderRadius:12,
    //   borderColor: "#3A4255",
    //   borderWidth: 1,
    },
    CardTitle:{ 
      textAlign:'center'
    },
    DrName:{
      fontSize:15,
      color:'#fff',
      textTransform:'capitalize' ,
      width:200
    },
    DrPostions:{
      fontSize:13,
      color:'#E1E1E1',
      letterSpacing:0.5,
      paddingVertical:5,
      textAlign:'center'
    },
    CardLocaOrStart:{
      paddingVertical:10,
      flexDirection:'row',
      alignItems:'center', 
    },
  })