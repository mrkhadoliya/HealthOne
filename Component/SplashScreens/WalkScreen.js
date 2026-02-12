import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
  StatusBar,
} from 'react-native';
import React from 'react';
import bgImages from '../Assets/AppImage/getstart-bg-img.jpeg';
import AntDesign from 'react-native-vector-icons/AntDesign';

import Swiper from 'react-native-swiper';

const WalkScreen = ({navigation}) => {
  const walkthroughList = [
    {
      id: 1,
      title: 'Consult only with a doctor you trust',
      Image: require('../Assets/AppImage/Consult-dr.png'),
    },
    {
      id: 2,
      title: 'Find a lot of specialist doctors in one place',
      Image: require('../Assets/AppImage/dr-2.png'),
    },
    {
      id: 3,
      title: 'Get connect our Online Consultation',
      Image: require('../Assets/AppImage/dr-3.png'),
    },
  ];
  return (
    <ImageBackground source={bgImages} style={styles.BackgroundImages}>
      <StatusBar backgroundColor="#190038" barStyle="default" />
      <SafeAreaView
        style={{
          flex: 1,
          paddingHorizontal: 15,
          position: 'relative',
          // backgroundColor: '#F5F7FF',
          width: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}>
        <Swiper
          paginationStyle={{
            position: 'absolute',
            bottom: '12.3%',
            left: '-80%',
          }}
          activeDotStyle={{width: 22, height: 8, backgroundColor: '#00ec9b'}}
          activeDotColor="#00ec9b"
          height={'100%'}>
          {walkthroughList.map(i => {
            return (
              <View key={i.title}>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                  }}>
                  <Image source={i.Image} style={styles.imageContainer} />
                  <Text style={styles.textStyle}>{i.title}</Text>
                </View>
              </View>
            );
          })}
        </Swiper>
        <View>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              backgroundColor: '#00ec9b',
              borderRadius: 100,
              height: 45,
              width: 45,
              borderColor: '#3f51b5',
              justifyContent: 'center',
              position: 'absolute',
              bottom: 75,
              right: 0,
              flexDirection: 'row',
              alignItems: 'center',
            }}
            onPress={() => navigation.navigate('MainScreen', {screen: 'BottomNavigation'}) }
            >
            <AntDesign name="arrowright" size={28} color="#000" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default WalkScreen;

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 25,
    fontWeight: '500',
    textAlign: 'center',
    color: '#fff',
    letterSpacing: 0.6,
  },
  imageContainer: {
    height: '50%',
    width: '100%',
    resizeMode: 'contain',
  },

  BackgroundImages: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});
