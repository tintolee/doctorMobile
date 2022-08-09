import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import styled from 'styled-components/native';
import { View, StyleSheet, TouchableOpacity, Text, Pressable } from 'react-native';

import Ionicons from '@expo/vector-icons';

import { theme } from '../../components/forms/Theme';
import { PortfolioValue } from './components/portfolioValue';


export const HomeScreen: React.FunctionComponent = () => {
 
  const [checked, onChange] = React.useState(false);

  const onCheckmarkPress=()=> {
    onChange(!checked);
  }
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
return(
<View style={styles.container}>

<PortfolioValue/>
<View style={styles.Header}>
    <Text style={styles.text}>Getting Started</Text>
   </View>
   <View style={styles.questions}>

   <Pressable
      style={[styles.checkboxBase, checked && styles.checkboxChecked]}
      onPress={onCheckmarkPress}>
      {checked && <Ionicons name="checkmark" size={24} color="blue" />}
    </Pressable>


  </View>



   
      
       
     
   
     
</View>

)




}

const styles = StyleSheet.create({
  container: {
    paddingTop: '20%',
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  text:{
    fontSize: 16,
    fontWeight: '300',
    fontStyle: 'normal',
    color: theme.colors.black,
    fontFamily:'satoshi'
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
  Header:{
    marginTop:"20%",
    marginLeft:"3%"
  },
  questions:{
   height:'80%',
   marginLeft:"3%",
   marginTop:"3%",
  },
  paragraph: {
    fontSize: 16,
    fontFamily:'satoshi',
    fontWeight:'300'
  },
  checkbox: {
    margin: 8,
  },
  checkboxBase: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    borderWidth: 2,
    borderColor: 'green',
    backgroundColor: 'transparent',
  },

  checkboxChecked: {
    backgroundColor: 'coral',
  },




});


