import { Stack } from "expo-router";
import React from "react";

const Layout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: "#1f2f49",
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: "#1f2f49",
          },
        }}
      />
    </Stack>
  );
};



export default Layout;
