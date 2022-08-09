import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import styled from 'styled-components/native';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { theme } from '../../components/forms/Theme';

import Header from '../../components/Header';
import BinanceAssets from '../home/components/binanceAssets';
import Bots from './components/binance';

export const Assets: React.FunctionComponent = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
return(
  <View style={styles.container}>
  <Header headerText="Portfolio" />
      <View style={styles.search}>
      <Ionicons name="md-search" size={24} color="black" />
      </View>
      <View style={styles.container1}>
      <View style={styles.marketView}>
        <TouchableOpacity
        style={styles.botButton}
        ><Text style={{color:theme.colors.primary, fontSize:17, fontWeight:'700', fontFamily:'satoshi-Bold'}}>Assets</Text></TouchableOpacity>
      </View>
      <View style={styles.portView}>
        <TouchableOpacity 
        onPress={() => navigation.navigate('PortfolioScreen1')}
        >
          <Text style={{color:"#bebebe", fontSize:17,fontWeight:'700', fontFamily:'satoshi-Bold'}}>Portfolio</Text>
        </TouchableOpacity>
      </View>
      </View>
      <View style={styles.earningView}><Text style={styles.earningText}>Total</Text></View>
      <View style={styles.amountView}><Text style={styles.amountText}>$90,000</Text></View>

      <View style={styles.Header}><Text style={styles.HeaderText} >Your Assets</Text></View>
      <View style={styles.binance}>
  <BinanceAssets/>
  </View>
  <View style={styles.Header}><Text style={styles.HeaderText} >Binance</Text></View>
  <View style={styles.botView}>
    <Bots/>
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
  linearGradient: {
    flex: 1,
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    fontStyle: 'normal',
    color: theme.colors.black,
    marginBottom: 50,
    marginRight: 241,
    // marginBottom:90
  },
  search: {
    marginTop: -112,
    maxWidth: 340,
    marginLeft: 330,
  },
  marketView:{

    marginLeft:"53%", 
    marginTop:"2%",
  },
 
   container1: {
    alignSelf: 'center',
    width: 327,
    overflow: 'hidden',
    height: 48,
    borderColor:'grey',
    borderRadius:65,
    marginTop:20,
    backgroundColor:'#f5f5f5',
    marginRight:6

  },
  container2: {
    alignSelf: 'center',
    width: 300,
    overflow: 'hidden',
    height: 100,
    borderWidth: 1,
    borderColor:'grey',
    borderRadius:40,
    marginTop:20,
    backgroundColor:'#dbd9d9'
   
  },
 
  market:{ 
    width:150,
    marginLeft:148, 
    marginTop:-39,
    height:39,
    borderRadius:40,
    backgroundColor:'#dedede'
  },
  text1:{
   marginTop:8,
    alignSelf:'center',
    color:'#72BAEC'
  },
  text2:{
    marginTop:8,
     alignSelf:'center'
   },
   textView:{
    marginTop:30,
    marginLeft:20,
    width:50,
    height:40,
   
   },
   text3:{
    fontWeight:'bold',
   },
  
   Header:{
    marginTop:20,
    marginLeft:20,
    width:200,
    height:27
   },
   HeaderText:{
   fontStyle:'normal',
   fontWeight:'900',
   fontSize:20,
   fontFamily:'satoshi-Bold'
   },
   binance:{
    height:'19%',
    marginLeft:"3%",
    marginTop:"1%",
   },

   botView:{

    marginLeft:21,
    marginTop:5,
    height:230
  },
  botButton:{
    backgroundColor:"#FFFFFF",
    borderRadius:60,
    height:36,
    width:156,
    paddingTop:9,
    paddingLeft:50,
    marginLeft:-10,
   },
   earningView:{
    marginTop:20,
    marginLeft:20
   },
   earningText:{
    fontFamily:'satoshi-Regular',
    fontSize:16,
    color:theme.colors.grey
   },
   amountView:{
    marginTop:0,
    marginLeft:20
   },
   amountText:{
    fontFamily:'satoshi-Bold',
    color:theme.colors.black,
    fontSize:27
   },
   portView:{
    marginLeft:70,
    marginTop:'-8%'
  },

});
