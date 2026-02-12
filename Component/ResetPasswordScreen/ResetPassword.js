import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import bgImages from '../Assets/AppImage/gradient-cool-art.jpg';
import {TextInput} from 'react-native-gesture-handler';

const ResetPassword = ({navigation}) => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <>
      <ImageBackground source={bgImages} style={styles.BackgroundImages}>
        <SafeAreaView style={styles.safeContainer}>
          <View style={styles.gorgotRow}>
            <Text style={styles.textForgot}>Forgot Your Password?</Text>
            <Text style={styles.textEmailPhone}>
              Enter your email or your phone number, we will send you
              confirmation code
            </Text>
          </View>
          <View style={styles.bgBorder}>
            <TouchableOpacity
              style={{
                width: '48%',
                padding: 10,
                backgroundColor: selectedTab == 0 ? '#00b3ff' : '#00b3ff00',
                borderRadius: 12,
                borderLeftWidth: 4,
                borderLeftColor: selectedTab == 0 ? '#2379b7' : '#00b3ff00',
                borderRightWidth: 4,
                borderRightColor: selectedTab == 0 ? '#2379b7' : '#00b3ff00',
                textAlign: 'center',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => setSelectedTab(0)}
              activeOpacity={1}>
              <Text
                style={[
                  styles.textLogin,
                  {color: selectedTab == 0 ? '#fff' : '#00b3ff'},
                ]}>
                Email
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={1}
              style={{
                width: '48%',
                padding: 10,
                backgroundColor: selectedTab == 1 ? '#00b3ff' : '#00b3ff00',
                borderRadius: 12,
                borderLeftWidth: 4,
                borderLeftColor: selectedTab == 1 ? '#2379b7' : '#00b3ff00',
                borderRightWidth: 4,
                borderRightColor: selectedTab == 1 ? '#2379b7' : '#00b3ff00',
                textAlign: 'center',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => setSelectedTab(1)}>
              <Text
                style={[
                  styles.textLogin,
                  {color: selectedTab == 1 ? '#fff' : '#00b3ff'},
                ]}>
                Phone
              </Text>
            </TouchableOpacity>
          </View>

          <View>
            {selectedTab == 0 ? (
              <View style={styles.BackgroundEmailStyle}>
                <View style={{position: 'relative', paddingVertical: 10}}>
                  <TextInput
                    placeholder="Enter your email"
                    value="jamesschleifer@gmail.com"
                    placeholderTextColor="#A1A8B0"
                    style={styles.InputText}
                    keyboardType="email-address"
                  />
                  <TouchableOpacity style={styles.mailIcons}>
                    <Feather name="mail" size={20} color="#e5e7ebe0" />
                  </TouchableOpacity>
                </View>
              </View>
            ) : (
              <View style={styles.BackgroundEmailStyle}>
                <View style={{position: 'relative', paddingVertical: 10}}>
                  <TextInput
                    placeholder="Enter your Phone"
                    value="+91-7410855544"
                    placeholderTextColor="#A1A8B0"
                    style={styles.InputText}
                    keyboardType="email-address"
                  />
                  <TouchableOpacity style={styles.mailIcons}>
                    <Feather name="phone" size={20} color="#e5e7ebe0" />
                  </TouchableOpacity>
                </View>
              </View>
            )}
            <View>
              <TouchableOpacity
                style={styles.LoginButton}
                activeOpacity={0.7}
                onPress={() =>
                  navigation.navigate('Reset Password VerifyCode', {screen: 'ResetPasswordVerifyCode'})
                }>
                <Text style={styles.textLogin}>Reset Password</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({
  BackgroundImages: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    flex: 1,
    position: 'relative',
    // backgroundColor:'#ffffff8c',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    position: 'relative',
  },
  safeContainer: {
    width: '100%',
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  gorgotRow: {},
  textForgot: {
    fontSize: 24,
    color: '#fff',
    fontWeight: '600',
    paddingVertical: 5,
  },
  textEmailPhone: {
    fontSize: 16,
    color: '#A1A8B0',
    fontWeight: '400',
    paddingVertical: 5,
    lineHeight: 22,
  },
  BackgroundEmailStyle: {
    // paddingTop: 15,
    width: '100%',
  },
  bgBorder: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 12,
    borderWidth: 1,
    padding: 3,
    backgroundColor: '#2c2c2cb8',
    marginVertical: 20,
  },
  textLogin: {
    color: '#130646',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '500',
  },
  //  TextInput Css

  InputText: {
    width: '100%',
    borderRadius: 12,
    paddingLeft: 50,
    paddingRight: 15,
    color: '#fff',
    fontSize: 16,
    paddingVertical: 12,
    backgroundColor: '#130646',
    borderLeftWidth: 3,
    borderLeftColor: '#00b3ff',
    borderRightWidth: 3,
    borderRightColor: '#00b3ff',
  },
  mailIcons: {
    position: 'absolute',
    left: 8,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    marginVertical: 5,
    zIndex: 1,
  },
  LoginButton: {
    width: '100%',
    padding: 12,
    backgroundColor: '#00ec9b',
    borderRadius: 12,
    marginVertical: 10,
    borderBottomWidth: 4,
    borderBottomColor: '#8a56ff',
  },
  textLogin: {
    color: '#130646',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '500',
  },
});
