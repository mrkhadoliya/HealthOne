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

const ResetPasswordVerifyCode = ({navigation}) => {
  return (
    <ImageBackground source={bgImages} style={styles.BackgroundImages}>
      <SafeAreaView style={styles.safeContainer}>
        <View style={styles.gorgotRow}>
          <Text style={styles.textForgot}>Enter Verification Code?</Text>
          <Text style={styles.textEmailPhone}>
            Enter code that we have sent to your number 08528188***
          </Text>
        </View>
        <View>
          <View
            style={{
              position: 'relative',
              paddingVertical: 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <TextInput
              placeholder="*"
              placeholderTextColor="#A1A8B0"
              style={styles.InputText}
              keyboardType="phone-pad"
              maxLength={1}
              value="0"
            />
            <TextInput
              placeholder="*"
              placeholderTextColor="#A1A8B0"
              style={styles.InputText}
              keyboardType="phone-pad"
              maxLength={1}
              value="0"
            />
            <TextInput
              placeholder="*"
              placeholderTextColor="#A1A8B0"
              style={styles.InputText}
              keyboardType="phone-pad"
              maxLength={1}
              value="0"
            />
            <TextInput
              placeholder="*"
              placeholderTextColor="#A1A8B0"
              style={styles.InputText}
              keyboardType="phone-pad"
              maxLength={1}
              value="0"
            />
          </View>
        </View>
        <View>
          <View>
            <TouchableOpacity
              style={styles.LoginButton}
              activeOpacity={0.7}
              onPress={() =>
                navigation.navigate('Create New Password', {screen: 'CreateNewPassword'})
              }>
              <Text style={styles.textLogin}>Verify</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.dFlex}>
            <Text style={styles.accountSign}>Don’t have an account? </Text>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() =>
                navigation.navigate('Sign Up', {screen: 'SignUp'})
              }>
              <Text style={{fontSize: 16, color: '#00ec9b', fontWeight: '500'}}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default ResetPasswordVerifyCode;

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
  //  TextInput Css

  InputText: {
    width: '23%',
    borderRadius: 12,
    padding: 10,
    color: '#fff',
    fontSize: 20,
    paddingVertical: 12,
    backgroundColor: '#130646',
    borderLeftWidth: 3,
    borderLeftColor: '#00b3ff',
    borderRightWidth: 3,
    borderRightColor: '#00b3ff',
    textAlign: 'center',
    fontWeight: '600',
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

  dFlex: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
},
accountSign: {
    textAlign: "center",
    color: "#ddd",
    fontSize: 15,
    fontWeight: "400",
}, 
});
