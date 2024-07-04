import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Images } from "../../assets";

const Banner = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };

  return (
    <View className="p-10 items-center rounded-b-lg ">
      <Text className=" text-blue-950 text-6xl mb-3 font-extrabold">
        LOCKGUARD
      </Text>

      <TouchableOpacity
        className="flex-row items-center my-5 bg-gray-200 p-2 rounded-full shadow shadow-blue-950 drop-shadow"
        onPress={toggleSwitch}
        // disabled
      >
        <Image
          source={isEnabled ? Images.powerOn : Images.powerOff}
          style={{ width: 200, height: 200 }}
        />
      </TouchableOpacity>
      <Text className="mb-5 text-xl text-blue-950   font-bold text-center">
        {isEnabled
          ? "Your phone is protected."
          : "Your phone is not protected."}
      </Text>
    </View>
  );
};

export default Banner;
