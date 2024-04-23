import React,{useState,useEffect} from "react";
import {View, Text, StyleSheet, Image} from 'react-native'
import { Avatar } from "react-native-paper";
import QRCode from "react-qr-code";

const Perfil = () =>{

  
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Esta función se ejecuta al montar el componente
    incrementCounter();
  }, []);


  const incrementCounter = async () => {
    try {
      const response = await fetch('http://localhost:3000/increment');
      if (!response.ok) {
        throw new Error('Error al incrementar el contador');
      }
      const data = await response.json();
      setCount(data.count);
    } catch (error) {
      console.error(error);
    }
  };

    return(
        <View style={styles.container}>
        <View style={styles.avatarContainer}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 18,
              marginTop: 1,
              marginBottom: 20,
              marginLeft:47
            }}
          >
            Perfil
          </Text>
          <Avatar.Image
            size={120}
            source={require("../../../assets/avatar.jpg")}
            style={{ marginLeft: 15 }}
          />
          <Text>
            num. de usuario: 00001
          </Text>
          <Text>
            puntos de usuario: {count}
          </Text>

        </View>
        <View>
        <View style={{}}>

        <QRCode
      size={256}
      style={{ height: "auto", maxWidth: "100%", width: "100%" }}
      value={"http://localhost:3000/increment" }  //value to encode}
      viewBox={`0 0 256 256`}
    />


        </View>
        </View>
        <View style={styles.design}>

        </View>
        </View>
        
    )
}
export default Perfil;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      padding: 28,
      flexDirection: "column",
    },
    textStyle: {
      fontWeight: "bold",
      fontSize: 16,
    },
    image:{
        marginTop:29,
        width:200,
        height:200,
        marginLeft: 20
    },
    design:{
        width: 534,
        height: 514,
        backgroundColor: "#F3DFFF",
        marginTop: 20,
          borderRadius : Math.min(534, 514) / 2,}
        
    
});

