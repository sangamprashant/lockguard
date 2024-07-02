import React from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { Banner } from "../../Components";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        showsHorizontalScrollIndicator={false}
      >
        <Banner />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  headerButton: {
    padding: 10,
  },
  scrollView: {
    flexGrow: 1,
  },
});

export default Home;
