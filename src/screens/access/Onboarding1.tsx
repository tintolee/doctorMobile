import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {View,StyleSheet,TouchableOpacity, Text,Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Button from '../../components/LoginButton';
import Button2 from '../../components/RegisterButton';

export const Onboarding1: React.FunctionComponent = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Onboarding2');
    },1000 );
  }, []);
  return (
    <LinearGradient
      start={{x: 0, y: 1}}
      end={{x: 0, y: 0}}
      colors={[ '#2D9CDB','rgba(45, 156, 219, 0.08)']}
      style={styles.linearGradient}>
      <View style={styles.logo}>
        <Image
          source={require('../../../assets/images/onboarding1.png')}
          style={{width: 380, height: 400}}
        />
      </View>
       <View style={styles.textContainer}>
        <Text style={styles.bodyText}>
        Search Medical Professionals
        </Text>
       </View>
       <View style={styles.textContainer2}>
        <Text style={styles.bodyText2}>
           Easily Search for medical Proffessionals{'\n'}
          {'                          '}nearby you
        </Text>
       </View>
<View style={styles.buttonView}>
<Button
    text='LOG IN'
    onPress={() => navigation.navigate('Otp')}
    />
</View>

<View style={styles.buttonView2}>
<Button2
    text='REGISTER'
    onPress={() => navigation.navigate('Otp')}
    />
</View>
  
      
     
      
    </LinearGradient>
  );
}

export default Onboarding1;

const styles = StyleSheet.create({
   
    

    linearGradient: {
      flex: 1,
    },
    textContainer: {
      marginTop: 30,
      marginLeft: 90,
      width:400
    },
    textContainer2: {
      marginTop: 10,
      marginLeft: 50,
      height:200,
     
    },
  
    bodyText: {
      textAlign: 'center',
      fontWeight: '500',
      color: '#fff',
      fontSize: 16,
      fontFamily: 'RobotoRegular',
      letterSpacing: 0.8,
      width: 234,
      height:19,
      lineHeight:18
      // height: 105,
    },
    bodyText2: {
      textAlign: 'left',
      fontWeight: "400",
      color: '#fff',
      fontSize: 14,
      fontFamily: 'RobotoLight',
      letterSpacing: 0.8,
      width: 500,
      height:90,
      lineHeight:16
      // height: 105,
    },
    logo: {
     marginLeft:0,
     marginTop:0,
    },
  buttonView:{
    marginLeft:30,
    marginTop:-120
  },
  buttonView2:{
    marginLeft:30,
    marginTop:-30
  }
  });