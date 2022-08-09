import { useNavigation } from '@react-navigation/native';
import { theme } from '../../components/forms/Theme';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import styled from 'styled-components/native';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import { Entypo, EvilIcons, Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Header from '../../components/Header';
import Bots from './components/bots';
export const PortfolioScreen1: React.FunctionComponent = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
return(
  <View style={styles.container}>
  <Header headerText="Portfolio" />
      <View style={styles.search}>
      <Ionicons name="md-search" size={27} color="black" />
      </View>
      <View style={styles.container1}>
      <View style={styles.botView}>
        <TouchableOpacity
        style={styles.botButton}
        ><Text style={{color:theme.colors.primary, fontSize:17, fontWeight:'700', fontFamily:'satoshi-Bold'}}>Portfolio</Text></TouchableOpacity>
      </View>
      <View style={styles.market}>
        <TouchableOpacity onPress={() => navigation.navigate('Assets')}>
          <Text style={{color:theme.colors.grey, fontSize:17,fontWeight:'700', fontFamily:'satoshi-Bold'}}>Assets</Text>
        </TouchableOpacity>
      </View>
      </View>
      <View style={styles.earningView}><Text style={styles.earningText}>Total earnings</Text></View>
      <View style={styles.amountView}><Text style={styles.amountText}>$90,000.45</Text></View>
      <View style={styles.HighText}><Text style={styles.text}>56.2%
      <Entypo name="triangle-up" size={24} color="#6BDB9E" /> 
      </Text></View>
      <View style={styles.WeekText}><Text style={styles.text}>56.2%
      <Entypo name="triangle-up" size={24} color="#6BDB9E" /> 
      </Text></View>
      <View style={{marginLeft:20, marginTop:10}}><Text style={styles.text4}>All time</Text></View>
      <View style={{marginLeft:122, marginTop:-21}}><Text style={styles.text4}>This week</Text></View>
      <View style={styles.container2}>
      <TouchableOpacity>
      
      <View style={styles.textView}>
  <Text style={styles.text3}>View full stats</Text>
</View>
 <View style={styles.arrow}>
 <EvilIcons name="chevron-right" size={24} color="ash" />
 </View>
      </TouchableOpacity>
      </View>
      <View style={styles.Header}><Text style={{fontFamily:'satoshi-Bold', fontSize:18, color:theme.colors.dark}}>Your bots</Text></View>
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
  botView:{

    marginLeft:18,
    marginTop:7,
    height:230

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

  container1: {
    alignSelf: 'center',
    width: 327,
    overflow: 'hidden',
    height: 50,
    borderColor:'grey',
    borderRadius:65,
    marginTop:20,
    backgroundColor:'#f5f5f5',
    marginRight:6

  },
  container2: {
    alignSelf: 'center',
    width: 327,
    overflow: 'hidden',
    height: 62,
    borderColor:'grey',
    borderRadius:16,
    marginTop:40,
    backgroundColor:'#f7f7f9',
    marginRight:6,
   
  },
  market:{ 
    marginLeft:215, 
    marginTop:-222,
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
    marginTop:20,
    marginLeft:20,
    width:130,
    height:54,
   },
   text3:{
    color:theme.colors.black,
    fontFamily:'satoshi-Bold',
    fontSize:18,


   },
   arrow:{
   marginLeft:280,
   marginTop:-50
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
   WeekText:{
    marginLeft:120,
    marginTop:-25
   },
   HighText:{
    marginLeft:20,
    marginTop:20
   },
   text:{color:theme.colors.green,
    fontFamily:'satoshi-Bold',
     fontSize:19},
  text4:{
fontFamily:'satoshi-Regular',
fontSize:16,
fontWeight:'400',
color:theme.colors.grey
  }
});


