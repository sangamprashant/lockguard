import React from "react";
import { SafeAreaView, ScrollView, Text } from "react-native";
import { Banner } from "../../Components";
import { useSession } from "../../context/ctx";

const Home = () => {
  const { signOut } = useSession();

  return (
    <SafeAreaView className="flex-1 bg-gray-900">
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsHorizontalScrollIndicator={false}
        className="p-4"
      >
        <Banner />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
