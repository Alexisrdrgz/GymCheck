import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Avatar, TextInput, Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { RoutesProps } from "../../types/navigation.type";

const ConfirmacionCuenta = () => {
  const navigation = useNavigation<RoutesProps>();
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 18,
            marginTop: 40,
            marginBottom: 10,
          }}
        >
          Crear Cuenta
        </Text>
        <Avatar.Image
          size={120}
          source={require("../../../assets/GymCheck_Logo.png")}
        />
      </View>

      <View>
        <View style={styles.formButtons}>
          <Text style={{ fontWeight: "400", marginBottom: 5 }}>Usuario</Text>
          <TextInput label="Usuario" />
        </View>
        <View style={styles.formButtons}>
          <Text style={{ fontWeight: "400", marginBottom: 5 }}>Contrasena</Text>
          <TextInput label="Contrasena" />
        </View>
        <View style={styles.formButtons}>
          <Text style={{ fontWeight: "400", marginBottom: 5 }}>
            Confirmacion de la Contrasena
          </Text>
          <TextInput label="Confirmacion de la Contrasena" />
        </View>
      </View>
      <Button
        mode="outlined"
        style={styles.buttonContainer}
        buttonColor="#8801FF"
        textColor="white"
        onPress={() => navigation.navigate("HomeScreen")}
      >
        Crear Cuenta
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  avatarContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "column",
    alignItems: "center",
    width: 300,
    marginStart: 50,
    marginTop: 10,
    borderRadius: 8,
  },
  formButtons: {
    margin: 4,
    marginStart: 10,
    marginEnd: 10,
  },
  container: {
    flex: 1,
    justifyContent: "space-evenly",
  },
});

export default ConfirmacionCuenta;
