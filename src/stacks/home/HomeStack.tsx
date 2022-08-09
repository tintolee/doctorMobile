import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { HomeScreen } from '../../screens/home';
import { HomeScreen2 } from '../../screens/home/HomeScreen2';

const Stack = createNativeStackNavigator<HomeStackParamList>();

type HomeStackParamList = {
    Home: undefined;
  
};

export const HomeStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen2} />

    </Stack.Navigator>
  );
};

export default HomeStack;
