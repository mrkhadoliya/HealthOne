import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, TextInput, Image } from 'react-native'
import React from 'react' 
import Feather from "react-native-vector-icons/Feather";   
import Ionicons from "react-native-vector-icons/Ionicons";   
import medicatiomImage from '../../Assets/AppImage/medication.png'

import Vaccines from '../../Assets/AppImage/medication.png' 
import Vaccine from '../../Assets/AppImage/c19Vaccines.png'  
import covidimg from '../../Assets/AppImage/covid-19.png'



const DrCardTeam = [
    {
      cardimage:Vaccines, 
      title:"Panadol", 
      tabletmadi:'20pcs', 
      pricetab:"$15.99",
    },
    {
      cardimage:Vaccine,
      title:"Bodrex Herbal", 
      tabletmadi:'100ml',  
      pricetab:'$7.99'
    },
    {
      cardimage:covidimg, 
      title:"Konidin", 
      tabletmadi:'3pcs', 
      pricetab:"$5.99",
    }, 
  ]



const Pharmacy = ({navigation}) => {
  return (
    <ScrollView style={styles.scrollContainer}>
    <SafeAreaView>
        <View> 
            <View style={styles.searchContainer}>
                <View style={{ overflow: "hidden", position: "relative", paddingVertical: 5 }}>
                    <TextInput placeholder="Search doctor, drugs, articles..." placeholderTextColor="#A1A8B0" style={styles.InputText} keyboardType="web-search" />
                    <TouchableOpacity style={styles.SearchIcons}>
                        <Feather name="search" size={20} color="#00b3ff" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.PopularArticlesView}>  
                <View style={styles.CovidBtnContainer}>  
                    <View style={styles.orederContainer}>
                        <View style={styles.flexContainers}> 
                            <View style={{width:'65%'}}> 
                                <Text style={{fontSize: 25, color: "#fff", fontWeight:'500' }}>Order quickly with Prescription</Text> 
                                <View style={{paddingVertical:15}}>
                                    <TouchableOpacity style={styles.activeBnt}>
                                        <Text style={{color:'#fff', fontWeight:'500',}}>Upload Prescription</Text>
                                    </TouchableOpacity>
                                </View>
                            </View> 
                             <View style={{width:'35%'}}>
                                <Image source={medicatiomImage} style={{width:'100%', height:150, resizeMode:'contain'}} />
                             </View>
                        </View> 
                    </View> 
                </View>
            </View> 
        </View>
        <View>
            <View style={styles.TrendingView}>
                <View>
                    <Text style={{ color: "#fff", fontSize: 18, fontWeight: "500" }}>Popular Product</Text>
                </View>
                <View>
                    <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('health arcticles', {screen: 'Arcticles'})}>
                        <Feather name="arrow-right" size={25}  color="#00ec9b" /> 
                    </TouchableOpacity>
                </View>
            </View> 
            <View style={styles.PopulartContainer}>
                <ScrollView horizontal>
                    <View style={styles.flexContainerMain}>
                        {DrCardTeam.map((Items, i) =>{
                        return ( 
                            <View key={i} style={styles.CardContainer}>
                                <View style={styles.CardImage}>
                                    <Image style={styles.DrImage} source={Items.cardimage} alt=''  />
                                </View>  
                                <View>
                                    <View style={styles.CardTitle}>
                                        <Text style={styles.DrName}>{Items.title}</Text>
                                        <Text style={{color:'#00EC9B', fontSize:12, paddingTop:8}}>
                                            {Items.tabletmadi}
                                        </Text> 
                                    </View>
                                    <View style={styles.CardLocaOrStart}> 
                                        <View>
                                            <Text style={{color:'#ccc', fontSize:18}}>
                                                {Items.pricetab}
                                            </Text>
                                        </View>
                                        <View>  
                                            <TouchableOpacity style={styles.addButton} activeOpacity={0.8} onPress={() => navigation.navigate('drugs detail', {screen: 'DrugsDetail'})}>
                                                <Ionicons name="add" size={25} color="#00b3ff" />
                                            </TouchableOpacity>
                                        </View> 
                                    </View>
                                </View>
                            </View> 
                        )
                        })}
                    </View>
                </ScrollView>
            </View>
        </View>

        <View style={{paddingBottom:50}}>
            <View style={styles.TrendingView}>
                <View>
                    <Text style={{ color: "#fff", fontSize: 18, fontWeight: "500" }}>Product on Sale</Text>
                </View>
                <View>
                    <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('health arcticles', {screen: 'Arcticles'})}>
                        <Feather name="arrow-right" size={25}  color="#00ec9b" /> 
                    </TouchableOpacity>
                </View>
            </View> 
            <View style={styles.PopulartContainer}>
                <ScrollView horizontal>
                    <View style={styles.flexContainerMain}>
                        {DrCardTeam.map((Items, i) =>{
                        return ( 
                            <View key={i} style={styles.CardContainer}>
                                <View style={styles.CardImage}>
                                    <Image style={styles.DrImage} source={Items.cardimage} alt=''  />
                                </View>  
                                <View>
                                    <View style={styles.CardTitle}>
                                        <Text style={styles.DrName}>{Items.title}</Text>
                                        <Text style={{color:'#00EC9B', fontSize:12, paddingTop:8}}>
                                            {Items.tabletmadi}
                                        </Text> 
                                    </View>
                                    <View style={styles.CardLocaOrStart}> 
                                        <View>
                                            <Text style={{color:'#ccc', fontSize:18}}>
                                                {Items.pricetab}
                                            </Text>
                                        </View>
                                        <View>  
                                            <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate("drugs detail", { screen: "DrugsDetail" })}>
                                                <Ionicons name="add" size={25} color="#00b3ff" />
                                            </TouchableOpacity>
                                        </View> 
                                    </View>
                                </View>
                            </View> 
                        )
                        })}
                    </View>
                </ScrollView>
            </View>
        </View>
    </SafeAreaView> 
