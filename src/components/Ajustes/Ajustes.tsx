import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Avatar, TextInput, Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const CrearCuenta = () => {
    const navigation = useNavigation();
    const guardar = () => {
        alert("Dato actualizados exitosamente!");
        navigation.navigate("HomeScreen");
    }
    return (
        <View>
            <View style={styles.avatarContainer}>
                <Text style={{ fontWeight: "bold", fontSize: 18, marginTop: 36 }}>
                    Editar Perfil
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
                        Usuario
                    </Text>
                    <TextInput label="Ingrese el nuevo usuario" />
                </View>
                <View style={styles.formButtons}>
                    <Text style={{ fontWeight: "400", marginBottom: 5 }}>
                        Contraseña
                    </Text>
                    <TextInput label="Ingrese la nueva Contraseña" />
                </View>
                <View style={styles.formButtons}>
                    <Text style={{ fontWeight: "400", marginBottom: 5 }}>
                        Numero de telefono
                    </Text>
                    <TextInput
                        label="Ingrese el nuevo numero de telefono"
                        right={<TextInput.Icon icon="calendar" />}
                    />
                </View>
            </View>
            <Button
                mode="outlined"
                style={styles.buttonContainer}
                buttonColor="#8801FF"
                textColor="white"
                onPress={() => guardar()}
            >
                Guardar
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
