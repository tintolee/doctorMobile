import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Onboarding1,Onboarding2,Onboarding3, AuthLanding ,AuthScreen, ResetPassword, CheckMail} from '../screens/access';
import OtpScreen from '../screens/access/OtpScreen';
import PhoneNumberScreen from '../screens/access/PhoneNumber';
import SetPinScreen from '../screens/access/SetPin';
import SignInScreen from '../screens/access/PatientSignInScreen';
import SignUpScreen from '../screens/access/SignUpScreen';
import UserDetailsScreen from '../screens/access/UserDetailsSCreen';


const Stack = createNativeStackNavigator<AuthStackParamList>();

type AuthStackParamList = {
  Onboarding1: undefined;
  Onboarding2: undefined;
  Onboarding3: undefined;
  AuthLanding: undefined;
  AuthScreen: undefined;
  SignUp:undefined;
  PatientSignIn:undefined;
  Otp:undefined;
  UserDetails:undefined;
  PhoneNumber:undefined;
  SetPin:undefined;
  PasswordReset:undefined;
  CheckMail:undefined;
};

export const AuthStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AuthLanding" component={AuthLanding} />
      <Stack.Screen name="Onboarding1" component={Onboarding1} />
      <Stack.Screen name="Onboarding2" component={Onboarding2} />
      <Stack.Screen name="Onboarding3" component={Onboarding3} />
      <Stack.Screen name="AuthScreen" component={AuthScreen} />
      <Stack.Screen name="CheckMail" component={CheckMail} />
      <Stack.Screen name="PasswordReset" component={ResetPassword} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="PatientSignIn" component={SignInScreen} />
      <Stack.Screen name="Otp" component={OtpScreen} />
      <Stack.Screen name="UserDetails" component={UserDetailsScreen} />
      <Stack.Screen name="PhoneNumber" component={PhoneNumberScreen} />
      <Stack.Screen name="SetPin" component={SetPinScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
