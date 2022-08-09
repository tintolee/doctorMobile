import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import styled from 'styled-components/native';
import {View,StyleSheet, Image, Text} from 'react-native';
export const AuthLanding: React.FunctionComponent = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Onboarding1');
    }, 4000);
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
    <Image
      source={require('../../../assets/images/DoctooraLogo.png')}
      style={{width: 203, height: 84}}
    />
      </View>
      <View style={styles.caption}>
        <Text style={styles.bodyText}>
        Unlimited Access to health care
        Anywhere, Anytime.
        </Text>
      </View>
  </View>
  );
};

export default AuthLanding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#2D9CDB'
  },
  linearGradient: {
    flex: 1,
  },

  bodyText: {
    textAlign: 'center',
    fontWeight: '500',
    color: '#fff',
    fontSize: 18,
    fontFamily: 'RobotoRegular',
    letterSpacing: 0.8,
    width: 300,
    // height: 105,
  },
  logo:{
    marginLeft:10,
    marginBottom:100
  }, 
  caption:{
    marginTop:-60
  }
});
