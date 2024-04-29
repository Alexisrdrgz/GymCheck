import React,{useState,useEffect} from "react";
import {View, Text, StyleSheet, Image} from 'react-native'
import { Avatar } from "react-native-paper";
import QRCode from "react-qr-code";
import { getFirestore, doc, getDoc, auth, onAuthStateChanged,db } from "../../../firebase";

const Perfil = () =>{
  const [score, setScore] = useState();
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const getScore = async (userId) => {
      try {
        const scoreRef = doc(db, "users", userId);
        console.log(scoreRef);
        const docSnap = await getDoc(scoreRef);
        console.log(docSnap);

        if (docSnap.exists()) {
          setScore(docSnap.data().puntuaje);
        } else {
          console.log("No se encontró ningún puntaje para este usuario.", userId);
        }
      } catch (error) {
        console.error("Error al obtener el puntaje:", error);
      }
    };

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // Si hay un usuario autenticado, establece su ID en el estado
        setUserId(user.uid);
        // Llama a la función para obtener el puntaje usando el ID del usuario
        getScore(user.uid);
      } else {
        console.log("No hay usuario autenticado.");
      }
    });

    return () => unsubscribe();
  }, []);
  
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
            puntos de usuario: {score}
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

