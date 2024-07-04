import { Slot, Stack } from "expo-router";
import React from "react";
import { SessionProvider } from "../context/ctx";

import { NativeWindStyleSheet } from "nativewind";
import { StatusBar } from "expo-status-bar";

NativeWindStyleSheet.setOutput({
  default: "native",
});

const RootLayout = () => {
  return (
    <SessionProvider>
      <Slot />
      <StatusBar style="dark" />
    </SessionProvider>
  );
};

export default RootLayout;