</ScrollView>
  )
}

export default Pharmacy;


const styles = StyleSheet.create({
    scrollContainer: {
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 15,
        backgroundColor: "#181A20",
    },
    searchContainer:{
        marginBottom:20
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
    SearchIcons: {
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
    PopularArticlesView:{
        marginBottom:15
    },
    ViewTextArticles:{
        // paddingBottom:15
        alignSelf:'flex-start'
    },
    PopularArticlesText:{
        fontSize:18,
        color:'#fff',
        fontWeight:'500'
    },
    CovidBtnContainer: {
        paddingVertical: 15, 
    },
    orederContainer: {
        backgroundColor: "#1F222A",
        paddingHorizontal: 15,
        borderRadius: 10,  
        borderColor: "#3A4255",
        borderWidth: 1,
        borderBottomColor:'#3A4255',
        borderBottomWidth:4, 
    },
    flexContainers: {
        flexDirection: "row", 
        alignItems:'center',
        gap: 10, 
        paddingTop:8
    },
    activeBnt: {
        backgroundColor: "#00EC9B",
        padding: 15,
        width:160,
        borderRadius: 10,  
        alignItems: "center",
        textAlign: "center",
        justifyContent: "center",
        borderColor: "#3A4255",
        borderWidth: 0,
        borderBottomColor:'#3A4255',
        borderBottomWidth:4
        
    },
    TrendingView:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingBottom:20
    },

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
        width:160,
        position:'relative',
        borderBottomWidth: 4,
        borderBottomColor: "#3A4255",
      },
      CardImage:{
          width:'100%',
          height:120,
          paddingVertical:10,
        //   overflow:'hidden'
      },
      DrImage:{
        width:'100%',
        height:'100%', 
        resizeMode:'contain',
        transform: [{scale: 1.4}], 
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
        paddingVertical:8,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
      },
      addButton:{
        backgroundColor:'#1F222A', 
        borderRadius:5,
        borderColor: "#3A4255",
        borderWidth: 1, 
      }
})