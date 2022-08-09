import { useNavigation } from '@react-navigation/native';
import { theme } from '../../components/forms/Theme';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import styled from 'styled-components/native';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import { Entypo, Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Header from '../../components/Header';
import RecentTransactions from './components/RecentTransactions';

export const Wallet: React.FunctionComponent = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
return(
  <View style={styles.container}>
  <Header headerText="Wallet" />
     
      <View style={styles.container1}>
      <View style={styles.botView}>
        <TouchableOpacity
        style={styles.botButton}
        ><Text style={{color:theme.colors.primary, fontSize:17, fontWeight:'700', fontFamily:'satoshi-Bold'}}>Wallet</Text></TouchableOpacity>
      </View>
      <View style={styles.market}>
        <TouchableOpacity onPress={() => navigation.navigate('Card')}>
          <Text style={{color:theme.colors.grey, fontSize:17,fontWeight:'700', fontFamily:'satoshi-Bold'}}>Card</Text>
        </TouchableOpacity>
      </View>
      </View>
      <View style={styles.earningView}><Text style={styles.earningText}>Balance</Text></View>
      <View style={styles.amountView}><Text style={styles.amountText}>$90,000</Text></View>
      <View style={styles.buttonsView}>
        <View>
      <TouchableOpacity 
       onPress={() => navigation.navigate('Withdraw')}
      style={styles.buttons}>
        <Text style={styles.buttonText}>Withdraw</Text>
      </TouchableOpacity>
        </View>
       <View style={{
        marginLeft:110,
        marginTop:-50
       }}> 
        <TouchableOpacity 
        onPress={() => navigation.navigate('Deposit')}
        style={styles.buttons}>
        <Text style={styles.buttonText} >Deposit</Text>
      </TouchableOpacity>
        </View>
        <View style={{
        marginLeft:220,
        marginTop:-48
       }}> 
        <TouchableOpacity
         onPress={() => navigation.navigate('SendFund')}
        style={styles.buttons2}>
        <Text style={styles.buttonText2}  >Send</Text>
      </TouchableOpacity>
        </View>
      </View>
      
      <View style={styles.Header}><Text style={{fontFamily:'satoshi-Bold', fontSize:20, color:theme.colors.dark}}>Recent Transactions</Text></View>
    <View style={styles.RecentTransactionsView}>
      <RecentTransactions/>
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
  RecentTransactionsView:{

    marginLeft:21,
    marginTop:10,
    height:270

  },

  headerText: {
    fontSize: 30,
    color: theme.colors.primary,
    marginBottom: 50,
    marginRight: 241,
    fontFamily:'satoshi'
    // marginBottom:90
  },

  container1: {
    alignSelf: 'center',
    width: 327,
    overflow: 'hidden',
    height: 50,
    
    borderColor:'grey',
    borderRadius:65,
    marginTop:-60,
    backgroundColor:'#f5f5f5',
    marginRight:6

  },
 
  market:{ 
    marginLeft:210, 
    marginTop:-27,
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
   buttonText:{
    color:theme.colors.white,
    fontSize:14,
    fontFamily:'satoshi'
   },
   buttonText2:{
    color:theme.colors.white,
    fontSize:14,
    fontFamily:'satoshi'
   },
  
   Header:{
    marginTop:40,
    marginLeft:20
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
  
   text:{color:theme.colors.green,
    fontFamily:'satoshi-Bold',
     fontSize:19},
    buttonsView:{
        marginLeft:25,
        marginTop:20
    },
    buttons:{
        backgroundColor:theme.colors.primary,
        borderRadius:56,
        height:48,
        padding:16,
        paddingLeft:18,
        paddingTop:15,
        width:104 
    },
    buttons2:{
        backgroundColor:theme.colors.dark,
        borderRadius:56,
        height:48,
        padding:16,
        paddingLeft:30,
        paddingTop:15,
        width:104 
    },
    botView:{

      marginLeft:18,
      marginTop:7,
  
    },
});
