import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { IconButton, Avatar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import Perfil from "../Perfil/Perfil";
import { pagos } from "./data";
import Pagos from "./Pagos";
import { RoutesProps } from "../../types/navigation.type";

const Membresia = () => {
  type pagosProps = {
    title: string;
    description: string;
    icon: string;
    icon2: string;
  };

  const navigation = useNavigation<RoutesProps>();
  return (
    <View>
      <View>
        <View style={styles.Contenedor1}>
          <View style={styles.circle}>
            <IconButton
              style={{ marginLeft: 4 }}
              icon="close"
              iconColor="black"
              size={20}
              onPress={() => navigation.navigate("HomeScreen")}
            />
          </View>
          <Text style={styles.textos}>Membresia</Text>
          <View style={styles.circle2}>
            <IconButton
              style={{ marginLeft: 4 }}
              icon="cog"
              iconColor="black"
              size={20}
              onPress={() => navigation.navigate("Ajustes")}
            />
          </View>
        </View>
      </View>
      <View style={styles.avatarContainer}>
        <Avatar.Image
          size={120}
          source={require("../../../assets/avatar.jpg")}
          style={{ marginLeft: 15 }}
        />
        <Text style={{ color: "black", marginLeft: 23, fontWeight: "bold" }}>
          Alexis Rodriguez
        </Text>
        <View style={styles.PagosContenedor}>
          <View style={styles.Pagos}>
            {pagos.map((service: pagosProps) => {
              return (
                <Pagos
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  icon2={service.icon2}
                ></Pagos>
              );
            })}
          </View>
        </View>
      </View>
    </View>
  );
};

export default Membresia;

const styles = StyleSheet.create({
  Contenedor1: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
  },
  textos: {
    fontSize: 15,
    color: "black",
    textAlign: "center",
    marginLeft: "28%",
  },
  circle: {
    width: 45,
    height: 45,
    borderColor: "lightgrey",
    borderWidth: 1,
    borderRadius: 50,
    marginLeft: 10, // Espacio entre el botón y el círculo
    justifyContent: "center",
  },
  circle2: {
    width: 45,
    height: 45,
    borderColor: "lightgrey",
    borderWidth: 1,
    borderRadius: 50,
    marginLeft: 100, // Espacio entre el botón y el círculo
    justifyContent: "center",
  },
  avatarContainer: {
    marginTop: 20,
    marginLeft: 120,
    flexDirection: "column",
  },
  Pagos: {
    marginLeft: -50,
  },
  PagosContenedor: {
    marginTop: 20,
    marginLeft: -30,
    paddingEnd: 30,
  },
});
