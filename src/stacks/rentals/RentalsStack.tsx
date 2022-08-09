import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { WizardStack } from './add-rental-wizard';
import { RentalDetailsScreen, RentalsHomeScreen } from '../../screens/rentals';
// import { SignInScreen, AuthLanding } from '../screens/access';
// import { SignUpStack } from './auth';

const Stack = createNativeStackNavigator<RentalsStackParamList>();

type RentalsStackParamList = {
  AddRental: undefined;
  RentalsHomeScreen: undefined;
  RentalDetails: undefined;
};

export const RentalsStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="RentalsHomeScreen" component={RentalsHomeScreen} />
      <Stack.Screen name="AddRental" component={WizardStack} />
    </Stack.Navigator>
  );
};

export default RentalsStack;
