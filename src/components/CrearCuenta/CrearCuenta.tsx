import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Avatar, TextInput, Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { RoutesProps } from "../../types/navigation.type";
import { useAuth } from "../../hooks/useAuth";
import { User } from "../../interfaces/user.interface";
import { dateTextFormat } from "../../utils/dateTextFormat";

const CrearCuenta = () => {
  const navigation = useNavigation<RoutesProps>();
  const [userData, SetUserData] = React.useState<User>({
    id: "",
    userId: "",
    partnerId: 0,
    profileImage: "",
    completeName: "",
    phone: "",
    email: "",
    fechaNacimiento: "",
  });

  const { loading, register, error } = useAuth();
  const [password, setPassword] = React.useState<string>("");
  const [confirmPassword, setConfirmPassword] = React.useState<string>("");

  const handleRegister = async () => {
    if (password !== confirmPassword)
      return alert("Las contraseñas no coinciden");

    if (
      userData.completeName === "" ||
      userData.phone === "" ||
      userData.userId === ""
    )
      return alert("Por favor llena todos los campos");

    if (error !== "") return alert(error);

    await register(userData, password);
  };

  return (
    <ScrollView>
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
          <TextInput
            label="Nombre Completo"
            onChangeText={(text) =>
              SetUserData({ ...userData, completeName: text })
            }
          />
        </View>
        <View style={styles.formButtons}>
          <Text style={{ fontWeight: "400", marginBottom: 5 }}>
            Correo Electronico
          </Text>
          <TextInput
            label="Correo Electronico"
            onChangeText={(text) => SetUserData({ ...userData, email: text })}
          />
        </View>
        <View style={styles.formButtons}>
          <Text style={{ fontWeight: "400", marginBottom: 5 }}>
            Correo electronico
          </Text>
          <TextInput
            label="Numero de socio"
            onChangeText={(text) => SetUserData({ ...userData, userId: text })}
          />
        </View>
        {/* <View style={styles.formButtons}>
          <Text style={{ fontWeight: "400", marginBottom: 5 }}>
            Fecha de nacimiento
          </Text>
          <TextInput
            label="Fecha de nacimiento"
            placeholder="DD/MM/AAAA"
            right={<TextInput.Icon icon="calendar" />}
            onChangeText={(text) =>
              SetUserData({
                ...userData,
                fechaNacimiento: text,
              })
            }
            value={dateTextFormat(userData.fechaNacimiento)}
          />
        </View> */}
        <View style={styles.formButtons}>
          <Text style={{ fontWeight: "400", marginBottom: 5 }}>
            Numero telefonico
          </Text>
          <TextInput
            label="Numero telefonico"
            onChangeText={(text) => SetUserData({ ...userData, phone: text })}
          />
        </View>
        <View style={styles.formButtons}>
          <Text style={{ fontWeight: "400", marginBottom: 5 }}>Contrasena</Text>
          <TextInput
            label="Contrasena"
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <View style={styles.formButtons}>
          <Text style={{ fontWeight: "400", marginBottom: 5 }}>
            Confirmacion de la Contrasena
          </Text>
          <TextInput
            label="Confirmacion de la Contrasena"
            onChangeText={(text) => setConfirmPassword(text)}
          />
        </View>
      </View>
      <Button
        mode="outlined"
        style={styles.buttonContainer}
        buttonColor="#8801FF"
        textColor="white"
        onPress={() => handleRegister()}
        disabled={loading}
      >
        Crear Cuenta
      </Button>
    </ScrollView>
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
    marginVertical: 10,
  },
  formButtons: {
    margin: 4,
    marginStart: 10,
    marginEnd: 10,
  },
});

export default CrearCuenta;
