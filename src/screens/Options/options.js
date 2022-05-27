import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import * as React from 'react';

function Options({ navigation }) {


    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../../assets/qatar-remove.png')} />

            <View style={styles.container2}>
                <Text style={{ padding: 20, textAlign: "center", fontWeight: 700, fontSize: 15, float: "left", display: 'inline-block' }}>O que você deseja?</Text>
            </View>

            <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate("Cadastrar")} >
                <Text style={{ color: '#fff' }} >1 - Cadastrar</Text>
            </TouchableOpacity>



            <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate("Passagens")}>
                <Text style={{ color: '#fff' }} >2 - Comprar Passagem</Text>
            </TouchableOpacity>



            <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate("Home")} >
                <Text style={{ color: '#fff' }}>3 - Home</Text>
            </TouchableOpacity>

            <StatusBar style="auto" />
        </View>

    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    Button: {
        alignItems: "center",
        backgroundColor: "#590232",
        padding: 10,
        width: 250,
        margin: 20,
    },
    container2: {
    },
    image: {
        width: 300,
        height: 150,
        alignItems: "center",
        justifyContent: "center",
    }
});



export default Options;