import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Text } from '../components/util';
import { Image } from "react-native";
import { HomeStack } from './home';
import { ExploreStack } from './explore';
import { SearchScreen, TasksScreen } from '../screens';
import { StartBotScreen } from '../screens';
import { PortfolioStack } from './portfoilo';
import WalletStack from './wallet/WalletStack';

const MainTabStack = createBottomTabNavigator<MainStackParamList>();

type MainStackParamList = {
  Home: undefined;
  Explore: undefined;
  Portfolio: undefined;
  Wallet: undefined;
}

export const MainStack: React.FC = () => {
  return (
    <MainTabStack.Navigator 
    initialRouteName="Home"
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarStyle: {
        position:'absolute',
        height: 105,
        width:375,
        backgroundColor:" rgba(255,255,255,0.9)",
        bottom:0,
        border:" 1px solid #F7F7F9"
      },
      tabBarLabel: ({ focused }) => {
        const color = focused ? '#72BAEC' : '#C7C7CF';
        return (
          <Text color={color} style={{ paddingBottom: 8, fontSize: 15, fontWeight:"700",fontFamily:'satoshi-Bold', color:'#C7C7CF'}}>
            {route.name}
          </Text>
        );
      },
     
    })}
   
    >
      <MainTabStack.Screen name="Home" component={HomeStack} 
       options={{tabBarIcon: ({ focused }) => {
        const color = focused ? '#72BAEC' : '#C7C7CF';
        return (<Image source={require("../../assets/images/home.png")} 
       style={{width: 27, height: 27, tintColor:color}} />)}}}
      />
      <MainTabStack.Screen name="Explore" component={ExploreStack}
      options={{tabBarIcon: ({ focused }) => {
        const color = focused ? '#72BAEC' : '#C7C7CF';
        return (<Image source={require("../../assets/images/explore.png")} 
       style={{width: 27, height: 27, tintColor:color}} />)}}}
      />
      <MainTabStack.Screen name="Portfolio" component={PortfolioStack}
       options={{tabBarIcon: ({ focused }) => {
       const color = focused ? '#72BAEC' : '#C7C7CF';
       return (<Image source={require("../../assets/images/portfolio.png")} 
       style={{width: 27, height: 27, tintColor:color}} />)}}}
      />
      <MainTabStack.Screen name="Wallet" component={WalletStack} 
       options={{tabBarIcon: ({ focused }) => {
        const color = focused ? '#72BAEC' : '#C7C7CF';
        return (<Image source={require("../../assets/images/wallet.png")} 
       style={{width: 27, height: 27, tintColor:color}} />)}}}
      />
    </MainTabStack.Navigator>
  );
};

export default MainStack;
