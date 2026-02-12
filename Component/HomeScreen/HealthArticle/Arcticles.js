import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, TextInput,  } from 'react-native'
import React from 'react'
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather"; 
import TrendingArticlesList from './TrendingArticlesList';
import HealthArticle from '../TopDoctor/HealthArticle';

const Arcticles = () => {
  return (
    <ScrollView style={styles.scrollContainer}>
        <SafeAreaView>
            <View> 
                <View style={styles.searchContainer}>
                    <View style={{ overflow: "hidden", position: "relative", paddingVertical: 5 }}>
                        <TextInput placeholder="Search doctor, drugs, articles..." placeholderTextColor="#A1A8B0" style={styles.InputText} keyboardType="web-search" />
                        <TouchableOpacity style={styles.SearchIcons} onPress={() => navigation.navigate("Find Doctor", { screen: "FindDoctor" })}>
                            <Feather name="search" size={20} color="#00b3ff" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.PopularArticlesView}>
                    <View style={styles.ViewTextArticles}>
                        <Text style={styles.PopularArticlesText}>Popular Articles</Text>
                    </View>

                    <View style={styles.CovidBtnContainer}>
                        <ScrollView horizontal>
                            <View style={styles.flexContainers}> 
                                <TouchableOpacity activeOpacity={0.7} style={styles.activeBnt}> 
                                    <Text style={{ textAlign: "center", fontSize: 18, color: "#fff" }}>Covid-19</Text>  
                                </TouchableOpacity>
                                <TouchableOpacity activeOpacity={0.7} style={styles.UnactiveBnt}> 
                                    <Text style={{ textAlign: "center", fontSize: 18, color: "#fff" }}>Diet</Text>  
                                </TouchableOpacity>
                                <TouchableOpacity activeOpacity={0.7} style={styles.UnactiveBnt}> 
                                    <Text style={{ textAlign: "center", fontSize: 18, color: "#fff" }}>Fitness</Text> 
                                </TouchableOpacity> 
                            </View>
                        </ScrollView>
                    </View>
                </View> 
            </View>
            <View>
                <View style={styles.TrendingView}>
                    <View>
                        <Text style={{ color: "#fff", fontSize: 20, fontWeight: "500" }}>Trending Articles</Text>
                    </View>
                    <View>
                        <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('health arcticles', {screen: 'Arcticles'})}>
                            <Feather name="arrow-right" size={30}  color="#00ec9b" /> 
                        </TouchableOpacity>
                    </View>
                </View> 
                <TrendingArticlesList/>
            </View>

            <View style={{paddingBottom:50}}>
                <View style={styles.TrendingView}>
                    <View>
                        <Text style={{ color: "#fff", fontSize: 20, fontWeight: "500" }}>Related Articles</Text>
                    </View>
                    <View>
                        <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('health arcticles', {screen: 'Arcticles'})}>
                            <Feather name="arrow-right" size={30}  color="#00ec9b" /> 
                        </TouchableOpacity>
                    </View>
                </View> 
                <HealthArticle/>
            </View>
        </SafeAreaView> 
    </ScrollView>
  )
}

export default Arcticles;

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
    flexContainers: {
        flexDirection: "row", 
        alignItems:'center',
        gap: 10,
        alignSelf:'flex-start'
    },
    activeBnt: {
        backgroundColor: "#00EC9B",
        paddingHorizontal: 15,
        borderRadius: 10,
        width: 120,
        height: 55,
        alignItems: "center",
        textAlign: "center",
        justifyContent: "center",
        borderColor: "#3A4255",
        borderWidth: 1,
    },
    UnactiveBnt: {
        backgroundColor: "#1F222A",
        paddingHorizontal: 15,
        borderRadius: 10,
        width: 120,
        height: 55,
        alignItems: "center",
        textAlign: "center",
        justifyContent: "center",
        borderColor: "#3A4255",
        borderWidth: 1,
    },
    TrendingView:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingBottom:20
    },
})