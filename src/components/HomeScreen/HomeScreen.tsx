import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  FlatList,
} from "react-native";
import React from "react";
import { Avatar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { RoutesProps } from "../../types/navigation.type";

const opciones: {
  id: number;
  title: string;
  image: any;
  screen: string;
  component: string;
}[] = [
  {
    id: 1,
    title: "Perfil",
    image: require("../../../assets/Perfil.png"),
    screen: "Perfil",
    component: "Perfil",
  },
  {
    id: 2,
    title: "Membresia",
    image: require("../../../assets/Membresia.png"),
    screen: "Membresia",
    component: "Membresia",
  },
  {
    id: 3,
    title: "Puntuaje",
    image: require("../../../assets/Puntuaje.png"),
    screen: "Puntuaje",
    component: "Puntuaje",
  },
  {
    id: 4,
    title: "Ajustes",
    image: require("../../../assets/Ajustes.png"),
    screen: "Ajustes",
    component: "Ajustes",
  },
];

const HomeScreen = () => {
  const navigation = useNavigation<RoutesProps>();

  return (
    <View style={styles.container}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 100,
        }}
      >
        <Avatar.Image
          size={120}
          source={require("../../../assets/avatar.jpg")}
        />
        <Text style={styles.textStyle}>Bienvenido</Text>
      </View>

      <FlatList
        data={opciones}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.circleButton}
            onPress={() => navigation.navigate(item.screen)}
          >
            <Avatar.Image size={60} source={item.image} />
            <Text style={styles.textStyle}>{item.title}</Text>
          </TouchableOpacity>
        )}
        numColumns={2}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-evenly",
    alignItems: "center",
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
    marginTop: 32,
  },
  textStyle: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
