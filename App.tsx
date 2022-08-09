import React, { useContext, useState,useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ApolloProvider } from '@apollo/client';
import AppLoading from 'expo-app-loading';


/** Providers */




import { AuthStack, MainStack } from './src/stacks';
import OnboardingScreen from './src/screens/OnboardingScreen';
import { ExploreStack } from './src/stacks/explore';
import { useFonts } from 'expo-font';
import Deposit from './src/screens/wallet/Deposit';
import PaymentType from './src/screens/wallet/PaymentType';
import CardDetails from './src/screens/wallet/CardDetails';
import Withdraw from './src/screens/wallet/Withdraw';
import WithdrawType from './src/screens/wallet/WithdrawType';
import BankDetails from './src/screens/wallet/BankDetails';
import SuccessScreen from './src/screens/wallet/SuccessScreen';
import WIthdrawSuccessScreen from './src/screens/wallet/components/WithDrawSuccess';
import { CardScreen } from './src/screens/wallet/Card';
import SendFund from './src/screens/wallet/SendFund';
import SelectRecipient from './src/screens/wallet/SelectFundRecipient';

const AppStack = createNativeStackNavigator();

const AppContainer = () => {
 
  const [login, setLogin]= useState(false)

  const [fontsLoaded] = useFonts({
   'satoshi' : require('./assets/fonts/Satoshi-Variable.ttf'),
   'satoshi-Medium' : require('./assets/fonts/Satoshi-Medium.otf'),
   'satoshi-Regular' : require('./assets/fonts/Satoshi-Regular.otf'),
   'satoshi-Bold' : require('./assets/fonts/Satoshi-Bold.otf'),
   'bran' : require('./assets/fonts/bran.ttf'),
   'RobotoLight':require('./assets/fonts/Roboto-Light.ttf'),
   'RobotoBold':require('./assets/fonts/Roboto-Bold.ttf'),
   'RobotoRegular':require('./assets/fonts/Roboto-Regular.ttf'),
   'RobotoMedium':require('./assets/fonts/Roboto-Medium.ttf'),
   'Poppins':require('./assets/fonts/Poppins-ExtraBold.ttf'),
   'Poppins-Regular':require('./assets/fonts/Poppins-Regular.ttf'),
  });

 
  if (!fontsLoaded ) {
    return <AppLoading />;
  }


  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        {login ? 
         <>
         <AppStack.Screen name="MainStack" component={MainStack} />
         <AppStack.Screen name="Deposit" component={Deposit} />
         <AppStack.Screen name="PaymentType" component={PaymentType} />
         <AppStack.Screen name="CardDetails" component={CardDetails} />
         <AppStack.Screen name="BankDetails" component={BankDetails} />
         <AppStack.Screen name="Withdraw" component={Withdraw} />
         <AppStack.Screen name="WithdrawType" component={WithdrawType} />
         <AppStack.Screen name="PaymentSuccess" component={SuccessScreen} />
         <AppStack.Screen name="WithdrawSuccess" component={WIthdrawSuccessScreen} />
         <AppStack.Screen name="SendFund" component={SendFund} />
         <AppStack.Screen name="SendTo" component={SelectRecipient} />
       </>
       :
       <>
       <AppStack.Screen name="AuthStack" component={AuthStack} />

     </>
      }
         
       
         
      
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

const App = (): JSX.Element => {
  return (
   
    
      
          <AppContainer />
      
   
  );
};
export default App;

