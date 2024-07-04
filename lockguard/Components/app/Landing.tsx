import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const Landing = () => {
  const router = useRouter();

  return (
    <View style={styles.main}>
      <LinearGradient
        colors={["rgba(0,0,0,0.6)", "transparent"]}
        style={styles.gradient}
      />
      <View style={styles.content}>
        <Ionicons
          name="shield-checkmark"
          size={80}
          color="white"
          style={styles.icon}
        />
        <Text style={styles.title}>Welcome to LockGuard</Text>
        <Text style={styles.subtitle}>Your ultimate security companion</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            router.replace("/(home)/home");
            // router.replace("/(authenticate)/login");
          }}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Landing;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#1f2f49",
    justifyContent: "center",
    alignItems: "center",
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
  },
  content: {
    alignItems: "center",
    paddingHorizontal: 20,
  },
  icon: {
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#ff6347",
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
});
