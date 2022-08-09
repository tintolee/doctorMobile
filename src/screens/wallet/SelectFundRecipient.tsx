import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { theme } from '../../components/forms/Theme';
import { AntDesign } from '@expo/vector-icons';
import {Card, Title, Paragraph} from 'react-native-paper';
import Button from './components/fundButton';
import Search from './components/SearchBar';
import Friends from './components/Friends';

export default function SelectRecipient() {
    const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <View style={styles.container}>
      <View style={{marginLeft: 10}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <AntDesign name="left" size={20} color="black" />
        </TouchableOpacity>
      </View>
      <View style={{marginLeft:115, marginTop:-65}}>
        <Text style={styles.Mainheader}>Send to</Text>
      </View>
 
 <View style={styles.search}>
  <Search/>
 </View>
  <View style={styles.Header}><Text style={{fontFamily:'satoshi-Bold', fontSize:16, color:theme.colors.dark}}>Recent</Text></View>
  <View style={styles.friends}>
    <Friends/>
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
    search: {
      marginLeft:50,
      marginTop:1,
      width:300
    },
  Header:{
    marginTop:20,
    marginLeft:20
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
  
   
    friends:{
      marginLeft:30,
      marginTop:-80,
      height:400,
      paddingTop:80
    }
   
  });