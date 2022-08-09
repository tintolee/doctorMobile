import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { theme } from '../../components/forms/Theme';
import { AntDesign } from '@expo/vector-icons';
import {Card, Title, Paragraph} from 'react-native-paper';
import Button from './components/fundButton';

export default function Deposit() {
    const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <View style={styles.container}>
      <View style={{marginLeft: 10}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <AntDesign name="left" size={20} color="black" />
        </TouchableOpacity>
      </View>
      <View style={{marginLeft:115, marginTop:-65}}>
        <Text style={styles.Mainheader}>Deposit</Text>
      </View>
      <View style={styles.container3}>
        <View style={styles.amount}>
          <Text style={styles.amountDollars}><Text style={{color:theme.colors.grey}}>$</Text>0.00</Text>
        </View>
        <View style={styles.amount2}>
          <Text style={styles.amountNaira}> NGN0.00</Text>
        </View>

        <View style={{marginTop: -40, maxHeight: 55, maxWidth: 100}}>
          <TouchableOpacity>
            <Card>
              <Card.Content>
                <Paragraph><Text style={styles.numbers}>$ 50.00 </Text></Paragraph>
              </Card.Content>
            </Card>
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginTop: -55,
            maxHeight: 55,
            maxWidth: 100,
            marginLeft: 110,
          }}>
          <TouchableOpacity>
            <Card>
              <Card.Content>
                <Paragraph><Text style={styles.numbers}>$ 400.00 </Text></Paragraph>
              </Card.Content>
            </Card>
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginTop: -55,
            maxHeight: 55,
            maxWidth: 100,
            marginLeft: 220,
          }}>
          <TouchableOpacity>
            <Card>
              <Card.Content>
                <Paragraph><Text style={styles.numbers}>$ 200.00 </Text></Paragraph>
              </Card.Content>
            </Card>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.calculator}>
        <View>
          <TouchableOpacity>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>1</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginLeft: 100, marginTop: -24}}>
          <TouchableOpacity>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>2</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginLeft: 200, marginTop: -24}}>
          <TouchableOpacity>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>3</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginLeft: 1, marginTop: 50}}>
          <TouchableOpacity>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>4</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginLeft: 1, marginTop: 50}}>
          <TouchableOpacity>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>7</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginLeft: 100, marginTop: -99}}>
          <TouchableOpacity>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>5</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginLeft: 200, marginTop: -22}}>
          <TouchableOpacity>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>6</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginLeft: 200, marginTop: 54}}>
          <TouchableOpacity>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>9</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginLeft: 100, marginTop: -22}}>
          <TouchableOpacity>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>8</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginLeft: 100, marginTop: 60}}>
          <TouchableOpacity>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>0</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginLeft: 200, marginTop: -25}}>
          <TouchableOpacity>
          <AntDesign name="left" size={20} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{marginLeft:42}}>
      <Button
              text="Deposit"
              onPress={() => navigation.navigate('PaymentType')}
              
            />
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
    container2: {
      marginTop: 70,
      maxWidth: 340,
      marginLeft: 20,
    },
    amount: {
      marginLeft: 90,
    },
    amount2: {
      marginLeft: 110,
      marginTop: -100,
    },
    calculator: {
      marginLeft: 75,
      marginTop: 50,
    },
  
    container3: {
      marginTop: -60,
      maxWidth: 340,
      marginLeft: 20,
      maxHeight: 300,
    },
    header: {
      fontSize: 15,
      fontWeight: 'bold',
      fontStyle: 'normal',
      color: theme.colors.black,
      marginBottom: 50,
      marginLeft: 40,
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
    amountDollars: {
      fontSize: 40,
      fontWeight: 'bold',
      fontStyle: 'normal',
      color: theme.colors.black,
      marginBottom: 50,
      marginLeft: 30,
      marginTop: 50,
      fontFamily:'satoshi-Bold'
    },
    amountNaira: {
      fontSize: 16,
      fontWeight: 'bold',
      fontStyle: 'normal',
      color: theme.colors.primary,
      marginBottom: 50,
      marginLeft: 30,
      marginTop: 50,
      fontFamily:'satoshi-Bold'
    },
    subtext: {
      color: theme.colors.inactiveTintColor,
      textAlign: 'center',
      paddingHorizontal: '10%',
      marginTop: -15,
      marginRight: 40,
    },
  
    buttonContainer: {
      marginLeft: 46,
      padding: 10,
      paddingHorizontal: 1,
      marginTop: 70,
    },
    button: {
      backgroundColor: theme.colors.primary,
      borderRadius: 40,
      padding: 10,
    },
    numbers:{
      fontFamily:'satoshi-Bold',
      fontStyle:'normal',
      fontSize:14,
  
    }
  });