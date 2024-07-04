import React, { useState } from "react";
import { Text, View, Switch } from "react-native";

const Banner = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View className="p-10 items-center bg-blue-950 rounded-b-lg ">
      <Text className="text-white text-3xl font-bold mb-3">
        LockGuard
      </Text>
      <Text className="text-gray-300 text-lg mb-5">
        Your ultimate security companion
      </Text>
      <View className="flex-row items-center mt-5">
        <Text className="text-white mr-3">Feature</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    </View>
  );
};

export default Banner;
