import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import WalkScreen from "./Component/SplashScreens/WalkScreen";
import GetStarted from "./Component/SplashScreens/GetStarted";
import Login from "./Component/LoginSignUpScreen/Login";
import LoginSuccess from "./Component/LoginSignUpScreen/LoginSuccess";
import SignUp from "./Component/LoginSignUpScreen/SignUp";
import SignUpSuccess from "./Component/LoginSignUpScreen/SignUpSuccess";
import ResetPassword from "./Component/ResetPasswordScreen/ResetPassword";
import ResetPasswordVerifyCode from "./Component/ResetPasswordScreen/ResetPasswordVerifyCode";
import CreateNewPassword from "./Component/ResetPasswordScreen/CreateNewPassword";
import Home from "./Component/HomeScreen/Home";
import BottomNavigation from "./Component/Navigations/BottomNavigation";
import TopDoctors from "./Component/HomeScreen/TopDoctor/TopDoctors";
import FindDoctor from "./Component/HomeScreen/InnerScreen/FindDoctor";
import DoctorDetail from "./Component/HomeScreen/InnerScreen/DoctorDetail";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import BookAppointment from "./Component/HomeScreen/InnerScreen/BookAppointment";
import ChatScreen from "./Component/HomeScreen/ChatDoctor/ChatScreen"; 
import OnCallScreens from "./Component/HomeScreen/OnCallScreens/OnCallScreens";
import OnVideoScreens from "./Component/HomeScreen/OnCallScreens/OnVideoScreens";
import Arcticles from "./Component/HomeScreen/HealthArticle/Arcticles";
import Pharmacy from "./Component/HomeScreen/PharmacyScreens/Pharmacy";
import DrugsDetail from "./Component/HomeScreen/PharmacyScreens/DrugsDetail";
import MyCart from "./Component/HomeScreen/PharmacyScreens/MyCart";
import Ambulance from "./Component/HomeScreen/Ambulancetracking/Ambulance";

const Stack = createNativeStackNavigator();

