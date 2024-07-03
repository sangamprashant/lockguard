// navigation/index.js
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Home from "../(home)/main";

const Stack = createStackNavigator();

const Protected = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="home" component={Home} />
    </Stack.Navigator>
  );
};

export default Protected;
