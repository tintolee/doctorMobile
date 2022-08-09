import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import styled from 'styled-components/native';
import { View, StyleSheet, TouchableOpacity, Text, Dimensions } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Avatar } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';
import { theme } from '../../components/forms/Theme';
import { Item } from 'react-native-paper/lib/typescript/components/List/List';
import {
  LineChart,
} from "react-native-chart-kit";
import Button from './components/Button';

export const BotstartConfirmation: React.FunctionComponent = ({route}) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const { botName} = route.params;
  const { percentage} = route.params;
  const { name} = route.params;
  const { status} = route.params;
  const { description} = route.params;

  
return(
  <View style={styles.container}>
  <View style={{marginLeft:30}}>
    <TouchableOpacity onPress={() => navigation.goBack()}>
    <AntDesign name="left" size={20} color="black" />
    </TouchableOpacity>
    </View>
    <View style={{marginLeft:170, marginTop:21}}><Text>Today</Text></View>
    <View style={{marginLeft:140, marginTop:20}}> 
    <Entypo name="triangle-up" size={24} color="#6BDB9E" />   
 <View style={{marginLeft:25, marginTop:-30 }}><Text style={styles.percentage}>{percentage}</Text></View>
    </View>
    <View>
  <LineChart
    data={{
      
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        {
          data: [
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100
          ]
        }
      ]
    }}
    width={Dimensions.get("window").width} // from react-native
    height={240}
    withDots={false}
    withVerticalLines={false}
    withHorizontalLines={false}
    withVerticalLabels={false}
    withHorizontalLabels={false}
    yAxisLabel="$"
    yAxisSuffix="k"
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "blue",
      backgroundGradientFrom: "#fb8c00",
      backgroundGradientTo: "#ffa726",
       // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(18, 17, 17, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "1",
        strokeWidth: "6",
        stroke: "red"

      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16,

    }}
  />
</View>
<View style={{marginLeft:40,marginTop:20, width:294}}>
<View style={{marginLeft:20}}>
  <TouchableOpacity style={styles.touch}><Text style={styles.graphTouch}>1D</Text></TouchableOpacity>
  </View>
  <View style={{marginLeft:80, marginTop:-43}}>
  <TouchableOpacity style={styles.touch}><Text style={styles.graphTouch}>1W</Text></TouchableOpacity>
</View>
<View style={{marginLeft:140,marginTop:-43}}>
<TouchableOpacity style={styles.touch}><Text style={styles.graphTouch}>1M</Text></TouchableOpacity>
</View>
<View style={{marginLeft:200,marginTop:-43}}>
<TouchableOpacity style={styles.touch}><Text style={styles.graphTouch}>1Y</Text></TouchableOpacity>
</View>
<View style={{marginLeft:260,marginTop:-43}}>
<TouchableOpacity style={styles.touch}><Text style={styles.graphTouch}>All</Text></TouchableOpacity>
</View>
</View>
  <View>
 <View style={{marginLeft:40, marginTop:-20}}>
 <Button
              text="Start Bot"
              onPress={() => navigation.navigate('AddFunds')}
              
            />
 </View>
 <View>
 <View style={{marginTop:6, marginLeft:20}}>
  <Avatar.Image size={42} source={require('../../../assets/images/bot.png')} />       
    <View style={styles.botName} ><Text style={{fontFamily:'satoshi', fontStyle:'normal'}}>{botName}</Text></View>
     <View
        style={{
           backgroundColor:'#EA5E5E',
           borderRadius: 7,
           width: 98,
           marginLeft: 130,
           marginTop: -17,
           height:25,
        }}>
        
       <Text style={{marginTop:3, marginLeft:16, fontFamily:'satoshi', fontStyle:'normal', color:theme.colors.white}}>{status}</Text>
        </View>
   
     <View style={{marginRight:240, marginTop:-4}}>
                      <Text
                        style={{
                          alignSelf: 'center',
                          fontSize: 10,
                          fontStyle: 'normal',
                          fontFamily:'satoshi'
                        }}>
                        {name}
                      </Text>
                    </View>
                    <View style={{marginTop:15}}>
                      <Text style={{
                        fontFamily:'satoshi',
                        fontSize:18
                      }}>Bot description</Text>
                    </View>
                    <View style={styles.description}>
                      <Text style={{fontFamily:'satoshi', fontSize:15}}>
                        {description}
                      </Text>
                    </View>
         
                </View>

 </View>
  
 
  </View>
</View>
)
 
}

const styles = StyleSheet.create({
  container: {
    paddingTop: '11%',
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  
  percentage: {
    fontSize: 25,
    fontWeight: 'bold',
    fontStyle: 'normal',
    color: theme.colors.black,
  },
 touch:{
  backgroundColor:'#f7f7f9',
  borderRadius:40,
  width:44,
  height:44,
  padding:12
 },
 botName:{
  marginTop:-38,
  marginLeft: 50,},

  description:{
    marginTop:10,
    width:350
  },
  graphTouch:{
    fontFamily:'satoshi',
    color:theme.colors.grey
  }

 

});