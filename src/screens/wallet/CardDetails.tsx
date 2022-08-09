import { View, Text,StyleSheet, TouchableOpacity , TextInput} from 'react-native'
import React from 'react'
import { theme } from '../../components/forms/Theme'
import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Button from './components/DepositButton';
import Checkbox from 'expo-checkbox';
export default function CardDetails() {
  const [number, onChangeNumber] = React.useState(null);
  const [isChecked, setChecked] = React.useState(false)
    const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <View style={styles.container}>
      <View style={{marginLeft: 10}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <AntDesign name="left" size={20} color="black" />
        </TouchableOpacity>
      </View>
      <View style={{marginLeft:100, marginTop:-45}}>
        <Text style={styles.Mainheader}>Card Details</Text>
      </View>
      <View style={{marginTop:-40, marginLeft:70}}>
      <Text style={{fontSize:16, fontFamily:'satoshi-Medium', color:theme.colors.grey}}>Choose your prefferred payment type</Text>
      </View>
      <View style={{marginLeft:40, marginTop:30}}>
     <Text style={styles.label}>Card Number</Text>
      </View>
      <View style={{marginTop:-10,marginLeft:20}}>
      <TextInput
        style={styles.input}
        
      />
      </View>
      <View style={{marginLeft:40, marginTop:10}}>
     <Text style={styles.label}>Expiry Date</Text>
      </View>
      <View style={{marginTop:-10,marginLeft:20}}>
      <TextInput
        style={styles.input2}
        placeholder='mm/yyyy'
      />
      </View>
      <View style={{marginLeft:220, marginTop:-70}}>
     <Text style={styles.label}>CVV</Text>
      </View>
      <View style={{marginTop:-12,marginLeft:200}}>
      <TextInput
        style={styles.input2}
        placeholder='xxx'
      />
      </View>

      <View style={styles.section}>
        <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} />
        <Text style={styles.paragraph}>Save Card Details</Text>
      </View>
      
<View style={styles.button}>
    <Button
   onPress={() => navigation.navigate('PaymentSuccess')}
      text='Deposit'
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
      Mainheader: {
        fontSize: 20,
        fontWeight: 'bold',
        fontStyle: 'normal',
        color: theme.colors.black,
        marginBottom: 50,
        marginLeft: 30,
        marginTop: 50,
        fontFamily:'satoshi-Bold'
      },
      input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius:7,
        width:300,
        backgroundColor:'#f7f7f9'
      },
      input2: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius:7,
        width:120,
        backgroundColor:'#f7f7f9'
      },
      label:{
      fontFamily:'satoshi-Bold'
      },
      button:{
        marginLeft:40,
        marginTop:120
      },
      section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft:30
      },
      paragraph: {
        fontSize: 15,
        fontFamily:'satoshi-Medium'
      },
      checkbox: {
        margin: 8,
      },
    
})