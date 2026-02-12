import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react' 
import Vaccines from '../../Assets/AppImage/medication.png' 
import Vaccine from '../../Assets/AppImage/c19Vaccines.png' 
import bookmark from '../../Assets/Icon/bookmark.png'
import covidimg from '../../Assets/AppImage/covid-19.png'



const DrCardTeam = [
    {
      cardimage:Vaccines,
      covid:'Covid-19',
      title:"Comparing the AstraZeneca and Sinovac COVID-19 Vaccines", 
      dates:'April 17, 2023 ', 
      timemint:"10 Day's ago",
    },
    {
      cardimage:Vaccine,
      title:"Comparing the AstraZeneca and Sinovac COVID-19 Vaccines", 
      dates:'April 26, 2023 ', 
      covid:'Covid-19',
      timemint:'1min ago'
    },
    {
      cardimage:covidimg,
      covid:'Covid-19',
      title:"The Horror Of The Second Wave Of COVID-19", 
      dates:'April 25, 2023 ', 
      timemint:"1 Day's ago",
    }, 
  ]


const TrendingArticlesList = () => {
  return (
    <View>
       <ScrollView horizontal>
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
                        <View style={styles.covidView}>
                            <Text style={styles.covidText}>{Items.covid}</Text>
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

export default TrendingArticlesList;


const styles = StyleSheet.create({
    flexContainerMain:{ 
      gap:15,
      flexDirection:'row',
      alignItems:'center',
      paddingBottom:20
    },
    CardContainer:{
      backgroundColor:'#1F222A',
      padding:10,
      borderRadius:12,
      borderColor: "#3A4255",
      borderWidth: 1,  
      width:240,
      position:'relative',
      borderBottomWidth: 4,
      borderBottomColor: "#3A4255",
    },
    CardImage:{
        width:'100%',
        height:200,
        paddingVertical:10,
    },
    DrImage:{
      width:'100%',
      height:'100%',
      borderRadius:12, 
      resizeMode:'contain'
    },
    covidView:{
        width:80
    },
    covidText : {
        backgroundColor:'#181A20',
        borderRadius:5,
        paddingHorizontal:10,
        paddingVertical:3, 
        color:'#00b3ff',  
    },
    CardTitle:{ 
      textAlign:'center',
      paddingVertical:8
    },
    DrName:{
      fontSize:15,
      color:'#fff',
      textTransform:'capitalize' , 
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