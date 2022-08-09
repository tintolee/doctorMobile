import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { theme } from '../../components/forms/Theme';
import { AntDesign } from '@expo/vector-icons';
import {Card, Title, Paragraph} from 'react-native-paper';
import Button from './components/fundButton';

export default function PaymentType() {
    const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <View style={styles.container}>
      <View style={{marginLeft: 10}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <AntDesign name="left" size={20} color="black" />
        </TouchableOpacity>
      </View>
      <View style={{marginLeft:100, marginTop:-45}}>
        <Text style={styles.Mainheader}>Payment Type</Text>
      </View>
      <View style={{marginTop:-40, marginLeft:70}}>
      <Text style={{fontSize:16, fontFamily:'satoshi-Medium', color:theme.colors.grey}}>Choose your prefferred payment type</Text>
      </View>
     
      <View style={styles.Card}>
         <View style={styles.PaymentType}>
           <Text style={styles.PaymentTypeText}>NGN Bank Transfer</Text>
         </View>
         <View style={styles.amountView}>
       <Text style={styles.amount}>N 20,000</Text>
         </View>
         <View style={styles.arrow}>
         <AntDesign name="arrowright" size={20} color="black" /> 
         </View>
         <View style={styles.divider}></View>
         <View style={styles.timelineView}>
            <Text style={styles.amount}> Timeline</Text>
         </View>
         <View style={styles.feeView}>
            <Text style={styles.amount}> Fees</Text>
         </View>
         <View style={styles.timelineView}>
            <Text style={styles.timelineText}>1 business day</Text>
         </View>
         <View style={styles.feeTextView}>
         <Text style={styles.timelineText}>N 150</Text>
         </View>
      </View>
      <TouchableOpacity
       onPress={() => navigation.navigate('CardDetails')}
      >
      <View style={styles.Card2}>
      <View style={styles.PaymentType}>
           <Text style={styles.PaymentTypeText}>NGN Debit Card</Text>
         </View>
         <View style={styles.amountView}>
       <Text style={styles.amount}>N 20,000</Text>
         </View>
         <View style={styles.arrow}>
         <AntDesign name="arrowright" size={20} color="black" /> 
         </View>
         <View style={styles.divider}></View>
         <View style={styles.timelineView}>
            <Text style={styles.amount}> Timeline</Text>
         </View>
         <View style={styles.feeView}>
            <Text style={styles.amount}> Fees</Text>
         </View>
         <View style={styles.timelineTextView}>
            <Text style={styles.timelineText}>1 business day</Text>
         </View>
         <View style={styles.feeTextView}>
         <Text style={styles.timelineText}>N 150</Text>
         </View>
       </View>
      </TouchableOpacity>
      
<View style={styles.Card3}>

</View>
    

    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      paddingTop: '20%',
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    Mainheader: {
      fontSize: 20,
      fontWeight: 'bold',
      fontStyle: 'normal',
      color: theme.colors.black,
      marginBottom: 50,
      marginLeft: 30,
      marginTop: 50,
      fontFamily:'satoshi-Bold'
    },
   Card:{
    width:327,
    height:174,
    backgroundColor:'#f9f9f9',
    borderRadius:11,
    marginLeft:30,
    marginTop:15
   },
   Card2:{
    width:327,
    height:174,
    backgroundColor:'#f9f9f9',
    borderRadius:11,
    marginLeft:30,
    marginTop:20
   },
   Card3:{
    width:327,
    height:174,
    backgroundColor:'#f9f9f9',
    borderRadius:11,
    marginLeft:30,
    marginTop:20
   },
   PaymentType:{
    marginLeft:30,
    marginTop:20
   },
   PaymentTypeText:{
    fontSize:16,
    color:theme.colors.grey,
    fontFamily:'satoshi-Medium'
   },
   amountView:{
    marginLeft:30,
    marginTop:2
   },
   amount:{
    color:theme.colors.black,
    fontFamily:'satoshi-Bold',
    fontSize:16,
   },
   arrow:{
    marginLeft:280,
    marginTop:-25
    },
    timelineView:{
        marginLeft:30,
        marginTop:10
    },
    feeView:{
        marginLeft:170,
        marginTop:-18
    },
    divider:{
     backgroundColor:'#f3f3f7',
     height:1, 
     width:300, 
     marginLeft:15, 
     marginTop:40
    },
    timelineTextView:{
        marginLeft:30,
        marginTop:5
    },
    timelineText:{
        fontFamily:'satoshi-Medium',
        fontSize:14,
        color:theme.colors.primary

    },
    feeTextView:{
        marginLeft:170,
        marginTop:-15
    }
    
  });