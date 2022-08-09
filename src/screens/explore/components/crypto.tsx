import { View, Text , StyleSheet, FlatList,Touchable, TouchableOpacity} from 'react-native'
import React from 'react'
import { Avatar } from 'react-native-paper';
import { Entypo } from '@expo/vector-icons';
import { theme } from '../../../components/forms/Theme';

export default function Crypto() {

    
    const data = [
        {
          id: 1,
          coins: 'Etherium',
          accronym: 'ETH',
          percentage:'50%'
        },
        {
            id: 2,
            coins: 'Bit coin',
            accronym: 'BTC',
            percentage:'40%'
        },
        {
            id: 3,
            coins: 'Dash',
            accronym: 'Dash',
            percentage:'20%'
        },
        {
            id: 4,
            coins: 'Ripple',
            accronym: 'Lite',
            percentage:'40%'
        },
        {
            id: 5,
            coins: 'Binance',
          accronym: 'BNB',
          percentage:'0%'
          },
          {
            id: 6,
            coins: 'Tezos',
          accronym: 'Lite',
          percentage:"20%"
          },
          {
            id: 7,
            coins: 'Tezos',
          accronym: 'Lite',
          percentage:"20%"
          },
          {
            id: 8,
            coins: 'XRP',
          accronym: 'Lite',
          percentage:"20%"
          },
      ];

  return (
    <View style={{height:1000}}>
        <FlatList
         data={data}
         keyExtractor={item => item.id}
         renderItem={({item}) => {
       return(
        <View>
            <TouchableOpacity>
                <View style={{marginTop:35}}>
                <Avatar.Image size={42} source={require('../../../../assets/images/bot.png')} />
    <View style={styles.coins} ><Text style={{fontFamily:'satoshi-Bold', fontSize:15}}>{item.accronym}</Text></View>
   
     <View style={styles.accronym}>
                      <Text
                        style={{
                          alignSelf: 'center',
                          fontFamily:'satoshi-Regular',
                          fontSize:15,
                          fontStyle: 'normal',
                          color:theme.colors.grey
                        }}>
                        {item.coins}
                      </Text>
                    </View>
        <View style={styles.percentage}><Text style={{fontFamily:'satoshi-Bold', fontSize:14}}>{item.percentage}</Text></View>  
        <View style={styles.triangle}>
        <Entypo name="triangle-up" size={24} color="#6BDB9E" />
 
        </View>         
                </View>
           
            </TouchableOpacity>
        </View>
       )

         }}
        />
     
    </View>
  )
}


const styles=StyleSheet.create({
    
    coins:{
           marginTop:-38,
           marginLeft: 50,},
           accronym: {
            marginTop: 3,
            marginRight: 200,
          },
          percentage:{
            marginLeft:255,
            marginTop:-32
          },
          triangle:{
            marginLeft:300,
            marginTop:-22
          }
})