
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';


function Home({navigation}){
    return(
        <View style={styles.container}>
            <Text style={{fontSize: 26}}>Qatar Airways ✈️</Text>
            <Image style={styles.image} source={require('../../../assets/qatar-remove.png')} />
            <Text style={styles.texthome}>Bem vindo(a) à Qatar Airways</Text>
            <TouchableOpacity style={styles.buttonNext}
                              onPress={() => navigation.navigate("Options")}>
            <Text style={{color: "#fff"}}>Continuar</Text>
            </TouchableOpacity>
        </View>
    )
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
       
    },
    image: {
        marginTop: 200,
        width: 300,
        height: 150,
        alignItems: "center",
        justifyContent: "center",
    },
    texthome: {
        textAlign: "center",
        fontSize: 22,
    },
    buttonNext: {
        alignItems: "center",
        justifyContent: "center",
        width: 100,
        height: 40,
        borderRadius: 15,
        backgroundColor: '#590232',
        marginTop: 150,
    }
})

export default Home;