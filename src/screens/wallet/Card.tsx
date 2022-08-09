import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { theme } from '../../components/forms/Theme';

import Header from '../../components/Header';
import Button from './components/CardButton';


export const CardScreen: React.FunctionComponent = () => {

  const [showCard, setShowCard] = useState(true);


  const showCardView=()=>{

    showCard=== true? setShowCard(false): setShowCard(true)
  }
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
return(
  <View style={styles.container}>
  <Header headerText="Card" />
      <View style={styles.search}>
      <Ionicons name="md-search" size={24} color="black" />
      </View>
      <View style={styles.container1}>
      <View style={styles.marketView}>
        <TouchableOpacity
        style={styles.botButton}
        ><Text style={{color:theme.colors.primary, fontSize:17, fontWeight:'700', fontFamily:'satoshi-Bold'}}>Card</Text></TouchableOpacity>
      </View>
      <View style={styles.botView}>
        <TouchableOpacity 
        onPress={() => navigation.navigate('Wallet')}
        >
          <Text style={{color:"#bebebe", fontSize:17,fontWeight:'700', fontFamily:'satoshi-Bold'}}>Wallet</Text>
        </TouchableOpacity>
      </View>
      </View>
         <View style={styles.Card}>
        
           <View style={styles.logo}>
           <Image
          source={require('../../../assets/images/chivaCardLogo.png')}
          style={{width: 116, height: 41}}
        />
           </View>
           
           <View>
         
           { showCard ?<>
           <View style={styles.cardNumber}>
            <Text style={styles.text1}>Card number</Text>
            <Text style={styles.text}>1234 5678 9011 4456</Text>
            <View style={styles.copy}>
              <TouchableOpacity>
                <Image
                  source={require('../../../assets/images/Union.png')}
                  style={{ width: 15, height: 15 }} />
              </TouchableOpacity>
            </View>
          </View><View style={styles.cardNumber}>
              <Text style={styles.text1}>Expiry date</Text>
              <Text style={styles.text}>12/24</Text>
              <View style={styles.copy2}>
                <TouchableOpacity>
                  <Image
                    source={require('../../../assets/images/Union.png')}
                    style={{ width: 15, height: 15 }} />
                </TouchableOpacity>
              </View>
            </View><View style={styles.cardNumber}>
              <Text style={styles.text1}>CVV</Text>
              <Text style={styles.text}>123</Text>
              <View style={styles.copy3}>
                <TouchableOpacity>
                  <Image
                    source={require('../../../assets/images/Union.png')}
                    style={{ width: 15, height: 15 }} />
                </TouchableOpacity>
              </View>
              </View>
              <View style={styles.visaLogo}>
              <Image
                source={require('../../../assets/images/Visa.png')}
                style={{ width: 70, height: 22 }} />
            </View>
              </>
        : null
        }
        

           </View>
           
           </View>
           <View style={styles.button}>
            {showCard ? 
             <Button
             text='Hide details'
             onPress={showCardView}
             />:
             <Button
             text='Show details'
             onPress={showCardView}
             />
          }
          
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
  text:{
    fontFamily:'satoshi-Bold',
    fontSize:16,
    color:'#ffffff'
  },
  text1:{
    fontFamily:'satoshi-Bold',
    fontSize:16,
    color:theme.colors.grey
  },
  search: {
    marginTop: -112,
    maxWidth: 340,
    marginLeft: 330,
  },
  marketView:{
    marginLeft:"53.3%", 
    marginTop:"1%",
  },
 
   container1: {
    alignSelf: 'center',
    width: 327,
    overflow: 'hidden',
    height: 44,
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
 
   text3:{
    fontWeight:'bold',
   },
  
   Header:{
    marginTop:20,
    marginLeft:30,
    width:75,
    height:27
   },
   HeaderText:{
   fontStyle:'normal',
   fontWeight:'900',
   fontSize:20,
   fontFamily:'satoshi'
   },
   
  
  botView:{
    marginLeft:60,
    marginTop:'-9%'
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
   Card:{
    backgroundColor:'#08090a',
    width:230,
    height:353,
    borderRadius:10,
    marginTop:20,
   marginLeft:70,
   },
  logo:{
   marginLeft:30,
   marginTop:20
  },
  visaLogo:{
   marginTop:20,
   marginLeft:150,

  },
  cardNumber:{
    marginTop:20,
    marginLeft:20,
    height:60,
    width:200,
  },
  copy:{
    marginLeft:165,
    marginTop:-18
  },
  copy2:{
    marginLeft:45,
    marginTop:-18
  },
  copy3:{
    marginLeft:30,
    marginTop:-18
  },
  button:{
    marginLeft:105,
  }

});