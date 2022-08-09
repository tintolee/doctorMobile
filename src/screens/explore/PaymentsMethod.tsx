import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import styled from 'styled-components/native';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { theme } from '../../components/forms/Theme';
import Bots from './components/bots';
import Header from '../../components/Header';
import Button from './components/fundButton';

export const PaymentsMethod: React.FunctionComponent = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
return(
<View style={styles.container}>
<View style={{marginLeft:30}}>
    <TouchableOpacity onPress={() => navigation.goBack()}>
    <AntDesign name="left" size={20} color="black" />
    </TouchableOpacity>
    </View>
    <View style={{marginLeft: 40, marginTop:30}}>
      <Text style={styles.text}>Payment Method</Text>
    </View>
    <View style={{marginTop:50,
    marginLeft:40, height:27, width:327}}>
      <TouchableOpacity style={
       styles.button
      }>
        <FontAwesome name="bank" size={24} color="black" />
         <View style={styles.textView}><Text style={styles.text2}>NGN Bank Transfer</Text></View>
         <View style={{marginLeft:225, marginTop:-17}}>
         <AntDesign name="arrowright" size={20} color="black" />
         </View>
      </TouchableOpacity>
    </View>
    <View style={{marginTop:40,
    marginLeft:40, height:27, width:327}}>
      <TouchableOpacity style={
       styles.button
      }>
       <Ionicons name="ios-card" size={24} color="black" />
         <View style={styles.textView}><Text style={styles.text2}>NGN Credit Card</Text></View>
         <View style={{marginLeft:225, marginTop:-17}}>
         <AntDesign name="arrowright" size={20} color="black" />
         </View> 
      </TouchableOpacity>
    </View>
    <View style={{marginLeft:25, marginTop:250}}>
      <Button
              text="Continue"
              onPress={() => navigation.navigate('PaymentConfirm')}
              
            />
      </View>
</View>

)




}

const styles = StyleSheet.create({
  container: {
    paddingTop: '15%',
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  text:{
    fontSize: 20,
    fontWeight:"normal",
    fontStyle: 'normal',
    color: theme.colors.black,
    fontFamily:'satoshi-Bold'
  },
  text2:{
    fontSize: 16,
    fontWeight:"normal",
    fontStyle: 'normal',
    color: theme.colors.black,
    fontFamily:'satoshi-Bold'
  },
  button:{
    backgroundColor: "#f9f9f9",
    padding: 10,
    height:50,
    width:300,
    borderRadius:6,
  },
  textView:{
    marginLeft:50, marginTop:-19
  }


 

});


