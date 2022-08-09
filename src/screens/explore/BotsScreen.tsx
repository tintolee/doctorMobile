import { useNavigation } from '@react-navigation/native';
import { theme } from '../../components/forms/Theme';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import styled from 'styled-components/native';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Bots from './components/bots';
import Header from '../../components/Header';
export const BotsScreen: React.FunctionComponent = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
return(
  <View style={styles.container}>
  <Header headerText="Explore" />
      <View style={styles.search}>
      <Ionicons name="md-search" size={27} color="black" />
      </View>
      <View style={styles.container1}>
      <View style={styles.botView}>
        <TouchableOpacity
        style={styles.botButton}
        ><Text style={{color:theme.colors.primary, fontSize:17, fontWeight:'700', fontFamily:'satoshi-Bold'}}>Bots</Text></TouchableOpacity>
      </View>
      <View style={styles.market}>
        <TouchableOpacity onPress={() => navigation.navigate('MarketsScreen')}>
          <Text style={{color:"#bebebe", fontSize:17,fontWeight:'700', fontFamily:'satoshi-Bold'}}>Market</Text>
        </TouchableOpacity>
      </View>
      </View>
      <View style={styles.container2}>
      <TouchableOpacity>
      <View style={styles.textView}>
  
  <Text style={styles.text3}>Start a{'\n'}demo</Text>
</View>
 <View style={styles.arrow}>
  <AntDesign name="arrowright" size={20} color="black" />
 </View>
      </TouchableOpacity>
      </View>
      <View style={styles.Header}><Text style={{fontFamily:'satoshi', fontSize:20}}>Popular bots</Text></View>
      <View style={styles.bots}>
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
  arrow:{
    marginLeft:280,
    marginTop:-45
    },
  botView:{

    marginLeft:18,
    marginTop:7,

  },
  bots:{
    marginTop:1, 
    marginLeft:30,
    height:350
  },

  headerText: {
    fontSize: 30,
    color: theme.colors.primary,
    marginBottom: 50,
    marginRight: 241,
    fontFamily:'satoshi'
    // marginBottom:90
  },
  search: {
    marginTop: -118,
    maxWidth: 340,
    marginLeft: 330,
  },
  bodyText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 30,
    fontFamily: 'Arial',
    letterSpacing: 0.8,
    width: 300,
    // height: 105,
  },
  container1: {
    alignSelf: 'center',
    width: 340,
    overflow: 'hidden',
    height: 50,
    borderColor:'grey',
    borderRadius:65,
    marginTop:20,
    backgroundColor:'#f5f5f5',
    marginRight:6,
    

  },
  container2: {
    alignSelf: 'center',
    width: 340,
    overflow: 'hidden',
    height: 100,
    
    borderColor:'grey',
    borderRadius:16,
    marginTop:20,
    backgroundColor:'#f7f7f9',
    marginRight:6,
   
  },
  market:{ 
    marginLeft:215, 
    marginTop:-29,
  },
  text1:{
   marginTop:8,
    alignSelf:'center',
    color:'#72BAEC',
    fontSize: 20,
    fontWeight: 'bold'
  },
  text2:{
    marginTop:8,
     alignSelf:'center'
   },
   textView:{
    marginTop:30,
    marginLeft:20,
    width:109,
    height:54,
   
   },
   text3:{
    color:theme.colors.black,
    fontFamily:'satoshi-Bold',
    fontSize:18,


   },
   
   Header:{
    marginTop:20,
    marginLeft:30
   },
   botButton:{
    backgroundColor:"#FFFFFF",
    borderRadius:60,
    height:36,
    width:156,
    paddingTop:9,
    paddingLeft:50,
    marginLeft:-10,
   }

});


