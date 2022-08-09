import { View, Text , StyleSheet, TextInput} from 'react-native'
import React, { useRef, useState } from 'react'
import { theme } from '../../components/forms/Theme'
import Button from '../explore/components/Button'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import PhoneInput from 'react-native-phone-number-input';
export default function SetPinScreen() {
  const [phoneNumber, setphoneNumber] = useState('');
  const phoneInput = useRef(null);
 
    const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <View style={styles.container}>
     <View style={{marginTop:50, marginLeft:30}}>
     <Text style={{fontFamily:'satoshi-Bold', fontSize:24}}>Set Pin</Text>
     </View>
     <View style={{marginLeft:30, marginTop:10}}>
        <Text style={{fontFamily:'satoshi-Medium', fontSize:16}}>Set a 4 digit pin for transactions</Text>
     </View>
   
   <View style={{marginTop:50}}>
    <TextInput
     placeholder='1234'
     style={styles.input}
     
    />
   </View>
    

     <View style={styles.button}>
        <Button
        text='Continue'
        onPress={() => navigation.navigate('SignIn')}
        />
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
      
      label:{
        marginLeft:30,
        marginTop:10
      },
     
      button:{
        marginTop:250,
        marginLeft:40
      },
      input:{
        height: 48,
            margin: 12,
            padding: 10,
            borderRadius:15,
            width:327,
            backgroundColor:'#f7f7f9',
            marginTop:4,
            marginLeft:30
      },

})