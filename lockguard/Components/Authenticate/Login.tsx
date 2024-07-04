import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useSession } from "../../context/ctx";

const Login = () => {
  const { signIn } = useSession();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleLogin = () => {
    // Handle login logic here
    Alert.alert("Login", `Email: ${email}\nPassword: ${password}`);
    signIn({ email: "example@example.com", password: "password" });
  };

  const handleRegister = () => {
    router.push("/register");
  };

  return (
    <View className="flex-1 justify-center items-center bg-blue-950">
      <View className="w-4/5  p-5 rounded-lg items-center border border-blue-900">
        <Ionicons
          name="lock-closed-outline"
          size={80}
          color="white"
          className="mb-5"
        />
        <Text className="text-lg text-white mb-5">
          Please login to continue
        </Text>
        <TextInput
          className="w-full p-4 bg-white bg-opacity-20 rounded-lg mb-5 text-black"
          placeholder="Email"
          placeholderTextColor="#aaa"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          className="w-full p-4 bg-white bg-opacity-20 rounded-lg mb-5 text-black"
          placeholder="Password"
          placeholderTextColor="#aaa"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          autoCapitalize="none"
        />
        <TouchableOpacity
          className="w-full p-4 bg-red-500 rounded-lg items-center mt-2"
          onPress={handleLogin}
        >
          <Text className="text-white font-bold text-lg">Login</Text>
        </TouchableOpacity>
        <Text className="text-white mt-5">
          New to LockGuard?{" "}
          <TouchableOpacity onPress={handleRegister}>
            <Text className="text-red-500 font-bold">Register here</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
};

export default Login;
