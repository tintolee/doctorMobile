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
export default function UserDetailsScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
   <View style={styles.container}>
<View style={{marginTop:50, marginLeft:30}}>
     <Text style={{fontFamily:'satoshi-Bold', fontSize:24}}>Add Details</Text>
     </View>
 
 <View style={styles.form}>
 <View style={styles.label}>
    <Text style={styles.LableText}>First Name</Text>
   </View>
   <View>
    <TextInput
     placeholder='eg chidalu'
     style={styles.input}
    />
   </View>
   <View style={styles.label}>
    <Text style={styles.LableText}>Last Name</Text>
   </View>
   <View>
    <TextInput
     placeholder='eg Ukwu'
     style={styles.input2}
    
    />
   </View>
   <View style={styles.label}>
    <Text style={styles.LableText}>Username</Text>
   </View>
   <View>
    <TextInput
     placeholder='eg @chidalu1'
     style={styles.input2}
     
    />
   </View>
   <View style={styles.label}>
    <Text style={styles.LableText}>Gender</Text>
   </View>
   <View>
    <TextInput
     placeholder='female'
     style={styles.input2}
     
    />
   </View>
 </View>
   
   <View style={styles.button}>
    <Button
    text='Continue'
    onPress={() => navigation.navigate('PhoneNumber')}
    />
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
    marginTop:-40,
    marginLeft:20
  },
  input:{
    height: 48,
        margin: 12,
        padding: 10,
        borderRadius:15,
        width:327,
        backgroundColor:'#f7f7f9',
        marginTop:5,
        marginLeft:30
  },
  input2:{
    height: 48,
        margin: 12,
        padding: 10,
        borderRadius:15,
        width:327,
        backgroundColor:'#f7f7f9',
        marginTop:4,
        marginLeft:30
  },
  label:{
    marginLeft:30,
    marginTop:10
  },
  LableText:{
    fontFamily:'satoshi-Bold'
  },
  button:{
    marginLeft:40
  },
  form:{
    marginTop:40
  }
 

})