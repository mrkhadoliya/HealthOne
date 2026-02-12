import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, StyleSheet, TextInput, StatusBar, Image, ImageBackground } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather"; 
import Doctor from "../Assets/Icon/Doctor.png";
import Pharmacy from "../Assets/Icon/Pharmacy.png";
import Hospital from "../Assets/Icon/Hospital.png";
import Ambulance from "../Assets/Icon/Ambulance.png";
import BgImage from "../Assets/Images/health-Dr.png"; 
import HealthArticle from "./TopDoctor/HealthArticle";
import DoctorCardTop from "./TopDoctor/DoctorCardTop";
 

const Home = ({ navigation }) => {
    return (
        <ScrollView style={styles.scrollContainer}> 
            <SafeAreaView>
                <View style={styles.solutionContainer}>
                    <View style={{ width: "70%" }}>
                        <Text style={styles.textSolution}>Find your desire healt solution</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.notificationIcons} activeOpacity={1}>
                            <Ionicons name="notifications" size={25} color="#00ec9b" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.searchContainer}>
                    <View style={{ overflow: "hidden", position: "relative", paddingVertical: 10 }}>
                        <TextInput placeholder="Search doctor, drugs, articles..." placeholderTextColor="#A1A8B0" style={styles.InputText} keyboardType="web-search" />
                        <TouchableOpacity style={styles.mailIcons}>
                            <Feather name="search" size={20} color="#00b3ff" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.DrMenuContainer}> 
                    <TouchableOpacity onPress={() => navigation.navigate("Find Doctor", { screen: "FindDoctor" })}>
                        <View style={styles.IconContainer}>
                            <Image source={Doctor} style={styles.IConsDr} />
                        </View>
                        <View style={{ paddingVertical: 5 }}>
                            <Text style={styles.IconName}>Doctor</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("pharmacy", { screen: "Pharmacy" })}>
                        <View style={styles.IconContainer}>
                            <Image source={Pharmacy} style={styles.IConsDr} />
                        </View>
                        <View style={{ paddingVertical: 5 }}>
                            <Text style={styles.IconName}>Pharmacy</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Find Doctor", { screen: "FindDoctor" })}>
                        <View style={styles.IconContainer}>
                            <Image source={Hospital} style={styles.IConsDr} />
                        </View>
                        <View style={{ paddingVertical: 5 }}>
                            <Text style={styles.IconName}>Hospital</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("ambulance tracking", { screen: "Ambulance" })}>
                        <View style={styles.IconContainer}>
                            <Image source={Ambulance} style={styles.IConsDr} />
                        </View>
                        <View style={{ paddingVertical: 5 }}>
                            <Text style={styles.IconName}>Ambulance</Text>
                        </View>
                    </TouchableOpacity> 
                </View>

                <View style={{ width: "100%" }}>
                    <ImageBackground source={BgImage} style={styles.Bghealth}>
                        <View style={{ padding: 10 }}>
                            <View style={{ width: 200 }}>
                                <Text style={styles.Text}>Early protection for your family health</Text>
                            </View>
                            <View>
                                <TouchableOpacity
                                    style={styles.LearnButton}
                                    activeOpacity={0.7}
                                    // onPress={() => navigation.navigate('Login', {screen: 'Login'})}
                                >
                                    <Text style={styles.textLogin}>Learn More</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
                <View style={styles.TopDrContainer}>
                    <View style={styles.topList}>
                        <View>
                            <Text style={{ color: "#fff", fontSize: 18, fontWeight: "500" }}>Top Doctor</Text>
                        </View>
                        <View>
                            <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate("Top Doctor", { screen: "TopDoctors" })}>
                                <Feather name="arrow-right" size={25}  color="#00ec9b" /> 
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        <DoctorCardTop />
                    </View>
                </View>
                <View style={styles.articleContainer}>
                    <View style={styles.topList}>
                        <View>
                            <Text style={{ color: "#fff", fontSize: 18, fontWeight: "500" }}>Health article</Text>
                        </View>
                        <View>
                            <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('health arcticles', {screen: 'Arcticles'})}>
                                <Feather name="arrow-right" size={25}  color="#00ec9b" /> 
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        <HealthArticle />
                    </View>
                </View>
            </SafeAreaView>
        </ScrollView>
    );
};

export default Home;

const styles = StyleSheet.create({
    scrollContainer: {
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 15,
        backgroundColor: "#181A20",
    },
    solutionContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    textSolution: {
        fontWeight: "600",
        color: "#fff",
        fontSize: 25,
    },
    notificationIcons: {
        backgroundColor: "#1F222A",
        padding: 5,
        borderRadius: 100,
        width: 40,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
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
        textAlign: "center",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 20,
    },
    IconContainer: {
        backgroundColor: "#1F222A",
        padding: 6,
        borderRadius: 12,
        alignItems: "center",
        borderColor: "#3A4255",
        borderWidth: 1,
        width: 60,
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 5,
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
    Bghealth: {
        resizeMode: "contain",
        height: "auto",
        width: "100%",
        borderRadius: 12,
    },
    Text: {
        fontSize: 19,
        fontWeight: "500",
        color: "#101623",
    },
    LearnButton: {
        width: 120,
        padding: 10,
        backgroundColor: "#00ec9b",
        borderRadius: 12,
        marginVertical: 10,
        borderBottomWidth: 4,
        borderBottomColor: "#1F222A",
    },
    textLogin: {
        color: "#130646",
        textAlign: "center",
        fontSize: 15,
        fontWeight: "500",
    },
    TopDrContainer: {
        paddingVertical: 10, 
    },  
    articleContainer: {
      paddingVertical: 20,
      marginBottom: 20,
  },
    topList: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 20,
    },
});
