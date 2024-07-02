import { Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity } from "react-native";

const Layout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="main"
        options={{
          headerShown: true,
          headerShadowVisible: false,
          headerLeft: () => (
            <TouchableOpacity style={styles.headerButton}>
              <Ionicons name="menu" size={24} color="white" />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity style={styles.headerButton}>
              <Ionicons name="settings" size={24} color="white" />
            </TouchableOpacity>
          ),
          headerTitle: "Lock Guard",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 18,
            color: "white",
          },
          headerStyle: {
            backgroundColor: "#1f2f49",
          },
        }}
      />
      <Stack.Screen name="register" options={{ headerShown: true }} />
    </Stack>
  );
};

const styles = StyleSheet.create({
  headerButton: {
    padding: 10,
  },
});

export default Layout;
