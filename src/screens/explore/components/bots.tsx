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
          description:'Stellar cinematography and production design stand out, fantastic visual effects and a strong score from composer Michael Giacchino likewise resonates.'
        },
        {
          id: 2,
          status: 'high risk',
          botName: 'Rula Bot',
          name: 'Maxwell',
          percentage:'65%',
          description:'Stellar cinematography and production design stand out, fantastic visual effects and a strong score from composer Michael Giacchino likewise resonates.'
        },
        {
          id: 3,
          status: 'medium risk',
          botName: 'Chris Bot',
          name: 'Chris',
          percentage:'23%',
          description:'Stellar cinematography and production design stand out, fantastic visual effects and a strong score from composer Michael Giacchino likewise resonates.'
        },
        {
          id: 4,
          status: 'high risk',
          botName: 'Lionel messi',
          name: 'messi',
          percentage:'23%'
        },
        {
            id: 5,
            status: 'high risk',
            botName: 'Alaba',
            name: 'avril',
            percentage:'-6.8%'
          },
          {
            id: 6,
            status: 'low risk',
            botName: 'John stones',
            name: 'alice',
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
                <View style={{marginTop:35}}>
                <Avatar.Image size={42} source={require('../../../../assets/images/bot.png')} />
    <View style={styles.botName} ><Text style={{fontFamily:'satoshi-Bold', fontSize:16, fontStyle:'normal', fontWeight:'700'}}>{item.botName}</Text></View>
    {
        item.status==='low risk' ?  <View
        style={{
           backgroundColor:'#EA5E5E',
           borderRadius: 7,
           width: 58,
           marginLeft: 160,
           marginTop: -17,
           height:21,
           paddingLeft:3,
           paddingRight:8
        }}>
        
       <Text style={{marginTop:2, marginLeft:6, fontFamily:'satoshi-Bold', fontSize:11, color:theme.colors.white}}>{item.status}</Text>
        </View>
        : 
        (item.status==='high risk' ? <View
          style={{
             backgroundColor:'#6BDB9E',
             borderRadius: 7,
             width: 63,
             marginLeft: 160,
             marginTop: -17,
             height:21,
            paddingLeft:3,
           paddingRight:8
          }}>
          
         <Text style={{marginTop:2, marginLeft:6,fontFamily:'satoshi-Bold' ,fontSize:11, color:theme.colors.white}}>{item.status}</Text>
          </View> :
          <View
          style={{
             backgroundColor:'#f3e348',
             borderRadius: 7,
             width: 90,
             marginLeft: 160,
             marginTop: -17,
             height:21,
          }}>
          
         <Text style={{marginTop:2, marginLeft:6, fontFamily:'satoshi-Bold',fontSize:11, color:theme.colors.white}}>{item.status}</Text>
          </View>
          )
      }
   
     <View style={styles.name}>
                      <Text
                        style={{
                          alignSelf: 'center',
                          fontSize: 16,
                          fontFamily:'satoshi-Regular',
                          color: theme.colors.grey,
                          fontWeight:"400",
                          fontStyle:'normal'
                        }}>
                        {item.name}
                      </Text>
                    </View>
        <View style={styles.percentage}><Text style={{fontFamily:'satoshi-Bold', fontSize:16, color:'black'}}>{item.percentage}</Text></View>  
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
    
      botName:{
           marginTop:-38,
           marginLeft: 50,},
       name: {
            marginTop: -2,
            marginRight: 215,
          },
          percentage:{
            marginLeft:255,
            marginTop:-40
          },
          triangle:{
            marginLeft:300,
            marginTop:-22
          }
})