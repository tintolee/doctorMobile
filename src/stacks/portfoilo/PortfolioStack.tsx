import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import AddFunds from '../../screens/explore/AddFunds';
import { BotsScreen, BotstartConfirmation, MarketsScreen, PaymentConfirm, PaymentsMethod, PaymentSuccess, StartBotScreen} from '../../screens/explore/index';
import { Assets, BuyAsset, PortfolioScreen1 } from '../../screens/potfolio';




const Stack = createNativeStackNavigator<PortfolioStackParamList>();

type PortfolioStackParamList = {
  PortfolioScreen1: undefined;
  Assets: undefined;
  BuyAsset: undefined;
 
  
};

export const PortfolioStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="PortfolioScreen1" component={PortfolioScreen1} />
      <Stack.Screen name="Assets" component={Assets} />
      <Stack.Screen name="BuyAsset" component={BuyAsset} />
    </Stack.Navigator>
  );
};

export default PortfolioStack;
