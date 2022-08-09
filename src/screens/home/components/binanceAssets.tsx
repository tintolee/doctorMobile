import { View, Text , StyleSheet, FlatList,Touchable, TouchableOpacity} from 'react-native'
import React from 'react'
import { Avatar } from 'react-native-paper';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { theme } from '../../../components/forms/Theme';
export default function BinanceAssets() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
    
    const data = [
        {
          id: 1,
          botName: 'Etherium',
          name: 'ETH',
          percentage:'45%',
          price:'$90.00',

         
        },
        {
          id: 2,
          botName: 'Binance',
          name: 'BNB',
          price:'$160.00',
          percentage:'65%',
          
        },
        {
          id: 3,
          botName: 'Tezos',
          name: 'Tezos',
          price:'$90.00',
          percentage:'23%',
          description:'Stellar cinematography and production design stand out, fantastic visual effects and a strong score from composer Michael Giacchino likewise resonates.'
        },
        {
          id: 4,
          botName: 'Cardano',
          name: 'Cardano',
          price:'$90.00',
          percentage:'23%'
        },
        {
            id: 5,
            botName: 'Binance',
            name: 'BNB',
            price:'$90.00',
            percentage:'-6.8%'
          },
          {
            id: 6,
            status: 'low risk',
            botName: 'John stones',
            name: 'alice',
            price:'$90.00',
            percentage:'8%'
          },
      ];

  return (
    <View>
        <FlatList
         data={data}
         keyExtractor={item => item.id}
         renderItem={({item}) => {
       return(
        <View>
            <TouchableOpacity 
             onPress={() => {
              /* 1. Navigate to the Details route with params */
              navigation.navigate('StartBotScreen', {
                botName:item.botName,
                percentage:item.percentage,
                name:item.name,
                status:item.status,
                description:item.description
              });
            }}
            >
                <View style={{marginTop:27}}>
                <Avatar.Image size={42} source={require('../../../../assets/images/bot.png')} />
    <View style={styles.botName} ><Text style={{fontFamily:'satoshi-Bold', fontWeight:"200", fontSize:15}}>{item.botName}</Text></View>
   
   
     <View style={styles.name}>
                      <Text
                        style={{
                          alignSelf: 'center',
                          fontSize: 15,
                          fontStyle: 'normal',
                          fontFamily:'satoshi-Medium',
                          color:theme.colors.grey
                        }}>
                        {item.name}
                      </Text>
                    </View>
                    <View style={styles.RightView}>
                    <View style={styles.price}>
                      <Text style={{fontFamily:'satoshi-Bold', fontSize:16}}>{item.price}</Text>
                    </View>
        <View style={styles.percentage}><Text style={{fontFamily:'satoshi-Bold', fontSize:16, color:theme.colors.green}}>{item.percentage}</Text></View>  
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
    
      botName:{
           marginTop:-38,
           marginLeft: 50,},
       name: {
            marginTop: -2,
            marginRight: 250,
          },
          percentage:{
            marginLeft:295,
           
          },
          price:{
            marginLeft:'75%',
           
          },
          RightView:{
            marginTop:-37
          } 
})