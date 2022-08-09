import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { CardScreen, Wallet } from '../../screens/wallet';




const Stack = createNativeStackNavigator<WalletStackParamList>();

type WalletStackParamList = {
  Wallet: undefined;
  Card: undefined;
  
};

export const WalletStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Wallet" component={Wallet} />
      <Stack.Screen name="Card" component={CardScreen} />
    </Stack.Navigator>
  );
};

export default WalletStack;
