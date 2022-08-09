import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { Avatar } from 'react-native-paper'
import { theme } from '../../../components/forms/Theme';

export default function RecentTransactions() {

    const data = [
        {
          id: 1,
          BankName: 'Fidelity',
          TransactionType:'Bank Deposit'
        },
        {
          id: 2,
          BankName: 'GTB',
          TransactionType:'Bank Deposit'
        },
        {
          id: 3,
          BankName: 'Access',
          TransactionType:'Bank Deposit'
        },
        {
          id: 4,
          BankName: 'Fidelity',
          TransactionType:'Bank Deposit'
        },
        {
            id: 5,
            BankName: 'Fidelity',
            TransactionType:'Bank Deposit'
          },
          {
            id: 6,
            BankName: 'Fidelity',
            TransactionType:'Bank Deposit'
          },
      ];

  return (
   
    <View>
   <FlatList
   data={data}
   keyExtractor={item => item.id}
   renderItem={({item}) => {
    return(
        <View style={{marginTop:40}}>
        <Avatar.Image size={42} source={require('../../../../assets/images/bot.png')} /> 
        <View style={{marginLeft:50, marginTop:-40}}>
           <Text style={{color:theme.colors.black, fontFamily:'satoshi-Medium', fontSize:16}}>{item.BankName}</Text> 
        </View> 
        <View style={{marginLeft:49, marginTop:5}}>
            <Text style={{color:theme.colors.grey, fontFamily:'satoshi-Medium', fontSize:16}}>{item.TransactionType}</Text>
        </View>
        <View style={{marginLeft:240,marginTop:-40}}>
            <Text style={{color:'#6bdb9e', fontFamily:'satoshi-Medium', fontSize:16}}>
                + N20,000
            </Text>
        </View>
        </View>
    )
   }}
   
    
   
   />
    </View>
  )
}