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
              marginTop: 40,
              marginBottom: 20,
              marginLeft:35
            }}
          >
            Perfil
          </Text>
          <Avatar.Image
            size={120}
            source={require("../../../assets/avatar.jpg")}
          />
        </View>
        <View>
            <Image source={require('../../../assets/qr.png')} style={styles.image}/>
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
    },
    textStyle: {
      fontWeight: "bold",
      fontSize: 16,
    },
    image:{
        marginTop:29,
        width:300,
        height:300
    },
    avatarContainer:{
        
    }
});

