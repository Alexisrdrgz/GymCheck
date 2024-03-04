import React from "react";
import { View, Text, StyleSheet,Image } from 'react-native'
import { IconButton, Avatar } from 'react-native-paper';
import { useNavigation } from "@react-navigation/native";


const Puntuaje = () =>{
    const navigation = useNavigation();

    return(
        <View style={{backgroundColor:'white'}}>
            <View style={styles.avatarContainer}>
                <Avatar.Image
                    size={100}
                    source={require("../../../assets/avatar.jpg")}
                    style={{ marginLeft: 15 }}
                />
                <Text style={{ color: 'gray', fontWeight: "semibold" , marginTop:15}}>
                   Bienvenido Alexis!
                </Text>
                <Text style={{ color: 'black', fontWeight: "semibold", marginTop: 45, marginLeft:-115,fontSize:20 }}>
                    Lunes, 4 de Marzo
                </Text>
                </View>

                <View style={styles.contenedor}>
                    <View style={styles.ContenedorPuntos}>
                    <View style={styles.circle}></View>
                    <IconButton
                        style={{ marginTop: 4,marginLeft:-65 }}
                        icon="dumbbell"
                        iconColor='black'
                        size={50}
                        onPress={() =>console.log("HomeScreen")}

                    />
                  
                    <Text style={{marginLeft:50, fontWeight:'semibold', fontSize:17}}>
                        Puntos 2,000+
                    </Text>
                    </View>
                   
                </View>
            <View>
                <Image style={{ marginTop: 20, marginLeft: 15 }}
                    source={require("../../../assets/Puntuaje1.png")}
                />
            </View>
            <View>
                <Image style={{marginTop:20,marginLeft: 15}}
                    source={require("../../../assets/recompensa.png")}
                />
            </View>
            <View style={{marginTop:85}}>
                <IconButton
                    style={{ marginTop: 40,marginLeft: 30 }}
                    icon="home"
                    iconColor='black'
                    size={35}
                    onPress={() => navigation.navigate("HomeScreen")}

                />
            </View>
            <View>
                <IconButton
                    style={{ marginTop: -56, marginLeft: 200 }}
                    icon="calendar-month"
                    iconColor='black'
                    size={35}
                    onPress={() => navigation.navigate("Calendar")}

                />
            </View>
        </View>
    )
}

export default Puntuaje;

const styles = StyleSheet.create({
    ContenedorPuntos: {
        flexDirection: 'row',
        marginTop: 10,
        alignContent: 'center',
        alignItems: 'center',   
        marginLeft: 40,
        

    },
    avatarContainer: {
        marginTop: 20,
        flexDirection: 'row',
    },
    circle: {
        width: 65,
        height: 65,
        borderRadius: 50,
        backgroundColor: '#E4C7FF', // Color del círculo
        marginLeft: 10, // Espacio entre el icono y el círculo
    },
    contenedor: {
        marginTop: 30,
        marginLeft: 30,
        borderWidth:1,
        borderColor:'lightgray',
        width: 350,
        borderRadius: 20,
    },
});
