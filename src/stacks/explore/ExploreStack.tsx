import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import AddFunds from '../../screens/explore/AddFunds';
import { BotsScreen, BotstartConfirmation, MarketsScreen, PaymentConfirm, PaymentsMethod, PaymentSuccess, StartBotScreen} from '../../screens/explore/index';




const Stack = createNativeStackNavigator<ExploreStackParamList>();

type ExploreStackParamList = {
  BotsScreen: undefined;
  MarketsScreen:undefined;
  StartBotScreen:undefined;
  AddFunds:undefined;
  PaymentsMethods:undefined,
  PaymentConfirm:undefined,
  PaymentSuccess:undefined,
  BotStartConfirmation:undefined
  
};

export const ExploreStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BotsScreen" component={BotsScreen} />
      <Stack.Screen name="MarketsScreen" component={MarketsScreen} />
      <Stack.Screen name="StartBotScreen" component={StartBotScreen}/>
      <Stack.Screen name="AddFunds" component={AddFunds} />
      <Stack.Screen name="PaymentsMethods" component={PaymentsMethod} />
      <Stack.Screen name="PaymentConfirm" component={PaymentConfirm} />
      <Stack.Screen name="PaymentSuccess" component={PaymentSuccess} />
      <Stack.Screen name="BotStartConfirmation" component={BotstartConfirmation} />
    </Stack.Navigator>
  );
};

export default ExploreStack;
