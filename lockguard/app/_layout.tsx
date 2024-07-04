import { Slot, Stack } from "expo-router";
import React from "react";
import { SessionProvider } from "../context/ctx";

const RootLayout = () => {
  return (
    <SessionProvider>
      <Slot />
    </SessionProvider>
    // <Stack
    //   screenOptions={{
    //     headerShown: false,
    //     headerStyle: {
    //       backgroundColor: "#1f2f49",
    //     },
    //   }}
    // >
    //   <Stack.Screen name="(landing)" />
    //   <Stack.Screen name="(home)" />
    //   <Stack.Screen name="(authenticate)" />
    // </Stack>
  );
};

export default RootLayout;
