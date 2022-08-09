import { View, Text , StyleSheet, FlatList,Touchable, TouchableOpacity} from 'react-native'
import React from 'react'
import { Avatar } from 'react-native-paper';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { theme } from '../../../components/forms/Theme';
export default function Bots() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
    
    const data = [
        {
          id: 1,
          status: 'low risk',
          botName: 'Chris Bot',
          name: 'Angel',
          percentage:'45%',
          price:'$90.00',
          description:'Stellar cinematography and production design stand out, fantastic visual effects and a strong score from composer Michael Giacchino likewise resonates.'
        },
        {
          id: 2,
          status: 'high risk',
          botName: 'Rula Bot',
          name: 'Maxwell',
          price:'$160.00',
          percentage:'65%',
          description:'Stellar cinematography and production design stand out, fantastic visual effects and a strong score from composer Michael Giacchino likewise resonates.'
        },
        {
          id: 3,
          status: 'medium risk',
          botName: 'chris Bot',
          name: 'Chris',
          price:'$90.00',
          percentage:'23%',
          description:'Stellar cinematography and production design stand out, fantastic visual effects and a strong score from composer Michael Giacchino likewise resonates.'
        },
        {
          id: 4,
          status: 'high risk',
          botName: 'lionel messi',
          name: 'messi',
          price:'$90.00',
          percentage:'23%'
        },
        {
            id: 5,
            status: 'high risk',
            botName: 'alaba',
            name: 'avril',
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
              navigation.navigate('StartBotScreen');
            }}
            >
                <View style={{marginTop:27}}>
                <Avatar.Image size={42} source={require('../../../../assets/images/bot.png')} />
    <View style={styles.botName} ><Text style={{fontFamily:'satoshi-Medium', fontWeight:"200", fontSize:16, color:theme.colors.dark}}>{item.botName}</Text></View>
   
   
     <View style={styles.name}>
                      <Text
                        style={{
                          alignSelf: 'center',
                          fontSize: 16,
                          fontStyle: 'normal',
                          fontFamily:'satoshi-Medium',
                          color:theme.colors.grey
                        }}>
                        {item.status}
                      </Text>
                    </View>
                    <View style={styles.RightView}>
                    <View style={styles.price}>
                      <Text style={{fontFamily:'satoshi-Medium', fontSize:16}}>{item.price}</Text>
                    </View>
        <View style={styles.percentage}><Text style={{fontFamily:'satoshi-Medium', fontSize:16, color:theme.colors.green}}>{item.percentage}</Text></View>
        <View style={{marginLeft:290, marginTop:-22}}>
        <Entypo name="triangle-up" size={24} color="#6BDB9E" /> 
        </View>
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
            marginRight: 200,
          },
          percentage:{
            marginLeft:255,
           
          },
          price:{
            marginLeft:'67%',
           
          },
          RightView:{
            marginTop:-37
          } 
})