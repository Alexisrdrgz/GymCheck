import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import { TextInput, Button } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../hooks/useAuth";
import { RoutesProps } from "../../types/navigation.type";

const Login = () => {
  const [user, SetUser] = React.useState("");
  const [password, Setpassword] = React.useState("");
  const { loading, Login, error } = useAuth();
  const navigation = useNavigation<RoutesProps>();

  const verificarUsuario = () => {
    Login(user, password);
  };

  return (
    <View>
      <LinearGradient
        colors={[
          "rgba(167,79,255,1) 100%",
          "rgba(84,9,121,1) 50%",
          "rgba(2,0,36,1) 20%",
        ]}
        style={styles.linearGradient}
      >
        <View style={styles.logoContainer}>
          <Image
            source={require("../../../assets/GymCheck_Logo.png")}
            style={styles.logo}
          />
        </View>
        <View>
          <TextInput
            style={styles.placeholder}
            value={user}
            onChangeText={SetUser}
            placeholder="Usuario"
            placeholderTextColor="white"
          />
          <TextInput
            style={styles.placeholder}
            value={password}
            placeholder="Contrasena"
            onChangeText={Setpassword}
            placeholderTextColor="white"
            textContentType="password"
            secureTextEntry
            right={<TextInput.Icon icon="eye" />}
          />
          <Text style={{ color: "red" }}>{error}</Text>
          <View style={styles.buttonContainer}>
            <Button
              mode="text"
              textColor="white"
              onPress={() => console.log("Pressed")}
            >
              Olvide mi contrasena
            </Button>
          </View>
        </View>
        <View style={{ marginTop: 10 }}>
          <Button
            textColor="black"
            mode="contained"
            style={{
              width: 250,
              height: 40,
              backgroundColor: "white",
              marginBottom: 16,
            }}
            disabled={loading}
            onPress={() => verificarUsuario()}
          >
            Ingresar
          </Button>
          <Button
            textColor="white"
            mode="contained"
            style={{ width: 250, height: 40, backgroundColor: "black" }}
            onPress={() => navigation.navigate("CrearCuenta")}
          >
            Registrarse
          </Button>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linearGradient: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    height: "100%",
    width: "100%",
  },
  logo: {
    width: 200,
    height: 200,
  },
  logoContainer: {
    marginTop: -90,
  },
  placeholder: {
    width: 250,
    height: 40,
    borderColor: "white",
    borderWidth: 1,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    backgroundColor: "rgba(2,0,36,1) ",
    textColor: "white",
    margin: 2,
  },
  buttonContainer: {
    padding: 1,
    marginTop: 20,
    alignItems: "flex-end",
  },
});

export default Login;
