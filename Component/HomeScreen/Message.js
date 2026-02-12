import React from "react";
import {StyleSheet, StatusBar } from "react-native"; 
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'; 
import MessageList from "./ChatDoctor/MessageList";  
import MainCallListScreen from "./OnCallScreens/MainCallListScreen";

const Tab = createMaterialTopTabNavigator();
 
const Message = (props) => {
 
    return (
        <>
           <StatusBar backgroundColor="#1F222A" barStyle="default" />  
            <Tab.Navigator 
              screenOptions={{
                tabBarActiveTintColor: '#00EC9B',
                tabBarLabelStyle: { fontSize: 14, fontWeight:'500', textTransform:'capitalize' },
                tabBarStyle: { backgroundColor: '#1F222A',},
                tabBarIndicatorStyle: {
                  borderBottomColor: '#00EC9B',
                  borderBottomWidth: 2,
                  borderRadius:50
                }, 
                 
              }}  
            >
              <Tab.Screen
                name="All"
                component={MessageList}
                options={{ tabBarLabel: 'All' }}
              />
              <Tab.Screen
                name="Group"
                component={MessageList}
                options={{ tabBarLabel: 'Group' }}
              />
              <Tab.Screen
                name="Calls List"
                component={MainCallListScreen}
                options={{ tabBarLabel: 'Calls' }}
              />
            </Tab.Navigator>
        </>
    );
};

export default Message;


const styles = StyleSheet.create({
  TabMainContainer:{
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: "#181A20",
  }
})