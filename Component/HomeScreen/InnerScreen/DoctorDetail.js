import { View, Text, ScrollView, StyleSheet, SafeAreaView, TouchableOpacity, Image } from "react-native";
import React from "react";
import imageDr from "../../Assets/AppImage/doctor2.png";
import StarImg from "../../Assets/Icon/star.png";
import LocaImg from "../../Assets/Icon/location.png";

// import AntDesign from 'react-native-vector-icons/AntDesign';
import messageimg from "../../Assets/Icon/message.png";
 

const DoctorDetail = ({ navigation }) => {
    return (
        <ScrollView style={styles.DoctorDetailContainer}>
            <SafeAreaView>
                <View>
                    <View style={styles.CardContainer}>
                        <View style={styles.CardImage}>
                            <Image style={styles.DrImage} source={imageDr} alt="" />
                        </View>
                        <View style={{ width: "100%" }}>
                            <View style={styles.CardTitle}>
                                <Text style={styles.DrName}>Dr. Marcus Horizon</Text>
                                <Text style={styles.DrPostions}>Chardiologist</Text>
                            </View>
                            <View style={styles.CardLocaOrStart}>
                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                    <Image source={StarImg} style={{ width: 25, height: 25, resizeMode: "contain" }} />
                                    <Text style={{ color: "#00EC9B" }}>4,7</Text>
                                </View>
                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                    <Image source={LocaImg} style={{ width: 20, height: 20, resizeMode: "contain" }} />
                                    <Text style={{ color: "#A1A8B0" }}>800m away</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.AboutContainer}>
                    <View>
                        <Text style={{ color: "#fff", fontSize: 20, paddingBottom: 8 }}>About</Text>
                        <Text style={{ color: "#717784", textAlign: "justify", lineHeight: 25 }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...
                            <TouchableOpacity>
                                <Text style={{ color: "#00EC9B" }}>read More</Text>
                            </TouchableOpacity>
                        </Text>
                    </View>
                </View>

                {/* data area */}

                <View style={styles.calendarContainer}>
                    <ScrollView horizontal>
                        <View style={styles.flexContainers}> 
                            <TouchableOpacity activeOpacity={0.7} style={styles.activeBnt}>
                                <View>
                                    <Text style={{ textAlign: "center", fontSize: 14, color: "#fff" }}>Sat</Text>
                                    <Text style={{ textAlign: "center", fontSize: 18, fontWeight: "600", color: "#fff" }}>21</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.7} style={styles.UnactiveBnt}>
                                <View>
                                    <Text style={{ textAlign: "center", fontSize: 14, color: "#fff" }}>Sun</Text>
                                    <Text style={{ textAlign: "center", fontSize: 18, fontWeight: "600", color: "#fff" }}>22</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.7} style={styles.UnactiveBnt}>
                                <View>
                                    <Text style={{ textAlign: "center", fontSize: 14, color: "#fff" }}>Mon</Text>
                                    <Text style={{ textAlign: "center", fontSize: 18, fontWeight: "600", color: "#fff" }}>23</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.7} style={styles.UnactiveBnt}>
                                <View>
                                    <Text style={{ textAlign: "center", fontSize: 14, color: "#fff" }}>Tue</Text>
                                    <Text style={{ textAlign: "center", fontSize: 18, fontWeight: "600", color: "#fff" }}>24</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.7} style={styles.UnactiveBnt}>
                                <View>
                                    <Text style={{ textAlign: "center", fontSize: 14, color: "#fff" }}>Wed</Text>
                                    <Text style={{ textAlign: "center", fontSize: 18, fontWeight: "600", color: "#fff" }}>25</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.7} style={styles.UnactiveBnt}>
                                <View>
                                    <Text style={{ textAlign: "center", fontSize: 14, color: "#fff" }}>Thu</Text>
                                    <Text style={{ textAlign: "center", fontSize: 18, fontWeight: "600", color: "#fff" }}>26</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.7} style={styles.UnactiveBnt}>
                                <View>
                                    <Text style={{ textAlign: "center", fontSize: 14, color: "#fff" }}>Fri</Text>
                                    <Text style={{ textAlign: "center", fontSize: 18, fontWeight: "600", color: "#fff" }}>27</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>

                {/* time area */}

                <View style={styles.TimeMainContainer}>
                    <View style={styles.timerRow}>
                        <TouchableOpacity activeOpacity={0.7} style={styles.TimerBnts} d>
                            <View>
                                <Text style={{ textAlign: "center", fontSize: 16, fontWeight: "400", color: "#00EC9B" }}>10:00 AM</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.7} style={styles.TimerBnts} d>
                            <View>
                                <Text style={{ textAlign: "center", fontSize: 16, fontWeight: "400", color: "#3A4255" }}>11:00 AM</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.7} style={styles.TimerBnts} d>
                            <View>
                                <Text style={{ textAlign: "center", fontSize: 16, fontWeight: "400", color: "#00EC9B" }}>12:30 PM</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.7} style={styles.TimerBnts} d>
                            <View>
                                <Text style={{ textAlign: "center", fontSize: 16, fontWeight: "400", color: "#3A4255" }}>01:30 PM</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.7} style={styles.TimerBnts} d>
                            <View>
                                <Text style={{ textAlign: "center", fontSize: 16, fontWeight: "400", color: "#00EC9B" }}>03:45 PM</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.7} style={styles.TimerBnts} d>
                            <View>
                                <Text style={{ textAlign: "center", fontSize: 16, fontWeight: "400", color: "#3A4255" }}>05:00 PM</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* sms or Book Apointment */}

                <View style={styles.bookContainer}>
                    <View style={{ flexDirection: "row", alignItems: "center", gap: 10, justifyContent: "space-between" }}>
                        <TouchableOpacity style={styles.messageBtn} onPress={() => navigation.navigate("Message", { screen: "Message" })}>
                            <Image source={messageimg} style={{ resizeMode: "contain", width: 40, height: 40 }} />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.ApointmentBtn} onPress={() => navigation.navigate("Book Appointment", { screen: "BookAppointment" })}>
                            <Text style={{ textAlign: "center", fontSize: 16, fontWeight: "400", color: "#00EC9B" }}>Book Apointment</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </ScrollView>
    );
};

