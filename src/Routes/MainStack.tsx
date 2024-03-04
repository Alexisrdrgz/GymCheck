import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../components/Login";
import CrearCuenta from "../components/CrearCuenta";
import ConfirmacionCuenta from "../components/ConfirmacionCuenta";
import HomeScreen from "../components/HomeScreen/HomeScreen";
import Perfil from "../components/Perfil/Perfil";
import Ajustes from "../components/Ajustes/Ajustes";
import Puntuaje from "../components/Puntuaje/Puntuaje";
import Membresia from "../components/Membresia/Membresia";
import Calendar from "../components/Calendar/Calendar";
const MainStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="CrearCuenta" component={CrearCuenta} />
      <Stack.Screen name="ConfirmacionCuenta" component={ConfirmacionCuenta} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Perfil" component={Perfil} />
      <Stack.Screen name="Ajustes" component={Ajustes} />
      <Stack.Screen name="Puntuaje" component={Puntuaje} />
      <Stack.Screen name="Membresia" component={Membresia} />
      <Stack.Screen name="Calendar" component={Calendar} />






    </Stack.Navigator>
  );
};

export default MainStack;

const styles = StyleSheet.create({});
