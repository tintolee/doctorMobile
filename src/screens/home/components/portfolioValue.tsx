import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import styled from 'styled-components/native';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import { Avatar } from 'react-native-paper';
import { theme } from '../../../components/forms/Theme';


export const PortfolioValue: React.FunctionComponent = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
return(
<View>
<View style={styles.textView}>
    <Text style={styles.text}>Portfolio value</Text>
    <View style={{marginTop:'1%'}}>
    <Text style={styles.value} >$935.00</Text>
</View>

</View>
<View style={{marginTop:'1%',  marginLeft:"3%"}}>
<Entypo name="triangle-up" size={24} color='#29a87e' /> 
</View>
<View style={{marginTop:'-5.8%', marginLeft:'10%'}}>
    <Text style={{color:theme.colors.green, fontFamily:'satoshi', fontSize:16, fontWeight:'100'}}>5% </Text>
</View>
<View style={{marginLeft:'18%', marginTop:'-5.5%'}}>
    <Text style={{color: theme.colors.inactiveTintColor, fontFamily:'satoshi', fontWeight:'100', fontSize:16}}>today</Text>
</View>

<View style={styles.avatarView}>
  <TouchableOpacity>
<Avatar.Image size={35} source={require('../../../../assets/images/bot.png')} />
  </TouchableOpacity>
</View>
   
  
     
</View>

)




}

const styles = StyleSheet.create({
  
  avatarView:{
    marginLeft:"82%",
    marginTop:'-19%'

  },
  text:{
    color: theme.colors.inactiveTintColor,
    fontSize: 16,
    fontFamily:'satoshi-Regular'
  },
  textView:{
    marginLeft:"3%"
  },
  value:{
    color: theme.colors.black,
    fontSize: 24,
    fontWeight: '700',
    fontFamily:'satoshi'
  },
 

});


