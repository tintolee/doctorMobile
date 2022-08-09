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
export default function SignInScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
   <View style={styles.container}>
 <Header headerText="Sign In" />
 
   <View style={styles.label}>
    <Text style={styles.LableText}>Email</Text>
   </View>
   <View>
    <TextInput
     placeholder='chidalu@gmail.com'
     style={styles.input}
    />
   </View>
   <View style={styles.label}>
    <Text style={styles.LableText}>Password</Text>
   </View>
   <View>
    <TextInput
     placeholder='(8 + characters)'
     style={styles.input2}
     secureTextEntry={true}
    />
   </View>
  
  
   <View style={styles.button}>
    <Button
    text='Sign In'
    onPress={() => navigation.navigate('Otp')}
    />
   </View>
   <View style={styles.TextView}>
  <Text>
    Forgot password?
  </Text>
 </View>
 <View style={{marginLeft:170, marginTop:-18}}>
 <TouchableOpacity 
  onPress={() => navigation.navigate('PasswordReset')}>

    <Text style={{color:theme.colors.primary, fontFamily:'satoshi-Medium'}}>Reset now</Text>
    </TouchableOpacity>
 </View>
   <View style={styles.dividerView}>
        <Divider style={styles.dividerLeft} />
        <Text style={styles.dividerContent}>Or sign in with</Text>
        <Divider style={styles.dividerRight} />
      </View>
      <View style={styles.socials}>
        <TouchableOpacity>
        <Apple />
        </TouchableOpacity>
       <TouchableOpacity>
       <Gmail />
       </TouchableOpacity>
      </View>
   </View>
)
}
 const styles=StyleSheet.create({
  container: {
    paddingTop: '20%',
    flex: 1,
    backgroundColor: theme.colors.background,
    
  },
  TextView:{
    marginTop:10,
    marginLeft:45,
    
  },
  input:{
    height: 48,
        margin: 12,
        padding: 10,
        borderRadius:15,
        width:327,
        backgroundColor:'#f7f7f9',
        marginTop:5,
        marginLeft:37
  },
  input2:{
      height: 48,
        margin: 12,
        padding: 10,
        borderRadius:15,
        width:327,
        backgroundColor:'#f7f7f9',
        marginTop:4,
        marginLeft:37
  },
  label:{
    marginLeft:30,
    marginTop:10
  },
  LableText:{
    fontFamily:'satoshi-Bold',
    fontSize:14
  },
  button:{
    marginLeft:40
  },
  dividerView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: '5%',
    top:50,
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
    width: '80%',
    marginTop: '20%',
    alignItems: 'center',
    marginLeft:40
  },

})