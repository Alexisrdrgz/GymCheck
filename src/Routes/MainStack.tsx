import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../components/Login";
import CrearCuenta from "../components/CrearCuenta";
import ConfirmacionCuenta from "../components/ConfirmacionCuenta";
import HomeScreen from "../components/HomeScreen/HomeScreen";
const MainStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="CrearCuenta" component={CrearCuenta} />
      <Stack.Screen name="ConfirmacionCuenta" component={ConfirmacionCuenta} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;

const styles = StyleSheet.create({});
