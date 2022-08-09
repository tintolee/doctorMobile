import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import styled from 'styled-components/native';
import { View, StyleSheet, TouchableOpacity, Text, Image, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { theme } from '../../components/forms/Theme';
import Button from '../explore/components/Button';




export const ResetPassword: React.FunctionComponent = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
return(
<View style={styles.container}>
<View style={{marginLeft:30}}>
    <TouchableOpacity onPress={() => navigation.goBack()}>
    <AntDesign name="left" size={12} color="black" />
    </TouchableOpacity>
    </View>
    <View style={{marginLeft: 30, marginTop:30}}>
      <Text style={styles.text}>Reset Password</Text>
    </View>
    <View style={{marginLeft:30, marginTop:15}}>
      <Text style={{fontFamily:'satoshi-Regular', fontSize:16}}>Please enter registered email to get{'\n'}password reset instructions</Text>
    </View>
    <View style={styles.label}>
    <Text style={styles.LableText}>Email</Text>
   </View>
   <View style={{marginLeft:-2}}>
    <TextInput
     placeholder='chidalu@gmail.com'
     style={styles.input}
    />
   </View>
    
    <View style={{marginLeft:40, marginTop:250}}>
      <Button
              text="Send"
              onPress={() => navigation.navigate('CheckMail')}
              
            />
      </View>
      <View style={styles.signin}>
     <Text>
    Remember your password ?
     </Text>
     </View>
     <View style={{marginLeft:280, marginTop:-18}}>
 <TouchableOpacity
  onPress={() => navigation.navigate('SignIn')}>
    <Text style={{color:theme.colors.primary, fontFamily:'satoshi-Regular'}}>Sign In</Text>
    </TouchableOpacity>
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
  text:{
    fontSize: 20,
    fontWeight:"normal",
    fontStyle: 'normal',
    color: theme.colors.black,
    fontFamily:'satoshi-Bold'
  },
  button:{
    backgroundColor: "#DDDDDD",
    padding: 10,
    height:50,
    width:300,
    borderRadius:6,
  },
  textView:{
    marginLeft:50, marginTop:-19
  },
  label:{
    marginLeft:32,
    marginTop:60
  },
  LableText:{
    fontFamily:'satoshi'
  },
  input:{
    height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius:15,
        width:300,
        backgroundColor:'#f7f7f9',
        marginTop:5,
        marginLeft:37
  },
  signin:{
    marginLeft:90
  }

 

});


