import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Images } from "../../assets";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const Details = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <TouchableOpacity
      className="absolute bottom-0  w-full bg-blue-950 z-10 rounded-t-3xl"
      onPress={toggleExpanded}
      activeOpacity={1}
    >
      <Text className="text-center my-2">
        <Entypo
          name={`chevron-${expanded ? "down" : "up"}`}
          size={50}
          color="white"
        />
      </Text>
      <Text className="text-center text-white font-extrabold text-3xl mb-7">
        About LockGuard
      </Text>
      {expanded && (
        <View className="p-5 border-t border-b-gray-300">
          <Text className="text-white">
            LockGuard is a security application designed to protect your phone
            from theft. It sends an intruder's face to your email upon
            detection. Activate LockGuard to ensure your device's safety.
          </Text>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <View className="bg-white p-1 rounded-full mr-2 shadow shadow-white">
              <Image
                source={Images.powerOn}
                style={{ width: 30, height: 30 }}
              />
            </View>
            <Text style={{ fontSize: 16, color: "gray" }}>
              LockGuard is active
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <View className="bg-white p-1 rounded-full mr-2 shadow shadow-white">
              <Image
                source={Images.powerOff}
                style={{ width: 30, height: 30 }}
              />
            </View>
            <Text style={{ fontSize: 16, color: "gray" }}>
              LockGuard is inactive
            </Text>
          </View>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default Details;
