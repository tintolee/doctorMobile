import { View, Text, KeyboardAvoidingView, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'

import { theme } from '../../components/forms/Theme'
import Header from '../../components/Header'
import { Formik } from 'formik'
import SignInButton from '../../components/forms/SignInButton'
import Button from '../../components/forms/Button'
import {Divider} from 'react-native-elements';
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import Gmail from '../../../assets/Gmail'
import Apple from '../../../assets/Apple'
export default function SignUpScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
   <View style={styles.container}>
    <View style={{
      marginLeft:40,
     width:400
    }}>
     <Text style={styles.headerText}>Sign up</Text>
    </View>
 <View style={styles.TextView}>
  <Text>
    Already have an account?
  </Text>
 </View>
 <View style={{marginLeft:210, marginTop:-18}}>
 <TouchableOpacity
  onPress={() => navigation.navigate('SignIn')}>
    <Text style={{color:theme.colors.primary, fontFamily:'satoshi-Regular'}}>Sign In</Text>
    </TouchableOpacity>
 </View>
 <View style={{
  marginTop:30,
  marginLeft:13
 }}>
 <View style={styles.label}>
    <Text style={styles.LableText}>Email</Text>
   </View>
   <View style={styles.inputView}>
    <TextInput
     placeholder='eg chidalu@gmail.com'
     style={styles.input}
    />
   </View>
   <View style={styles.label}>
    <Text style={styles.LableText}>Password</Text>
   </View>
   <View style={styles.inputView}>
    <TextInput
     placeholder='(8 + characters)'
     style={styles.input2}
     secureTextEntry={true}
    />
   </View>
   <View style={styles.label}>
    <Text style={styles.LableText}>Confirm Password</Text>
   </View>
   <View style={styles.inputView}>
    <TextInput
     placeholder='(8 + characters'
     style={styles.input2}
     secureTextEntry={true}
    />
   </View>
   <View style={styles.button}>
    <Button
    text='Sign Up'
    onPress={() => navigation.navigate('Otp')}
    />
   </View>
   <View style={styles.dividerView}>
        <Divider style={styles.dividerLeft} />
        <Text style={styles.dividerContent}>Or sign up with</Text>
        <Divider style={styles.dividerRight} />
      </View>
      <View style={styles.socials}>
        <TouchableOpacity>
        <Apple width="40" height="40" />
        </TouchableOpacity>
       <TouchableOpacity>
       <Gmail width="40" height="40" />
       </TouchableOpacity>
      </View>
 </View>
   
   </View>
)
}
 const styles=StyleSheet.create({
  container: {
    paddingTop: '30%',
    flex: 1,
    backgroundColor: theme.colors.background,
    
  },
  TextView:{
    marginTop:-40,
    marginLeft:40
  },
  input:{
    height: 48,
        margin: 12,
        padding: 10,
        borderRadius:16,
        width:327,
        backgroundColor:'#f7f7f9',
        marginTop:5,
        marginLeft:33
  },
  input2:{
    height: 48,
        margin: 12,
        padding: 10,
        borderRadius:16,
        width:327,
        backgroundColor:'#f7f7f9',
        marginTop:4,
        marginLeft:33
  },
  label:{
    marginLeft:30,
    marginTop:10
  },
  LableText:{
    fontFamily:'satoshi-Medium'
  },
  button:{
    marginLeft:33,
    marginTop:-20
  },
  dividerView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: '-2%',
    top:20,
    marginLeft:60
    
  },

  dividerLeft: {
    width: '21%',
    height: '10%',
    backgroundColor: theme.colors.grey,
    marginLeft: '2%',
  },

  dividerRight: {
    width: '21%',
    height: '10%',
    backgroundColor: theme.colors.grey,
    marginLeft: '2%',
  },
  dividerContent: {
    marginTop: '-2%',
    marginLeft: '3%',
    color: theme.colors.grey,
  },
  socials: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%',
    marginTop: '10%',
    alignItems: 'center',
    marginLeft:20
  },
  headerText: {
    fontSize: 40,
    fontWeight: "700",
    fontStyle: 'normal',
    color: '#08090a',
    marginBottom: 50,
    marginRight: 241,
    fontFamily:'satoshi-Bold',
    lineHeight:48,
    letterSpacing:-3
    // marginBottom:90
  },
  inputView:{
    marginLeft:-4
  }

})