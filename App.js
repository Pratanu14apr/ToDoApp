import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Login from "./src/auth/Login/Login";
import Register from "./src/auth/Register/Register";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./src/Navigation/Navigation";

export default function App() {
  return (
    <NavigationContainer>
      {/* <Login /> */}
      {/* <Register /> */}
      <Navigation />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
});
