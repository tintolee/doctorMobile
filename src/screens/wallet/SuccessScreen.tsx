import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { theme } from '../../components/forms/Theme'
import Button from './components/SuccessButton'
import Success from '../../components/success'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'


export default function SuccessScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <View style={styles.container}> 
<View style={{marginTop:250}}>
    <Success/>
</View>
<View style={{marginTop:120,marginLeft:140, width:130}}>
  <Text style={{fontFamily:'satoshi-Medium', fontSize:24}}>Payment Successful</Text>
</View>
      <View style={styles.button}>
        <Button
         text='Continue'
         onPress={() => navigation.navigate('Wallet')}
        />
      </View>
    </View>
  )
}


const styles=StyleSheet.create({

    container: {
        paddingTop: '20%',
        flex: 1,
        backgroundColor: theme.colors.background
      },
      button:{

        marginTop:150,
        marginLeft:40
      }
    })