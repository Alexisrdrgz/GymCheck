import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../components/HomeScreen/HomeScreen";
import Perfil from "../components/Perfil/Perfil";
import Ajustes from "../components/Ajustes/Ajustes";
import Puntuaje from "../components/Puntuaje/Puntuaje";
import Membresia from "../components/Membresia/Membresia";
import Calendar from "../components/Calendar/Calendar";

const HomeStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Perfil" component={Perfil} />
      <Stack.Screen name="Ajustes" component={Ajustes} />
      <Stack.Screen name="Puntuaje" component={Puntuaje} />
      <Stack.Screen
        name="Membresia"
        component={Membresia}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Calendar" component={Calendar} />
    </Stack.Navigator>
  );
};

export default HomeStack;
