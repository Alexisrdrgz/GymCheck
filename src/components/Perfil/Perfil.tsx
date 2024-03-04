import React from "react";
import {View, Text, StyleSheet, Image} from 'react-native'
import { Avatar } from "react-native-paper";

const Perfil = () =>{
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

        </View>
        <View>
            <Image source={require('../../../assets/qr.png')} style={styles.image}/>
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

