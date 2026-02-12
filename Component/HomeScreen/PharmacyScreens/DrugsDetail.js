import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import drugImage from '../../Assets/AppImage/medication.png'
 
const DrugsDetail = ({navigation}) => {
	const [isCalled, setIsCalled] = useState(false);
	const [isStared, setIsStared] = useState(false);

    const [count, setCount] = useState(0);
    const onPress = () => setCount(prevCount => prevCount + 1);
    const onPressd = () => setCount(prevCount => prevCount - 1);

  return (
    <ScrollView style={styles.DrugsDetailContainer}>
       <SafeAreaView>
            <View style={styles.ViewImageContainers}>
                <Image source={drugImage} style={styles.ImageDrugs} />
            </View>
            <View>
                <View style={styles.TExtDetaolsContainer}>
                    <View>
                        <Text style={styles.Heading}>OBH Combi</Text>
                    </View>
                    <View style={styles.priceContainer}>
                        <View>
                            <Text style={styles.mlText}>75ml</Text>
                            <View style={{paddingVertical:5, flexDirection:'row', alignItems:'center', gap:10}}>
                                <View style={{flexDirection:'row', alignItems:'center', gap:2}}>
                                    <FontAwesome 
                                        onPress={() => setIsStared(value => !value)}
                                        name={isStared ? 'star-o' : 'star'}
                                        size={20} 
                                        color={isStared ? '#00EC9B' : '#ff9800'}
                                    /> 
                                    <FontAwesome 
                                        onPress={() => setIsStared(value => !value)}
                                        name={isStared ? 'star-o' : 'star'}
                                        size={20} 
                                        color={isStared ? '#00EC9B' : '#ff9800'}
                                    />
                                    <FontAwesome 
                                        onPress={() => setIsStared(value => !value)}
                                        name={isStared ? 'star-o' : 'star'}
                                        size={20} 
                                        color={isStared ? '#00EC9B' : '#ff9800'}
                                    /> 
                                    <FontAwesome 
                                        onPress={() => setIsStared(value => !value)}
                                        name={isStared ? 'star-o' : 'star'}
                                        size={20} 
                                        color={isStared ? '#00EC9B' : '#ff9800'}
                                    />
                                    <FontAwesome 
                                        onPress={() => setIsStared(value => !value)}
                                        name={isStared ? 'star-o' : 'star'}
                                        size={20} 
                                        color={isStared ? '#00EC9B' : '#ff9800'}
                                    />
                                </View>
                                <View>
                                    <Text style={styles.mlText}>4/5</Text>
                                </View>
                            </View>
                        </View>
                        <View>
                            <TouchableOpacity>
                                <FontAwesome
                                    onPress={() => setIsCalled(value => !value)}
                                    name={isCalled ? 'heart-o' : 'heart'} 
                                    color={isCalled ? '#00EC9B' : '#FC5404'}
                                    size={25} 

                                 />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.priceContainer}>
                        <View style={{flexDirection:'row', alignItems:'center', gap:5}}>
                            <View>
                                <TouchableOpacity style={styles.IconCount} onPress={onPressd}> 
                                    <Feather name="minus" color="#00EC9B" size={25} />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.counterView}>
                                <Text style={styles.countText} minimum={0}>{count}</Text>
                            </View>
                            <View>
                                <TouchableOpacity style={styles.IconCount} onPress={onPress}> 
                                    <AntDesign name="plus" color="#00EC9B" size={25} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View>
                            <Text style={{color:'#ccc', fontSize:18}}>MRP: 854.00</Text>
                        </View>
                    </View>
                    <View style={styles.DescriptionContainer}>
                        <Text style={styles.DescriptionText}>
                            Description
                        </Text>
                        <Text style={styles.Description}>
                            OBH COMBI  is a cough medicine containing, Paracetamol, Ephedrine HCl, and Chlorphenamine maleate which is used to relieve coughs accompanied by flu symptoms such as fever, headache, and sneezing... 
                            <TouchableOpacity>
                                <Text style={{color:'#00EC9B',}}>Read more</Text>
                            </TouchableOpacity>
                        </Text>
                    </View>
                </View>
            </View>
            {/* sms or Book Apointment */}

            <View style={styles.bookContainer}>
                <View style={{ flexDirection: "row", alignItems: "center", gap: 10, justifyContent: "space-between" }}>
                    <TouchableOpacity style={styles.messageBtn} >
                        <Feather name="shopping-cart" size={25} color="#fff" />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.ApointmentBtn} onPress={() => navigation.navigate("my cart", { screen: "MyCart" })}>
                        <Text style={{ textAlign: "center", fontSize: 16, fontWeight: "400", color: "#00EC9B" }}>Buy Now</Text>
                    </TouchableOpacity>
                </View>
            </View>
       </SafeAreaView>
    </ScrollView>
  )
}

export default DrugsDetail;
const styles = StyleSheet.create({
    DrugsDetailContainer:{
        flex:1,
        backgroundColor:'#181A20',
        padding:15,
        width:'100%',
        position:'relative'
    },
    ViewImageContainers:{
        width:'100%',
        height:280,
        paddingTop:20
    },
    ImageDrugs:{
        width:'100%',
        height:'100%',
        resizeMode:'contain',
    },
    TExtDetaolsContainer:{},
    Heading:{
        color:'#fff',
        fontSize:19,
        fontWeight:'500'
    },
    priceContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingVertical:8
    },
    mlText:{
        color:'#ccc',
        fontSize:15,
    },
    IconCount:{
        backgroundColor: "#1F222A", 
        borderRadius: 10,  
        borderColor: "#3A4255",
        borderWidth: 1,
        width:40,
        height:40,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row'
    },
    counterView:{
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        backgroundColor: "#1F222A", 
        borderRadius: 10,  
        borderColor: "#3A4255",
        borderWidth: 1,
        width:60,
        height:40, 
    },
    countText:{
        textAlign:'center',
        color:'#fff',
        fontSize:18
    },
    DescriptionContainer:{
        paddingVertical:20,
        position:'relative'
    },
    DescriptionText:{
        fontSize:20,
        fontWeight:'500',
        color:'#fff',
        paddingBottom:10
    },
    Description:{
        color:'#ccc',
        lineHeight:22,
        letterSpacing:0.5,
        textAlign:'justify',
        alignItems:'center',
        flexDirection:'row'
    },
    bookContainer: {
        marginBottom: 50,
        width:'100%', 
    },
    messageBtn: {
        backgroundColor: "#1F222A",
        borderBottomWidth: 4,
        borderBottomColor: "#3A4255",
        padding: 8,
        borderRadius: 12,
        width: "25%",
        height: 50,
        alignItems: "center",
        textAlign: "center",
        justifyContent: "center",
        borderWidth: 0,
    },
    ApointmentBtn: {
        backgroundColor: "#1F222A",
        borderBottomWidth: 4,
        borderBottomColor: "#3A4255",
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 12,
        width: "70%",
        height: 50,
        alignItems: "center",
        textAlign: "center",
        justifyContent: "center",
        borderWidth: 0,
    },
})