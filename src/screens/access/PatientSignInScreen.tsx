import { View, Text, KeyboardAvoidingView, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'

import { theme } from '../../components/forms/Theme'


import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import Checkbox from 'expo-checkbox'
import Button2 from '../../components/RegisterButton'

export default function SignInScreen() {
  const [isChecked, setChecked] = React.useState(false)
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
   <View style={styles.container}>
    <View style={styles.header}>
     <Text style={styles.headerText}>Login</Text>
    </View>
    <View style={styles.divider}>
  <Text style={styles.text}>Patient</Text>
  <View style={{width:1,height:20,backgroundColor:'#29dcdb'}}></View>
  <Text style={styles.text2}>Doctor</Text>
    </View>
    <View style={styles.formHeader}>
      <Text style={styles.formHeaderText}>
      Enter your Email Address or Doctoora ID To Log 
     into your account
      </Text>
    </View>
    <View style={styles.inputView}>
    <TextInput
     placeholder='Enter Email/Doctoora Id'
     style={styles.input}
    />
   </View>
   <View style={styles.inputView}>
    <TextInput
     placeholder='Enter Password'
     style={styles.input}
    />
   </View>
   <View style={styles.section2}>
   <View style={styles.section}>
        <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} />
        <Text style={styles.paragraph}>Keep me logged in</Text>
      </View>
      <Text style={{color:'#2D9CDB'}}>Forgot password?</Text>
   </View>
   <View style={styles.buttonView}>
   <Button2
    text='LOG IN'
    onPress={() => navigation.navigate('SignIn')}
    />
   </View>
   <View style={styles.textContainer}>
   <Text style={{fontFamily:'Poppins-Regular', fontSize:12}}>Don’t have an account?</Text>
   <Text style={{color:'#2D9CDB',fontFamily:'Poppins-Regular', fontSize:12}}>{'  '}Register</Text>
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
  header:{
    marginTop:40,
    marginLeft:158,
    
  },
  headerText:{
    fontFamily:'Poppins-Regular',
    fontSize:18,
    fontWeight:"500"
  },
  formHeaderText:{
    fontFamily:'Poppins-Regular',
    fontSize:12,
    fontWeight:"400"
  },
  text:{
    fontFamily:'Poppins-Regular',
    fontSize:14,
    fontWeight:"500"
  },
  text2:{
    fontFamily:'Poppins-Regular',
    fontSize:14,
    fontWeight:"500",
    color:'#b4b4b4'
  },
  input:{
    height: 40,
        margin: 12,
        padding: 10,
        borderRadius:4,
        width:343,
        backgroundColor:'#f7f7f9',
        marginTop:5,
        marginLeft:37,
        borderColor: "#b4b4b4",
        borderWidth:1
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
  
  formHeader:{
    marginTop:30,
    width:272,
    height:36,
    marginLeft:20
  },

 
  divider: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginTop: '15%',
    alignItems: 'center',
    marginLeft:40
  },
  inputView:{
    marginLeft:-18
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft:-25
  },
  paragraph: {
    fontSize: 12,
    fontFamily:'Poppins-Regular'
  },
  checkbox: {
    margin: 8,
  },
  section2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: 400,
  },
  buttonView:{
    marginLeft:30,
    marginTop:20
  },
  textContainer:{
    flexDirection: 'row',
    alignItems: 'center',
     marginLeft:70,
    width: 300,

  }

})