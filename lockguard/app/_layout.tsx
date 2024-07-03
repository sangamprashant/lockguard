// import { Stack } from "expo-router";
import { Stack } from "expo-router";
import React from "react";
import Router from "./routes/Router";

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

// const Layout = () => {
//   <Router />;
// };

export default Layout;
