import { Text, View, TouchableOpacity, ImageBackground } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const PageNotFound = () => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View className="flex-1 justify-center items-center bg-black bg-opacity-50 px-5">
      <Text className=" text-9xl font-bold text-white ">404</Text>
      <Text className="text-4xl font-bold text-white mb-8">Page Not Found</Text>
      <TouchableOpacity
        className="bg-red-500 py-3 px-6 rounded-full"
        onPress={handleGoBack}
      >
        <Text className="text-white text-lg font-bold">Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PageNotFound;
