import { View, Text, Image, ScrollView, SafeAreaView, TouchableOpacity, StyleSheet, Modal, Pressable } from "react-native";
import React, { useState } from "react";
import imageDr from "../../Assets/AppImage/medication.png";
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import creditImg from "../../Assets/DateImage/credit-card.png";
import doneImage from "../../Assets/DateImage/Success-done2.png";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const MyCart = ({navigation}) => {
    const [modalVisible, setModalVisible] = useState(false);


    const [count, setCount] = useState(0);
    const onPressd = () => setCount(prevCount => prevCount - 1);
    const onPress = () => setCount(prevCount => prevCount + 1);



    return (
        <ScrollView style={styles.DoctorDetailContainer}>
            <SafeAreaView>
                <View style={{paddingBottom:10}}>
                    <View style={styles.CardContainer}>
                        <View style={{position:'absolute', top:10, right:15}}>
                            <TouchableOpacity >
                                <MaterialCommunityIcons name="delete-outline" color="#00b3ff" size={30} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.CardImage}>
                            <Image style={styles.DrImage} source={imageDr} alt="" />
                        </View>
                        <View style={{ width: "100%",}}>
                            <View style={styles.CardTitle}>
                                <Text style={styles.DrName}>OBH Combi</Text>
                                <Text style={styles.DrPostions}>75ml</Text>
                            </View>
                            <View style={styles.CardLocaOrStart}>
                                <View> 
                                    <View style={{flexDirection:'row', alignItems:'center', gap:5}}>
                                        <View>
                                            <TouchableOpacity style={styles.IconCount} onPress={onPressd}> 
                                                <Feather name="minus" color="#00EC9B" size={20} />
                                            </TouchableOpacity>
                                        </View>
                                        <View style={styles.counterView}>
                                            <Text style={styles.countText} minimum={0}>{count}</Text>
                                        </View>
                                        <View>
                                            <TouchableOpacity style={styles.IconCount} onPress={onPress}> 
                                                <AntDesign name="plus" color="#00EC9B" size={20} />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                                <View> 
                                    <Text style={{ color: "#A1A8B0" }}>MPR. 854.00</Text>
                                </View>
                            </View>
                        </View>
                    </View> 
                </View>
                  
                <View style={styles.ChangesContainer}>
                    <View style={{ paddingBottom: 10 }}>
                        <View>
                            <Text style={{ color: "#fff", fontSize: 18, fontWeight: "500" }}>Payment Detail</Text>
                        </View>
                    </View>
                    <View>
                        <View style={{ flexDirection: "row", alignItems: "center", gap: 10, justifyContent: "space-between", paddingVertical: 8 }}>
                            <View>
                                <Text style={{ color: "#A1A8B0", fontSize: 15, fontWeight: "400", letterSpacing: 0.4 }}>Consultation</Text>
                            </View>
                            <View>
                                <Text style={{ color: "#A1A8B0", fontSize: 15, fontWeight: "300", letterSpacing: 0.4 }}>1000.00</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center", gap: 10, justifyContent: "space-between", paddingVertical: 8 }}>
                            <View>
                                <Text style={{ color: "#A1A8B0", fontSize: 15, fontWeight: "400", letterSpacing: 0.4 }}>Admin Fee</Text>
                            </View>
                            <View>
                                <Text style={{ color: "#A1A8B0", fontSize: 15, fontWeight: "300", letterSpacing: 0.4 }}>200.00</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center", gap: 10, justifyContent: "space-between", paddingVertical: 8 }}>
                            <View>
                                <Text style={{ color: "#A1A8B0", fontSize: 15, fontWeight: "400", letterSpacing: 0.4 }}>Aditional Discount</Text>
                            </View>
                            <View>
                                <Text style={{ color: "#A1A8B0", fontSize: 15, fontWeight: "300", letterSpacing: 0.4 }}>-</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center", gap: 10, justifyContent: "space-between", paddingVertical: 8 }}>
                            <View>
                                <Text style={{ color: "#00EC9B", fontSize: 15, fontWeight: "500", letterSpacing: 0.4 }}>Total</Text>
                            </View>
                            <View>
                                <Text style={{ color: "#00EC9B", fontSize: 15, fontWeight: "300", letterSpacing: 0.4 }}>RS 1,200.00</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.cardContainer}>
                    <View style={{ marginBottom: 30 }}>
                        <Text style={{ color: "#fff", fontSize: 18, fontWeight: "500" }}>Payment Method</Text>
                    </View>
                    <View>
                        <TouchableOpacity activeOpacity={0.7} style={styles.creditBtn}>
                            <View>
                                <Image source={creditImg} style={{ width: 50, height: 50, resizeMode: "contain", transform: [{ scale: 1.4 }] }} />
                            </View>
                            <View>
                                <Text style={{ color: "#A1A8B0", fontSize: 15, fontWeight: "500", letterSpacing: 0.4 }}>Change</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.BookingContainer}>
                    <View>
                        <Text style={{ color: "#A1A8B0", fontSize: 15, fontWeight: "400", letterSpacing: 0.4, paddingBottom: 4 }}>Total </Text>
                        <Text style={{ color: "#00EC9B", fontSize: 15, fontWeight: "500", letterSpacing: 0.4 }}>1,200.00</Text>
                    </View>
                    <TouchableOpacity activeOpacity={0.7} style={styles.BookingBtn} onPress={() => setModalVisible(true)}>
                        <Text style={{ textAlign: "center", fontSize: 16, fontWeight: "400", color: "#00EC9B" }}>Booking</Text>
                    </TouchableOpacity>
                </View>
                {/* Modal Popup */}
                <View style={styles.centeredView}>
                    <Modal
                        animationType="fade"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            Alert.alert("Modal has been closed.");
                            setModalVisible(!modalVisible);
                        }}
                    >
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <View>
                                    <Image source={doneImage} style={styles.DoneImage} />
                                </View>
                                <View>
                                    <Text style={styles.modalText}>Payment Success</Text>
                                    <Text style={styles.modalsuccessfully}>Your payment has been successful, you can have a consultation session with your trusted doctor..</Text>
                                </View>
                                <Pressable style={[styles.button, styles.buttonClose]} onPress={() => setModalVisible(!modalVisible)}>
                                    <Text style={styles.textStyle}>Back to Home</Text>
                                </Pressable>
                            </View>
                        </View>
                    </Modal>
                </View>
                {/* Modal Popup  End*/}
            </SafeAreaView>
        </ScrollView>
    );
};

