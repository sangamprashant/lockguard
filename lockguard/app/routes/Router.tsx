import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Auth from "./Auth";
import Protected from "./Protected";

export default function Router() {
  return (
    <NavigationContainer>
      <Auth />
      <Protected />
    </NavigationContainer>
  );
}
