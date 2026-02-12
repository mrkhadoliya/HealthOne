import { 
  StyleSheet, 
  StatusBar,
} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import UpcomingAppointment from './AppointmentSchedule/UpcomingAppointment';
import CompletedAppointment from './AppointmentSchedule/CompletedAppointment';
import CanceledAppointment from './AppointmentSchedule/CanceledAppointment';

const Tab = createMaterialTopTabNavigator();
const Appointment = (props) => {
  return (
    <>
      <StatusBar backgroundColor="#1F222A" barStyle="default" />
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#00EC9B',
          tabBarLabelStyle: {
            fontSize: 15,
            fontWeight: '500',
            textTransform: 'capitalize',
          },
          tabBarStyle: {backgroundColor: '#1F222A'},
          tabBarIndicatorStyle: {
            borderBottomColor: '#00EC9B',
            borderBottomWidth: 2,
            borderRadius: 50,
          },
          backgroundColor:'#181A20',
        }}>
        <Tab.Screen
          name="Upcoming"
          component={UpcomingAppointment}
          options={{tabBarLabel: 'Upcoming'}}
        />
        <Tab.Screen
          name="Completed"
          component={CompletedAppointment}
          options={{tabBarLabel: 'Completed'}}
        />
        <Tab.Screen
          name="Canceled"
          component={CanceledAppointment}
          options={{tabBarLabel: 'Canceled'}}
        />
      </Tab.Navigator>
    </>
  );
};

export default Appointment;
const styles = StyleSheet.create({});
