// routes/Protected.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LandingCnt from '../app/(landing)';

const Stack = createStackNavigator();

const Protected = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Main" component={LandingCnt} />
  </Stack.Navigator>
);

export default Protected;
