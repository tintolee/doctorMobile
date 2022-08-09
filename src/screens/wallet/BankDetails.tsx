import { View, Text,StyleSheet, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform } from 'react-native'
import React from 'react'
import { theme } from '../../components/forms/Theme'
import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Checkbox from 'expo-checkbox';
import Button from './components/SuccessButton';

export default function BankDetails() {
  const [isChecked, setChecked] = React.useState(false)
    const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container1}
    >
    <View style={styles.container}>
      <View style={{marginLeft: 10}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <AntDesign name="left" size={20} color="black" />
        </TouchableOpacity>
      </View>
      <View style={{marginLeft:100, marginTop:-45}}>
        <Text style={styles.Mainheader}>Bank Details</Text>
      </View>
      <View style={{marginTop:-40, marginLeft:110}}>
      <Text style={{fontSize:16, fontFamily:'satoshi-Medium', color:theme.colors.grey}}>Put in your bank details</Text>
      </View>

      <View style={{marginLeft:40, marginTop:30}}>
     <Text style={styles.label}>Bank</Text>
      </View>
      <View style={{marginTop:-10,marginLeft:20}}>
      <TextInput
        style={styles.input}
      />
      </View>
      <View style={{marginLeft:40, marginTop:10}}>
     <Text style={styles.label}>Account Number</Text>
      </View>
      <View style={{marginTop:-10,marginLeft:20}}>
      <TextInput
        style={styles.input}
        placeholder='type here'
        keyboardType='numeric'
      />
      </View>
      <View style={{marginLeft:40}}>
     <Text style={styles.label}>Account Name</Text>
      </View>
      <View style={{marginTop:-12,marginLeft:20}}>
      <TextInput
        style={styles.input}
        placeholder='eg John Doe'
      />
      </View>

      <View style={styles.section}>
        <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} />
        <Text style={styles.paragraph}>Save Details</Text>
      </View>
      
<View style={styles.button}>
    <Button
   onPress={() => navigation.navigate('WithdrawSuccess')}
      text='Continue'
      />
</View>

    </View>
    </KeyboardAvoidingView>
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
        marginTop:40
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
      container1:{
        flex:1
      }
})