export default MyCart;

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
        position:'relative',
        marginBottom:10
    },
    CardImage: {
        alignItems: "center",
    },
    DrImage: {
        width: 100,
        height: 100,
        borderRadius: 12,
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
    counterView:{
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        backgroundColor: "#1F222A",  
    },
    countText:{
        textAlign:'center',
        color:'#fff',
        fontSize:20,
        paddingHorizontal:8
    },
    ChangesContainer: {
        width: "100%",
        marginTop: 20,
        paddingBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#1F222A",
    },
    appointmentImages: {
        backgroundColor: "#1F222A",
        padding: 8,
        borderRadius: 10,
        width: 45,
        height: 45,
        borderWidth: 0,
        borderBottomWidth: 4,
        borderBottomColor: "#3A4255",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    cardContainer: {
        width: "100%",
        marginTop: 20,
        paddingBottom: 20,
    },
    creditBtn: {
        // backgroundColor: "#1F222A",
        paddingHorizontal: 20,
        borderRadius: 10,
        width: "100%",
        height: 50,
        borderWidth: 1,
        borderColor: "#3A4255",
        borderBottomWidth: 4,
        borderBottomColor: "#3A4255",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    BookingContainer: {
        paddingTop: 30,
        marginBottom: 30,
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    BookingBtn: {
        backgroundColor: "#1F222A",
        borderBottomWidth: 4,
        borderBottomColor: "#3A4255",
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 12,
        width: "60%",
        height: 50,
        alignItems: "center",
        textAlign: "center",
        justifyContent: "center",
        borderWidth: 0,
    },

    // Modal open css
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        paddingHorizontal: 15,
        backgroundColor: "#101623ab",
    },
    modalView: {
        margin: 20,
        backgroundColor: "#1F222A",
        borderColor:'#3A4255',
        borderWidth:1,
        borderBottomWidth: 4,
        borderBottomColor: "#3A4255",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        width: "100%",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    DoneImage: {
        width: 150,
        height: 150,
        resizeMode: "contain",
    },
    buttonClose: {
        width: "100%",
        padding: 12,
        backgroundColor: "#00ec9b",
        borderRadius: 12,
        marginVertical: 10,
        borderBottomWidth: 4,
        borderBottomColor: "#3A4255",
    },
    textStyle: {
        color: "#fff",
        fontWeight: "bold",
        textAlign: "center",
    },
    modalText: {
        marginVertical: 15,
        textAlign: "center",
        fontSize: 22,
        color: "#fff",
        fontWeight: "600",
    },
    modalsuccessfully: {
        marginBottom: 15,
        textAlign: "center",
        fontSize: 16,
        color: "#A1A8B0",
        fontWeight: "400",
        lineHeight: 22,
    },
});
