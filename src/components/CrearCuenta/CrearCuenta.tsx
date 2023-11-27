import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Avatar, TextInput ,Button} from "react-native-paper";

const CrearCuenta = () => {
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

      <View >
        <View style={styles.formButtons}>
        <Text style={{fontWeight:'400',marginBottom:5}}>Numero de telefono</Text>
          <TextInput label="Nombre Completo" />
        </View >
        <View style={styles.formButtons}>
        <Text style={{fontWeight:'400',marginBottom:5}}>Numero de socio</Text>
          <TextInput label="Numero de socio" />
        </View>
        <View style={styles.formButtons}>
        <Text style={{fontWeight:'400',marginBottom:5}}>Fecha de nacimiento</Text>
          <TextInput label="Fecha de nacimiento" right={<TextInput.Icon icon="calendar" />} />
        </View>
        <View style={styles.formButtons}>
            <Text style={{fontWeight:'400',marginBottom:5}}>Numero telefonico</Text>
          <TextInput label="Numero telefonico" />
        </View>
       
      </View>
      <Button mode='outlined' style={styles.buttonContainer} buttonColor='#8801FF' textColor='white'> Siguiente </Button>
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
    width:300,
    marginStart:50,
    marginTop:10
  },
  formButtons: {
    margin: 4,
    marginStart:10,
    marginEnd:10,

  },
});

export default CrearCuenta;
