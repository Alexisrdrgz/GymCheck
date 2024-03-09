import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../components/Login";
import CrearCuenta from "../components/CrearCuenta";
import ConfirmacionCuenta from "../components/ConfirmacionCuenta";

const AuthStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        options={{ headerShown: false }}
        name="Login"
        component={Login}
      />
      <Stack.Screen name="CrearCuenta" component={CrearCuenta} />
      <Stack.Screen name="ConfirmacionCuenta" component={ConfirmacionCuenta} />
    </Stack.Navigator>
  );
};

export default AuthStack;
