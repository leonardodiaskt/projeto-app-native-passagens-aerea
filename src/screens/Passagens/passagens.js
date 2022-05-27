import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, CheckBox } from 'react-native';
import Timeinput from '@tighten/react-native-time-input'
import React, { useState } from 'react';
import CurrencyInput from 'react-native-currency-input';
import { Picker } from '@react-native-picker/picker';


export default function Passagens({ navigation }) {

    const [time, setTime] = useState('');

    const [value, setValue] = React.useState(0);

    const [isSelected, setSelection] = useState(false);
    const [isSelectedCredito, setSelectionCredito] = useState(false);

    const [selectedLanguage, setSelectedLanguage] = useState();


    const handleTimeChange = (time, validTime) => {
        if (!validTime) return;
        setTime(time);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.textPassagem}>Passagens Aéreas</Text>
            <Image style={styles.image} source={require('../../../assets/qatar-remove.png')} />

            <Text style={styles.textInput}>Destino</Text>
            {/* <TextInput style={{outline: 0, width: 343, height: 30, borderBottomColor: '#590232', borderBottomWidth: 1, borderBottomEndRadius: 10, borderBottomLeftRadius: 10, padding: 5}}
                       placeholder="Digite o seu destino"
                       keyboardType={'name-phone-pad'}/> */}
            <Picker style={{ color: '#000', fontWeight: 700, fontSize: 17, borderBottomColor: '#590232', borderBottomWidth: 1, }}

                selectedValue={selectedLanguage}

                onValueChange={(itemValue, itemIndex) =>

                    setSelectedLanguage(itemValue)

                }>

                <Picker.Item label="Fortaleza" value="CE" />

                <Picker.Item label="Rio de Janeiro" value="RJ" />

                <Picker.Item label="São Paulo" value="SP" />

                <Picker.Item label="Jericoacoara" value="CE" />

                <Picker.Item label="Natal" value="RN" />

                <Picker.Item label="Gramado" value="RS" />
            </Picker>

            <Text style={styles.textInput}>Origem</Text>
            <TextInput style={{ outline: 0, width: 343, height: 30, borderBottomColor: '#590232', borderBottomWidth: 1, borderBottomEndRadius: 10, borderBottomLeftRadius: 10, padding: 5 }}
                placeholder="Digite a origem"
                keyboardType={'name-phone-pad'} />

            <Text style={styles.textInput}>Data de ida</Text>
            <TextInput style={{ outline: 0, width: 343, height: 30, borderBottomColor: '#590232', borderBottomWidth: 1, borderBottomEndRadius: 10, borderBottomLeftRadius: 10, padding: 5 }}
                placeholder="dd/mm/yyyy"
                keyboardType={'name-phone-pad'} />

            <Text style={styles.textInput}>Horário do Voo</Text>
            <Timeinput
                setCurrentTime
                onTimeChange={handleTimeChange} />

            <Text style={styles.textInput}>Preço</Text>
            <CurrencyInput
                style={{ outline: 0, width: 343, height: 30, borderBottomColor: '#590232', borderBottomWidth: 1, borderBottomEndRadius: 10, borderBottomLeftRadius: 10, padding: 5 }}
                value={value}
                onChangeValue={setValue}
                prefix="R$"
                delimiter=","
                separator="."
                precision={2}
            />

            <Text style={styles.textInput}>Formas de Pagamento</Text>
            <View style={styles.viewcheck}>
                <Text style={{ fontSize: 14, margin: 10 }}>Débito</Text>
                <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}
                    style={styles.CheckBox}
                />
                <Text style={{ fontSize: 14, margin: 10 }}>Crédito</Text>
                <CheckBox
                    value={isSelectedCredito}
                    onValueChange={setSelectionCredito}
                    style={styles.CheckBox}
                />
            </View>

            <View style={styles.containerButton}>
                <TouchableOpacity style={styles.buttonHome}
                    onPress={() => navigation.navigate("Home")}
                >
                    <Text style={{ color: "#fff" }}>Home</Text>

                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonHome}
                    
                >
                    <Text style={{ color: "#fff" }}>Comprar</Text>

                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    image: {
        width: 300,
        height: 150,
        alignItems: "center",
        justifyContent: "center",
    },
    textPassagem: {
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
    CheckBox: {
        alignSelf: 'center'
    },
    viewcheck: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonHome: {
        alignItems: 'center',
        justifyContent: "center",
        width: 100,
        height: 40,
        borderRadius: 15,
        backgroundColor: '#590232',
        marginTop: 5,
        margin: 30
    },
    containerButton: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
})