export default DoctorDetail;

const styles = StyleSheet.create({
    DoctorDetailContainer: {
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: "#181A20",
    },
    CardContainer: {
        backgroundColor: "#1F222A",
        padding: 8,
        borderRadius: 10,
        width: "100%",
        borderWidth: 0,
        flexDirection: "row",
        alignItems: "center",
        gap: 15,
        flex: 1,
        borderBottomWidth: 4,
        borderBottomColor: "#3A4255",
    },
    CardImage: {
        alignItems: "center",
    },
    DrImage: {
        width: 100,
        height: 100,
        borderRadius: 12,
        // borderColor: "#3A4255",
        // borderWidth: 1,
        backgroundColor: "#181A20",
        resizeMode: "contain",
    },
    CardTitle: {
        textAlign: "center",
    },
    DrName: {
        fontSize: 18,
        color: "#fff",
    },
    DrPostions: {
        fontSize: 13,
        color: "#717784",
        letterSpacing: 0.5,
        paddingVertical: 5,
    },
    CardLocaOrStart: {
        paddingVertical: 10,
        flexDirection: "row",
        alignItems: "center",
        gap: 15,
    },
    AboutContainer: {
        paddingVertical: 15,
    },
    calendarContainer: {
        paddingVertical: 15,
        borderWidth: 0,
        borderBottomColor: "#1F222A",
        borderBottomWidth: 1,
    },
    flexContainers: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    activeBnt: {
        backgroundColor: "#00EC9B",
        padding: 8,
        borderRadius: 10,
        width: 60,
        height: 60,
        alignItems: "center",
        textAlign: "center",
        justifyContent: "center",
        borderColor: "#3A4255",
        borderWidth: 1,
    },
    UnactiveBnt: {
        backgroundColor: "#1F222A",
        padding: 8,
        borderRadius: 10,
        width: 60,
        height: 60,
        alignItems: "center",
        textAlign: "center",
        justifyContent: "center",
        borderColor: "#3A4255",
        borderWidth: 1,
    },
    TimeMainContainer: {
        paddingVertical: 20,
    },
    timerRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        flexWrap: "wrap",
    },
    TimerBnts: {
        backgroundColor: "#1F222A",
        paddingHorizontal: 16,
        borderRadius: 10,
        width: 106.6,
        height: 50,
        alignItems: "center",
        textAlign: "center",
        justifyContent: "center",
        borderWidth: 0,
        borderBottomWidth: 4,
        borderBottomColor: "#3A4255",
    },
    bookContainer: {
        marginVertical: 30,
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
});
