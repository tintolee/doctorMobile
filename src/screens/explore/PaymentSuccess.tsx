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

import Success from '../../components/success';
import Button from './components/startBotButton';

export const PaymentSuccess: React.FunctionComponent = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
return(
<View style={styles.container}>
<View style={{marginLeft:320}}>
    <TouchableOpacity onPress={() => navigation.goBack()}>
    <Feather name="x" size={40} color="black" />
    </TouchableOpacity>
    </View>
    <View style={{marginTop:240}}>
    <Success/>
    </View>
    <View style={{marginLeft: 90, marginTop:130,}}>
      <Text style={styles.text}>You succesfully {'\n'}invested $150</Text>

    </View>

    <View style={{marginLeft:25, marginTop:70}}>
      <Button
              text="Continue"
              onPress={() => navigation.navigate('BotStartConfirmation')}
              
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
    marginLeft:10,
    fontFamily:'satoshi-Bold'
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
    color: theme.colors.black,
    marginLeft:60,
    fontFamily:'satoshi-Bold'
  },
  

 

});
