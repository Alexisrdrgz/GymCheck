import React from "react";
import { View, Text, StyleSheet, Image, Button, TextInput, KeyboardAvoidingView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Login = () => {
  return (

   
    
    <View >
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
            placeholder="Usuario"
            placeholderTextColor="white"
          />
          <TextInput
            style={styles.placeholder}
            placeholder="Contrasena"
            placeholderTextColor="white"
            textContentType='password'
          />
          <View style={styles.buttonContainer}>
          <Button title='olvide la contrasena'/>
          </View>
        </View>
        <View style={{marginTop:100}}>
            <Button title="Ingresar" />
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
  },
  buttonContainer:{
    padding: 16,
    alignItems:'flex-end', }
});

export default Login;
