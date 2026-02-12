import React, {useState} from 'react';
import {Text, View, TouchableOpacity, StatusBar} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../HomeScreen/Home';
import Message from '../HomeScreen/Message';
import Profile from '../HomeScreen/Profile';
import Appointment from '../HomeScreen/Appointment';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <>
      <StatusBar backgroundColor="#1F222A" barStyle="default" />
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Message') {
              iconName = focused ? 'mail' : 'mail-outline';
            } else if (route.name === 'Appointment') {
              iconName = focused ? 'calendar' : 'calendar-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'settings' : 'settings-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#00ec9b',
          tabBarInactiveTintColor: '#999A9E',
          tabBarShowLabel: true,
          tabBarHideOnKeyboard: true,
          headerStyle: {backgroundColor: '#1F222A'},
          headerTintColor: '#fff',
          tabBarStyle: {
            activeTinatColor: '#00ec9b',
            inactiveTintColor: '#999A9E',
            showLabel: true,
            backgroundColor: '#1F222A',
            height: 60,
            paddingBottom: 10,
            borderTopColor: '#3A4255',
          },
          headerShown: false,
          headerShadowVisible: false,
          headerTitleStyle: {fontSize: 16},
        })}>
        <Tab.Screen name="Home">{props => <Home {...props} />}</Tab.Screen>
        <Tab.Screen
          name="Message"
          options={{
            headerShown: true,
            headerRight: () => (
              <View style={{position: 'relative', right: 15}}>
                <TouchableOpacity>
                  <Feather name="search" style={{fontSize: 20}} color="#fff" />
                </TouchableOpacity>
              </View>
            ),
          }}>
          {props => <Message {...props} />}
        </Tab.Screen>
        <Tab.Screen
          name="Appointment"
          options={{
            title: 'Schedule',
            headerShown: true,
            headerRight: () => (
              <View style={{position: 'relative', right: 15}}>
                <TouchableOpacity>
                  <Ionicons
                    name="notifications-outline"
                    style={{fontSize: 25}}
                    color="#fff"
                  />
                </TouchableOpacity>
              </View>
            ),
          }}>
          {props => <Appointment {...props} />}
        </Tab.Screen>
        <Tab.Screen
          name="Profile"
          options={{ 
            headerShown: false, 
            headerRight: () => (
              <View style={{position: 'relative', right: 15}}>
                <TouchableOpacity>
                  <Feather
                    name="more-vertical"
                    style={{fontSize: 25}}
                    color="#fff"
                  />
                </TouchableOpacity>
              </View>
            ),
          }}
          >
          {props => <Profile {...props} />}
        </Tab.Screen>
      </Tab.Navigator>
    </>
  );
};

export default BottomNavigation;
