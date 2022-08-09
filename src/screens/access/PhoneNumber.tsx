import { View, Text , StyleSheet, TouchableOpacity} from 'react-native'
import React, { useRef, useState } from 'react'
import { theme } from '../../components/forms/Theme'
import { TextInput } from 'react-native-paper'
import Button from '../explore/components/Button'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import PhoneInput from 'react-native-phone-number-input';
export default function PhoneNumberScreen() {
  const [phoneNumber, setphoneNumber] = useState('');
  const phoneInput = useRef(null);
 
    const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <View style={styles.container}>
     <View style={{marginTop:50, marginLeft:30}}>
     <Text style={{fontFamily:'satoshi-Bold', fontSize:24}}>Phone</Text>
     </View>
     <View style={{marginLeft:30, marginTop:10}}>
        <Text style={{fontFamily:'satoshi-Medium', fontSize:16}}>Enter your phone number</Text>
     </View>
     <View style={styles.phone}>
     <PhoneInput
        ref={phoneInput}
        defaultValue={phoneNumber}
        defaultCode="NG"
        layout="first"
        placeholder='8153687856'
        withShadow
        autoFocus
        containerStyle={styles.phoneContainer}
        textContainerStyle={styles.textInput}
        onChangeFormattedText={text => {
          setphoneNumber(text);
        }}
      />

     </View>

     <View style={styles.button}>
        <Button
        text='Continue'
        onPress={() => navigation.navigate('SetPin')}
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
        justifyContent:'space-between',
        marginLeft:30,
        marginRight:30,
        marginTop:20
    
      },
      textInput:{
        width:327,
        height:48,
        borderRadius:9,
        paddingVertical: 0,
        paddingLeft:5
        
      },
      button:{
        marginTop:350,
        marginLeft:37
      },
      phoneContainer: {
        width: 327,
        height: 48,
        borderRadius:56
      },
      phone:{
        marginLeft:25,
        marginTop:30
      },
      signin:{
        marginLeft:90
      }

})