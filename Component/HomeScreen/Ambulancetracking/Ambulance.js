import { View, StyleSheet, Image } from 'react-native'
import React from 'react' 
import comingSoon from '../../Assets/AppImage/coming-soon.png'

const Ambulance = () => {
  return (
    <View style={styles.MapContainer}>
      <View style={styles.ComingContainerImage}>
          <Image source={comingSoon} style={styles.SoonImage} />
      </View>
    </View>
  )
}

export default Ambulance;
const styles = StyleSheet.create({
    MapContainer:{
        flex:1,
        backgroundColor:'#181A20',
        alignItems:'center',
        justifyContent:'center',
    },
    ComingContainerImage:{
      width:'100%',
      height:250
    },
    SoonImage:{
      resizeMode:'contain',
      width:'100%',
      height:'100%'
    }
})