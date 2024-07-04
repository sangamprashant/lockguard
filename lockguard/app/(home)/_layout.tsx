import { Redirect, Stack, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { useSession } from "../../context/ctx";

const HomeLayout = () => {
  const { session, isLoading } = useSession();
  const router = useRouter()

  // You can keep the splash screen open, or render a loading screen like we do here.
  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  // Only require authentication within the (app) group's layout as users
  // need to be able to access the (auth) group and sign in again.
  if (!session) {
    // On web, static rendering will stop here as the user is not authenticated
    // in the headless Node process that the pages are rendered in.
    // router.replace("/(authenticate)/login")
    return <Redirect href="/(authenticate)/login" />;
  }
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="home"
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
    </Stack>
  );
};

const styles = StyleSheet.create({
  headerButton: {
    padding: 10,
  },
});

export default HomeLayout;
