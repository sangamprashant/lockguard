import { StyleSheet, Text, View, Button, ImageBackground } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

const PageNotFound = () => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.background}>
      <LinearGradient
        colors={["rgba(0,0,0,0.6)", "transparent"]}
        style={styles.gradient}
      />
      <View>
        <Text style={styles.text}>404 - Page Not Found</Text>
        <Button title="Go Back" onPress={handleGoBack} color="#841584" />
      </View>
    </View>
  );
};

export default PageNotFound;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#1f2f49",
    justifyContent: "center",
    alignItems: "center",
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
  },
  text: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
});
