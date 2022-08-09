import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import styled from 'styled-components/native';
import { StatusBar } from 'expo-status-bar';
import { RouteProp } from '@react-navigation/native';
import {
  RentalFinancialsScreen,
  RentalSummaryScreen,
} from '../../../screens/rentals/rental-detail';
import { Text } from '../../../components/util';
import { Rental } from '../../../api/graphql/generated/graphql';

const Tab = createMaterialTopTabNavigator<RentalDetailStackParamList>();

type RentalDetailStackParamList = {
  Summary: undefined;
  Financials: undefined;
  Units: undefined;
  Files: undefined;
  Notes: undefined;
};

export const RentalDetailsStack: React.FC<{
  route: RouteProp<{ RentalDetails: { rental: Rental } }>;
}> = ({ route: navRoute }) => {
  const { rental } = navRoute.params;
  return (
    <RentalsScreenContainer>
      <StatusBar backgroundColor="#f2636f" />
      <HeaderContainer>
        <HeaderText center bold subheading color="#1e1e1e">
          {rental?.name}
        </HeaderText>
        <Text small center color="#1e1e1e">
          {rental?.address.line}, {rental?.address.line2},{' '}
          {rental?.address.city}
        </Text>
      </HeaderContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIndicatorStyle: {
            backgroundColor: '#DBDBDB',
          },
          tabBarStyle: {
            backgroundColor: '#F2636F',
          },
          tabBarLabel: ({ focused }) => {
            const color = focused ? '#DBDBDB' : '#DBDBDB';
            return (
              <Text heavy color={color} style={{ fontSize: 8 }}>
                {route.name}
              </Text>
            );
          },
          tabBarLabelStyle: { flex: 1 },
        })}
      >
        <Tab.Screen name="Summary" component={RentalSummaryScreen} />
        <Tab.Screen name="Financials" component={RentalFinancialsScreen} />
        <Tab.Screen name="Units" component={RentalSummaryScreen} />
        <Tab.Screen name="Files" component={RentalSummaryScreen} />
        <Tab.Screen name="Notes" component={RentalSummaryScreen} />
      </Tab.Navigator>
    </RentalsScreenContainer>
  );
};

export default RentalDetailsStack;

const RentalsScreenContainer = styled.SafeAreaView`
  flex: 1;
  background-color: #f2636f;
  /* border-color: green;
  border-width: 1px;
  border-style: dashed; */
  /* padding-top: 50px; */
`;

const HeaderText = styled(Text)`
  margin-top: 40px;
  margin-bottom: 10px;
`;

const HeaderContainer = styled.View`
  padding: 0 30px;
  justify-content: space-between;
  min-height: 50px;
  background-color: #f2636f;
`;
