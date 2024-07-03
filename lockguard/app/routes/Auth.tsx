// navigation/index.js
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import login from "../(authenticate)/login";
import register from "../(authenticate)/register";
import verify from "../(authenticate)/verify";
import LandingCnt from "../(landing)/LandingCnt";

const Stack = createStackNavigator();

const Auth = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="index" component={LandingCnt} />
      <Stack.Screen name="login" component={login} />
      <Stack.Screen name="register" component={register} />
      <Stack.Screen name="verify" component={verify} />
    </Stack.Navigator>
  );
};

export default Auth;
