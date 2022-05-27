import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';

function Cadastrar({ navigation }){
    return(
        <View style={styles.container}>
            <Text style={styles.textCadastro}>Cadastro</Text>
            <Image style={styles.image} source={require('../../../assets/qatar-remove.png')} />


            <Text style={styles.textInput}>Nome</Text>
            <TextInput style={{outline: 0, width: 343, height: 30, borderBottomColor: '#590232', borderBottomWidth: 1, borderBottomEndRadius: 10, borderBottomLeftRadius: 10, padding: 5}}
                       placeholder="Digite seu Nome"
                       keyboardType={'name-phone-pad'}/>


            <Text style={styles.textInput}>Data de Nascimento</Text>
            <TextInput style={{outline: 0, width: 343, height: 30, borderBottomColor: '#590232', borderBottomWidth: 1, borderBottomEndRadius: 10, borderBottomLeftRadius: 10, padding: 5}}
                       placeholder="dd/mm/yyyy"
                       keyboardType={'birthdate-full'}/>


            <Text style={styles.textInput}>CPF</Text>
            <TextInput style={{outline: 0, width: 343, height: 30, borderBottomColor: '#590232', borderBottomWidth: 1, borderBottomEndRadius: 10, borderBottomLeftRadius: 10, padding: 5}}
                       placeholder="000.000.000-00"
                       maxLength={11}
                       keyboardType={'numeric'}/>


            <Text style={styles.textInput}>Endereço</Text>
            <TextInput style={{outline: 0, width: 343, height: 30, borderBottomColor: '#590232', borderBottomWidth: 1, borderBottomEndRadius: 10, borderBottomLeftRadius: 10, padding: 5}}
                       placeholder="Rua dos Bobos, 0"                   
                       maxLength={50}
                       keyboardType={'name-phone-pad'}/>


            <Text style={styles.textInput}>Cidade</Text>
            <TextInput style={{outline: 0, width: 343, height: 30, borderBottomColor: '#590232', borderBottomWidth: 1, borderBottomEndRadius: 10, borderBottomLeftRadius: 10, padding: 5}}
                       maxLength={30}
                       placeholder="NY"
                       keyboardType={'name-phone-pad'}/>

            <View style={styles.containerButton}>
                <TouchableOpacity style={styles.buttonHome}
                                onPress={() => navigation.navigate("Home")}
                >
                <Text style={{color: "#fff"}}>Home</Text>
                    
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonHome}
                                onPress={() => navigation.navigate("Passagens")}
                >
                <Text style={{color: "#fff"}}>Passagem</Text>
                    
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    textCadastro: {
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 24,
        fontWeight: 600,
    },
    textInput: {
        fontSize: 14,
        alignSelf: 'flex-start',
        marginLeft: 45,
        marginTop: 30
    },
    buttonHome: {
        alignItems: 'center',
        justifyContent: "center",
        width: 100,
        height: 40,
        borderRadius: 15,
        backgroundColor: '#590232',
        marginTop: 100,
        margin: 30
    },
    containerButton: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    image: {
        width: 300,
        height: 150,
        alignItems: "center",
        justifyContent: "center",
    }

});

export default Cadastrar;