const Router = (props) => {
    const { navigation } = props; 

    return (
        <SafeAreaProvider>
            <StatusBar backgroundColor="#1F222A" barStyle="default" />
            <NavigationContainer style={{backgroundColor:'#181A20'}}>
                <Stack.Navigator
                    initialRouteName="Home"
                    screenOptions={{
                        // headerShown: false,
                        headerStyle: { backgroundColor: "#1F222A" },
                        headerTintColor: "#fff",
                        headerBackTitleVisible: false,
                        headerTitleAlign: "center",
                        headerTransparent: ArrayBuffer,
                        headerShadowVisible: false,
                        headerTitleStyle:{ fontSize:16, },
                    }}
                >
                    <Stack.Screen name="Splash Screen" options={{ headerShown: false }}>
                        {(props) => <WalkScreen {...props} />}
                    </Stack.Screen>

                    <Stack.Screen name="get started" options={{ headerShown: false }}>
                        {(props) => <GetStarted {...props} />}
                    </Stack.Screen>

                    {/* Login Sign Up screens */}
                    <Stack.Screen name="Login" options={{ headerShown: true }}>
                        {(props) => <Login {...props} />}
                    </Stack.Screen>
                    <Stack.Screen name="Login Success" options={{ headerShown: false }}>
                        {(props) => <LoginSuccess {...props} />}
                    </Stack.Screen>
                    <Stack.Screen name="Sign Up" options={{ headerShown: true }}>
                        {(props) => <SignUp {...props} />}
                    </Stack.Screen>
                    <Stack.Screen name="Sign Up Success" options={{ headerShown: false }}>
                        {(props) => <SignUpSuccess {...props} />}
                    </Stack.Screen>

                    {/* Forgot Password Screen */}
                    <Stack.Screen name="Forgot Password" options={{ headerShown: false }}>
                        {(props) => <ResetPassword {...props} />}
                    </Stack.Screen>
                    <Stack.Screen name="Reset Password VerifyCode" options={{ headerShown: false }}>
                        {(props) => <ResetPasswordVerifyCode {...props} />}
                    </Stack.Screen>
                    <Stack.Screen name="Create New Password" options={{ headerShown: false }}>
                        {(props) => <CreateNewPassword {...props} />}
                    </Stack.Screen>

                    {/* Home Main Screen */}
                    <Stack.Screen name="MainScreen" options={{ headerShown: false }}>
                        {(props) => <BottomNavigation {...props} />}
                    </Stack.Screen>

                    <Stack.Screen name="Top Doctor" options={{ headerShown: true }}>
                        {(props) => <TopDoctors {...props} />}
                    </Stack.Screen>

                    <Stack.Screen name="Find Doctor" options={{ headerShown: true }}>
                        {(props) => <FindDoctor {...props} />}
                    </Stack.Screen>

                    <Stack.Screen
                        name="Doctor Detail"
                        options={{
                            headerShown: true,
                            headerTitleAlign: "left",
                            headerRight: () => (
                                <View>
                                    <Feather name="more-vertical" style={{ fontSize: 25 }} color="#fff" />
                                </View>
                            ),
                        }}
                    >
                        {(props) => <DoctorDetail {...props} />}
                    </Stack.Screen>

                    <Stack.Screen
                        name="Book Appointment"
                        options={{
                            headerShown: true,
                            headerTitleAlign: "left",
                            headerRight: () => (
                                <View>
                                    <Feather name="more-vertical" style={{ fontSize: 25 }} color="#fff" />
                                </View>
                            ),
                        }}
                    >
                        {(props) => <BookAppointment {...props} />}
                    </Stack.Screen>

                    <Stack.Screen
                        name="Chat"
                        options={({ route }) => ({
                            title: route.params.userName,
                            headerBackTitleVisible: false,
                            headerShown: true,
                            headerTitleAlign: "left",
                             
                            headerRight: () => (
                                <View style={{flexDirection:'row',alignItems:'center', gap:8, justifyContent:'flex-end'}}>
                                    <TouchableOpacity> 
                                        <Ionicons name="videocam-outline" style={{ fontSize: 20 }} color="#fff" />
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => navigation.navigate('Calls', {screen: 'OnCallAudio'}) }> 
                                        <Ionicons name="call-outline" style={{ fontSize: 20 }} color="#fff" />
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Feather name="more-vertical" style={{ fontSize: 25 }} color="#fff" />
                                    </TouchableOpacity>
                                </View>
                            ),
                        })}
                    >
                        {(props) => <ChatScreen options={{fontSize:14}} {...props} />}
                    </Stack.Screen>
 
                    <Stack.Screen name="on call" options={{ headerShown: false }}>
                        {(props) => <OnCallScreens {...props} />}
                    </Stack.Screen>
                    <Stack.Screen name="live call" options={{ headerShown: false }}>
                        {(props) => <OnVideoScreens {...props} />}
                    </Stack.Screen>
                    <Stack.Screen name="health arcticles" 
                        options={{ 
                            headerShown: true,
                            title:"Arcticles",
                            headerTitleAlign: "left",
                            headerRight: () => (
                                <View>
                                    <Feather name="more-vertical" style={{ fontSize: 25 }} color="#fff" />
                                </View>
                            ),
                        }}>
                        {(props) => <Arcticles {...props} />}
                    </Stack.Screen>

                    <Stack.Screen name="pharmacy" 
                        options={{ 
                            headerShown: true,
                            title:"Pharmacy",
                            headerTitleAlign: "left",
                            headerRight: () => (
                                <View>
                                    <Feather name="shopping-cart" style={{ fontSize: 25 }} color="#fff" />
                                </View>
                            ),
                        }}>
                        {(props) => <Pharmacy {...props} />}
                    </Stack.Screen>

                    <Stack.Screen name="drugs detail" 
                        options={{ 
                            headerShown: true,
                            title:"Drugs Detail",
                            headerTitleAlign: "left",
                            headerRight: () => (
                                <View>
                                    <Feather name="shopping-cart" style={{ fontSize: 25 }} color="#fff" />
                                </View>
                            ),
                        }}>
                        {(props) => <DrugsDetail {...props} />}
                    </Stack.Screen>

                    <Stack.Screen name="my cart" options={{ headerShown: true, title:"My Cart" }}>
                        {(props) => <MyCart {...props} />}
                    </Stack.Screen>

                    <Stack.Screen name="ambulance tracking" options={{ headerShown: true, title:"Ambulance" }}>
                        {(props) => <Ambulance {...props} />}
                    </Stack.Screen>


                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
};

export default Router;
