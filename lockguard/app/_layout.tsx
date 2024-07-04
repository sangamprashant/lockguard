import { Slot } from "expo-router";
import React, { useEffect } from "react";
import { SessionProvider } from "../context/ctx";
import { StatusBar } from "expo-status-bar";
import { NativeWindStyleSheet } from "nativewind";
import BackgroundFetch from "react-native-background-fetch";
import { AppRegistry } from "react-native";
import appConfig from "../app.json"; // Correct import for appName

NativeWindStyleSheet.setOutput({
  default: "native",
});

const configureBackgroundFetch = async () => {
  try {
    BackgroundFetch.configure(
      {
        minimumFetchInterval: 15, // fetch interval in minutes
        stopOnTerminate: false,
        startOnBoot: true,
        requiredNetworkType: BackgroundFetch.NETWORK_TYPE_NONE, // Default
      },
      async (taskId) => {
        console.log("[BackgroundFetch] taskId: ", taskId);

        // Call your camera function here
        // Example: await takePicture();

        // Required: Signal completion of your task to native code
        BackgroundFetch.finish(taskId);
      },
      (error) => {
        console.error("[BackgroundFetch] failed to start", error);
      }
    );

    BackgroundFetch.status((status) => {
      switch (status) {
        case BackgroundFetch.STATUS_RESTRICTED:
          console.log("BackgroundFetch restricted");
          break;
        case BackgroundFetch.STATUS_DENIED:
          console.log("BackgroundFetch denied");
          break;
        case BackgroundFetch.STATUS_AVAILABLE:
          console.log("BackgroundFetch is enabled");
          break;
      }
    });
  } catch (error) {
    console.error("Error configuring BackgroundFetch:", error);
  }
};

const RootLayout = () => {
  useEffect(() => {
    configureBackgroundFetch();
  }, []);

  return (
    <SessionProvider>
      <Slot />
      <StatusBar
        animated={true}
        backgroundColor="#172554"
        style="light"
        hidden={false}
      />
    </SessionProvider>
  );
};

// Register the main component
AppRegistry.registerComponent(appConfig.expo.name, () => RootLayout);

export default RootLayout;
