import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import React from "react";
import { Avatar } from "react-native-paper";

const opciones = [
  {
    id: 1,
    title: "Perfil",
    image: require("../../../assets/Perfil.png"),
    screen: "Perfil",
  },
  {
    id: 2,
    title: "Perfil",
    image: require("../../../assets/Membresia.png"),
    screen: "Membresia",
  },
  {
    id: 3,
    title: "Perfil",
    image: require("../../../assets/Puntuaje.png"),
    screen: "Puntuaje",
  },
  {
    id: 4,
    title: "Perfil",
    image: require("../../../assets/Ajustes.png"),
    screen: "Ajustes",
  },
];

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 24,
        }}
      >
        <Avatar.Image
          size={120}
          source={require("../../../assets/avatar.jpg")}
        />
        <Text style={styles.textStyle}>Bienvenido</Text>
      </View>

      <View style={styles.gridContainer}>
        {opciones.map((opcion) => (
          <TouchableOpacity key={opcion.id} style={styles.circleButton}>
            <Avatar.Image size={100} source={opcion.image} />
            <Text style={styles.textStyle}>{opcion.screen}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 28,
  },
  circleButton: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  gridContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 20,
  },
  textStyle: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
