import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import CallItem from './CallItem';

const MainCallListScreen = (props) => {
  return (
    <View style={styles.viewsContainer}>
       <CallItem />
    </View>
  )
}

export default MainCallListScreen;
const styles = StyleSheet.create({
    viewsContainer:{
        backgroundColor:'#181A20',
        flex:1
    }
})