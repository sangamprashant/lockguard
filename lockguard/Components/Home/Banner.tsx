import React, { useState } from "react";
import { StyleSheet, Text, View, Switch } from "react-native";

const Banner = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.content}>
      <Text style={styles.title}>Welcome to LockGuard</Text>
      <Text style={styles.subtitle}>Your ultimate security companion</Text>
      <View style={styles.toggleContainer}>
        <Text style={styles.toggleLabel}>Feature</Text>
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

const styles = StyleSheet.create({
  content: {
    padding: 40,
    alignItems: "center",
    backgroundColor: "#1f2f49",
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "white",
  },
  subtitle: {
    fontSize: 16,
    color: "gray",
  },
  toggleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  toggleLabel: {
    color: "white",
    marginRight: 10,
  },
});

export default Banner;
