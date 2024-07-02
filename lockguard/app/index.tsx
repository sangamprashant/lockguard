import { Stack } from "expo-router";
import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Landing } from "../Components";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Landing />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
