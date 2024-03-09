import React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-paper";
import { auth } from "../../../firebase";

const Ajustes = () => {
  return (
    <View>
      <Text>Ajustes</Text>
      <Button onPress={() => auth.signOut()}>Cerrar Sesion</Button>
    </View>
  );
};

export default Ajustes;
