import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { Banner, Details } from "../../Components";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Banner />
        <Details />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
