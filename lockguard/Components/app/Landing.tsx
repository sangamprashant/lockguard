import { Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const Landing = () => {
  const router = useRouter();

  return (
    <View className="flex-1 bg-blue-950 justify-center items-center">
      <LinearGradient
        colors={["rgba(0,0,0,0.6)", "transparent"]}
        className="absolute inset-0"
      />
      <View className="items-center px-5">
        <Ionicons
          name="shield-checkmark"
          size={80}
          color="white"
          className="mb-5"
        />
        <Text className="text-4xl font-bold text-white text-center mb-2">Welcome to LockGuard</Text>
        <Text className="text-xl text-white text-center mb-7">Your ultimate security companion</Text>
        <TouchableOpacity
          className="bg-red-500 py-4 px-10 rounded-full shadow-lg"
          onPress={() => {
            router.replace("/(home)/home");
          }}
        >
          <Text className="text-white text-lg font-bold">Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Landing;
