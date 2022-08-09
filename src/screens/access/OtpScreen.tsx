import { View, Text , StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import { theme } from '../../components/forms/Theme'
import { TextInput } from 'react-native-paper'
import Button from '../explore/components/Button'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

export default function OtpScreen() {
    const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <View style={styles.container}>
     <View style={{marginTop:50, marginLeft:30}}>
     <Text style={{fontFamily:'satoshi-Bold', fontSize:24}}>Enter otp</Text>
     </View>
     <View style={{marginLeft:30, marginTop:10}}>
        <Text style={{fontFamily:'satoshi-Medium', fontSize:16}}>Enter the code we sent to you</Text>
     </View>
     <View style={styles.otp}>
     <TextInput
     placeholder='1'
     style={styles.textInput}
     />
     <TextInput
     mode={undefined}
     placeholder='2'
     style={styles.textInput}
     />
     <TextInput
     placeholder='3'
     style={styles.textInput}
     />
     <TextInput
     placeholder='4'
     style={styles.textInput}
     />
     </View>
     <View style={{marginLeft:30, marginTop:20, display:'flex', flexDirection:'row'}}>
        <Text style={{fontFamily:'satoshi-Medium', fontSize:15}}>Didn't receive code? </Text>
        <Text style={{color:'#bb1b21',fontFamily:'satoshi-Medium', fontSize:15}}> Resend in 00.20 </Text>
     </View>

     <View style={styles.button}>
        <Button
        text='Continue'
        onPress={() => navigation.navigate('UserDetails')}
        />
     </View>
     <View style={styles.signin}>
     <Text>
    Already have an account?
     </Text>
     </View>
     <View style={{marginLeft:260, marginTop:-18}}>
 <TouchableOpacity
  onPress={() => navigation.navigate('SignIn')}>
    <Text style={{color:theme.colors.primary, fontFamily:'satoshi-Regular'}}>Sign In</Text>
    </TouchableOpacity>
 </View>
     
    </View>
  )
}
const styles= StyleSheet.create({
    container: {
        paddingTop: '11%',
        flex: 1,
        backgroundColor: theme.colors.background,
      },
      otp:{
        display:'flex',
        flexDirection:'row',
        padding:0,
        alignItems:'flex-start',
        justifyContent:'space-around',
        marginLeft:5,
        marginRight:30,
        marginTop:20,
      },
      textInput:{
        width:39,
        height:43,
        borderRadius:8.97,
        backgroundColor:'#f7f7f9',
        paddingLeft:5
  
      },
      button:{
        marginTop:350,
        marginLeft:46
      },
      signin:{
        marginLeft:90
      }

})