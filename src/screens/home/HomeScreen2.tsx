import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import styled from 'styled-components/native';
import { View, StyleSheet, TouchableOpacity, Image , Text} from 'react-native';
import Bots from './components/bots';
import { theme } from '../../components/forms/Theme';
import { PortfolioValue } from './components/portfolioValue';
import BinanceAssets from './components/binanceAssets';
import Carousel from 'react-native-reanimated-carousel';

export const HomeScreen2: React.FunctionComponent = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
return(
<View style={styles.container}>
  
<PortfolioValue/>
<View style={styles.Header}>
    <Text style={styles.text}>Running bots</Text>
   </View>
   <View style={styles.bots}>
  <Bots/>
  </View>
  <View style={styles.Header2}>
    <Text style={styles.text}>Binance Assets</Text>
   </View>
   <View style={styles.binance}>
  <BinanceAssets/>
  </View>
  <View style={styles.Header2}>
    <Text style={styles.text}>Popular Bots</Text>
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
    fontSize: 18,
    fontStyle: 'normal',
    color: theme.colors.black,
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
  Header:{
    marginTop:"15%",
    marginLeft:"3%"
  },
  Header2:{
    marginTop:"4%",
    marginLeft:"3%"
  },
  bots:{
   height:'20%',
   marginLeft:"3%",
   marginTop:"1%",
  },
  binance:{
    height:'20%',
    marginLeft:"3%",
    marginTop:"1%",
   }
 


 

});
