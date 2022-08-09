
  
  import React, {useState} from 'react';
  import {
    Text,
    View,
    KeyboardAvoidingView,
    ImageBackground,
    Image,
    Alert,
    StyleSheet,
    Platform
  } from 'react-native';
  import { useNavigation } from '@react-navigation/native';
  import { NativeStackNavigationProp } from '@react-navigation/native-stack';
  import Button from '../../components/forms/Button';
  
  import { theme } from '../../components/forms/Theme';
  import SignInButton from '../../components/forms/SignInButton';
import SignUpButton from '../../components/RegisterButton';
  
  export const AuthScreen: React.FunctionComponent = () => {
    const navigation = useNavigation<NativeStackNavigationProp<any>>();
      return (
          <KeyboardAvoidingView
         
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.backgroundContainer2}>
                <ImageBackground  
            source={require('../../../assets/images/background.png')}
            resizeMode="stretch" 
            style={{flex: 1,
              justifyContent: "center",
              height:820
              }}
          >

            <View style={{marginLeft: 130, marginTop: -30}}>
              <Image
                source={require('../../../assets/images/logo.png')}
                style={{width: 119, height: 41}}
              />
            </View>
            <View style={{width: 400, marginTop:30, marginLeft:15}}>
              <Text
                style={{
                  fontSize: 32,
                  fontWeight: 'bold',
                  fontStyle: 'normal',
                  color: 'white',
                  marginBottom: 140,
                  marginLeft: 45,
                  fontFamily:'satoshi-Bold'
      
                }}>
               
                The better way to {'\n'}          trade
              </Text>
            </View>
            <View style={{marginLeft: 40, marginTop: -150}}>
            <Button text="Create Acount" onPress={() => navigation.navigate('SignUp')} />
            </View>
            <View style={{marginLeft: 40, marginTop: -40,}}>
              <SignInButton text="Sign In" onPress={() => navigation.navigate('SignIn')} />
            </View>
            </ImageBackground>
          </KeyboardAvoidingView>
        );
      
    }
    
    export default AuthScreen;
  
    const styles = StyleSheet.create({
      backgroundContainer: {
        justifyContent: 'center',
        backgroundColor:'rgba()',
        alignItems: 'center',
        flex: 1,
      },
      backgroundContainer2: {
        justifyContent: 'center',
        backgroundColor:'#000000',
        alignItems: 'center',
        flex: 1,
      },
    
      
    
      SignIntext: {
       marginBottom:50,
       marginRight:241,
       fontSize:30
      },
    
      signInButton: {
        margin: '10%',
      },
    
      forgotPassword: {
        textAlign:'right',
        marginLeft: '40%',
        top: 10,
        fontSize: 15,
        color: theme.colors.inactiveTintColor,
      },
    
      dividerView: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: '-2%',
        top:20
        
      },
    
      dividerLeft: {
        width: '21%',
        height: '10%',
        backgroundColor: theme.colors.black,
        marginLeft: '2%',
      },
    
      dividerRight: {
        width: '21%',
        height: '10%',
        backgroundColor: theme.colors.black,
        marginLeft: '2%',
      },
      dividerContent: {
        marginTop: '-2%',
        marginLeft: '3%',
        color: theme.colors.black,
      },
      socials: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '70%',
        marginTop: '10%',
        alignItems: 'center',
      },
    
      signUp: {
        marginLeft:'20%',
        color: theme.colors.black,
        marginBottom:'10%'
      },
    });
    
    