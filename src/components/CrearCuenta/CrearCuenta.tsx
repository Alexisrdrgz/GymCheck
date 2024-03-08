import { View, Text, StyleSheet, Alert } from "react-native";
import { Avatar, TextInput, Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  auth,
  createUserWithEmailAndPassword,
  database,
} from "../../../firebaseConfig";
import { doc, setDoc } from "firebase/firestore";

const CrearCuenta = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");

  const createuser = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setDoc(doc(database, "/Users", userCredential.user.uid), {
          name: name,
          id: userCredential.user.uid,
          email: email,        });
        alert("User creado");
      })
      .catch((error) => {
        const errorCode = error.code;
        errorCode === "auth/weak-password"
          ? Alert.alert("Password", "Ingrese minimo 6 caracteres", [
            { text: "OK", onPress: () => console.log("OK Pressed") },
          ])
          : errorCode === "auth/email-already-in-use"
            ? Alert.alert("User", "El correo ya esta registrado en una cuenta", [
              { text: "OK", onPress: () => navigation.navigate("Login") },
            ])
            : null;
      });
  };

  return (
    <View>
      <View style={styles.avatarContainer}>
        <Text style={{ fontWeight: "bold", fontSize: 18, marginTop: 36 }}>
          Crear cuenta
        </Text>
        <Avatar.Image
          size={120}
          source={require("../../../assets/avatar.jpg")}
        />
        <Text>Usuario</Text>
      </View>

      <View>
        <View style={styles.formButtons}>
          <Text style={{ fontWeight: "400", marginBottom: 5 }}>
            Nombre Completo
          </Text>
          <TextInput label="Nombre Completo" onChangeText={(value) => setName(value)} />
        </View>
        <View style={styles.formButtons}>
          <Text style={{ fontWeight: "400", marginBottom: 5 }}>
            Correo electronico
          </Text>
          <TextInput label="Correo electronico" onChangeText={(value) => setEmail(value)} />
        </View>
        <View style={styles.formButtons}>
          <Text style={{ fontWeight: "400", marginBottom: 5 }}>
            Fecha de nacimiento
          </Text>
          <TextInput
            label="Fecha de nacimiento"
            right={<TextInput.Icon icon="calendar" />}
          />
        </View>
        <View style={styles.formButtons}>
          <Text style={{ fontWeight: "400", marginBottom: 5 }}>
            Contrasena          </Text>
          <TextInput label="Contrasena" onChangeText={(value) => setPassword(value)} />
        </View>
      </View>
      <Button
        mode="outlined"
        style={styles.buttonContainer}
        buttonColor="#8801FF"
        textColor="white"
        onPress={() => createuser()}
      >
        Siguiente
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
  },
  formButtons: {
    margin: 4,
    marginStart: 10,
    marginEnd: 10,
  },
});

export default CrearCuenta;
