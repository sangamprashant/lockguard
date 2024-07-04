import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const router = useRouter();

  const handleRegister = () => {
    // Handle registration logic here
    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }
    Alert.alert("Register", `Email: ${email}\nPassword: ${password}`);
  };

  const handleLogin = () => {
    router.push("/login");
  };

  return (
    <View className="flex-1 justify-center items-center bg-blue-950">
      <View className="w-4/5 p-5 rounded-lg items-center border border-blue-900">
        <Ionicons
          name="person-add-outline"
          size={80}
          color="white"
          className="mb-5"
        />
        <Text className="text-lg text-white mb-5">Create a new account</Text>
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
        <TextInput
          className="w-full p-4 bg-white bg-opacity-20 rounded-lg mb-5 text-black"
          placeholder="Confirm Password"
          placeholderTextColor="#aaa"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
          autoCapitalize="none"
        />
        <TouchableOpacity
          className="w-full p-4 bg-red-500 rounded-lg items-center mt-2"
          onPress={handleRegister}
        >
          <Text className="text-white font-bold text-lg">Register</Text>
        </TouchableOpacity>
        <Text className="text-white mt-5">
          Already have an account?{" "}
          <TouchableOpacity onPress={handleLogin}>
            <Text className="text-red-500 font-bold">Login here</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
};

export default Register;
