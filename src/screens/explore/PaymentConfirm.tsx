import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import styled from 'styled-components/native';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { theme } from '../../components/forms/Theme';
import Bots from './components/bots';
import Header from '../../components/Header';
import Button from './components/fundButton';

export const PaymentConfirm: React.FunctionComponent = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
return(
<View style={styles.container}>
<View style={{marginLeft:30}}>
    <TouchableOpacity onPress={() => navigation.goBack()}>
    <Feather name="x" size={24} color="black" />
    </TouchableOpacity>
    </View>
    <View style={{marginLeft: 100, marginTop:200,}}>
      <Text style={styles.text}>You are about to {'\n'}fund this bot with </Text>
      <View>
      <Text style={styles.amount}>$150.00</Text>
      </View>
     
    </View>
    
   
    <View style={{marginLeft:25, marginTop:10}}>
      <Button
              text="Confirm"
              onPress={() => navigation.navigate('PaymentSuccess')}
              
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
    fontSize: 24,
    fontWeight: 'bold',
    fontStyle: 'normal',
    color: theme.colors.black,
    marginLeft:-10,
    fontFamily:'satoshi-Bold',
  },
  button:{
    backgroundColor: "#DDDDDD",
    padding: 10,
    height:50,
    width:300,
    borderRadius:6,
  },
  textView:{
    marginLeft:50, marginTop:-19
  },
  amount: {
    fontSize: 25,
    fontStyle: 'normal',
    color: theme.colors.primary,
    marginLeft:40,
    fontFamily:'satoshi-Bold'
  },
  

 

});


