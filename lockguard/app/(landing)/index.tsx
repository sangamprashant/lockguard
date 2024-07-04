import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Landing } from "../../Components";

const LandingCnt = () => {
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

export default LandingCnt;
