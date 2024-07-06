import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { NativeWindStyleSheet } from "nativewind";
import React, { useEffect, useState } from "react";
import {
  DeviceEventEmitter,
  NativeEventEmitter,
  NativeModules,
  Text,
  View,
} from "react-native";
import { SessionProvider } from "../context/ctx";

NativeWindStyleSheet.setOutput({
  default: "native",
});

const RootLayout = () => {
  // const [unlockAttempts, setUnlockAttempts] = useState(0);

  // useEffect(() => {
  //   // Initialize LockDetection if available
  //   if (NativeModules.LockDetection) {
  //     const { LockDetection } = NativeModules;
  //     LockDetection.registerforDeviceLockNotif();

  //     const LockDetectionEmitter = new NativeEventEmitter(LockDetection);
  //     const lockStatusListener = LockDetectionEmitter.addListener(
  //       "LockStatusChange",
  //       (newStatus) => {
  //         console.log("LockStatusChange", newStatus);
  //       }
  //     );

  //     const deviceUnlockedListener = DeviceEventEmitter.addListener(
  //       "device_unlocked",
  //       () => {
  //         console.log("Device unlocked");
  //       }
  //     );

  //     const deviceLockedListener = DeviceEventEmitter.addListener(
  //       "device_locked",
  //       () => {
  //         console.log("Device locked");
  //       }
  //     );

  //     // Cleanup listeners on unmount
  //     return () => {
  //       lockStatusListener.remove();
  //       deviceUnlockedListener.remove();
  //       deviceLockedListener.remove();
  //     };
  //   } else {
  //     console.warn("LockDetection module is not available");
  //   }
  // }, []);

  return (
    <SessionProvider>
      <Slot />
      <StatusBar
        animated={true}
        backgroundColor="#172554"
        style="light"
        hidden={false}
      />
      {/* <View style={{ padding: 20 }}>
        <Text>Unlock attempts: {unlockAttempts}</Text>
      </View> */}
    </SessionProvider>
  );
};

export default RootLayout;
