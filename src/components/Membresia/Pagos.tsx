import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { IconButton, Avatar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

interface Props {
    title: string;
    description: string;
    icon: string;
    icon2: string;
}

const MyComponent = ({ title, description, icon, icon2 }: Props) => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View >
                
               
            </View>
            <View style={styles.contentContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.fechas}>{description}</Text>
            </View>
            <View style={styles.backgroundCircle}>
                <IconButton
                    icon={icon}
                    iconColor="black"
                    size={30}
                    onPress={() => navigation.navigate("Ajustes")}
                    style={styles.icon1}
                />
            </View>
            <View style={styles.backgroundCircle2}>
                <IconButton
                    icon={icon2}
                    iconColor="black"
                    size={30}
                    onPress={() => navigation.navigate("Calendar")}
                    style={styles.icon1}    

                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderRadius: 50,
        borderWidth: 2,
        borderColor: 'lightgray', // Color del borde
        backgroundColor: '#fff', // Color de fondo
        marginBottom: 20,
        justifyContent: 'space-between',
         alignItems: 'flex-start',  },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginLeft: -100,
    },
    contentContainer: {
    },
    title: {
        fontSize: 20,
        fontWeight: 'semibold',
        marginBottom: 10,
        marginLeft:50,
        
        
    },
    backgroundCircle:{
        width: 50,
        height: 50,
        borderRadius: 50,
        position: 'absolute',
        left: 6,
        top: 6,
        borderWidth: 2,
        borderColor: '#FFF',
        backgroundColor: '#F3DFFF',
    },
    icon1:{
        position: 'relative',
        left: -6,
        top: -6,
        
    },
    fechas:{
        paddingLeft: 50,
        fontSize: 15,
        color: 'gray',

    },
    backgroundCircle2:{
        width: 50,
        height: 50,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#FFF',
        backgroundColor: '#F3DFFF',
        position: 'relative',
        right: 6,
        top: 6,
    }
   
});

export default MyComponent;
